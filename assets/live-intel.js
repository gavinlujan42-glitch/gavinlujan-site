(() => {
  const CISA = "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json";
  const NVD = "https://services.nvd.nist.gov/rest/json/cves/2.0";
  const pane = document.querySelector("[data-live-threats]");
  const button = document.querySelector("[data-refresh-intel]");
  const stamp = document.querySelector("[data-intel-stamp]");
  const count = document.querySelector("[data-threat-count]");
  if (!pane || !button) return;

  const fallback = [
    ["IDENTITY", "Phishing-resistant MFA and privileged identity remain decisive controls.", "CISA guidance", "https://www.cisa.gov/topics/cybersecurity-best-practices/identity-and-access-management"],
    ["EDGE", "Internet-facing appliances require current inventories, rapid patching and exposure reduction.", "CISA KEV", "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"],
    ["RANSOMWARE", "Recovery confidence depends on isolated backups and rehearsed restoration.", "StopRansomware", "https://www.cisa.gov/stopransomware"],
    ["OT / WATER", "Operational technology needs segmentation, monitored remote access and manual fallback.", "CISA ICS", "https://www.cisa.gov/topics/industrial-control-systems"],
    ["CLOUD", "Misconfiguration and excessive privilege continue to turn small errors into enterprise exposure.", "NIST CSF", "https://www.nist.gov/cyberframework"],
    ["AI AGENTS", "Bound tools, data, permissions and human approval before granting operational autonomy.", "NIST AI RMF", "https://www.nist.gov/itl/ai-risk-management-framework"],
    ["SOFTWARE SUPPLY CHAIN", "Verify dependencies, provenance and build integrity before release.", "CISA SBOM", "https://www.cisa.gov/sbom"],
    ["DATA EXTORTION", "Assume theft may precede encryption; monitor egress and protect high-value stores.", "CISA", "https://www.cisa.gov/stopransomware"],
    ["LEGACY SYSTEMS", "Unsupported technology converts operational debt into an attacker advantage.", "NVD", "https://nvd.nist.gov/"],
    ["INCIDENT READINESS", "Authority, communications and recovery decisions should be rehearsed before pressure arrives.", "NIST 800-61", "https://csrc.nist.gov/pubs/sp/800/61/r3/final"]
  ];

  const esc = value => String(value || "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const tile = (item, i) => `<article class="live-threat-card">
    <div class="live-threat-rank">${String(i + 1).padStart(2, "0")}</div>
    <div class="live-threat-copy">
      <span>${esc(item.tag)}</span>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.summary)}</p>
      <a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${esc(item.source)} · SOURCE ↗</a>
    </div>
  </article>`;

  function render(items, state) {
    pane.innerHTML = items.slice(0, 10).map(tile).join("");
    pane.dataset.state = state;
    if (count) count.textContent = String(Math.min(items.length, 10)).padStart(2, "0");
  }

  function normalizeKev(data) {
    return (data.vulnerabilities || [])
      .sort((a,b) => String(b.dateAdded).localeCompare(String(a.dateAdded)))
      .slice(0,10)
      .map(v => ({
        tag: "ACTIVE EXPLOITATION · " + (v.dateAdded || "CURRENT"),
        title: `${v.vendorProject} ${v.product} — ${v.cveID}`,
        summary: v.shortDescription + (v.knownRansomwareCampaignUse === "Known" ? " Known ransomware use has been reported." : ""),
        source: "CISA KEV",
        url: `https://nvd.nist.gov/vuln/detail/${encodeURIComponent(v.cveID)}`
      }));
  }

  async function nvdContext(ids) {
    if (!ids.length) return new Map();
    const settled = await Promise.allSettled(ids.slice(0,3).map(async id => {
      const r = await fetch(`${NVD}?cveId=${encodeURIComponent(id)}`);
      if (!r.ok) throw new Error("NVD unavailable");
      const d = await r.json();
      const c = d.vulnerabilities?.[0]?.cve;
      const score = c?.metrics?.cvssMetricV31?.[0]?.cvssData?.baseScore || c?.metrics?.cvssMetricV30?.[0]?.cvssData?.baseScore;
      return [id, score];
    }));
    return new Map(settled.filter(x => x.status === "fulfilled").map(x => x.value));
  }

  async function refresh() {
    button.disabled = true;
    button.classList.add("is-loading");
    button.querySelector("span").textContent = "SCANNING OFFICIAL SOURCES";
    pane.setAttribute("aria-busy", "true");
    try {
      const response = await fetch(CISA, {cache:"no-store"});
      if (!response.ok) throw new Error("CISA feed unavailable");
      const items = normalizeKev(await response.json());
      const scores = await nvdContext(items.map(x => x.title.match(/CVE-\d{4}-\d+/)?.[0]).filter(Boolean));
      items.forEach(item => {
        const id = item.title.match(/CVE-\d{4}-\d+/)?.[0];
        if (scores.get(id)) item.tag += ` · CVSS ${scores.get(id)}`;
      });
      render(items, "live");
      const now = new Intl.DateTimeFormat("en-US",{dateStyle:"medium",timeStyle:"short",timeZone:"America/Denver"}).format(new Date());
      if (stamp) stamp.textContent = `LIVE REFRESH · ${now} MDT · CISA KEV + NIST NVD`;
    } catch (error) {
      render(fallback.map(x => ({tag:x[0],title:x[1],summary:"Executive control focus for immediate review.",source:x[2],url:x[3]})), "fallback");
      if (stamp) stamp.textContent = "OFFICIAL FEED TEMPORARILY UNAVAILABLE · SHOWING DEFENSIVE PRIORITIES";
    } finally {
      pane.removeAttribute("aria-busy");
      button.disabled = false;
      button.classList.remove("is-loading");
      button.querySelector("span").textContent = "UPDATE INTELLIGENCE";
    }
  }

  render(fallback.map(x => ({tag:x[0],title:x[1],summary:"Executive control focus for immediate review.",source:x[2],url:x[3]})), "ready");
  button.addEventListener("click", refresh);

  const divider=document.querySelector('.incident-divider');
  if(divider){
    const style=document.createElement('style');
    style.textContent='.weekly-exec-brief{margin:2rem 0;border:1px solid var(--line);background:linear-gradient(145deg,rgba(90,168,160,.06),transparent 52%),#050606}.weekly-exec-head{display:flex;justify-content:space-between;gap:1rem;padding:1rem 1.2rem;border-bottom:1px solid var(--line);font-size:.6rem;letter-spacing:.14em;color:rgba(232,224,210,.55)}.weekly-exec-head b{color:var(--turq)}.weekly-exec-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--line)}.weekly-exec-grid article{background:#070808;padding:1.35rem}.weekly-exec-grid span{font-size:.56rem;letter-spacing:.14em;color:var(--gold)}.weekly-exec-grid .high{color:#c85b4e}.weekly-exec-grid h3{font-family:"Poiret One",sans-serif;font-size:1.7rem;color:#fff;margin:.8rem 0}.weekly-exec-grid p{color:rgba(232,224,210,.6);font-size:.82rem}.weekly-exec-grid a{color:var(--turq);text-decoration:none;font-size:.58rem;letter-spacing:.1em;text-transform:uppercase}.weekly-exec-note{padding:1rem 1.2rem;color:rgba(232,224,210,.5);font-size:.7rem;border-top:1px solid var(--line)}@media(max-width:800px){.weekly-exec-grid{grid-template-columns:1fr}.weekly-exec-head{flex-direction:column}}';
    document.head.appendChild(style);
    const brief=document.createElement('section');
    brief.className='weekly-exec-brief';
    brief.setAttribute('aria-label','Weekly executive cyber intelligence brief');
    brief.innerHTML='<div class="weekly-exec-head"><span><b>EXECUTIVE INTELLIGENCE REFRESH</b> · AUGUST 15, 2026</span><span>CONFIRMED FACTS / ATTRIBUTION LABELED</span></div><div class="weekly-exec-grid"><article><span class="high">AI-ASSISTED INTRUSION · GOVERNMENT</span><h3>Taiwan reports AI-assisted attacks against public agencies</h3><p>Taiwan said government agencies were targeted in July by an overseas campaign blending human direction with AI-agent techniques. The affected units detected and mitigated the activity. Taiwan did not publicly attribute the operation to a state in its announcement, so geopolitical attribution remains separate from the confirmed incident.</p><a href="https://www.reuters.com/world/china/taiwan-says-it-was-targeted-last-month-ai-driven-hacking-campaign-2026-08-13/" target="_blank" rel="noopener noreferrer">Reuters · Aug 13 ↗</a></article><article><span class="high">CRITICAL INFRASTRUCTURE · WATER / OT</span><h3>Water-sector campaign remains an operational priority</h3><p>Recent attacks against U.S. water and wastewater environments demonstrate the consequence of internet-exposed operational technology. Confirmed reporting includes remote access, password and configuration changes, and localized operational disruption. Final public attribution remains unresolved.</p><a href="https://www.gao.gov/products/gao-26-109159" target="_blank" rel="noopener noreferrer">GAO water cyber risk ↗</a></article><article><span>CISA KEV · EXPLOIT PRIORITIZATION</span><h3>Patch from evidence of exploitation, not severity alone</h3><p>The live pane continues to retrieve CISA KEV directly. Use KEV membership as an emergency-remediation signal, then validate actual asset exposure and business consequence before execution.</p><a href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog" target="_blank" rel="noopener noreferrer">CISA KEV ↗</a></article><article><span>SANS ISC · INTERNET WEATHER</span><h3>Threat level remains green, but reconnaissance is constant</h3><p>SANS Internet Storm Center remains at green in its latest accessible status. That means no broad Internet emergency, not an absence of hostile activity. DShield observations continue to reinforce the value of edge telemetry, honeypots, and behavior-based monitoring.</p><a href="https://isc.sans.edu/" target="_blank" rel="noopener noreferrer">SANS ISC ↗</a></article><article><span>NIST · AI AGENT SECURITY</span><h3>Delegated authority is the new control boundary</h3><p>NIST\'s 2026 agent-security analysis remains the key federal reference: traditional cyber controls still matter, but they must be adapted for autonomous tool use, delegated permissions, execution paths, logging, and human approval.</p><a href="https://www.nist.gov/publications/summary-analysis-responses-request-information-regarding-security-considerations-ai" target="_blank" rel="noopener noreferrer">NIST AI agent analysis ↗</a></article><article><span>MITRE + MS-ISAC · DEFENSIVE OPERATIONS</span><h3>Behavioral detection and local resilience stay central</h3><p>MITRE ATT&CK v19.1 remains current, including expanded ICS sub-techniques. CIS also continues to note the discontinuation of its federally funded Cybersecurity Assistance Services Program, increasing the importance of local incident-response, forensic, backup, and escalation readiness.</p><a href="https://attack.mitre.org/resources/updates/" target="_blank" rel="noopener noreferrer">MITRE ATT&CK updates ↗</a></article></div><div class="weekly-exec-note">Executive readout: AI is compressing the attack lifecycle, but the defensive center of gravity remains disciplined identity, exposure reduction, exploit-driven patching, telemetry, bounded authority, and practiced recovery.</div>';
    divider.parentNode.insertBefore(brief,divider);
  }
})();