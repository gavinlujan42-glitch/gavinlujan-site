/* CIO Rogue portable core engine v0.2 */
(function(root){
  const partyTemplates=[
    ['Code Wizard','DEV','INT','Refactor'],['Security Paladin','SEC','WIS','Threat Ward'],['Ops Ranger','OPS','CON','Restore Service'],['Network Elf','NET','DEX','Reroute'],['Infra Dwarf','INFRA','CON','Fortify'],['Cloud Sorcerer','CLOUD','INT','Elasticity'],['Web Bard','WEB','CHA','Rally Users'],['Marketing Mage','MKT','CHA','Shape Narrative'],['Budget Gnome','FIN','WIS','Find Gold'],['Product Rogue','PRODUCT','DEX','Discover Requirement'],['Scrum Monk','DELIVERY','WIS','Remove Blocker'],['Data Oracle','DATA','INT','Restore Truth']
  ];
  const encounters=[
    {name:'Ransomware Dragon Sighting',dc:15,attr:'WIS',lead:'SEC',risk:'security'},
    {name:'Legacy Lich Awakens',dc:14,attr:'INT',lead:'DEV',risk:'debt'},
    {name:'Scope-Creep Hydra',dc:12,attr:'CHA',lead:'PRODUCT',risk:'delivery'},
    {name:'Change Committee of Infinite Review',dc:13,attr:'CHA',lead:'DELIVERY',risk:'delivery'},
    {name:'Network Forest Goes Dark',dc:12,attr:'DEX',lead:'NET',risk:'reliability'},
    {name:'Cloud Treasury Leak',dc:12,attr:'WIS',lead:'FIN',risk:'budget'},
    {name:'Audit Necromancer Requests Evidence',dc:14,attr:'WIS',lead:'SEC',risk:'trust'},
    {name:'CEO Elf Demands a Portal by Friday',dc:13,attr:'CHA',lead:'WEB',risk:'morale'},
    {name:'Technical-Debt Golem',dc:15,attr:'INT',lead:'DEV',risk:'debt'},
    {name:'Production Dragon Breathes Fire',dc:15,attr:'CON',lead:'OPS',risk:'reliability'}
  ];
  function d6(){return 1+Math.floor(Math.random()*6)}
  function rollStat(){return d6()+d6()+d6()}
  function mod(n){return Math.floor((n-10)/2)}
  function d20(){return 1+Math.floor(Math.random()*20)}
  function createParty(){return partyTemplates.map((p,i)=>({id:i,name:p[0],role:p[1],prime:p[2],ability:p[3],level:1,stamina:100,morale:75,loyalty:70,burnout:0}))}
  function newState(){return {version:'0.2',turn:1,quarter:1,xp:0,level:1,attrs:{INT:rollStat(),WIS:rollStat(),CHA:rollStat(),CON:rollStat(),DEX:rollStat(),STR:rollStat()},resources:{security:72,reliability:74,delivery:68,morale:74,reputation:55,budget:78,debt:25,trust:65},party:createParty(),chronicle:[],encounter:null}}
  function drawEncounter(){return {...encounters[Math.floor(Math.random()*encounters.length)]}}
  function check(state,enc,leadRole){let roll=d20(),a=mod(state.attrs[enc.attr]),role=leadRole===enc.lead?2:0,total=roll+a+role;return {roll,attribute:enc.attr,attributeMod:a,roleBonus:role,total,dc:enc.dc,critical:roll===20,fumble:roll===1,success:roll===20||(roll!==1&&total>=enc.dc)}}
  function resolve(state,leadRole){let enc=state.encounter||drawEncounter(),r=check(state,enc,leadRole),delta=r.success?7:-10;if(enc.risk==='debt')state.resources.debt+=r.success?-6:9;else state.resources[enc.risk]+=delta;state.resources.morale+=r.success?2:-3;state.resources.trust+=r.success?2:-2;state.xp+=r.success?10:4;state.level=1+Math.floor(state.xp/60);state.turn++;if(state.turn%8===0)state.quarter++;Object.keys(state.resources).forEach(k=>state.resources[k]=Math.max(0,Math.min(100,state.resources[k])));state.chronicle.unshift({turn:state.turn-1,encounter:enc.name,lead:leadRole,result:r});state.encounter=drawEncounter();return r}
  function save(state){localStorage.setItem('cioRogueSave',JSON.stringify(state))}
  function load(){try{return JSON.parse(localStorage.getItem('cioRogueSave'))}catch(e){return null}}
  root.CIORogue={newState,drawEncounter,resolve,save,load,mod,d20,partyTemplates,encounters};
})(window);
