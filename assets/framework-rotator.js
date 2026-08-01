(() => {
  const intervalMs = 10000;
  const domains = [
    ['GV','Govern','organizational context'],['GV','Govern','risk strategy'],['GV','Govern','roles and authority'],['GV','Govern','policy'],['GV','Govern','oversight'],['GV','Govern','cyber supply chain'],
    ['ID','Identify','asset management'],['ID','Identify','risk assessment'],['ID','Identify','improvement'],['PR','Protect','identity management'],['PR','Protect','awareness and training'],['PR','Protect','data security'],['PR','Protect','platform security'],['PR','Protect','technology resilience'],
    ['DE','Detect','continuous monitoring'],['DE','Detect','adverse event analysis'],['RS','Respond','incident management'],['RS','Respond','incident analysis'],['RS','Respond','incident reporting'],['RS','Respond','incident mitigation'],
    ['RC','Recover','recovery execution'],['RC','Recover','recovery communication'],['RMF','RMF','prepare'],['RMF','RMF','categorize'],['RMF','RMF','select'],['RMF','RMF','implement'],['RMF','RMF','assess'],['RMF','RMF','authorize'],['RMF','RMF','monitor'],
    ['ZT','Zero Trust','identity'],['ZT','Zero Trust','devices'],['ZT','Zero Trust','networks'],['ZT','Zero Trust','applications'],['ZT','Zero Trust','data'],['ZT','Zero Trust','visibility and analytics'],['ZT','Zero Trust','automation and orchestration'],
    ['AI','AI RMF','govern'],['AI','AI RMF','map'],['AI','AI RMF','measure'],['AI','AI RMF','manage']
  ];
  const lenses = [
    'define the mission outcome','name the accountable owner','establish measurable criteria','document the evidence trail','validate control effectiveness','prioritize by risk and consequence','design for resilience','communicate the decision plainly','monitor for meaningful change','improve through lessons learned'
  ];
  const signals = domains.flatMap(([code, framework, domain]) => lenses.map((lens, i) => ({
    code: `${code}-${String(i + 1).padStart(2,'0')}`,
    framework,
    domain,
    lens,
    text: `${domain}: ${lens}`
  })));

  let index = Math.floor(Math.random() * signals.length);
  const signalNodes = [...document.querySelectorAll('[data-security-signal]')];
  const countNodes = [...document.querySelectorAll('[data-signal-count]')];
  const frameworkNodes = [...document.querySelectorAll('[data-signal-framework]')];
  const codeNodes = [...document.querySelectorAll('[data-signal-code]')];
  const progressNodes = [...document.querySelectorAll('[data-signal-progress]')];
  const cycleGroups = [...document.querySelectorAll('[data-cycle-group]')];

  countNodes.forEach(node => node.textContent = String(signals.length));

  function renderSignal() {
    const signal = signals[index % signals.length];
    signalNodes.forEach(node => {
      node.classList.remove('signal-enter');
      void node.offsetWidth;
      node.textContent = signal.text;
      node.classList.add('signal-enter');
    });
    frameworkNodes.forEach(node => node.textContent = signal.framework);
    codeNodes.forEach(node => node.textContent = signal.code);
    progressNodes.forEach(node => {
      node.style.animation = 'none';
      void node.offsetWidth;
      node.style.animation = `signalProgress ${intervalMs}ms linear forwards`;
    });
    index = (index + 1) % signals.length;
  }

  cycleGroups.forEach(group => {
    const items = [...group.querySelectorAll('[data-cycle-item]')];
    if (!items.length) return;
    let active = 0;
    items.forEach((item, i) => item.classList.toggle('is-active', i === 0));
    setInterval(() => {
      items[active].classList.remove('is-active');
      active = (active + 1) % items.length;
      items[active].classList.add('is-active');
    }, intervalMs);
  });

  renderSignal();
  setInterval(renderSignal, intervalMs);
})();
