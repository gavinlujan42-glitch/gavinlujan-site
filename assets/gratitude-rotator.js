(()=>{
  const b=document.querySelector("[data-wisdom-banner]");
  if(!b)return;

  // The English prayer remains the canonical text. Indigenous-language entries are
  // intentionally not machine-translated here. Sacred/community language should be
  // reviewed by fluent speakers or tribal language programs before publication.
  const prayer="With gratitude to Mother Earth, Great Spirit, the One — and whatever name we give the greater mystery. Thank you for the time, the work, the people, and the opportunity to serve.";
  const entries=[
    {lang:"English",community:"ROOT · 01",text:prayer,verified:true},
    {lang:"Tewa",community:"Tewa-speaking Pueblos",text:"Translation pending community review",verified:false},
    {lang:"Diné Bizaad",community:"Navajo Nation",text:"Translation pending fluent-speaker review",verified:false},
    {lang:"Jicarilla Apache",community:"Jicarilla Apache Nation",text:"Translation pending community review",verified:false},
    {lang:"Mescalero Apache",community:"Mescalero Apache Tribe",text:"Translation pending community review",verified:false},
    {lang:"Tiwa",community:"Tiwa-speaking Pueblos",text:"Translation pending community review",verified:false},
    {lang:"Towa",community:"Jemez Pueblo",text:"Translation pending community review",verified:false},
    {lang:"Keres",community:"Keres-speaking Pueblos",text:"Translation pending community review",verified:false},
    {lang:"Zuni",community:"Pueblo of Zuni",text:"Translation pending community review",verified:false}
  ];
  const art=[["mesa","HIGH DESERT DAWN"],["turquoise","TURQUOISE CURRENT"],["night","COSMIC NIGHT"],["adobe","ADOBE LIGHT"],["rain","DESERT RAIN"],["fire","SACRED HORIZON"],["cottonwood","COTTONWOOD"],["snow","SANGRE DE CRISTO"],["weave","WOVEN SIGNAL"],["canyon","CANYON MEMORY"],["monsoon","MONSOON SKY"],["sage","SAGE EARTH"],["singularity","THE ONE"]];
  const e=b.querySelector("[data-wisdom-quote]"),c=b.querySelector("[data-wisdom-count]"),r=b.querySelector("[data-wisdom-root]"),n=b.querySelector("[data-wisdom-art-name]");
  let i=0,j=0;
  const words=()=>{
    i=(i+1)%entries.length;
    const x=entries[i];
    b.classList.add("is-changing");
    setTimeout(()=>{
      e.textContent=x.verified?x.text:`${x.lang} · ${x.text}`;
      c.textContent=String(i+1).padStart(2,"0")+" / "+String(entries.length).padStart(2,"0");
      r.textContent=x.verified?x.community:`${x.community} · REVIEW`; 
      r.classList.toggle("is-root",i===0);
      b.classList.remove("is-changing");
    },620);
  };
  const cycleArt=()=>{let x=j;while(x===j)x=Math.floor(Math.random()*art.length);j=x;b.dataset.art=art[j][0];n.textContent=art[j][1]};
  if(!matchMedia("(prefers-reduced-motion: reduce)").matches){setInterval(words,13000);setInterval(cycleArt,8100)}
})();