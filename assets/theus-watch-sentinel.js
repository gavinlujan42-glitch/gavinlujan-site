/* THEUS WATCH SENTINEL | privacy-conscious GA4 telemetry | 2026-08-29 */
(() => {
  'use strict';
  const MID='G-H8WPZW00ED';
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){dataLayer.push(arguments)};
  if(!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${MID}"]`)){
    const s=document.createElement('script');s.async=true;s.src=`https://www.googletagmanager.com/gtag/js?id=${MID}`;document.head.appendChild(s);
    gtag('js',new Date());
    gtag('config',MID,{send_page_view:true,allow_google_signals:false});
  }
  const clean=v=>String(v||'').replace(/\s+/g,' ').trim().slice(0,100);
  const path=location.pathname||'/';
  const section=path.includes('resume')?'resume':path.includes('sec-intel')||path.includes('threat')?'security_intel':path.includes('hpc')?'ai_hpc':path.includes('blog')||path.includes('brief')?'briefs':path.includes('project')?'projects':path==='/'||path.endsWith('index.html')?'home':'site';
  const send=(name,p={})=>gtag('event',name,{site_section:section,page_path:path,page_title:document.title,...p});

  document.addEventListener('click',e=>{
    const a=e.target.closest('a,button'); if(!a)return;
    const label=clean(a.textContent||a.getAttribute('aria-label'));
    if(a.tagName==='BUTTON'){send('ui_action',{action_label:label});return;}
    const href=a.getAttribute('href')||'';
    if(/^mailto:/i.test(href)){send('contact_intent',{contact_method:'email',action_label:label});return;}
    if(/^tel:/i.test(href)){send('contact_intent',{contact_method:'phone',action_label:label});return;}
    let u; try{u=new URL(href,location.href)}catch{return;}
    const external=u.hostname&&u.hostname!==location.hostname;
    if(external) send('outbound_resource',{destination_host:u.hostname,action_label:label});
    if(/resume\.html/i.test(u.pathname)) send('resume_view_intent',{action_label:label});
    if(/linkedin\.com/i.test(u.hostname)) send('professional_profile_click',{platform:'linkedin'});
    if(/github\.com/i.test(u.hostname)) send('project_source_click',{platform:'github',action_label:label});
  },{capture:true});

  if(/resume\.html/i.test(path)) send('resume_view');
  const originalPrint=window.print.bind(window); window.print=()=>{send('resume_print');originalPrint();};

  const marks=[25,50,75,90], fired=new Set();
  const depth=()=>{const d=document.documentElement;const max=d.scrollHeight-innerHeight;if(max<=0)return;const pct=Math.round(scrollY/max*100);marks.forEach(m=>{if(pct>=m&&!fired.has(m)){fired.add(m);send('content_depth',{percent_scrolled:m});}})};
  addEventListener('scroll',depth,{passive:true}); depth();

  const started=Date.now(); let engaged=false;
  const engage=()=>{if(engaged)return;engaged=true;send('engaged_reader',{engagement_seconds:Math.round((Date.now()-started)/1000)});};
  setTimeout(engage,30000);
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&(Date.now()-started)>=30000)engage();});

  const params=new URLSearchParams(location.search);
  if(params.get('utm_source')) send('campaign_landing',{campaign_source:clean(params.get('utm_source')),campaign_medium:clean(params.get('utm_medium')),campaign_name:clean(params.get('utm_campaign'))});
})();