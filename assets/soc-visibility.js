(() => {
 const root=document.querySelector("[data-soc-center]"); if(!root)return;
 const canvas=root.querySelector("canvas"); const ctx=canvas.getContext("2d");
 const tabs=[...root.querySelectorAll("[data-soc-view]")];
 const panels=[...root.querySelectorAll("[data-soc-panel]")];
 const refresh=root.querySelector("[data-soc-refresh]");
 const metric=root.querySelector("[data-flow-rate]");
 let mode="traffic",phase=0,raf;
 const datasets={
  traffic:{inbound:[34,42,38,58,64,54,72,68,84,76,91,82],outbound:[22,28,25,36,42,38,48,46,59,52,63,57]},
  controls:{inbound:[78,81,84,86,88,91,92,94,95,96,97,98],outbound:[65,70,72,75,79,81,85,87,89,91,93,95]},
  firewalls:{inbound:[41,55,49,68,61,74,58,81,66,88,72,84],outbound:[12,18,16,24,21,27,20,31,25,34,28,32]}
 };
 function size(){const r=canvas.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);canvas.width=r.width*d;canvas.height=r.height*d;ctx.setTransform(d,0,0,d,0,0)}
 function line(values,color,w,h){ctx.beginPath();values.forEach((v,i)=>{const x=i*w/(values.length-1),y=h-(v/110*h*.82)-12+(Math.sin(phase+i)*2);i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.strokeStyle=color;ctx.lineWidth=2;ctx.shadowColor=color;ctx.shadowBlur=9;ctx.stroke();ctx.shadowBlur=0}
 function draw(){const w=canvas.clientWidth,h=canvas.clientHeight;ctx.clearRect(0,0,w,h);ctx.strokeStyle="rgba(105,231,255,.08)";ctx.lineWidth=1;for(let y=18;y<h;y+=34){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}for(let x=0;x<w;x+=56){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke()}const d=datasets[mode];line(d.inbound,"#69e7ff",w,h);line(d.outbound,"#7fffc1",w,h);phase+=.025;raf=requestAnimationFrame(draw)}
 function select(next){mode=next;tabs.forEach(x=>x.classList.toggle("active",x.dataset.socView===next));panels.forEach(x=>x.hidden=x.dataset.socPanel!==next);metric.textContent=next==="controls"?"98.6%":next==="firewalls"?"2.4 Gb/s":(640+Math.round(Math.random()*190))+" Mb/s"}
 tabs.forEach(x=>x.addEventListener("click",()=>select(x.dataset.socView)));refresh.addEventListener("click",()=>{refresh.classList.add("spin");root.querySelector("[data-soc-time]").textContent="SYNCHRONIZING COLLECTORS";setTimeout(()=>{refresh.classList.remove("spin");root.querySelector("[data-soc-time]").textContent="COLLECTORS UPDATED · JUST NOW";select(mode)},650)});new ResizeObserver(size).observe(canvas);size();select(mode);draw();document.addEventListener("visibilitychange",()=>{if(document.hidden)cancelAnimationFrame(raf);else draw()});
})();

/* Load the lightweight New Mexico AI/data-center + fiber-corridor overlay after the DOM is parsed. */
(() => { const s=document.createElement('script'); s.src='assets/nm-ai-infrastructure.js?v=20260820-1'; s.defer=true; document.head.appendChild(s); })();