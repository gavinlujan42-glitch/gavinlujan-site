(() => {
  const mantras = [
    { text: "NEW MEXICO CYBER THREAT DASHBOARD", theme: "strategy", priority: true },
    { text: "Build the system that makes the old failure obsolete.", theme: "systems" },
    { text: "See the whole. Strengthen the essential. Remove the drag.", theme: "systems" },
    { text: "Design for the world arriving, not the one disappearing.", theme: "systems" },
    { text: "Waste nothing: not talent, trust, time, or intelligence.", theme: "systems" },
    { text: "Make every part serve the mission, and the mission serve life.", theme: "systems" },
    { text: "The future belongs to those who architect it responsibly.", theme: "systems" },
    { text: "Think beyond the horizon. Act precisely where you stand.", theme: "cosmos" },
    { text: "Stay humble before the unknown and relentless in its pursuit.", theme: "cosmos" },
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
    { text: "Protect the whole, even while neutralizing the threat.", theme: "harmony" }
  ];
  const root=document.querySelector('[data-mantra-rotator]'); if(!root)return;
  const output=root.querySelector('[data-mantra-text]'),discipline=root.querySelector('[data-mantra-discipline]'),counter=root.querySelector('[data-mantra-counter]'),toggle=root.querySelector('[data-mantra-toggle]'),reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const labels={systems:'SYSTEMS VISION',cosmos:'COSMIC PERSPECTIVE',quality:'QUALITY & CRAFT',virtue:'VIRTUE IN COMMAND',inquiry:'THE EDGE OF INQUIRY',strategy:'STRATEGIC ADVANTAGE',harmony:'HARMONIZED FORCE'};
  const status=root.querySelector('.mantra-status span:last-child'); if(status)status.textContent='23 SEC SIGNAL';
  const cta=document.createElement('a'); cta.href='nm-cyber-threat-dashboard.html'; cta.textContent='OPEN THREAT CONSTELLATION →'; cta.className='priority-threat-cta'; cta.style.cssText='display:inline-block;margin-top:.8rem;padding:.65rem .85rem;border:1px solid rgba(116,255,155,.55);color:#baffcc;text-decoration:none;font:800 .64rem ui-monospace,monospace;letter-spacing:.1em;background:#031008'; root.appendChild(cta);
  let bag=mantras.map((_,i)=>i).slice(1),current=0,timer=0,paused=false,first=true;
  function shuffle(){for(let i=bag.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[bag[i],bag[j]]=[bag[j],bag[i]]}}
  function render(index){current=index;const m=mantras[index];root.classList.add('is-changing');setTimeout(()=>{output.textContent=m.text;discipline.textContent=m.priority?'PRIORITY SPLASH · ZIA WOLF THREAT INTELLIGENCE':labels[m.theme];counter.textContent=m.priority?'NM / 01':`${String(index+1).padStart(2,'0')} / ${mantras.length}`;root.dataset.theme=m.theme;cta.style.display=m.priority?'inline-block':'none';root.classList.remove('is-changing');root.classList.remove('is-counting');void root.offsetWidth;if(!paused&&!reduceMotion.matches)root.classList.add('is-counting')},reduceMotion.matches?0:360)}
  function next(){if(first){first=false;render(0);return}if(!bag.length){bag=mantras.map((_,i)=>i).slice(1);shuffle()}render(bag.pop())}
  function schedule(){clearInterval(timer);if(!paused&&!reduceMotion.matches)timer=setInterval(next,23000)}
  toggle?.addEventListener('click',()=>{paused=!paused;toggle.textContent=paused?'RESUME':'PAUSE';toggle.setAttribute('aria-pressed',String(paused));root.classList.toggle('is-paused',paused);schedule()});
  reduceMotion.addEventListener?.('change',schedule);shuffle();next();schedule();
})();

(() => { const nav=document.querySelector('.site-header nav'); if(!nav||nav.querySelector('[data-zia-v3-toggle]'))return; const a=document.createElement('a');a.href='v3.html';a.dataset.ziaV3Toggle='true';a.textContent='ZIA V3 // AI SITE';a.style.cssText='border:1px solid rgba(169,245,199,.65);padding:.7rem .9rem;color:#a9f5c7;background:#06100a;font-family:ui-monospace,monospace;font-size:.68rem;font-weight:800;letter-spacing:.08em;text-decoration:none;white-space:nowrap';nav.appendChild(a)})();

(() => {const header=document.querySelector('.site-header'),nav=header?.querySelector('nav[aria-label="Primary navigation"]'),brand=header?.querySelector('.brand');if(!header||!nav||!brand)return;const resume=nav.querySelector('a[href="resume.html"]');if(resume){resume.classList.add('resume-priority');header.insertBefore(resume,brand)}const threat=document.createElement('a');threat.href='nm-cyber-threat-dashboard.html';threat.textContent='NM THREAT';threat.className='nav-scan-item';nav.insertBefore(threat,nav.firstChild);const links=[...nav.querySelectorAll(':scope > a')];links.forEach((link,i)=>{link.classList.add('nav-scan-item');link.style.setProperty('--scan-delay',`${i*2.8}s`)});const style=document.createElement('style');style.textContent='.site-header{gap:clamp(.55rem,1.2vw,1.15rem)!important;padding-top:.55rem!important;padding-bottom:.55rem!important}.site-header .brand{margin-right:auto!important}.site-header nav{gap:.18rem!important;align-items:center!important}.site-header nav>a{padding:.54rem .62rem!important;border:1px solid rgba(255,255,255,.055);transition:.8s;opacity:.78}.site-header nav>a:hover{opacity:1;border-color:rgba(82,226,208,.45);color:#baf8ef!important}.site-header>.resume-priority{order:-2;padding:.66rem .82rem;border:1px solid rgba(112,255,123,.72);background:#06100a;color:#76ff7f!important;text-decoration:none;font:800 .67rem ui-monospace,monospace;letter-spacing:.13em;white-space:nowrap}@media(max-width:1100px){.site-header{flex-wrap:wrap}.site-header nav{order:2;width:100%;overflow-x:auto}}';document.head.appendChild(style)})();