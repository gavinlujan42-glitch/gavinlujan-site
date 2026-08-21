(() => {
  const deck = document.querySelector('[data-framework-deck] .framework-slides');
  if (!deck) return;
  const slide = document.createElement('article');
  slide.className = 'framework-slide nm-ai-infra-slide';
  slide.setAttribute('data-framework-slide','');
  slide.innerHTML = `
    <div class="framework-kicker">NEW MEXICO AI INFRASTRUCTURE · DATA + FIBER</div>
    <div class="nm-infra-head"><span><i></i> DIGITAL SUPERHIGHWAYS</span><span>PUBLIC-RECORD / PLANNING VIEW</span></div>
    <div class="nm-infra-grid">
      <svg class="nm-infra-map" viewBox="0 0 500 360" role="img" aria-label="Schematic New Mexico AI data center and broadband corridor dashboard showing I-25 and I-40 crossroads">
        <path class="nm-infra-state" d="M82.8 24.6 295.1 26.1 402.6 24l1 26.6-2.1.3 8 241.8-199.7 1.8c-1.4 2.4-.7 7.3 5.1 11.6l-94.6-.6-.4 24.2-47.7-.9 10.1-292.3z"/>
        <g class="nm-infra-road"><path d="M238 315 C240 270 245 235 250 205 S255 150 260 112 266 70 270 30"/><path d="M78 176 C145 175 205 174 255 174 S340 176 405 176"/></g>
        <g class="nm-infra-fiber private"><path d="M78 166 C150 164 205 168 255 166 S340 165 405 164"/><path d="M248 315 C250 265 253 225 260 185 S267 110 279 30"/><path d="M255 166 L170 112 M260 185 L330 245 M255 166 L315 118"/></g>
        <g class="nm-infra-fiber public"><path d="M84 187 C150 184 205 187 255 184 S340 188 400 187"/><path d="M229 315 C231 265 236 225 242 185 S247 110 258 31"/><path d="M242 185 L205 235 M242 185 L195 140 M242 185 L300 145"/></g>
        <g class="nm-infra-node"><circle cx="255" cy="174" r="8"/><text x="267" y="170">ALBUQUERQUE</text><text x="267" y="183" class="cross">I-25 × I-40 CROSSROADS</text></g>
        <g class="nm-infra-node"><circle cx="270" cy="92" r="5"/><text x="280" y="96">SANTA FE</text></g>
        <g class="nm-infra-node"><circle cx="250" cy="240" r="5"/><text x="260" y="244">SOCORRO</text></g>
        <g class="nm-infra-node"><circle cx="238" cy="310" r="5"/><text x="248" y="314">LAS CRUCES / SANTA TERESA</text></g>
        <g class="nm-infra-node"><circle cx="130" cy="170" r="4"/><text x="98" y="158">GALLUP</text></g>
        <g class="nm-infra-node"><circle cx="365" cy="174" r="4"/><text x="348" y="158">TUCUMCARI</text></g>
        <g class="nm-infra-dc"><rect x="216" y="197" width="12" height="12"/><text x="232" y="207">META · LOS LUNAS</text><rect x="207" y="294" width="12" height="12"/><text x="145" y="289">PROJECT JUPITER · SOUTH NM</text></g>
        <text class="corridor" x="300" y="154">I-40 EAST / WEST</text><text class="corridor" x="285" y="70">I-25 NORTH / SOUTH</text>
      </svg>
      <div class="nm-infra-metrics">
        <div><span>AI / DATA CENTER NODES</span><b>STATEWIDE WATCH</b><small>Operating + proposed projects; status changes rapidly.</small></div>
        <div><span>PRIMARY CROSSROADS</span><b>ABQ · I-25 × I-40</b><small>North/south and east/west digital transport convergence.</small></div>
        <div><span>BANDWIDTH VIEW</span><b>FIBER AVAILABILITY</b><small>Provider availability layer, not guaranteed lit capacity.</small></div>
        <div class="nm-infra-legend"><span><i class="priv"></i> PRIVATE / COMMERCIAL</span><span><i class="pub"></i> PUBLIC / GOVERNMENT</span><small>Ownership lines are schematic until route-level public records verify conduit/fiber ownership.</small></div>
      </div>
    </div>
    <div class="framework-note"><b>AI consolidation follows power, fiber, land, water and latency.</b><p>Strategic overlay: data-center nodes + I-25/I-40 transport corridors + public broadband availability. Exact carrier routes, ownership and bandwidth are intentionally not asserted without authoritative route-level evidence.</p></div>`;
  deck.appendChild(slide);

  const style = document.createElement('style');
  style.textContent = `
  .nm-ai-infra-slide{overflow:hidden}.nm-infra-head{display:flex;justify-content:space-between;gap:1rem;margin:.35rem 0 .55rem;color:#8ca59b;font:600 .52rem ui-monospace,monospace;letter-spacing:.08em}.nm-infra-head i{display:inline-block;width:6px;height:6px;border-radius:50%;background:#7fffc1;box-shadow:0 0 10px #7fffc1}.nm-infra-grid{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(150px,.55fr);gap:.65rem;align-items:stretch}.nm-infra-map{width:100%;height:auto;max-height:260px;border:1px solid rgba(127,255,193,.15);background:radial-gradient(circle at 50% 48%,rgba(127,255,193,.06),transparent 45%),#030706}.nm-infra-state{fill:rgba(8,18,14,.7);stroke:#7a9187;stroke-width:1.2}.nm-infra-road path{fill:none;stroke:#8d7951;stroke-width:7;opacity:.22}.nm-infra-fiber path{fill:none;stroke-width:2.3;stroke-linecap:round;stroke-dasharray:7 5;animation:nmFiber 5s linear infinite}.nm-infra-fiber.private path{stroke:#f2b84b}.nm-infra-fiber.public path{stroke:#69e7ff;stroke-dasharray:2 5}.nm-infra-node circle{fill:#7fffc1;filter:drop-shadow(0 0 5px #7fffc1)}.nm-infra-node text,.nm-infra-dc text,.corridor{fill:#cbd7d0;font:600 9px ui-monospace,monospace;letter-spacing:.03em}.nm-infra-node .cross{fill:#f2b84b;font-size:7px}.nm-infra-dc rect{fill:#f2b84b;filter:drop-shadow(0 0 5px rgba(242,184,75,.8))}.corridor{fill:#8d7951;font-size:7px}.nm-infra-metrics{display:grid;gap:.4rem}.nm-infra-metrics>div{padding:.55rem .65rem;border:1px solid rgba(255,255,255,.09);background:rgba(0,0,0,.25)}.nm-infra-metrics span,.nm-infra-metrics b,.nm-infra-metrics small{display:block}.nm-infra-metrics span{color:#8ca59b;font:600 .47rem ui-monospace,monospace;letter-spacing:.08em}.nm-infra-metrics b{margin:.15rem 0;color:#eaf5ee;font:700 .62rem ui-monospace,monospace}.nm-infra-metrics small{color:#829188;font-size:.53rem;line-height:1.3}.nm-infra-legend span{margin:.12rem 0}.nm-infra-legend i{display:inline-block;width:16px;height:2px;margin-right:5px;vertical-align:middle}.nm-infra-legend .priv{background:#f2b84b}.nm-infra-legend .pub{background:#69e7ff}@keyframes nmFiber{to{stroke-dashoffset:-48}}@media(max-width:700px){.nm-infra-grid{grid-template-columns:1fr}.nm-infra-metrics{grid-template-columns:1fr 1fr}}@media(prefers-reduced-motion:reduce){.nm-infra-fiber path{animation:none}}`;
  document.head.appendChild(style);
})();