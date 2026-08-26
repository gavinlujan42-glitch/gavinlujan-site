/* BLACK DIAMOND // NIST CONTROL CATALOG
   Production integration: loads NIST-maintained OSCAL SP 800-53 Rev.5 catalog at runtime.
   Source remains authoritative and is not duplicated or paraphrased locally. */
(() => {
  'use strict';
  const SOURCE='https://raw.githubusercontent.com/usnistgov/oscal-content/main/nist.gov/SP800-53/rev5/json/NIST_SP-800-53_rev5_catalog.json';
  const state={catalog:null,controls:[],index:0,filter:''};
  const text=(parts=[])=>parts.map(p=>p?.prose||p?.name||'').filter(Boolean).join(' ');
  function flatten(){
    const groups=state.catalog?.catalog?.groups||[];
    state.controls=groups.flatMap(g=>(g.controls||[]).flatMap(c=>[
      {id:c.id.toUpperCase(),title:c.title,family:g.title,statement:text(c.parts),kind:'CONTROL'},
      ...(c.controls||[]).map(e=>({id:e.id.toUpperCase(),title:e.title,family:g.title,statement:text(e.parts),kind:'ENHANCEMENT'}))
    ]));
  }
  function mount(root){
    root.innerHTML=`<div class="bd-catalog-head"><span>◆ BLACK DIAMOND // NIST SP 800-53</span><span id="bdNistCount">CONNECTING TO NIST OSCAL…</span></div>
      <div class="bd-catalog-tools"><input id="bdNistSearch" type="search" placeholder="FILTER CONTROL · AC-2 · IR-4 · SI-4"><button id="bdNistPrev">PREV</button><button id="bdNistNext">NEXT</button></div>
      <article class="bd-control-card" id="bdNistCard"><small>AUTHORITATIVE CONTROL CATALOG</small><h3>Loading NIST SP 800-53…</h3><p>The catalog is retrieved from NIST's maintained OSCAL content.</p></article>
      <p class="bd-source">SOURCE · NIST OSCAL · SP 800-53 REV.5 · machine-readable authoritative catalog</p>`;
    root.querySelector('#bdNistSearch').addEventListener('input',e=>{state.filter=e.target.value.trim().toLowerCase();state.index=0;render(root)});
    root.querySelector('#bdNistPrev').onclick=()=>{state.index=Math.max(0,state.index-1);render(root)};
    root.querySelector('#bdNistNext').onclick=()=>{state.index++;render(root)};
  }
  function filtered(){return state.filter?state.controls.filter(c=>`${c.id} ${c.title} ${c.family}`.toLowerCase().includes(state.filter)):state.controls}
  function render(root){
    const rows=filtered(); if(!rows.length){root.querySelector('#bdNistCard').innerHTML='<small>NO MATCH</small><h3>Try another control or family.</h3>';return}
    state.index=((state.index%rows.length)+rows.length)%rows.length; const c=rows[state.index];
    root.querySelector('#bdNistCount').textContent=`${String(state.index+1).padStart(3,'0')} / ${rows.length}`;
    root.querySelector('#bdNistCard').innerHTML=`<small>${c.kind} · ${c.family}</small><h3>${c.id} · ${c.title}</h3><p>${c.statement||'Open the authoritative NIST catalog for the complete control text.'}</p>`;
  }
  async function init(){
    const root=document.querySelector('[data-bd-nist-catalog]'); if(!root)return; mount(root);
    try{const r=await fetch(SOURCE,{cache:'no-store'});if(!r.ok)throw new Error(r.status);state.catalog=await r.json();flatten();render(root)}
    catch(e){root.querySelector('#bdNistCount').textContent='AUTHORITATIVE SOURCE AVAILABLE';root.querySelector('#bdNistCard').innerHTML='<small>NIST OSCAL</small><h3>Catalog connection unavailable.</h3><p>Use the NIST OSCAL source link for the current SP 800-53 catalog.</p>'}
  }
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init();
})();