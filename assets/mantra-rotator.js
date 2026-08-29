(() => {
  const mantras = [
    { text: "Build the system that makes the old failure obsolete.", theme: "systems" },
    { text: "See the whole. Strengthen the essential. Remove the drag.", theme: "systems" },
    { text: "Design for the world arriving—not the one disappearing.", theme: "systems" },
    { text: "Waste nothing: not talent, trust, time, or intelligence.", theme: "systems" },
    { text: "Make every part serve the mission—and the mission serve life.", theme: "systems" },
    { text: "The future belongs to those who architect it responsibly.", theme: "systems" },
    { text: "Think beyond the horizon. Act precisely where you stand.", theme: "cosmos" },
    { text: "Stay humble before the unknown—and relentless in its pursuit.", theme: "cosmos" },
    { text: "Defend this fragile signal against the noise.", theme: "cosmos" },
    { text: "Let evidence outrank ego. Let wonder sharpen judgment.", theme: "cosmos" },
    { text: "We are brief. Build what deserves to endure.", theme: "cosmos" },
    { text: "Carry the mission with the gravity of worlds.", theme: "cosmos" },
    { text: "Quality is the weapon no shortcut can defeat.", theme: "quality" },
    { text: "Do it clean. Do it right. Make it last.", theme: "quality" },
    { text: "The machine reveals the mind that built it.", theme: "quality" },
    { text: "Precision under pressure is character made visible.", theme: "quality" },
    { text: "Care is not softness. Care is operational superiority.", theme: "quality" },
    { text: "Refuse the false choice between soul and system.", theme: "quality" },
    { text: "Excellence is trained before it is tested.", theme: "virtue" },
    { text: "Power earns legitimacy through disciplined service.", theme: "virtue" },
    { text: "Govern the self. Then govern the system.", theme: "virtue" },
    { text: "Choose the good, build the capable, demand the true.", theme: "virtue" },
    { text: "Order without wisdom becomes another form of chaos.", theme: "virtue" },
    { text: "Build institutions worthy of the people they protect.", theme: "virtue" },
    { text: "Question the assumption before it becomes the breach.", theme: "inquiry" },
    { text: "Certainty is a blind spot wearing armor.", theme: "inquiry" },
    { text: "Ask until the real problem has nowhere left to hide.", theme: "inquiry" },
    { text: "Know what you know. Name what you do not. Move anyway.", theme: "inquiry" },
    { text: "The strongest leader makes truth safe to speak.", theme: "inquiry" },
    { text: "Clarity begins where performance theater ends.", theme: "inquiry" },
    { text: "Win before the threat knows the contest has begun.", theme: "strategy" },
    { text: "See first. Decide faster. Move without waste.", theme: "strategy" },
    { text: "The cleanest victory leaves no chaos behind.", theme: "strategy" },
    { text: "Make intelligence the high ground.", theme: "strategy" },
    { text: "Shape the field. Deny the opening. Preserve the force.", theme: "strategy" },
    { text: "Never confuse motion with advantage.", theme: "strategy" },
    { text: "Meet force with awareness. Redirect it toward resolution.", theme: "harmony" },
    { text: "Stand centered when the system turns violent.", theme: "harmony" },
    { text: "Control the encounter without becoming the conflict.", theme: "harmony" },
    { text: "Absorb the signal. Release the noise. Return with purpose.", theme: "harmony" },
    { text: "The strongest response uses only the force required.", theme: "harmony" },
    { text: "Protect the whole—even while neutralizing the threat.", theme: "harmony" }
  ];
  const root = document.querySelector("[data-mantra-rotator]"); if (!root) return;
  const output=root.querySelector("[data-mantra-text]"),discipline=root.querySelector("[data-mantra-discipline]"),counter=root.querySelector("[data-mantra-counter]"),toggle=root.querySelector("[data-mantra-toggle]"),reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)");
  const labels={systems:"SYSTEMS VISION",cosmos:"COSMIC PERSPECTIVE",quality:"QUALITY & CRAFT",virtue:"VIRTUE IN COMMAND",inquiry:"THE EDGE OF INQUIRY",strategy:"STRATEGIC ADVANTAGE",harmony:"HARMONIZED FORCE"};
  let bag=[],current=-1,timer=0,paused=false;
  function refill(){bag=mantras.map((_,i)=>i);for(let i=bag.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[bag[i],bag[j]]=[bag[j],bag[i]]}if(bag[bag.length-1]===current&&bag.length>1)[bag[bag.length-1],bag[0]]=[bag[0],bag[bag.length-1]]}
  function next(){if(!bag.length)refill();current=bag.pop();const mantra=mantras[current];root.classList.add("is-changing");window.setTimeout(()=>{output.textContent=mantra.text;discipline.textContent=labels[mantra.theme];counter.textContent=`${String(current+1).padStart(2,"0")} / 42`;root.dataset.theme=mantra.theme;root.classList.remove("is-changing");root.classList.remove("is-counting");void root.offsetWidth;if(!paused&&!reduceMotion.matches)root.classList.add("is-counting")},reduceMotion.matches?0:360)}
  function schedule(){window.clearInterval(timer);if(!paused&&!reduceMotion.matches)timer=window.setInterval(next,15000)}
  toggle?.addEventListener("click",()=>{paused=!paused;toggle.textContent=paused?"RESUME":"PAUSE";toggle.setAttribute("aria-pressed",String(paused));root.classList.toggle("is-paused",paused);schedule()});reduceMotion.addEventListener?.("change",schedule);refill();next();schedule();
})();

