const SKILL_GROUPS=[['Artificial Intelligence','Responsible AI','Intelligent Automation','Enterprise Search','Knowledge Management'],['Solution Integration','Enterprise Architecture','API Strategy','Identity Integration','Interoperability'],['High-Performance Computing','Linux Clusters','Virtualization','Cloud Architecture','Mission-Critical Systems'],['Cybersecurity','NIST CSF','RMF','Zero Trust','Defense in Depth','Risk Management'],['Network Observability','Performance Monitoring','Infrastructure Operations','Resilience','Business Continuity'],['Cloud Integration','AWS','Hybrid Infrastructure','DevSecOps','Infrastructure as Code'],['CIO Strategy','IT Governance','Portfolio Leadership','Appropriation Strategy','Digital Transformation'],['Team Building','Collaboration','Executive Communication','Stakeholder Engagement','Organizational Design'],['Agile Scrum','Epic Discovery','User Stories','Product Strategy','Outcome Mapping'],['GIS','Spatial Intelligence','Data Platforms','Analytics','Decision Support']];

const icon=(body)=>`<svg viewBox="0 0 100 100" fill="none"><g stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">${body}</g></svg>`;
const CONSTELLATION_DECK=[
['Spiral','gold',icon('<path d="M76 52C76 31 60 18 42 22C24 26 18 46 27 60C36 74 57 75 67 61C77 47 69 33 56 31C43 29 34 39 37 50C40 61 54 65 61 57C68 49 63 40 55 40C47 40 44 46 47 51"/>')],
['Moon','moon',icon('<path d="M68 18C48 22 36 40 40 58C44 75 60 84 77 78C64 72 58 61 60 49C62 36 70 27 81 22"/>')],
['Wolf','ember',icon('<path d="M24 71L32 31L46 43L59 29L76 68L63 79H38Z"/><path d="M39 57L47 61M61 56L53 61M44 69H57L50 76Z"/>')],
['Hawk','gold',icon('<path d="M16 48L40 30L50 42L60 30L84 48L62 54L72 70L52 61L50 80L48 61L28 70L38 54Z"/>')],
['Water','',icon('<path d="M15 35C25 27 35 27 45 35C55 43 65 43 85 31M15 52C25 44 35 44 45 52C55 60 65 60 85 48M15 69C25 61 35 61 45 69C55 77 65 77 85 65"/>')],
['Air','moon',icon('<path d="M15 38H64C76 38 78 23 68 20C62 18 57 21 55 27M15 54H77C88 54 89 69 79 72C72 74 66 70 64 65M15 69H47"/>')],
['Lightning','ember',icon('<path d="M57 12L29 52H47L40 88L73 43H55Z"/>')],
['Earth','gold',icon('<circle cx="50" cy="50" r="30"/><path d="M20 50H80M50 20V80"/>')],
['Love','ember',icon('<path d="M50 78L23 50C8 34 30 16 50 36C70 16 92 34 77 50Z"/>')],
['Peace','moon',icon('<circle cx="50" cy="50" r="31"/><path d="M50 20V80M50 52L29 72M50 52L71 72"/>')],
['Trust','',icon('<path d="M20 56L39 39L50 50L61 39L80 56L63 72H37Z"/><path d="M32 57L44 69M68 57L56 69"/>')],
['Caring','gold',icon('<path d="M20 61C30 50 40 47 50 55C60 47 70 50 80 61M28 67C38 76 62 76 72 67"/><circle cx="50" cy="35" r="10"/>')],
['Fondness','moon',icon('<circle cx="50" cy="48" r="24"/><path d="M36 45L44 51M64 45L56 51M39 61C46 66 54 66 61 61"/>')],
['Hope','',icon('<path d="M50 80V40M31 58C35 45 42 38 50 40M69 58C65 45 58 38 50 40"/><path d="M25 27H75"/>')],
['Joy','gold',icon('<circle cx="50" cy="50" r="27"/><path d="M38 44H39M61 44H62M37 59C45 68 55 68 63 59"/>')],
['Sorrow','moon',icon('<path d="M50 18C37 37 30 50 30 62C30 75 39 83 50 83C61 83 70 75 70 62C70 50 63 37 50 18Z"/>')],
['Anger','ember',icon('<path d="M23 67L34 34L48 45L61 28L77 67"/><path d="M34 58L46 53M66 57L54 53"/>')],
['Fear','moon',icon('<path d="M50 18L79 72H21Z"/><circle cx="50" cy="53" r="4"/><path d="M50 35V45"/>')],
['Jealousy','',icon('<path d="M18 50C30 34 43 31 50 44C57 31 70 34 82 50C70 66 57 69 50 56C43 69 30 66 18 50Z"/><circle cx="50" cy="50" r="8"/>')],
['Hate','ember',icon('<path d="M24 24L76 76M76 24L24 76"/><circle cx="50" cy="50" r="31"/>')],
['Courage','gold',icon('<path d="M50 17L76 29V50C76 67 65 79 50 85C35 79 24 67 24 50V29Z"/><path d="M38 53L47 62L65 41"/>')],
['Compassion','',icon('<path d="M23 57C31 46 40 43 50 51C60 43 69 46 77 57C68 70 60 76 50 80C40 76 32 70 23 57Z"/><path d="M50 51V70"/>')],
['Balance','gold',icon('<path d="M50 20V80M27 34H73M33 34L22 58H44ZM67 34L56 58H78Z"/>')],
['Renewal','',icon('<path d="M27 53C27 37 39 25 54 25C66 25 75 32 79 42M73 35L79 42L70 46M73 53C73 69 61 81 46 81C34 81 25 74 21 64M27 71L21 64L30 60"/>')]
];

const CORE_MARK=icon('<circle cx="50" cy="50" r="27"/><path d="M50 20V80M20 50H80"/><path d="M31 31L69 69M69 31L31 69"/>');
const shuffle=list=>[...list].sort(()=>Math.random()-.5);
function buildResumeSkillsMarquee(animate=false){const track=document.getElementById('marqueeTrack');if(!track)return;if(animate)track.classList.add('refreshing');window.setTimeout(()=>{const selected=shuffle(SKILL_GROUPS).slice(0,6).map(group=>shuffle(group).slice(0,3).join(' · '));const messages=[...selected,...selected];track.innerHTML=messages.map(message=>`<span class="marquee-message">${message}</span>`).join('');track.classList.remove('refreshing')},animate?350:0)}
function buildConstellation(){const mark=document.querySelector('.brand-mark');if(!mark)return;mark.innerHTML=`<span class="constellation-stage" role="img" aria-label="ZIAWOLF constellation of nature and human emotion"><span class="constellation-orbit"></span><span class="constellation-orbit secondary"></span><span class="constellation-core">${CORE_MARK}</span></span>`;const stage=mark.querySelector('.constellation-stage');const positions=[['18%','50%'],['31%','20%'],['69%','20%'],['82%','50%'],['69%','80%'],['31%','80%']];const nodes=positions.map(([x,y])=>{const node=document.createElement('span');node.className='constellation-node';node.style.setProperty('--x',x);node.style.setProperty('--y',y);stage.appendChild(node);return node});let cursor=0;const reveal=()=>{const selection=[];for(let i=0;i<nodes.length;i++)selection.push(CONSTELLATION_DECK[(cursor+i)%CONSTELLATION_DECK.length]);nodes.forEach((node,i)=>{node.className=`constellation-node ${selection[i][1]||''}`;node.innerHTML=selection[i][2];node.title=selection[i][0];requestAnimationFrame(()=>node.classList.add('active'))});mark.title=selection.map(item=>item[0]).join(' · ');cursor=(cursor+nodes.length)%CONSTELLATION_DECK.length};reveal();window.setInterval(()=>{nodes.forEach(node=>node.classList.remove('active'));window.setTimeout(reveal,520)},5200)}
document.addEventListener('DOMContentLoaded',()=>{buildResumeSkillsMarquee();buildConstellation();window.setInterval(()=>buildResumeSkillsMarquee(true),14000)});