(() => {
  const nav=document.querySelector('.site-header nav');
  if(!nav || nav.querySelector('[data-zia-v3-toggle]')) return;
  const link=document.createElement('a');
  link.href='v3.html'; link.dataset.ziaV3Toggle='true'; link.textContent='ZIA V3 // AI SITE';
  link.setAttribute('aria-label','Open V3 ZIA-driven AI command center');
  link.style.cssText='border:1px solid rgba(169,245,199,.65);padding:.7rem .9rem;color:#a9f5c7;background:#06100a;box-shadow:0 0 20px rgba(169,245,199,.08);font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.68rem;font-weight:800;letter-spacing:.08em;text-decoration:none;white-space:nowrap';
  nav.appendChild(link);
})();

(() => {
  const header=document.querySelector('.site-header');
  const nav=header?.querySelector('nav[aria-label="Primary navigation"]');
  const brand=header?.querySelector('.brand');
  if(!header || !nav || !brand) return;

  const resume=nav.querySelector('a[href="resume.html"]');
  if(resume){
    resume.classList.add('resume-priority');
    header.insertBefore(resume,brand);
  }

  const links=[...nav.querySelectorAll(':scope > a')];
  links.forEach((link,i)=>{
    link.classList.add('nav-scan-item');
    link.style.setProperty('--scan-delay',`${i*2.8}s`);
  });

  const style=document.createElement('style');
  style.id='zen-titlebar-refine';
  style.textContent=`
    .site-header{gap:clamp(.55rem,1.2vw,1.15rem)!important;padding-top:.55rem!important;padding-bottom:.55rem!important;min-height:auto!important}
    .site-header .brand{margin-right:auto!important}
    .site-header nav{gap:.18rem!important;align-items:center!important}
    .site-header nav>a,.site-header nav>details>summary{padding:.54rem .62rem!important;border:1px solid rgba(255,255,255,.055);border-radius:2px;transition:border-color 1.8s ease,color 1.8s ease,background 1.8s ease,box-shadow 1.8s ease,opacity 1.8s ease;opacity:.74}
    .site-header nav>a:hover,.site-header nav>details>summary:hover{opacity:1;border-color:rgba(82,226,208,.45);color:#baf8ef!important;background:rgba(82,226,208,.035)}
    .site-header>.resume-priority{order:-2;flex:0 0 auto;padding:.66rem .82rem;border:1px solid rgba(112,255,123,.72);background:linear-gradient(135deg,rgba(74,255,91,.13),rgba(4,14,7,.55));color:#76ff7f!important;text-decoration:none;font:800 .67rem/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.13em;text-transform:uppercase;box-shadow:0 0 18px rgba(83,255,99,.11),inset 0 0 18px rgba(83,255,99,.025);white-space:nowrap;transition:.8s ease}
    .site-header>.resume-priority:hover{color:#c7ffcb!important;border-color:#a4ffab;box-shadow:0 0 28px rgba(83,255,99,.2),inset 0 0 20px rgba(83,255,99,.06);transform:translateY(-1px)}
    .site-header>.resume-priority::before{content:'▸ ';opacity:.75}
    @keyframes zenNavScan{0%,72%,100%{opacity:.72;border-color:rgba(255,255,255,.055);color:inherit;background:transparent;box-shadow:none}78%,86%{opacity:1;border-color:rgba(82,226,208,.3);color:#c6fbf4;background:rgba(82,226,208,.025);box-shadow:0 0 14px rgba(82,226,208,.055)}}
    .site-header nav>.nav-scan-item{animation:zenNavScan 28s ease-in-out infinite;animation-delay:var(--scan-delay)}
    main>section{scroll-margin-top:5rem}
    .hero{padding-top:clamp(2.7rem,5vw,5rem)!important;padding-bottom:clamp(2.7rem,5vw,5rem)!important}
    .hero .lede{margin-top:1rem!important;margin-bottom:1.25rem!important}
    .actions{margin-top:1rem!important}
    section{--zen-section-gap:clamp(2.8rem,5vw,5.5rem)}
    @media (prefers-reduced-motion:reduce){.site-header nav>.nav-scan-item{animation:none!important}}
    @media(max-width:1100px){.site-header{flex-wrap:wrap}.site-header>.resume-priority{order:-3}.site-header .brand{order:-2}.site-header nav{order:2;width:100%;justify-content:flex-start;overflow-x:auto;padding-bottom:.15rem;scrollbar-width:none}.site-header nav::-webkit-scrollbar{display:none}}
    @media(max-width:620px){.site-header{padding:.48rem .65rem!important}.site-header>.resume-priority{padding:.58rem .66rem;font-size:.61rem}.site-header .brand small{display:none}.site-header nav>a,.site-header nav>details>summary{padding:.48rem .52rem!important}}
  `;
  document.head.appendChild(style);
})();