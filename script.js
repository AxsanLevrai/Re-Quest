const ICONS=['🎯','✈️','📚','💪','🎨','🏃','🌍','🎵','💻','🏠','🌱','🧘','🤝','🚀','⭐','🏆','🎓','🦋','🌊','🔥','💡','🎭','🎤','📝','🍃','🎸','🏋️','🌺','🎬','🔬'];
const PALETTE=['#e8c96a','#5ec98a','#6aa8e8','#e8706a','#b06ae8','#e8906a','#6ae8d4','#e86aa8','#a8e86a'];
const CAT_COLORS={'Personnel':'#e8c96a','Projets':'#5ec98a','Carriere':'#6aa8e8','Apprentissage':'#b06ae8','Sport':'#e8706a','Creatif':'#e8906a','Voyage':'#6ae8d4','Social':'#e86aa8','Bien-etre':'#a8e86a'};
const PAGE_TITLES={profile:'Mon Profil',accueil:'Accueil',goals:'Toutes mes quêtes',stats:'Statistiques',timeline:'Chronologie',mood:'Mon Humeur',params:'Paramètres',editor:'Nouvelle page',achievements:'Succès'};
const BG_PRESETS=[
  {label:'Montagne',css:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)'},
  {label:'Aurora',css:'linear-gradient(135deg,#0f2027,#203a43,#2c5364)'},
  {label:'Foret',css:'linear-gradient(135deg,#0a3d1f,#1a5c35,#0d2b15)'},
  {label:'Coucher',css:'linear-gradient(135deg,#1a0a00,#6b2d00,#c65a00)'},
  {label:'Cosmos',css:'linear-gradient(135deg,#0d0d2b,#1a0a3d,#0a1a3d)'},
];
const MOODS=[
  {id:'fire',label:'En feu',color:'#e8706a',bg:'rgba(232,112,106,0.15)',svg:'<svg viewBox="0 0 32 32" fill="none"><path d="M16 28c6.6 0 12-4.9 12-11 0-4-2-7-5-9 1 3-1 5-1 5s-2-3-3-6c-2 4-6 5-6 9-1-1-1-3-1-3C9 15 8 18 8 21c0 6 3.6 7 8 7z" fill="#e8706a"/><path d="M16 24c2.5 0 4-1.5 4-3.5 0-1.5-1-2.5-2-3 .5 1 0 2-1 2.5-.3-1-1-1.5-1-1.5C15.5 20 15 21.5 15 22.5c-.5-.3-.5-1-.5-1C13.5 22 13 23 13 23.5c0 2 1.5 2.5 3 2.5z" fill="#fff" opacity=".7"/></svg>'},
  {id:'good',label:'Bien',color:'#5ec98a',bg:'rgba(94,201,138,0.15)',svg:'<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" fill="#5ec98a"/><circle cx="12" cy="13" r="2" fill="#fff"/><circle cx="20" cy="13" r="2" fill="#fff"/><path d="M10 19c1.5 2.5 10.5 2.5 12 0" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>'},
  {id:'meh',label:'Moyen',color:'#e8c96a',bg:'rgba(232,201,106,0.15)',svg:'<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" fill="#e8c96a"/><circle cx="12" cy="13" r="2" fill="#fff"/><circle cx="20" cy="13" r="2" fill="#fff"/><path d="M11 21h10" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>'},
  {id:'tired',label:'Flemme',color:'#8b8ba0',bg:'rgba(139,139,160,0.15)',svg:'<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" fill="#8b8ba0"/><path d="M11 13h4M17 13h4" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><path d="M12 21c1 1 7 1 8 0" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>'},
  {id:'block',label:'Bloque',color:'#6aa8e8',bg:'rgba(106,168,232,0.15)',svg:'<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" fill="#6aa8e8"/><circle cx="12" cy="13" r="2" fill="#fff"/><circle cx="20" cy="13" r="2" fill="#fff"/><path d="M12 22c1-2 7-2 8 0" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M16 6v4M16 22v4" stroke="#fff" stroke-width="1.5" opacity=".5" stroke-linecap="round"/></svg>'},
];
const PLAYLISTS=[
  {name:'Beats with Hooks',url:'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/lofi_chill/sets/beats-with-hooks&color=%23e8c96a&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false'},
  {name:'Lo-fi Chill',url:'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/lofi_chill/sets/lofi&color=%23e8c96a&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false'},
  {name:'Beats to Rap To',url:'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/lofi_chill/sets/beats-to-rap-to-beats-to-rap-to-over&color=%23e8c96a&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false'},
  {name:'Lo-fi Study',url:'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/lofi_chill/sets/lofi-study&color=%23e8c96a&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false'},
  {name:'My Love',url:'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/david_sanya/my-love&color=%23e8c96a&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false'},
];

// STATE
let goals=[], bgSettings={type:'none',value:'',opacity:82,blur:0}, moodLog=[], trash=[];
let currentView='accueil', currentFilter='all', currentCatFilter=null;
let editingId=null, logTargetId=null, viewerTargetId=null;
let selIcon='🎯', selColor=PALETTE[0], selPrio='med';
let editMilestones=[], editFiles=[], tempBg={type:'none',value:'',opacity:82,blur:0};
let selectedMoodId=null, charts={};

// PLAYER STATE
let curPL=0, playerExpanded=false, isPlaying=false, shuffleOn=false;
let scWidget=null, widgetReady=false;

// IDB
let _idb=null;
function openIDB(){if(_idb)return Promise.resolve(_idb);return new Promise((res,rej)=>{const r=indexedDB.open('horizon2',1);r.onupgradeneeded=e=>e.target.result.createObjectStore('b');r.onsuccess=e=>{_idb=e.target.result;res(_idb)};r.onerror=rej});}
function idbSet(k,v){return openIDB().then(db=>new Promise((res,rej)=>{const tx=db.transaction('b','readwrite');tx.objectStore('b').put(v,k);tx.oncomplete=res;tx.onerror=rej}));}
function idbGet(k){return openIDB().then(db=>new Promise((res,rej)=>{const r=db.transaction('b').objectStore('b').get(k);r.onsuccess=()=>res(r.result||null);r.onerror=rej}));}
function idbDel(k){return openIDB().then(db=>new Promise((res,rej)=>{const tx=db.transaction('b','readwrite');tx.objectStore('b').delete(k);tx.oncomplete=res;tx.onerror=rej}));}

// LS
function lsGet(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}}
function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}

// SAVE
function saveGoals(){
  const lean=goals.map(g=>{const c={...g};delete c.cover;if(c.files)c.files=c.files.map(f=>({name:f.name,size:f.size,type:f.type}));return c;});
  lsSet('hz_goals',lean);
  goals.forEach(g=>{
    if(g.cover)idbSet('cov_'+g.id,g.cover).catch(()=>{});else idbDel('cov_'+g.id).catch(()=>{});
    (g.files||[]).forEach((f,i)=>{if(f.data)idbSet('fil_'+g.id+'_'+i,f.data).catch(()=>{});});
  });
}
async function loadGoals(){
  const lean=lsGet('hz_goals',null);
  if(!lean||!lean.length)return seedGoals();
  try{return await Promise.all(lean.map(async g=>{
    const f={...g};
    try{const c=await idbGet('cov_'+g.id);if(c)f.cover=c;}catch(e){}
    if(f.files&&f.files.length)f.files=await Promise.all(f.files.map(async(fi,i)=>{try{const d=await idbGet('fil_'+g.id+'_'+i);if(d)return{...fi,data:d}}catch(e){}return fi;}));
    return f;
  }));}catch(e){return lean;}
}
function saveBg(){
  lsSet('hz_bg',{type:bgSettings.type,opacity:bgSettings.opacity,blur:bgSettings.blur??0});
  if(bgSettings.type!=='none')idbSet('bg_img',bgSettings.value).catch(()=>{});
  else idbDel('bg_img').catch(()=>{});
}
async function loadBg(){
  const m=lsGet('hz_bg',{type:'none',opacity:82,blur:0});
  if(m.type==='none')return{type:'none',value:'',opacity:82,blur:0};
  try{const v=await idbGet('bg_img');return{type:m.type,value:v||'',opacity:m.opacity,blur:m.blur??0};}
  catch(e){return{type:'none',value:'',opacity:82,blur:0};}
}
function saveMood(){lsSet('hz_mood',moodLog);}
function loadTrash(){trash=lsGet('hz_trash',[]);}
function saveTrash(){lsSet('hz_trash',trash);}

// SEED
function seedGoals(){return [];//
  const y=new Date().getFullYear(),mo=new Date().getMonth();
  const dt=(dm,dd)=>new Date(y,mo+dm,dd).toISOString().split('T')[0];
  return [
    {id:1,name:'Video Subaru Re: Zero',desc:'Faire la video sur Subaru pour poser les bases avant les videos theories.',cat:'Creatif',icon:'🎬',color:'#6aa8e8',progress:20,priority:'med',deadline:'2026-03-28',milestones:[{id:101,text:'Faire le Script',done:false},{id:102,text:'Enregistrer ma voix',done:false},{id:103,text:'Obtenir le visuel',done:false},{id:104,text:'Monter la video',done:false},{id:105,text:'Publier la video',done:false}],log:[],created:dt(0,1),files:[]},
    {id:2,name:'YOUTUBE',desc:'Quête : Vivre de la creation de contenu',cat:'Personnel',icon:'🎯',color:'#e8706a',progress:0,priority:'high',deadline:'',milestones:[{id:201,text:'1 000 abonnes',done:false},{id:202,text:'4 000h watch time + monetisation',done:false},{id:203,text:'Premiers 100 euros/mois',done:false},{id:204,text:'Premier partenariat',done:false},{id:205,text:'YouTube = revenu principal',done:false}],log:[],created:dt(0,1),files:[]},
    {id:3,name:'TAFF',desc:"Le truc chiant qu'il faut quand meme faire",cat:'Carriere',icon:'🤝',color:'#e8c96a',progress:0,priority:'high',deadline:'2026-06-01',milestones:[{id:301,text:'Premier entretien decroche',done:false},{id:302,text:'Signature du contrat',done:false}],log:[],created:dt(0,1),files:[]},
  ];
}

// UTILS
function daysLeft(d){if(!d)return 9999;const t=new Date();t.setHours(0,0,0,0);return Math.ceil((new Date(d+'T00:00:00')-t)/86400000);}
function fmtDate(d){if(!d)return'';return new Date(d+'T00:00:00').toLocaleDateString('fr-FR',{day:'numeric',month:'short',year:'numeric'});}
function todayStr(){return new Date().toISOString().split('T')[0];}
function showToast(msg){document.querySelectorAll('.hz-toast').forEach(t=>t.remove());const t=document.createElement('div');t.className='hz-toast';t.textContent=msg;t.style.cssText='position:fixed;bottom:80px;right:28px;background:var(--night3);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:12px 18px;font-size:14px;color:var(--snow);z-index:600;pointer-events:none;animation:modalIn 0.3s ease';document.body.appendChild(t);setTimeout(()=>t.remove(),3000);}
function killChart(k){if(charts[k]){charts[k].destroy();charts[k]=null;}}
function fileIcon(n){const e=(n.split('.').pop()||'').toLowerCase();if(['jpg','jpeg','png','gif','webp'].includes(e))return'🖼';if(['mp4','mov'].includes(e))return'🎬';if(e==='pdf')return'📄';if(['doc','docx'].includes(e))return'📝';return'📎';}
function fmtSize(b){if(b<1024)return b+'o';if(b<1048576)return Math.round(b/1024)+'Ko';return(b/1048576).toFixed(1)+'Mo';}

// APPLY BG
function applyBg(s){
  const lay=document.getElementById('bg-layer'),ov=document.getElementById('bg-overlay');
  if(!s||s.type==='none'){
    lay.style.backgroundImage='';
    lay.style.filter='';
    ov.style.opacity='0.85';
    return;
  }
  ov.style.opacity=(s.opacity??82)/100;
  lay.style.backgroundImage=s.type==='image'?'url('+s.value+')':s.value;
  const blurPx=s.blur??0;
  lay.style.filter=blurPx>0?'blur('+blurPx+'px)':'';
  // Scale slightly to hide blur edge artefacts
  lay.style.transform=blurPx>0?'scale(1.04)':'';
}

// BG MODAL
document.getElementById('btn-bg').addEventListener('click',()=>{
  tempBg={...bgSettings};buildBgPresets();updateBgPreview();
  document.getElementById('bg-opacity').value=tempBg.opacity??82;
  document.getElementById('bg-opacity-val').textContent=(tempBg.opacity??82)+'%';
  document.getElementById('bg-blur').value=tempBg.blur??0;
  document.getElementById('bg-blur-val').textContent=(tempBg.blur??0)+'px';
  openOv('bg-overlay-modal');
});
function buildBgPresets(){document.getElementById('bg-presets').innerHTML=BG_PRESETS.map((p,i)=>`<div class="bg-preset${tempBg.type==='gradient'&&tempBg.value===p.css?' selected':''}" data-idx="${i}" style="background:${p.css}"></div>`).join('');}
function updateBgPreview(){const p=document.getElementById('bg-preview'),l=document.getElementById('bg-preview-lbl');if(tempBg.type==='none'){p.style.backgroundImage='';l.style.display='';}else{l.style.display='none';p.style.backgroundImage=tempBg.type==='image'?'url('+tempBg.value+')':tempBg.value;}}
document.getElementById('bg-presets').addEventListener('click',e=>{const el=e.target.closest('.bg-preset');if(!el)return;tempBg={type:'gradient',value:BG_PRESETS[+el.dataset.idx].css,opacity:tempBg.opacity??82,blur:tempBg.blur??0};buildBgPresets();updateBgPreview();});
document.getElementById('bg-opacity').addEventListener('input',e=>{tempBg.opacity=+e.target.value;document.getElementById('bg-opacity-val').textContent=e.target.value+'%';});
document.getElementById('bg-blur').addEventListener('input',e=>{tempBg.blur=+e.target.value;document.getElementById('bg-blur-val').textContent=e.target.value+'px';});
document.getElementById('bg-upload-zone').addEventListener('click',()=>document.getElementById('bg-file-input').click());
document.getElementById('bg-file-input').addEventListener('change',e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=ev=>{tempBg={type:'image',value:ev.target.result,opacity:tempBg.opacity??82,blur:tempBg.blur??0};updateBgPreview();buildBgPresets();};r.readAsDataURL(f);e.target.value='';});
document.getElementById('bg-save-btn').addEventListener('click',()=>{bgSettings={...tempBg};saveBg();applyBg(bgSettings);closeOv('bg-overlay-modal');showToast('Fond applique !');});
document.getElementById('bg-remove-btn').addEventListener('click',()=>{bgSettings={type:'none',value:'',opacity:82,blur:0};saveBg();applyBg(bgSettings);closeOv('bg-overlay-modal');showToast('Fond supprime.');});
document.getElementById('bg-cancel-btn').addEventListener('click',()=>closeOv('bg-overlay-modal'));

// NAVIGATE
function navigate(view){
  currentView=view;currentCatFilter=null;
  document.querySelectorAll('.nav-item[data-view]').forEach(n=>n.classList.remove('active'));
  document.getElementById('label-params').classList.toggle('active', view==='params');
  document.querySelector('.nav-item[data-view="'+view+'"]')?.classList.add('active');
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  const viewEl=document.getElementById('view-'+view);
  if(viewEl) viewEl.classList.add('active');
  document.getElementById('page-title').textContent=PAGE_TITLES[view]||view;

  const isMap = (view==='map');

  // Music player: hide on editor, mindmap AND map
  const mp=document.getElementById('music-player');
  if(mp) mp.style.display=(view==='editor'||view==='mindmap'||isMap||view==='achievements')?'none':'';

  // Topbar: hide btn-new, size buttons, search bar, XP banner on map view
  const topbarRight = document.querySelector('.topbar-right');
  const xpBanner    = document.getElementById('xp-banner');
  const mapSub      = document.getElementById('map-topbar-sub');
  if(topbarRight) topbarRight.style.display = isMap ? 'none' : '';
  if(xpBanner)    xpBanner.style.display    = isMap ? 'none' : '';
  if(mapSub)      mapSub.style.display      = isMap ? 'block' : 'none';

  if(view==='goals')renderGoals();
  else if(view==='stats')renderStats();
  else if(view==='timeline')renderTimeline();
  else if(view==='mood')renderMood();
  else if(view==='accueil')renderAccueil();
  else if(view==='editor'){ if(window._editorInit) window._editorInit(); }
  else if(view==='params'){ updateTrashDesc(); buildIntrosGrid(); }
  else if(view==='profile'){ buildProfileView(); }
}
// ACCUEIL
function renderAccueil(){
  const h=new Date().getHours();
  const greet=h<5?'Bonne nuit 🌙':h<12?'Bonjour ☀️':h<18?'Bon après-midi 🌤':h<22?'Bonne soirée 🌆':'Bonne nuit 🌙';
  const greetEl=document.getElementById('accueil-greeting');
  if(greetEl) greetEl.textContent=greet;
  const total=goals.length;
  const done=goals.filter(g=>(g.progress||0)>=100).length;
  const active=total-done;
  const urgent=goals.filter(g=>{const d=daysLeft(g.deadline);return (g.progress||0)<100&&d>=0&&d<=7;}).length;
  const subEl=document.getElementById('accueil-sub');
  if(subEl){
    if(!total) subEl.textContent='Lance ta première quête pour commencer ton aventure.';
    else subEl.textContent=active+' quête'+(active>1?'s':'')+' en cours · '+done+' terminée'+(done>1?'s':'')+( urgent?' · ⚡ '+urgent+' urgente'+(urgent>1?'s':''):'');
  }
  const avgProg=total?Math.round(goals.reduce((s,g)=>s+Math.min(g.progress||0,100),0)/total):0;
  const steps=goals.reduce((s,g)=>s+(g.milestones||[]).filter(m=>m.done).length,0);
  const statsEl=document.getElementById('accueil-stats-row');
  if(statsEl) statsEl.innerHTML=[
    {val:total,lbl:'Quêtes'},{val:done,lbl:'Terminées'},{val:steps,lbl:'Étapes'},{val:avgProg+'%',lbl:'Progression'},
  ].map(s=>'<div class="accueil-stat"><div class="accueil-stat-val">'+s.val+'</div><div class="accueil-stat-lbl">'+s.lbl+'</div></div>').join('');
  const CARDS=[
    {icon:'🗺',title:'Carte des Zones',desc:'Visualise ta progression sur la carte du monde',view:'map',color:'#00f5ff'},
    {icon:'🎯',title:'Mes Quêtes',desc:'Toutes tes quêtes en cours et terminées',view:'goals',color:'#e8c96a'},
    {icon:'📊',title:'Statistiques',desc:'Graphiques et analyses de ta progression',view:'stats',color:'#b06ae8'},
    {icon:'📅',title:'Calendrier',desc:'Tes événements et échéances à venir',view:'calendar',color:'#6aa8e8'},
    {icon:'🧘',title:'Mon Humeur',desc:'Suivi quotidien de ton état d\'esprit',view:'mood',color:'#5ec98a'},
    {icon:'⏱',title:'Chronologie',desc:'Tes quêtes triées par date limite',view:'timeline',color:'#e8906a'},
    {icon:'⚔️',title:'Nouvelle Quête',desc:'Crée une nouvelle quête et relève le défi',action:'new-quest',color:'#ff2d6b'},
    {icon:'📝',title:'Nouvelle Page',desc:'Notes, mind map ou liste de tâches',action:'new-page',color:'#00ff9d'},
  ];
  const grid=document.getElementById('accueil-grid');
  if(!grid) return;
  grid.innerHTML=CARDS.map(c=>`<div class="accueil-card" data-accueil-view="${c.view||''}" data-accueil-action="${c.action||''}" style="--card-accent:${c.color}">
    <div class="accueil-card-icon" style="background:${c.color}22;color:${c.color};box-shadow:0 0 14px ${c.color}33">${c.icon}</div>
    <div class="accueil-card-body">
      <div class="accueil-card-title" style="color:${c.color};text-shadow:0 0 10px ${c.color}66">${c.title}</div>
      <div class="accueil-card-desc">${c.desc}</div>
    </div>
    <div class="accueil-card-arrow" style="color:${c.color};text-shadow:0 0 8px ${c.color}88">›</div>
  </div>`).join('');
  grid.querySelectorAll('.accueil-card').forEach(card=>{
    card.addEventListener('click',()=>{
      const v=card.dataset.accueilView;
      const a=card.dataset.accueilAction;
      if(v) navigate(v);
      else if(a==='new-quest') openAdd();
      else if(a==='new-page') openOv('page-type-overlay');
    });
  });
}
function navCat(cat){ currentCatFilter=cat; navigate('goals'); }
document.querySelectorAll('.nav-item[data-view]').forEach(el=>{ if(el.id==='nav-new-page') return; el.addEventListener('click',()=>navigate(el.dataset.view)); });
document.getElementById('label-params').addEventListener('click',()=>navigate('params'));

// RENDER GOALS
function filteredGoals(){
  const q=(document.getElementById('search-input').value||'').toLowerCase();
  return goals.filter(g=>{
    if(currentCatFilter&&g.cat!==currentCatFilter)return false;
    if(q&&!g.name.toLowerCase().includes(q)&&!(g.cat||'').toLowerCase().includes(q))return false;
    const done=(g.progress||0)>=100;
    if(currentFilter==='done')return done;
    if(currentFilter==='active')return!done;
    if(currentFilter==='urgent'){const d=daysLeft(g.deadline);return!done&&d>=0&&d<=14;}
    return true;
  });
}
function renderGoals(){
  updateSidebar();updateCatNav();
  // Refresh category dropdown if visible
  if(document.getElementById('cat-filter-dd')?.style.display==='block') buildCatDropdown();
  const list=filteredGoals();
  const grid=document.getElementById('goals-grid');
  if(!list.length){grid.innerHTML='<div class="empty-state"><div class="empty-icon">🌌</div><div class="empty-title">Aucune quête</div><div style="font-size:14px">Lance ta première quête</div></div>';return;}
  grid.innerHTML=list.map(cardHTML).join('');
  placeCards(list);initDrag();updateGridH();
}
function cardHTML(g){
  const pct=Math.min(Math.round(g.progress||0),100),done=pct>=100,dl=daysLeft(g.deadline);
  const steps=g.milestones||[],sdone=steps.filter(s=>s.done).length;
  const files=g.files||[],lastLog=g.log&&g.log.length?g.log[g.log.length-1]:null;
  let dlCls='dl-ok',dlTxt=g.deadline?'📅 '+fmtDate(g.deadline):'Pas de date';
  if(done){dlCls='dl-done';dlTxt='✓ Termine';}
  else if(dl<0){dlCls='dl-over';dlTxt='⚡ Depasse '+Math.abs(dl)+'j';}
  else if(dl<=7){dlCls='dl-urgent';dlTxt='⚡ '+dl+'j restants';}
  else if(dl<=14){dlCls='dl-soon';dlTxt='⏳ '+dl+'j restants';}
  const prioIco={low:'🔵',med:'🟡',high:'🔴'}[g.priority]||'🟡';
  const cardCls='goal-card'+(done?' done':'');
  const cp=g.coverPos!==undefined?g.coverPos:50;
  const covHTML=g.cover
    ?'<div class="card-cover" id="cov-'+g.id+'" style="background-image:url('+g.cover+');background-position:center '+cp+'%" data-action="setcover" data-id="'+g.id+'"><div class="card-cover-move" data-action="covermove" data-id="'+g.id+'">&#8853;</div></div>'
    :'<div class="card-cover-placeholder" data-action="setcover" data-id="'+g.id+'"><span>+ Image / GIF de couverture</span></div>';
  const msHTML=steps.map(m=>{const diffColor=m.diff?(DIFF_RANK_COLORS[m.diff]||'#e8c96a'):'';const diffRank=m.diff?DIFF_RANK[m.diff]:'';return'<div class="m-item" data-gid="'+g.id+'" data-mid="'+m.id+'"><div class="m-check'+(m.done?' done':'')+'">'+( m.done?'✓':'')+'</div><span class="m-text'+(m.done?' done':'')+'">'+m.text+'</span>'+(m.diff?'<span class="m-diff-badge m-rank-badge" style="color:'+diffColor+';border-color:'+diffColor+'55;background:'+diffColor+'12;text-shadow:0 0 8px '+diffColor+'80">'+diffRank+'</span>':'')+'</div>';}).join('');
  const attHTML=files.length?'<div class="card-attachments"><div class="att-chip" data-action="files" data-id="'+g.id+'"><span>📎</span><span class="att-chip-name">'+files.length+' fichier'+(files.length>1?'s':'')+'</span></div></div>':'';
  const logHTML=lastLog?'<div class="log-toggle" data-logid="'+g.id+'"><span class="log-arr">▶</span> Derniere note</div><div class="log-entries" id="loglist-'+g.id+'" style="display:none"><div class="log-entry"><div class="log-dot"></div><span class="log-text">'+lastLog.note+(lastLog.prog!=null?' → '+lastLog.prog+'%':'')+'</span><span class="log-date">'+fmtDate(lastLog.date)+'</span></div></div>':'';
  return '<div class="'+cardCls+'" id="card-'+g.id+'" data-id="'+g.id+'">'
    +'<div class="card-stripe" style="background:'+g.color+'"></div>'
    +(done?'<div class="done-ribbon">Termine</div>':'')
    +covHTML
    +'<div class="card-header"><div class="goal-emoji-wrap" style="background:'+g.color+'22">'+( g.icon||'🎯')+'</div>'
    +'<div class="card-meta">'
    +'<div class="goal-name-row"><div class="goal-name" title="'+g.name+'">'+g.name+'</div><div class="drag-handle">&#8946;</div></div>'
    +'<div class="goal-cat">'+( g.cat||'')+' · '+prioIco+'</div>'
    +'<div class="card-actions">'
    +'<button class="icon-btn" data-action="files" data-id="'+g.id+'" title="Fichiers">📎</button>'
    +'<button class="icon-btn" data-action="log" data-id="'+g.id+'" title="Journal">📋</button>'
    +'<button class="icon-btn" data-action="edit" data-id="'+g.id+'" title="Modifier">✏️</button>'
    +'<button class="icon-btn" data-action="delete" data-id="'+g.id+'" title="Supprimer">🗑</button>'
    +'</div></div></div>'
    +'<div class="prog-nums"><span class="prog-pct" style="color:'+(done?'var(--green)':g.color)+'">'+pct+'%</span><span class="prog-steps">'+sdone+'/'+steps.length+' etapes</span></div>'
    +'<div class="prog-track"><div class="prog-fill" style="width:'+pct+'%;background:'+(done?'var(--green)':g.color)+'"></div></div>'
    +(g.desc?'<div class="prog-desc">'+g.desc+'</div>':'')
    +(steps.length?'<div class="milestones">'+msHTML+'</div>':'')
    +attHTML
    +'<div class="card-footer"><span class="dl-chip '+dlCls+'">'+dlTxt+'</span><button class="add-step-btn" data-action="quickstep" data-id="'+g.id+'">+ etape</button></div>'
    +logHTML+'</div>';
}

// FREE DRAG
function placeCards(list){
  const pos=lsGet('hz_pos',{});
  const W=320,GAP=18;
  const gridW=document.getElementById('goals-grid').offsetWidth||900;
  const cols=Math.max(1,Math.floor((gridW+GAP)/(W+GAP)));
  list.forEach((g,i)=>{
    const el=document.getElementById('card-'+g.id);if(!el)return;
    if(pos[g.id]){el.style.left=pos[g.id].x+'px';el.style.top=pos[g.id].y+'px';}
    else{
      const col=i%cols,row=Math.floor(i/cols);
      el.style.left=(col*(W+GAP))+'px';el.style.top=(row*20)+'px';
      requestAnimationFrame(()=>{
        const cards=[...document.querySelectorAll('.goal-card')];
        let rH=[];cards.forEach((c,idx)=>{const r=Math.floor(idx/cols);rH[r]=Math.max(rH[r]||0,c.offsetHeight);});
        let top=0;for(let r=0;r<Math.floor(i/cols);r++)top+=(rH[r]||220)+GAP;
        el.style.top=top+'px';updateGridH();
      });
    }
  });
}
function savePosAll(){const pos={};document.querySelectorAll('.goal-card').forEach(c=>{pos[+c.dataset.id]={x:c.offsetLeft,y:c.offsetTop};});lsSet('hz_pos',pos);}
function updateGridH(){const grid=document.getElementById('goals-grid');let max=400;grid.querySelectorAll('.goal-card').forEach(c=>{const b=c.offsetTop+c.offsetHeight;if(b>max)max=b;});grid.style.minHeight=(max+40)+'px';}
function initDrag(){
  document.querySelectorAll('.goal-card').forEach(card=>{
    const h=card.querySelector('.drag-handle');if(!h)return;
    let sX,sY,sL,sT,drag=false;
    const mv=e=>{if(!drag)return;const cX=e.touches?e.touches[0].clientX:e.clientX,cY=e.touches?e.touches[0].clientY:e.clientY;card.style.left=Math.max(0,sL+(cX-sX))+'px';card.style.top=Math.max(0,sT+(cY-sY))+'px';updateGridH();};
    const up=()=>{if(!drag)return;drag=false;card.classList.remove('dragging');card.style.zIndex='';document.removeEventListener('mousemove',mv);document.removeEventListener('mouseup',up);document.removeEventListener('touchmove',mv);document.removeEventListener('touchend',up);savePosAll();};
    h.addEventListener('mousedown',e=>{e.preventDefault();drag=true;sX=e.clientX;sY=e.clientY;sL=card.offsetLeft;sT=card.offsetTop;card.classList.add('dragging');card.style.zIndex='999';document.addEventListener('mousemove',mv);document.addEventListener('mouseup',up);});
    h.addEventListener('touchstart',e=>{e.preventDefault();drag=true;sX=e.touches[0].clientX;sY=e.touches[0].clientY;sL=card.offsetLeft;sT=card.offsetTop;card.classList.add('dragging');card.style.zIndex='999';document.addEventListener('touchmove',mv,{passive:false});document.addEventListener('touchend',up);},{passive:false});
  });
}

// COVER MOVE
document.getElementById('goals-grid').addEventListener('mousedown',e=>{
  const btn=e.target.closest('[data-action="covermove"]');if(!btn)return;
  e.preventDefault();e.stopPropagation();
  const id=+btn.dataset.id,g=goals.find(g=>g.id===id);if(!g)return;
  const ce=document.getElementById('cov-'+id);if(!ce)return;
  let sY=e.clientY,sP=g.coverPos!==undefined?g.coverPos:50;
  const mv=ev=>{const np=Math.max(0,Math.min(100,sP+(ev.clientY-sY)*0.5));g.coverPos=Math.round(np);ce.style.backgroundPosition='center '+g.coverPos+'%';};
  const up=()=>{document.removeEventListener('mousemove',mv);document.removeEventListener('mouseup',up);saveGoals();};
  document.addEventListener('mousemove',mv);document.addEventListener('mouseup',up);
});

// SIDEBAR
function updateSidebar(){
  const total=goals.length,done=goals.filter(g=>(g.progress||0)>=100).length;
  const steps=goals.reduce((s,g)=>s+(g.milestones||[]).filter(m=>m.done).length,0);
  const pct=total?Math.round(goals.reduce((s,g)=>s+Math.min(g.progress||0,100),0)/total):0;
  document.getElementById('badge-all').textContent=total;
  document.getElementById('sb-done').textContent=done+' / '+total;
  document.getElementById('sb-steps').textContent=steps;
  document.getElementById('sb-pct').textContent=pct+'%';
  document.getElementById('sb-ring').style.width=pct+'%';
}
function updateCatNav(){ /* categories filter moved to goals view dropdown */ }

// GRID EVENTS
document.getElementById('goals-grid').addEventListener('click',e=>{
  const mItem=e.target.closest('.m-item');
  if(mItem){toggleM(+mItem.dataset.gid,+mItem.dataset.mid);return;}
  const btn=e.target.closest('[data-action]');
  if(btn){
    const id=+btn.dataset.id,a=btn.dataset.action;
    if(a==='files')openViewer(id);
    else if(a==='log')openLog(id);
    else if(a==='edit')openEdit(id);
    else if(a==='delete')deleteGoal(id);
    else if(a==='quickstep')quickStep(id);
    else if(a==='setcover')openCoverPicker(id);
    else if(a==='removecover'){const g=goals.find(g=>g.id===id);if(g){g.cover=null;g.coverPos=50;saveGoals();renderGoals();showToast('Couverture supprimee.');}}
    return;
  }
  const lt=e.target.closest('.log-toggle');
  if(lt){const lid=lt.dataset.logid,el=document.getElementById('loglist-'+lid),arr=lt.querySelector('.log-arr');if(el){const v=el.style.display==='none';el.style.display=v?'block':'none';if(arr)arr.textContent=v?'▼':'▶';}}
});
document.getElementById('search-input').addEventListener('input',()=>{if(currentView==='goals')renderGoals();});
document.querySelectorAll('.filter-chip').forEach(chip=>chip.addEventListener('click',()=>{
  currentFilter=chip.dataset.filter;currentCatFilter=null;
  // Reset cat dropdown button
  const catBtn=document.getElementById('cat-filter-btn');
  if(catBtn){catBtn.innerHTML=`Catégorie <span style="font-size:10px;transition:transform 0.2s" id="cat-filter-arrow">▾</span>`;catBtn.style.borderColor='';catBtn.style.color='';catBtn.style.background='';}
  document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));chip.classList.add('active');renderGoals();
}));
document.getElementById('btn-new').addEventListener('click',openAdd);

// MILESTONE
function toggleM(gid,mid){
  const g=goals.find(g=>g.id===gid);if(!g)return;
  const m=(g.milestones||[]).find(m=>m.id===mid);if(!m)return;
  const prev=g.progress||0;
  const wasChecked=m.done;
  m.done=!m.done;
  const ms=g.milestones;if(ms.length)g.progress=Math.round(ms.filter(s=>s.done).length/ms.length*100);
  saveGoals();renderGoals();
  if(m.done){
    grantXP(xpForStep(m.diff),(m.diff&&m.diff>1?'Étape rang '+(DIFF_RANK[m.diff]||m.diff)+' accomplie':'Étape accomplie'));
    if((g.progress||0)>=100&&prev<100) grantXP(XP_QUEST,'Quête terminée !');
  } else {
    deductXP(xpForStep(m.diff),'Étape décochée');
    if(prev>=100&&(g.progress||0)<100) deductXP(XP_QUEST,'Quête incomplète');
  }
  checkCelebrate(g,prev);
}
function deleteGoal(id){
  const g=goals.find(g=>g.id===id); if(!g) return;
  // Snapshot without binary data (covers stored in IDB separately)
  const snap={id:g.id,name:g.name,cat:g.cat,icon:g.icon,color:g.color,progress:g.progress,
    priority:g.priority,deadline:g.deadline,desc:g.desc,
    milestones:JSON.parse(JSON.stringify(g.milestones||[])),
    log:JSON.parse(JSON.stringify(g.log||[])),
    created:g.created,deletedAt:todayStr()};
  trash.push(snap); saveTrash();
  goals=goals.filter(g=>g.id!==id); saveGoals(); renderGoals();
  updateTrashDesc();
  showToast('Quête déplacée dans la corbeille ↩');
}
function quickStep(id){const t=prompt('Nom etape :');if(!t?.trim())return;const g=goals.find(g=>g.id===id);if(!g)return;if(!g.milestones)g.milestones=[];g.milestones.push({id:Date.now(),text:t.trim(),done:false});saveGoals();renderGoals();showToast('Etape ajoutee !');}

// MODAL HELPERS
function buildIconGrid(){document.getElementById('f-icons').innerHTML=ICONS.map(ic=>`<div class="icon-opt${ic===selIcon?' selected':''}" data-icon="${ic}">${ic}</div>`).join('');}
function buildColorRow(){document.getElementById('f-colors').innerHTML=PALETTE.map(c=>`<div class="color-opt${c===selColor?' selected':''}" data-color="${c}" style="background:${c}"></div>`).join('');}
function syncPrio(){document.querySelectorAll('#f-prio-row .prio-btn').forEach(b=>{b.classList.remove('on');if(b.dataset.prio===selPrio)b.classList.add('on');});}
function buildMEditor(){document.getElementById('f-milestones').innerHTML=editMilestones.length?editMilestones.map((m,i)=>`<div class="m-edit-row"><span style="font-size:12px;color:var(--fog);width:16px">${i+1}.</span><input class="m-edit-input" value="${m.text}" data-midx="${i}"><div class="m-diff-stars"><span class="m-diff-star${(m.diff||0)>=1?' active':''}" data-star="1" data-midx="${i}" title="Très facile — 15 XP">★</span><span class="m-diff-star${(m.diff||0)>=2?' active':''}" data-star="2" data-midx="${i}" title="Facile — 18 XP">★</span><span class="m-diff-star${(m.diff||0)>=3?' active':''}" data-star="3" data-midx="${i}" title="Moyen — 22 XP">★</span><span class="m-diff-star${(m.diff||0)>=4?' active':''}" data-star="4" data-midx="${i}" title="Difficile — 30 XP">★</span><span class="m-diff-star${(m.diff||0)>=5?' active':''}" data-star="5" data-midx="${i}" title="Très difficile — 45 XP">★</span></div><button class="m-del" data-del="${i}">x</button></div>`).join(''):'<div style="font-size:13px;color:var(--fog);padding:6px 4px">Aucune etape</div>';}
function renderFileList(){document.getElementById('f-file-list').innerHTML=editFiles.map((f,i)=>`<div class="file-item"><span style="font-size:16px">${fileIcon(f.name)}</span><span class="file-name">${f.name}</span><span class="file-size">${fmtSize(f.size)}</span><button class="file-del" data-fidx="${i}">x</button></div>`).join('');}
async function handleFiles(files){for(const f of Array.from(files)){if(f.size>10*1024*1024){showToast('Trop lourd: '+f.name);continue;}const data=await new Promise((res,rej)=>{const r=new FileReader();r.onload=e=>res(e.target.result);r.onerror=rej;r.readAsDataURL(f);});editFiles.push({name:f.name,size:f.size,type:f.type,data});}renderFileList();}

function openAdd(){editingId=null;document.getElementById('goal-modal-title').textContent='Nouvelle quête ⚔️';document.getElementById('f-name').value='';document.getElementById('f-desc').value='';document.getElementById('f-cat').value='Personnel';document.getElementById('f-deadline').value='';document.getElementById('f-prog').value=0;document.getElementById('f-prog-val').textContent='0%';selIcon='🎯';selColor=PALETTE[0];selPrio='med';editMilestones=[];editFiles=[];buildIconGrid();buildColorRow();buildMEditor();syncPrio();renderFileList();openOv('goal-overlay');setTimeout(()=>document.getElementById('f-name').focus(),60);}
function openEdit(id){const g=goals.find(g=>g.id===id);if(!g)return;editingId=id;document.getElementById('goal-modal-title').textContent='Modifier la quête ✦';document.getElementById('f-name').value=g.name||'';document.getElementById('f-desc').value=g.desc||'';document.getElementById('f-cat').value=g.cat||'Personnel';document.getElementById('f-deadline').value=g.deadline||'';const p=Math.min(g.progress||0,100);document.getElementById('f-prog').value=p;document.getElementById('f-prog-val').textContent=p+'%';selIcon=g.icon||'🎯';selColor=g.color||PALETTE[0];selPrio=g.priority||'med';editMilestones=JSON.parse(JSON.stringify(g.milestones||[]));editFiles=JSON.parse(JSON.stringify(g.files||[]));buildIconGrid();buildColorRow();buildMEditor();syncPrio();renderFileList();openOv('goal-overlay');}

document.getElementById('f-icons').addEventListener('click',e=>{const o=e.target.closest('.icon-opt');if(!o)return;selIcon=o.dataset.icon;document.querySelectorAll('.icon-opt').forEach(x=>x.classList.remove('selected'));o.classList.add('selected');});
document.getElementById('f-colors').addEventListener('click',e=>{const o=e.target.closest('.color-opt');if(!o)return;selColor=o.dataset.color;document.querySelectorAll('.color-opt').forEach(x=>x.classList.remove('selected'));o.classList.add('selected');});
document.getElementById('f-prio-row').addEventListener('click',e=>{const b=e.target.closest('.prio-btn');if(!b)return;selPrio=b.dataset.prio;syncPrio();});
document.getElementById('f-milestones').addEventListener('click',e=>{const d=e.target.closest('[data-del]');if(d){editMilestones.splice(+d.dataset.del,1);buildMEditor();return;}const s=e.target.closest('.m-diff-star');if(s){const idx=+s.dataset.midx,star=+s.dataset.star;if(editMilestones[idx])editMilestones[idx].diff=editMilestones[idx].diff===star?0:star;buildMEditor();}});
document.getElementById('f-milestones').addEventListener('input',e=>{const inp=e.target.closest('.m-edit-input');if(inp){const i=+inp.dataset.midx;if(editMilestones[i])editMilestones[i].text=inp.value;}});
document.getElementById('f-prog').addEventListener('input',e=>document.getElementById('f-prog-val').textContent=e.target.value+'%');
function addM(){const inp=document.getElementById('f-new-m'),t=inp.value.trim();if(!t)return;editMilestones.push({id:Date.now(),text:t,done:false});inp.value='';buildMEditor();}
document.getElementById('f-add-m-btn').addEventListener('click',addM);
document.getElementById('f-new-m').addEventListener('keydown',e=>{if(e.key==='Enter')addM();});
document.getElementById('f-upload-zone').addEventListener('click',()=>document.getElementById('f-file-input').click());
document.getElementById('f-file-input').addEventListener('change',e=>{handleFiles(e.target.files);e.target.value='';});
document.getElementById('f-file-list').addEventListener('click',e=>{const b=e.target.closest('.file-del');if(b){editFiles.splice(+b.dataset.fidx,1);renderFileList();}});
document.getElementById('goal-save-btn').addEventListener('click',()=>{
  const name=document.getElementById('f-name').value.trim();if(!name){alert('Le nom est obligatoire.');return;}
  document.querySelectorAll('.m-edit-input').forEach(inp=>{const i=+inp.dataset.midx;if(editMilestones[i])editMilestones[i].text=inp.value.trim()||editMilestones[i].text;});
  const prog=parseInt(document.getElementById('f-prog').value)||0;
  const data={name,desc:document.getElementById('f-desc').value.trim(),cat:document.getElementById('f-cat').value,deadline:document.getElementById('f-deadline').value,progress:prog,icon:selIcon,color:selColor,priority:selPrio,milestones:JSON.parse(JSON.stringify(editMilestones)),files:JSON.parse(JSON.stringify(editFiles))};
  if(editingId){const i=goals.findIndex(g=>g.id===editingId);if(i>=0){const prev=goals[i].progress||0;goals[i]={...goals[i],...data};saveGoals();closeOv('goal-overlay');renderGoals();checkCelebrate(goals[i],prev);}}
  else{data.id=Date.now();data.log=[];data.created=todayStr();goals.push(data);saveGoals();closeOv('goal-overlay');renderGoals();showToast('Quête cree !');}
});
document.getElementById('goal-cancel-btn').addEventListener('click',()=>closeOv('goal-overlay'));

// LOG
function openLog(id){const g=goals.find(g=>g.id===id);if(!g)return;logTargetId=id;document.getElementById('log-goal-name').textContent=(g.icon||'')+' '+g.name;document.getElementById('log-note').value='';const p=Math.min(g.progress||0,100);document.getElementById('log-prog').value=p;document.getElementById('log-prog-val').textContent=p+'%';const logs=[...(g.log||[])].reverse();document.getElementById('log-list').innerHTML=logs.length?logs.map(l=>'<div class="log-entry"><div class="log-dot"></div><span class="log-text">'+l.note+(l.prog!=null?' → '+l.prog+'%':'')+'</span><span class="log-date">'+fmtDate(l.date)+'</span></div>').join(''):'<p style="font-size:13px;color:var(--fog);padding:4px">Aucune entree.</p>';openOv('log-overlay');}
document.getElementById('log-prog').addEventListener('input',e=>document.getElementById('log-prog-val').textContent=e.target.value+'%');
document.getElementById('log-save-btn').addEventListener('click',()=>{
  const note=document.getElementById('log-note').value.trim();if(!note){alert('Ajoutez une note.');return;}
  const prog=parseInt(document.getElementById('log-prog').value)||0;
  const g=goals.find(g=>g.id===logTargetId);if(!g)return;
  const prev=g.progress||0;if(!g.log)g.log=[];g.log.push({date:todayStr(),note,prog});g.progress=prog;
  saveGoals();closeOv('log-overlay');renderGoals();showToast('Note enregistrée !');grantXP(XP_LOG,'Journal mis à jour');checkCelebrate(g,prev);
});
document.getElementById('log-cancel-btn').addEventListener('click',()=>closeOv('log-overlay'));

// VIEWER
function openViewer(id){const g=goals.find(g=>g.id===id);if(!g)return;viewerTargetId=id;document.getElementById('viewer-icon').textContent=g.icon||'📎';document.getElementById('viewer-title').textContent=g.name;renderViewer(g);openOv('viewer-overlay');}
function renderViewer(g){const files=g.files||[];document.getElementById('viewer-list').innerHTML=files.length?files.map((f,i)=>'<div class="viewer-att" data-fidx="'+i+'"><span style="font-size:20px">'+fileIcon(f.name)+'</span><div style="flex:1;min-width:0"><div class="viewer-att-name">'+f.name+'</div><div class="viewer-att-size">'+fmtSize(f.size)+'</div></div><button class="viewer-att-del" data-vdel="'+i+'">x</button></div>').join(''):'<p style="font-size:13px;color:var(--fog)">Aucun fichier.</p>';}
document.getElementById('viewer-list').addEventListener('click',e=>{
  const del=e.target.closest('[data-vdel]');
  if(del){const g=goals.find(g=>g.id===viewerTargetId);if(!g)return;if(!confirm('Abandonner cette quête ?'))return;g.files.splice(+del.dataset.vdel,1);saveGoals();renderViewer(g);renderGoals();showToast('Fichier supprime.');return;}
  const att=e.target.closest('.viewer-att');
  if(att&&!e.target.closest('[data-vdel]')){const g=goals.find(g=>g.id===viewerTargetId);if(!g)return;const f=(g.files||[])[+att.dataset.fidx];if(!f||!f.data)return;const a=document.createElement('a');a.href=f.data;a.download=f.name;a.click();}
});
document.getElementById('viewer-add-btn').addEventListener('click',()=>document.getElementById('viewer-file-input').click());
document.getElementById('viewer-file-input').addEventListener('change',async e=>{
  const g=goals.find(g=>g.id===viewerTargetId);if(!g)return;
  for(const f of Array.from(e.target.files)){if(f.size>10*1024*1024){showToast('Trop lourd: '+f.name);continue;}const data=await new Promise((res,rej)=>{const r=new FileReader();r.onload=ev=>res(ev.target.result);r.onerror=rej;r.readAsDataURL(f);});if(!g.files)g.files=[];g.files.push({name:f.name,size:f.size,type:f.type,data});}
  saveGoals();renderViewer(g);renderGoals();showToast('Fichier ajoute !');e.target.value='';
});
document.getElementById('viewer-close-btn').addEventListener('click',()=>closeOv('viewer-overlay'));
function openCoverPicker(id){const inp=document.createElement('input');inp.type='file';inp.accept='image/*,image/gif';inp.onchange=async e=>{const f=e.target.files[0];if(!f)return;if(f.size>8*1024*1024){showToast('Max 8Mo');return;}const data=await new Promise((res,rej)=>{const r=new FileReader();r.onload=ev=>res(ev.target.result);r.onerror=rej;r.readAsDataURL(f);});const g=goals.find(g=>g.id===id);if(!g)return;g.cover=data;saveGoals();renderGoals();showToast('Couverture ajoutee !');};inp.click();}

// STATS
function renderStats(){
  const total=goals.length,done=goals.filter(g=>(g.progress||0)>=100).length;
  const dS=goals.reduce((s,g)=>s+(g.milestones||[]).filter(m=>m.done).length,0);
  const aS=goals.reduce((s,g)=>s+(g.milestones||[]).length,0);
  const pct=total?Math.round(goals.reduce((s,g)=>s+Math.min(g.progress||0,100),0)/total):0;
  const oldest=goals.reduce((min,g)=>(!min||g.created<min?g.created:min),null);
  const days=oldest?Math.max(1,Math.ceil((new Date()-new Date(oldest+'T00:00:00'))/86400000)):0;
  document.getElementById('st-done').textContent=done;document.getElementById('st-done-sub').textContent=total?Math.round(done/total*100)+'%':'';
  document.getElementById('st-steps').textContent=dS;document.getElementById('st-steps-sub').textContent=aS?dS+'/'+aS:'';
  document.getElementById('st-days').textContent=days;document.getElementById('st-pct').textContent=pct+'%';
  const cats=[...new Set(goals.map(g=>g.cat))];
  killChart('cat');charts.cat=new Chart(document.getElementById('cat-chart'),{type:'doughnut',data:{labels:cats,datasets:[{data:cats.map(c=>goals.filter(g=>g.cat===c).length),backgroundColor:cats.map(c=>CAT_COLORS[c]||'#888'),borderWidth:0,hoverOffset:4}]},options:{responsive:true,maintainAspectRatio:false,cutout:'60%',plugins:{legend:{position:'right',labels:{color:'#8b8ba0',font:{size:11},padding:10}}}}});
  const sorted=[...goals].sort((a,b)=>b.progress-a.progress).slice(0,8);
  document.getElementById('prog-chart-wrap').style.height=Math.max(sorted.length*38+60,120)+'px';
  killChart('prog');charts.prog=new Chart(document.getElementById('prog-chart'),{type:'bar',data:{labels:sorted.map(g=>g.name.length>20?g.name.slice(0,20)+'...':g.name),datasets:[{data:sorted.map(g=>Math.min(g.progress||0,100)),backgroundColor:sorted.map(g=>g.color+'99'),borderColor:sorted.map(g=>g.color),borderWidth:1.5,borderRadius:4}]},options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{max:100,grid:{color:'rgba(255,255,255,0.05)'},ticks:{color:'#5a5a72',font:{size:11},callback:v=>v+'%'}},y:{grid:{display:false},ticks:{color:'#8b8ba0',font:{size:11}}}}}});
  const byDate={};goals.forEach(g=>(g.log||[]).forEach(l=>{byDate[l.date]=(byDate[l.date]||0)+1;}));
  const dates=Object.keys(byDate).sort().slice(-20);
  killChart('act');charts.act=new Chart(document.getElementById('act-chart'),{type:'bar',data:{labels:dates.map(fmtDate),datasets:[{data:dates.map(d=>byDate[d]),backgroundColor:'rgba(232,201,106,0.3)',borderColor:'#e8c96a',borderWidth:1.5,borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{display:false},ticks:{color:'#5a5a72',font:{size:11},maxRotation:45,autoSkip:false}},y:{grid:{color:'rgba(255,255,255,0.05)'},ticks:{color:'#5a5a72',font:{size:11},stepSize:1}}}}});
}

// TIMELINE
function renderTimeline(){
  const sorted=[...goals].sort((a,b)=>new Date(a.deadline||'9999')-new Date(b.deadline||'9999'));
  document.getElementById('tl-content').innerHTML=sorted.map(g=>{
    const dl=daysLeft(g.deadline),done=(g.progress||0)>=100;
    const cls=done?'done':(dl>=0&&dl<=14?'near':'');
    const when=g.deadline?fmtDate(g.deadline)+(done?'':(dl>=0?' · dans '+dl+'j':' · depasse '+Math.abs(dl)+'j')):'Pas de date';
    return '<div class="tl-item"><div class="tl-dot '+cls+'"></div><div class="tl-date">'+when+'</div><div class="tl-name" style="color:'+g.color+'">'+( g.icon||'🎯')+' '+g.name+'</div><div class="tl-meta">'+( g.cat||'')+' · '+(g.progress||0)+'%'+(done?' ✓':'')+'</div></div>';
  }).join('');
}

// MOOD
function hasMoodToday(){return moodLog.some(m=>m.date===todayStr());}
function buildMoodBtns(cid,onSel){
  const row=document.getElementById(cid);if(!row)return;
  row.innerHTML=MOODS.map(m=>'<button class="mood-btn" data-mood="'+m.id+'" style="background:'+m.bg+'" title="'+m.label+'">'+m.svg+'<span class="mood-btn-label">'+m.label+'</span></button>').join('');
  row.querySelectorAll('.mood-btn').forEach(b=>b.addEventListener('click',()=>{row.querySelectorAll('.mood-btn').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');onSel(b.dataset.mood);}));
}
function openMoodPopup(){
  selectedMoodId=null;
  buildMoodBtns('mood-popup-btns',id=>{selectedMoodId=id;const m=MOODS.find(m=>m.id===id);document.getElementById('mood-popup-sel').textContent=m?'→ '+m.label:'';const btn=document.getElementById('mood-save-btn');btn.disabled=false;btn.style.opacity='1';});
  document.getElementById('mood-popup-sel').textContent='';const btn=document.getElementById('mood-save-btn');btn.disabled=true;btn.style.opacity='0.4';
  openOv('mood-overlay');
}
document.getElementById('mood-skip-btn').addEventListener('click',()=>{lsSet('hz_mood_skip',todayStr());closeOv('mood-overlay');});
document.getElementById('mood-save-btn').addEventListener('click',()=>{if(!selectedMoodId)return;moodLog.push({date:todayStr(),mood:selectedMoodId});saveMood();closeOv('mood-overlay');showToast('Humeur enregistree !');applyMoodHP(selectedMoodId);if(currentView==='mood')renderMood();});
function renderMood(){
  const te=moodLog.find(m=>m.date===todayStr());
  const txt=document.getElementById('mood-today-txt');
  if(te){const m=MOODS.find(m=>m.id===te.mood);txt.textContent='Aujourd\'hui : '+(m?m.label:te.mood);txt.style.color=m?m.color:'var(--mist)';}
  else{txt.textContent='Pas encore enregistre aujourd\'hui';txt.style.color='var(--mist)';}
  buildMoodBtns('mood-view-btns',id=>{const idx=moodLog.findIndex(m=>m.date===todayStr());if(idx>=0)moodLog[idx].mood=id;else moodLog.push({date:todayStr(),mood:id});saveMood();showToast('Humeur enregistree !');applyMoodHP(id);renderMood();});
  if(te){setTimeout(()=>{const b=document.querySelector('#mood-view-btns [data-mood="'+te.mood+'"]');if(b)b.classList.add('selected');},50);}
  const last30=[];for(let i=29;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);const ds=d.toISOString().split('T')[0];const e=moodLog.filter(m=>m.date===ds).pop();last30.push({date:ds,mood:e?e.mood:null});}
  const mSc={fire:5,good:4,meh:3,tired:2,block:1};
  const labels=last30.map(d=>new Date(d.date+'T00:00:00').toLocaleDateString('fr-FR',{day:'numeric',month:'short'}));
  const scores=last30.map(d=>d.mood?(mSc[d.mood]||null):null);
  const ptC=last30.map(d=>{if(!d.mood)return'transparent';return MOODS.find(m=>m.id===d.mood)?.color||'#888';});
  killChart('mL');charts.mL=new Chart(document.getElementById('mood-line-chart'),{type:'line',data:{labels,datasets:[{data:scores,borderColor:'#e8c96a',backgroundColor:'rgba(232,201,106,0.08)',pointBackgroundColor:ptC,pointBorderColor:ptC,pointRadius:last30.map(d=>d.mood?6:0),pointHoverRadius:8,tension:0.4,fill:true,spanGaps:true}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>{const m=last30[ctx.dataIndex];return m.mood?' '+(MOODS.find(x=>x.id===m.mood)?.label||m.mood):' -';}}}},scales:{x:{grid:{display:false},ticks:{color:'#5a5a72',font:{size:10},maxRotation:45,autoSkip:true,maxTicksLimit:10}},y:{min:0,max:6,grid:{color:'rgba(255,255,255,0.05)'},ticks:{color:'#5a5a72',font:{size:11},callback:v=>({1:'Bloque',2:'Flemme',3:'Moyen',4:'Bien',5:'En feu'}[v]||'')}}}}});
  const cnt={};MOODS.forEach(m=>cnt[m.id]=0);moodLog.forEach(e=>{if(cnt[e.mood]!==undefined)cnt[e.mood]++;});
  const dL=MOODS.filter(m=>cnt[m.id]>0).map(m=>m.label),dD=MOODS.filter(m=>cnt[m.id]>0).map(m=>cnt[m.id]),dC=MOODS.filter(m=>cnt[m.id]>0).map(m=>m.color);
  killChart('mD');charts.mD=new Chart(document.getElementById('mood-donut-chart'),{type:'doughnut',data:{labels:dL,datasets:[{data:dD,backgroundColor:dC,borderWidth:0,hoverOffset:4}]},options:{responsive:true,maintainAspectRatio:false,cutout:'60%',plugins:{legend:{position:'right',labels:{color:'#8b8ba0',font:{size:11},padding:10}}}}});
  const hist=[...moodLog].reverse().slice(0,30);
  document.getElementById('mood-hist-list').innerHTML=hist.length?hist.map(e=>{const m=MOODS.find(m=>m.id===e.mood)||{label:e.mood,color:'#888',svg:'',bg:'rgba(0,0,0,0.2)'};const dt=new Date(e.date+'T00:00:00');return'<div class="mood-hist-item"><div class="mood-hist-dot" style="background:'+m.bg+'">'+m.svg+'</div><span class="mood-hist-label" style="color:'+m.color+'">'+m.label+'</span><span class="mood-hist-date">'+dt.toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'})+'</span></div>';}).join(''):'<div style="font-size:13px;color:var(--fog);padding:12px 0">Aucune entree pour le moment !</div>';
}
function checkDailyMood(){if(hasMoodToday())return;if(lsGet('hz_mood_skip',null)===todayStr())return;setTimeout(openMoodPopup,1500);}

// ── TRASH SYSTEM ──────────────────────────────────────────
function updateTrashDesc(){
  const d=document.getElementById('trash-count-desc');
  if(!d) return;
  d.textContent = trash.length ? trash.length+' quête'+(trash.length>1?'s':'')+' dans la corbeille' : 'Corbeille vide — aucune quête supprimée';
}
function openTrashModal(){
  renderTrashModal();
  openOv('trash-overlay');
}
function renderTrashModal(){
  const listEl  = document.getElementById('trash-list');
  const emptyEl = document.getElementById('trash-empty');
  const toolbar = document.getElementById('trash-toolbar');
  if(!listEl||!emptyEl) return;

  if(!trash.length){
    listEl.style.display='none';
    emptyEl.style.display='block';
    if(toolbar) toolbar.style.display='none';
    return;
  }
  emptyEl.style.display='none';
  listEl.style.display='flex';
  if(toolbar) toolbar.style.display='flex';

  listEl.innerHTML = trash.map(t=>`
    <div class="trash-item" style="display:flex;align-items:center;gap:12px;padding:10px 16px;
      background:rgba(8,6,20,0.9);border:1px solid rgba(0,245,255,0.07);
      border-left:3px solid ${t.color||'var(--accent)'};border-radius:2px;
      transition:background 0.12s;user-select:none">
      <input type="checkbox" class="trash-chk" data-tid="${t.id}"
        style="accent-color:${t.color||'var(--accent)'};width:15px;height:15px;cursor:pointer;flex-shrink:0">
      <span style="font-size:19px;flex-shrink:0">${t.icon||'🎯'}</span>
      <span style="flex:1;font-size:14px;font-family:'Playfair Display',serif;
        overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
        color:${t.color||'var(--snow)'}">${escTrash(t.name||'—')}</span>
      <span style="font-size:11px;color:var(--fog);flex-shrink:0;letter-spacing:0.3px">${t.cat||''}</span>
      <span style="font-size:10px;color:var(--fog);flex-shrink:0;white-space:nowrap">${fmtDate(t.deletedAt)}</span>
    </div>`).join('');

  function escTrash(s){return(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

  function getSelected(){return[...listEl.querySelectorAll('.trash-chk:checked')].map(c=>c.dataset.tid);}
  function updateBar(){
    const n=getSelected().length;
    const lbl=document.getElementById('trash-sel-lbl');
    const rb=document.getElementById('trash-restore-btn');
    const pb=document.getElementById('trash-perm-btn');
    if(lbl) lbl.textContent=n>0?n+' sélectionnée'+(n>1?'s':''):'';
    if(rb)  rb.style.display=n>0?'':'none';
    if(pb)  pb.style.display=n>0?'':'none';
  }

  const sa=document.getElementById('trash-sel-all');
  if(sa) sa.checked=false;
  if(sa) sa.indeterminate=false;
  if(sa) sa.addEventListener('change',e=>{
    listEl.querySelectorAll('.trash-chk').forEach(c=>c.checked=e.target.checked);
    updateBar();
  });
  listEl.querySelectorAll('.trash-chk').forEach(c=>c.addEventListener('change',()=>{
    const all=listEl.querySelectorAll('.trash-chk');
    const chk=listEl.querySelectorAll('.trash-chk:checked');
    if(sa){sa.checked=all.length===chk.length;sa.indeterminate=chk.length>0&&chk.length<all.length;}
    updateBar();
  }));

  document.getElementById('trash-restore-btn').onclick=()=>{
    const sel=getSelected(); if(!sel.length) return;
    const toRestore=trash.filter(t=>sel.includes(String(t.id)));
    toRestore.forEach(t=>{
      const r={...t};delete r.deletedAt;
      if(!r.files)r.files=[];if(!r.log)r.log=[];
      goals.push(r);
    });
    trash=trash.filter(t=>!sel.includes(String(t.id)));
    saveTrash();saveGoals();renderGoals();renderTrashModal();updateTrashDesc();
    showToast('✓ '+toRestore.length+' quête'+(toRestore.length>1?'s':'')+' restaurée'+(toRestore.length>1?'s':'')+' !');
  };
  document.getElementById('trash-perm-btn').onclick=()=>{
    const sel=getSelected(); if(!sel.length) return;
    if(!confirm('Supprimer définitivement '+sel.length+' quête'+(sel.length>1?'s':'')+' ? Irréversible.')) return;
    trash=trash.filter(t=>!sel.includes(String(t.id)));
    saveTrash();renderTrashModal();updateTrashDesc();
    showToast('Supprimé définitivement.');
  };
  updateBar();
}
document.getElementById('trash-close-btn')?.addEventListener('click',()=>closeOv('trash-overlay'));
document.getElementById('trash-overlay')?.addEventListener('click',e=>{if(e.target===document.getElementById('trash-overlay'))closeOv('trash-overlay');});

// ── CATEGORY FILTER DROPDOWN ───────────────────────────────
var _catDDOpen=false;
function buildCatDropdown(){
  const btn=document.getElementById('cat-filter-btn');
  const dd=document.getElementById('cat-filter-dd');
  const arrow=document.getElementById('cat-filter-arrow');
  if(!btn||!dd) return;

  const cats=[...new Set(goals.map(g=>g.cat).filter(Boolean))].sort();

  dd.innerHTML=[
    `<div class="cat-dd-item" data-cat="" style="padding:8px 14px;font-size:12px;color:${!currentCatFilter?'var(--accent)':'var(--mist)'};cursor:pointer;display:flex;align-items:center;gap:8px;letter-spacing:0.5px;transition:background 0.1s;border-bottom:1px solid rgba(0,245,255,0.08)">
      ${!currentCatFilter?'<span style="color:var(--accent)">✓</span>':'<span style="opacity:0">✓</span>'} Toutes les catégories</div>`,
    ...cats.map(c=>`<div class="cat-dd-item" data-cat="${c}" style="padding:8px 14px;font-size:12px;color:${currentCatFilter===c?'var(--accent)':'var(--mist)'};cursor:pointer;display:flex;align-items:center;gap:8px;letter-spacing:0.5px;transition:background 0.1s">
      ${currentCatFilter===c?`<span style="color:${CAT_COLORS[c]||'var(--accent)'}">✓</span>`:'<span style="opacity:0">✓</span>'}
      <span style="width:8px;height:8px;border-radius:50%;background:${CAT_COLORS[c]||'#888'};display:inline-block;flex-shrink:0"></span>
      ${c}</div>`)
  ].join('');

  dd.querySelectorAll('.cat-dd-item').forEach(el=>{
    el.addEventListener('mouseenter',()=>el.style.background='rgba(0,245,255,0.06)');
    el.addEventListener('mouseleave',()=>el.style.background='');
    el.addEventListener('click',e=>{
      e.stopPropagation();
      currentCatFilter=el.dataset.cat||null;
      currentFilter='all';
      document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));
      document.querySelector('.filter-chip[data-filter="all"]')?.classList.add('active');
      // Update button label
      btn.innerHTML=currentCatFilter
        ?`<span style="width:8px;height:8px;border-radius:50%;background:${CAT_COLORS[currentCatFilter]||'var(--accent)'};display:inline-block;margin-right:2px"></span>${currentCatFilter} <span style="font-size:10px;transition:transform 0.2s;transform:rotate(180deg)" id="cat-filter-arrow">▾</span>`
        :`Catégorie <span style="font-size:10px;transition:transform 0.2s" id="cat-filter-arrow">▾</span>`;
      // Style the button when filter active
      btn.style.borderColor=currentCatFilter?'rgba(0,245,255,0.5)':'';
      btn.style.color=currentCatFilter?'var(--accent)':'';
      btn.style.background=currentCatFilter?'rgba(0,245,255,0.08)':'';
      closeCatDD();
      renderGoals();
    });
  });
}
function openCatDD(){
  const dd=document.getElementById('cat-filter-dd');
  const arrow=document.getElementById('cat-filter-arrow');
  if(!dd) return;
  _catDDOpen=true;
  buildCatDropdown();
  dd.style.display='block';
  if(arrow) arrow.style.transform='rotate(180deg)';
}
function closeCatDD(){
  const dd=document.getElementById('cat-filter-dd');
  const arrow=document.getElementById('cat-filter-arrow');
  if(!dd) return;
  _catDDOpen=false;
  dd.style.display='none';
  if(arrow) arrow.style.transform='';
}
document.getElementById('cat-filter-btn')?.addEventListener('click',e=>{e.stopPropagation();_catDDOpen?closeCatDD():openCatDD();});
document.addEventListener('click',()=>{ if(_catDDOpen) closeCatDD(); });
document.getElementById('cat-filter-dd')?.addEventListener('click',e=>e.stopPropagation());

// CELEBRATE
function checkCelebrate(g,prev){if(prev<100&&(g.progress||0)>=100)celebrate(g);}
function spawnConf(parent,colors,lp,delay){const el=document.createElement('div');el.className='confetti-piece';const s=5+Math.random()*12,rect=Math.random()>0.5;const w=rect?s*(0.4+Math.random()):s,h=rect?s*0.4:s;el.style.cssText='position:absolute;left:'+lp+'%;top:-20px;width:'+w+'px;height:'+h+'px;background:'+colors[Math.floor(Math.random()*colors.length)]+';border-radius:'+(rect?'2px':'50%')+';animation:confettiFall '+(2+Math.random()*3)+'s linear '+delay+'s forwards';parent.appendChild(el);}
function celebrate(g){
  const ov=document.getElementById('cel-overlay');ov.style.display='block';ov.innerHTML='';
  const canvas=document.createElement('canvas');canvas.style.cssText='position:absolute;inset:0;width:100%;height:100%;pointer-events:none';canvas.width=window.innerWidth;canvas.height=window.innerHeight;ov.appendChild(canvas);
  const ctx=canvas.getContext('2d');
  const fwC=[g.color,'#e8c96a','#5ec98a','#6aa8e8','#e8706a','#b06ae8','#6ae8d4','#fff','#ffdd57','#ff6b6b'];
  let parts=[],rockets=[],animId;
  function mkRocket(){const x=canvas.width*(0.1+Math.random()*0.8),tY=canvas.height*(0.1+Math.random()*0.45),color=fwC[Math.floor(Math.random()*fwC.length)];rockets.push({x,y:canvas.height,tY,vy:-12-Math.random()*8,color,trail:[]});}
  [0,300,600,900,1200,1500,1800,2100,2400,2700,3000,3300].forEach((t,i)=>{setTimeout(()=>{if(ov.style.display!=='none'){mkRocket();if(i%2===0&&i<8)setTimeout(mkRocket,150);}},t);});
  function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    rockets=rockets.filter(r=>{r.trail.push({x:r.x,y:r.y});if(r.trail.length>8)r.trail.shift();r.trail.forEach((pt,i)=>{ctx.beginPath();ctx.arc(pt.x,pt.y,2,0,Math.PI*2);ctx.fillStyle=r.color+Math.floor((i/r.trail.length)*99).toString(16).padStart(2,'0');ctx.fill();});ctx.beginPath();ctx.arc(r.x,r.y,3,0,Math.PI*2);ctx.fillStyle='#fff';ctx.fill();r.y+=r.vy;r.vy*=0.97;if(r.y<=r.tY){const cnt=55+Math.floor(Math.random()*30);for(let i=0;i<cnt;i++){const ang=(Math.PI*2/cnt)*i+Math.random()*0.3,spd=2+Math.random()*5;parts.push({x:r.x,y:r.y,vx:Math.cos(ang)*spd,vy:Math.sin(ang)*spd,alpha:1,size:2+Math.random()*3,color:r.color,trail:[]});}return false;}return true;});
    parts=parts.filter(p=>{p.trail.push({x:p.x,y:p.y});if(p.trail.length>4)p.trail.shift();p.trail.forEach((pt,i)=>{ctx.beginPath();ctx.arc(pt.x,pt.y,p.size*(i/p.trail.length)*0.4,0,Math.PI*2);ctx.fillStyle=p.color+Math.floor(p.alpha*(i/p.trail.length)*100).toString(16).padStart(2,'0');ctx.fill();});ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fillStyle=p.color+Math.floor(p.alpha*255).toString(16).padStart(2,'0');ctx.fill();p.x+=p.vx;p.y+=p.vy;p.vy+=0.12;p.vx*=0.97;p.alpha-=0.018;return p.alpha>0;});
    animId=requestAnimationFrame(loop);
  }
  loop();
  const cd=document.createElement('div');cd.style.cssText='position:absolute;inset:0;pointer-events:none';ov.appendChild(cd);
  for(let i=0;i<120;i++)spawnConf(cd,fwC,Math.random()*100,Math.random()*0.5);
  for(let i=0;i<100;i++)spawnConf(cd,fwC,Math.random()*100,0.5+Math.random());
  for(let i=0;i<80;i++)spawnConf(cd,fwC,Math.random()*100,1.5+Math.random());
  setTimeout(()=>{cancelAnimationFrame(animId);ov.style.display='none';ov.innerHTML='';},6500);
  document.getElementById('cel-icon').textContent=g.icon||'🏆';
  document.getElementById('cel-title').textContent=g.name;
  openOv('cel-modal');
}
document.querySelectorAll('.cel-close-btn').forEach(btn=>btn.addEventListener('click',()=>{closeOv('cel-modal');const ov=document.getElementById('cel-overlay');ov.style.display='none';ov.innerHTML='';}));

// OVERLAY
function openOv(id){document.getElementById(id).classList.add('open');}
function closeOv(id){document.getElementById(id).classList.remove('open');}
['goal-overlay','log-overlay','viewer-overlay','bg-overlay-modal','mood-overlay','cel-modal'].forEach(id=>{document.getElementById(id).addEventListener('click',e=>{if(e.target===document.getElementById(id))closeOv(id);});});

// MUSIC PLAYER
function randomPL(){let n;do{n=Math.floor(Math.random()*PLAYLISTS.length);}while(n===curPL&&PLAYLISTS.length>1);return n;}
function loadPL(idx,autoplay){
  curPL=idx;widgetReady=false;scWidget=null;
  document.getElementById('player-title').textContent=PLAYLISTS[idx].name;
  document.querySelectorAll('.pl-chip').forEach((c,i)=>c.classList.toggle('active',i===idx));
  const frame=document.getElementById('sc-frame');
  const url=PLAYLISTS[idx].url.replace('auto_play=false','auto_play='+(autoplay?'true':'false'));
  frame.src=url;
  frame.onload=()=>{
    if(!window.SC)return;
    scWidget=SC.Widget(frame);
    scWidget.bind(SC.Widget.Events.READY,()=>{
      widgetReady=true;
      scWidget.setVolume(+document.getElementById('player-vol').value);
      if(autoplay){scWidget.play();isPlaying=true;updPlayBtn();}
    });
    scWidget.bind(SC.Widget.Events.PLAY,()=>{isPlaying=true;updPlayBtn();scWidget.getCurrentSound(s=>{if(s&&s.title)document.getElementById('player-title').textContent=s.title;});});
    scWidget.bind(SC.Widget.Events.PAUSE,()=>{isPlaying=false;updPlayBtn();});
    scWidget.bind(SC.Widget.Events.FINISH,()=>{loadPL(shuffleOn?randomPL():(curPL+1)%PLAYLISTS.length,true);});
  };
}
function updPlayBtn(){
  const btn=document.getElementById('player-play-btn');
  if(!btn) return;
  btn.innerHTML=isPlaying
    ?'<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="2" y="1" width="4" height="12" rx="1"/><rect x="8" y="1" width="4" height="12" rx="1"/></svg>'
    :'<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><polygon points="2,1 13,7 2,13"/></svg>';
}
function skipTrack(dir){
  if(!scWidget||!widgetReady)return;
  if(shuffleOn){scWidget.getSounds(sounds=>{if(!sounds||!sounds.length)return;scWidget.getCurrentSoundIndex(idx=>{let n;do{n=Math.floor(Math.random()*sounds.length);}while(n===idx&&sounds.length>1);scWidget.skip(n);setTimeout(()=>{scWidget.play();isPlaying=true;updPlayBtn();},300);});});}
  else{if(dir===1)scWidget.next();else scWidget.prev();setTimeout(()=>{scWidget.play();isPlaying=true;updPlayBtn();},300);}
}
function toggleExpand(){
  playerExpanded=!playerExpanded;
  document.getElementById('music-player').classList.toggle('expanded',playerExpanded);
  document.getElementById('expand-icon').innerHTML=playerExpanded
    ?'<polyline points="1,7 6,1 11,7"/>'
    :'<polyline points="1,1 6,7 11,1"/>';
}
function fmtMs(ms){
  const s=Math.floor(ms/1000);
  return Math.floor(s/60)+':'+(s%60).toString().padStart(2,'0');
}
function initPlayer(){
  const sel=document.getElementById('playlist-sel');
  sel.innerHTML=PLAYLISTS.map((p,i)=>`<button class="pl-chip${i===0?' active':''}" data-pl="${i}">${p.name}</button>`).join('');
  sel.querySelectorAll('.pl-chip').forEach(btn=>btn.addEventListener('click',e=>{e.stopPropagation();loadPL(+btn.dataset.pl,false);}));
  loadPL(0,false);
  document.getElementById('player-play-btn').addEventListener('click',e=>{
    e.stopPropagation();
    if(!scWidget || !widgetReady){
      loadPL(curPL, true);
      return;
    }
    // Ask widget directly what state it's in — don't trust our local variable
    scWidget.isPaused(paused=>{
      if(paused){
        scWidget.play();
        isPlaying=true;
      } else {
        scWidget.pause();
        isPlaying=false;
      }
      updPlayBtn();
    });
  });
  document.getElementById('btn-prev-track').addEventListener('click',e=>{e.stopPropagation();skipTrack(-1);});
  document.getElementById('btn-next-track').addEventListener('click',e=>{e.stopPropagation();skipTrack(1);});
  document.getElementById('btn-prev-pl').addEventListener('click',e=>{e.stopPropagation();loadPL(shuffleOn?randomPL():(curPL-1+PLAYLISTS.length)%PLAYLISTS.length,isPlaying);});
  document.getElementById('btn-next-pl').addEventListener('click',e=>{e.stopPropagation();loadPL(shuffleOn?randomPL():(curPL+1)%PLAYLISTS.length,isPlaying);});
  document.getElementById('btn-shuffle').addEventListener('click',e=>{
    e.stopPropagation();shuffleOn=!shuffleOn;
    const btn=document.getElementById('btn-shuffle');
    btn.classList.toggle('shuffle-on',shuffleOn);
    showToast(shuffleOn?'Aleatoire active':'Aleatoire desactive');
  });
  document.getElementById('player-vol').addEventListener('input',e=>{document.getElementById('player-vol-val').textContent=e.target.value+'%';if(scWidget&&widgetReady)scWidget.setVolume(+e.target.value);});
  document.getElementById('btn-expand').addEventListener('click',e=>{e.stopPropagation();toggleExpand();});

  // Sync button + title + progress with widget every second
  setInterval(()=>{
    if(scWidget && widgetReady){
      // Sync play/pause button
      scWidget.isPaused(paused=>{
        const shouldBePlaying = !paused;
        if(shouldBePlaying !== isPlaying){
          isPlaying = shouldBePlaying;
          updPlayBtn();
        }
      });
      // Sync title
      scWidget.getCurrentSound(s=>{
        if(s && s.title){
          const el = document.getElementById('player-title');
          if(el && el.textContent !== s.title) el.textContent = s.title;
        }
      });
      // Sync progress bar
      scWidget.getPosition(pos=>{
        scWidget.getDuration(dur=>{
          if(!dur) return;
          const pct = Math.min((pos/dur)*100, 100);
          const fill = document.getElementById('music-progress-fill');
          const cur = document.getElementById('music-cur');
          const durEl = document.getElementById('music-dur');
          if(fill) fill.style.width = pct + '%';
          if(cur) cur.textContent = fmtMs(pos);
          if(durEl) durEl.textContent = fmtMs(dur);
        });
      });
    }
  }, 500);

  // Click on progress bar to seek
  document.getElementById('music-progress-track').addEventListener('click', e => {
    if(!scWidget || !widgetReady) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    scWidget.getDuration(dur => {
      if(dur) scWidget.seekTo(Math.floor(pct * dur));
    });
  });
  document.getElementById('player-bar').addEventListener('click',toggleExpand);
}
const _sc=document.createElement('script');_sc.src='https://w.soundcloud.com/player/api.js';_sc.onload=initPlayer;document.head.appendChild(_sc);

// NEON COLOR SYSTEM
const NEON_COLORS = [{"name": "Cyan", "color": "#00f5ff", "glow": "rgba(0,245,255,0.5)"}, {"name": "Violet", "color": "#b06ae8", "glow": "rgba(176,106,232,0.5)"}, {"name": "Vert", "color": "#00ff9d", "glow": "rgba(0,255,157,0.5)"}, {"name": "Rose", "color": "#ff00c8", "glow": "rgba(255,0,200,0.5)"}, {"name": "Rouge", "color": "#ff2d6b", "glow": "rgba(255,45,107,0.5)"}, {"name": "Or", "color": "#e8c96a", "glow": "rgba(232,201,106,0.5)"}, {"name": "Orange", "color": "#ff8c00", "glow": "rgba(255,140,0,0.5)"}, {"name": "Blanc", "color": "#e8e0ff", "glow": "rgba(232,224,255,0.4)"}, {"name": "Jaune", "color": "#fff000", "glow": "rgba(255,240,0,0.5)"}, {"name": "Turquoise", "color": "#00e5cc", "glow": "rgba(0,229,204,0.5)"}];
let currentAccent = lsGet('hz_accent', '#00f5ff');
let tempAccent = currentAccent;

function applyAccent(color) {
  currentAccent = color;
  const root = document.documentElement;
  root.style.setProperty('--accent', color);
  // Compute accent2 (darker) and accent-dim
  root.style.setProperty('--accent2', color);
  root.style.setProperty('--accent-dim', hexToRgba(color, 0.08));
  // Update neon glow vars
  root.style.setProperty('--neon-glow', '0 0 8px '+hexToRgba(color,0.7)+',0 0 20px '+hexToRgba(color,0.35));
  // Update color picker button
  const btn = document.getElementById('btn-color');
  if(btn){ btn.style.background=color; btn.style.boxShadow='0 0 10px '+hexToRgba(color,0.7)+',0 0 20px '+hexToRgba(color,0.3); }
  lsSet('hz_accent', color);
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return 'rgba('+r+','+g+','+b+','+alpha+')';
}

function buildNeonColors() {
  const grid = document.getElementById('neon-colors');
  if(!grid) return;
  grid.innerHTML = NEON_COLORS.map(c =>
    '<div title="'+c.name+'" data-color="'+c.color+'" style="width:100%;aspect-ratio:1;border-radius:50%;background:'+c.color+';cursor:pointer;border:2px solid '+(c.color===tempAccent?'#fff':'transparent')+';box-shadow:0 0 10px '+c.glow+';transition:all 0.2s" class="neon-swatch"></div>'
  ).join('');
  grid.querySelectorAll('.neon-swatch').forEach(sw => {
    sw.addEventListener('click', () => {
      tempAccent = sw.dataset.color;
      updateColorPreview(tempAccent);
      buildNeonColors();
      document.getElementById('custom-color').value = tempAccent;
      document.getElementById('custom-color-val').textContent = tempAccent;
    });
  });
}

function updateColorPreview(color) {
  const preview = document.getElementById('color-preview');
  const pct = document.getElementById('preview-pct');
  if(preview) preview.style.borderColor = color;
  if(pct) { pct.style.color = color; pct.style.textShadow = '0 0 10px '+color; }
  const accent = preview?.querySelector('div');
  if(accent) { accent.style.borderColor = color; accent.style.background = hexToRgba(color, 0.08); }
  const title = preview?.querySelector('div div');
  if(title) { title.style.color = color; title.style.textShadow = '0 0 8px '+color; }
}

document.getElementById('btn-color').addEventListener('click', () => {
  tempAccent = currentAccent;
  buildNeonColors();
  updateColorPreview(tempAccent);
  document.getElementById('custom-color').value = tempAccent;
  document.getElementById('custom-color-val').textContent = tempAccent;
  openOv('color-overlay');
});
document.getElementById('custom-color').addEventListener('input', e => {
  document.getElementById('custom-color-val').textContent = e.target.value;
  tempAccent = e.target.value;
  updateColorPreview(tempAccent);
  buildNeonColors();
});
document.getElementById('apply-custom-color').addEventListener('click', () => {
  tempAccent = document.getElementById('custom-color').value;
  updateColorPreview(tempAccent);
  buildNeonColors();
});
document.getElementById('color-save-btn').addEventListener('click', () => {
  applyAccent(tempAccent);
  closeOv('color-overlay');
  showToast('Couleur appliquée !');
});
document.getElementById('color-cancel-btn').addEventListener('click', () => closeOv('color-overlay'));
document.getElementById('color-overlay').addEventListener('click', e => { if(e.target===document.getElementById('color-overlay')) closeOv('color-overlay'); });

// THEME
let isLight = lsGet('hz_theme', false);
function applyTheme(light) {
  isLight = light;
  document.body.classList.toggle('light', light);
  document.getElementById('btn-theme').textContent = light ? '☀️' : '🌙';
  lsSet('hz_theme', light);
}
document.getElementById('btn-theme').addEventListener('click', () => applyTheme(!isLight));

// CARD SIZE
let cardSize = lsGet('hz_card_size', 'normal');
function applyCardSize(size) {
  cardSize = size;
  const grid = document.getElementById('goals-grid');
  grid.classList.remove('cards-small','cards-large');
  if(size === 'small') grid.classList.add('cards-small');
  if(size === 'large') grid.classList.add('cards-large');
  lsSet('hz_card_size', size);
  // Update button styles
  document.querySelectorAll('.size-btn').forEach(b => {
    const on = b.dataset.size === size;
    b.style.background = on ? 'var(--accent)' : '';
    b.style.color = on ? 'var(--night)' : '';
    b.style.borderColor = on ? 'transparent' : '';
  });
  // Recalculate positions
  if(goals.length) { placeCards(filteredGoals()); updateGridH(); }
}
document.querySelectorAll('.size-btn').forEach(b => {
  b.addEventListener('click', e => { e.stopPropagation(); applyCardSize(b.dataset.size); });
});

// INIT
loadMoodLog();
loadTrash();
document.getElementById('btn-open-trash')?.addEventListener('click', openTrashModal);
Promise.all([loadGoals().catch(()=>seedGoals()),loadBg().catch(()=>({type:'none',value:'',opacity:82,blur:0}))]).then(([g,bg])=>{
  goals=g;bgSettings=bg;tempBg={...bg};applyBg(bg);applyTheme(isLight);applyCardSize(cardSize);applyAccent(currentAccent);navigate('accueil');updateSidebar();updateCatNav();checkDailyMood();loadHP();updateHPBar();
}).catch(()=>{goals=seedGoals();applyTheme(isLight);applyCardSize(cardSize);applyAccent(currentAccent);navigate('accueil');loadHP();updateHPBar();});

function loadMoodLog(){moodLog=lsGet('hz_mood',[]);}

// ── XP SYSTEM ──────────────────────────────────────────────
const XP_STEP = 15;   // Étape cochée
const XP_QUEST = 50;  // Quête terminée
const XP_LOG = 5;     // Journal mis à jour

// ── Difficulty-based XP (1★=15 · 2★=18 · 3★=22 · 4★=30 · 5★=45) ──
const XP_BY_DIFF = {1: 15, 2: 18, 3: 22, 4: 30, 5: 45};
function xpForStep(diff){ return XP_BY_DIFF[+diff] || XP_STEP; }
const DIFF_LABEL = {1:'Très facile',2:'Facile',3:'Moyen',4:'Difficile',5:'Très difficile'};
const DIFF_RANK  = {1:'C',2:'B',3:'A',4:'S',5:'SS'};
const DIFF_RANK_COLORS = {1:'#8b8ba0',2:'#6aa8e8',3:'#e8c96a',4:'#ff8c42',5:'#ff2d6b'};

const LVL_NAMES = ['','Novice','Apprenti','Éclaireur','Aventurier','Chasseur','Guerrier','Champion','Héros','Légende','Maître','Grand Maître','Mythique','Divin','Transcendant','ULTIME ⭐'];
const LVL_SUBS  = ['','Commence ton voyage.','Tu apprends vite !','Le chemin s\'ouvre.','Chaque étape forge ta légende.','Tu n\'es plus le même.','Rien ne peut t\'arrêter.','Tu deviens redoutable.','Le titre de Héros est mérité.','Ta légende grandit.','La maîtrise est en toi.','Le chemin était la récompense.','Au-delà des limites.','Les dieux te regardent.','Transcendant — et pourtant tu avances.','Tu as atteint l\'ULTIME.'];

let xpData = lsGet('hz_xp', {total:0});

function xpForLvl(l){ return Math.floor(100 * Math.pow(1.3, l-1)); }
function totalForLvl(l){ let t=0; for(let i=1;i<l;i++) t+=xpForLvl(i); return t; }
function curLvl(xp){ let l=1; while(l<15 && xp>=totalForLvl(l+1)) l++; return l; }
function lvlName(l){ return LVL_NAMES[Math.min(l,15)] || 'ULTIME ⭐'; }
function xpProg(xp){
  const l=curLvl(xp), base=totalForLvl(l), need=xpForLvl(l), got=xp-base;
  return {l, got, need, pct: Math.min(Math.round(got/need*100), 100)};
}
function saveXP(){ lsSet('hz_xp', xpData); }

function applyLvlTheme(l){
  // Remove all xp level classes
  document.body.className = document.body.className.replace(/\bxp-lvl-\d+\b/g,'').trim();
  if(l>=2) document.body.classList.add('xp-lvl-'+Math.min(l,15));
}

function updateXPBar(){
  const {l, got, need, pct} = xpProg(xpData.total);
  // Sidebar
  const lvlEl=document.getElementById('xp-lvl');
  const titleEl=document.getElementById('xp-title');
  const totalEl=document.getElementById('xp-total');
  const fillEl=document.getElementById('xp-fill');
  const nextEl=document.getElementById('xp-next');
  if(lvlEl) lvlEl.textContent=l;
  if(titleEl) titleEl.textContent=lvlName(l);
  if(totalEl) totalEl.textContent=xpData.total+' XP';
  if(fillEl) fillEl.style.width=pct+'%';
  if(nextEl) nextEl.textContent=(need-got)+' XP → lvl '+(l<15?l+1:'MAX');
  // Topbar banner
  const bLvl=document.getElementById('xp-banner-lvl');
  const bTitle=document.getElementById('xp-banner-title');
  const bXp=document.getElementById('xp-banner-xp');
  const bFill=document.getElementById('xp-banner-fill');
  if(bLvl) bLvl.textContent=l;
  if(bTitle) bTitle.textContent=lvlName(l);
  if(bXp) bXp.textContent=pct+'%  ·  '+(need-got)+' XP → lv'+(l<15?l+1:'MAX');
  if(bFill) bFill.style.width=pct+'%';
  applyLvlTheme(l);
}

function showXpToast(msg){
  document.querySelectorAll('.xp-toast').forEach(t=>t.remove());
  const t=document.createElement('div');
  t.className='xp-toast';
  t.textContent=msg;
  document.body.appendChild(t);
  setTimeout(()=>{
    t.style.transition='opacity 0.6s, transform 0.6s';
    t.style.opacity='0';
    t.style.transform='translateX(60px)';
    setTimeout(()=>t.remove(),600);
  }, 2400);
}

function grantXP(amount, reason){
  const prev = curLvl(xpData.total);
  xpData.total += amount;
  saveXP();
  updateXPBar();
  showXpToast('⚡ +'+amount+' XP  ·  '+reason);
  const newLvl = curLvl(xpData.total);
  if(newLvl > prev) setTimeout(()=>doLevelUp(newLvl), 900);
}

function deductXP(amount, reason){
  xpData.total = Math.max(0, xpData.total - amount);
  saveXP();
  updateXPBar();
  showXpToast('▼ −'+amount+' XP  ·  '+reason);
}

function doLevelUp(l){
  document.getElementById('lu-num').textContent = l;
  document.getElementById('lu-name').textContent = lvlName(l);
  document.getElementById('lu-sub').textContent = LVL_SUBS[Math.min(l,15)] || 'Continue comme ça !';
  document.getElementById('lvlup').classList.add('open');
}
document.getElementById('lu-close').addEventListener('click',()=>document.getElementById('lvlup').classList.remove('open'));

updateXPBar();
// ── HP SYSTEM ──────────────────────────────────────────────
const HP_MAX = 100;
const MOOD_HP_MALUS = { fire:0, good:0, meh:-5, tired:-7, block:-10 };
const EXIT_QUESTIONS = [
  "T'as farmé un peu aujourd'hui ?",
  "T'as avancé dans tes quêtes aujourd'hui ?",
  "T'as bossé sur tes objectifs aujourd'hui ?",
  "T'as accompli quelque chose d'important aujourd'hui ?",
  "Tu quittes l'aventure... t'as progressé aujourd'hui ?",
  "T'as été productif aujourd'hui, aventurier ?",
];

let hpState = { current:100, lastDay:'', exitOuiDate:'', moodMalusDate:'', moodMalusVal:0 };
let _exitAnswered = false;

function loadHP(){
  hpState = lsGet('hz_hp', {current:100, lastDay:'', nonCount:0, moodMalusDate:'', moodMalusVal:0});
  if(!hpState.nonCount) hpState.nonCount = 0;
  const today = todayStr();
  if(hpState.lastDay !== today){
    hpState.current = Math.max(0, HP_MAX - (hpState.nonCount * 10));
    hpState.lastDay = today;
    hpState.moodMalusDate = '';
    hpState.moodMalusVal = 0;
    if(hpState.current <= 0){
      setTimeout(()=>{
        deductXP(30, 'PV à 0 — Journée perdue !');
        showToast('💀 0 PV — −30 XP !');
      }, 1500);
    }
  }
  // ONE-TIME FIX : remet les PV à 100 si bloqué à 0
  if(hpState.current <= 0 && !hpState._fixApplied){
    hpState.current = 100;
    hpState.nonCount = 0;
    hpState._fixApplied = true;
  }
  saveHP();
}
function saveHP(){ lsSet('hz_hp', hpState); }

function hpColor(pct){
  if(pct >= 70) return 'hsl(120,100%,50%)'; // vert
  if(pct >= 40) return 'hsl(55,100%,50%)';  // jaune
  return 'hsl(0,100%,50%)';                  // rouge
}

function updateHPBar(){
  const hp  = hpState ? hpState.current : HP_MAX;
  const pct = Math.max(0, Math.min(100, hp));
  const MAX_W = 141; // SVG units: bar from x=75 to x=216
  const clipW = Math.round(MAX_W * pct / 100);
  const color = hpColor(pct);

  // Sidebar bar
  const clipRect = document.getElementById('hp-clip-rect');
  const fill     = document.getElementById('hp-bar-fill');
  const glow     = document.getElementById('hp-bar-glow');
  const valEl    = document.getElementById('hp-val');
  const statusEl = document.getElementById('hp-status');
  const widget   = document.getElementById('hp-widget');

  if(clipRect) clipRect.setAttribute('width', String(clipW));
  if(fill)  { fill.setAttribute('fill', color); fill.setAttribute('opacity','0.9'); }
  if(glow)  { glow.setAttribute('fill', color); glow.setAttribute('opacity','0.35'); glow.style.filter=`blur(3px)`; }
  if(valEl) valEl.textContent = Math.round(hp);
  if(statusEl) { statusEl.textContent='●'; statusEl.style.color=color; statusEl.style.textShadow=`0 0 6px ${color}`; }

  const valDisp = document.querySelector('.hp-val-display');
  if(valDisp) valDisp.style.color = color;

  if(widget){
    widget.classList.remove('hp-critical','hp-low','hp-ok');
    if(pct<=20)       widget.classList.add('hp-critical');
    else if(pct<=50)  widget.classList.add('hp-low');
    else              widget.classList.add('hp-ok');
  }

  // Sync exit popup preview bar if open
  const exitClip = document.getElementById('exit-hp-clip-rect');
  const exitFill = document.getElementById('exit-hp-fill');
  const exitGlow = document.getElementById('exit-hp-glow');
  const exitVal  = document.getElementById('exit-hp-val');
  if(exitClip) exitClip.setAttribute('width', String(clipW));
  if(exitFill) { exitFill.setAttribute('fill',color); }
  if(exitGlow) { exitGlow.setAttribute('fill',color); }
  if(exitVal)  exitVal.textContent = Math.round(hp);
}

function applyMoodHP(moodId){
  const today = todayStr();
  const newMalus = MOOD_HP_MALUS[moodId] || 0;
  if(hpState.moodMalusDate === today && hpState.moodMalusVal !== 0){
    hpState.current = Math.min(HP_MAX, hpState.current - hpState.moodMalusVal);
  }
  hpState.current = Math.max(0, Math.min(HP_MAX, hpState.current + newMalus));
  hpState.moodMalusVal  = newMalus;
  hpState.moodMalusDate = today;
  saveHP(); updateHPBar();
  if(newMalus < 0){
    const labels = { meh:'Humeur moyenne', tired:'Flemme détectée...', block:'Bloqué — courage !' };
    setTimeout(()=>showToast('💔 '+Math.abs(newMalus)+' PV perdus · '+(labels[moodId]||'')), 400);
  }
}

function checkHPZero(){
  if(hpState.current <= 0){
    setTimeout(()=>{
      deductXP(30, 'PV à 0 — Journée perdue !');
      showToast('💀 0 PV — −30 XP !');
    }, 500);
  }
}

// Exit popup
// ── EXIT HELPERS ────────────────────────────────────────────
function _escHtmlExit(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// Returns the first uncompleted milestone of a random active quest, or null
function getMicroAction(){
  var active = (typeof goals !== 'undefined' ? goals : []).filter(function(g){
    return (g.progress||0) < 100 && (g.milestones||[]).some(function(m){ return !m.done; });
  });
  if(!active.length) return null;
  var quest = active[Math.floor(Math.random() * active.length)];
  var task  = (quest.milestones||[]).find(function(m){ return !m.done; });
  return task ? { questName: quest.name, questIcon: quest.icon||'🎯', taskText: task.text, questId: quest.id, taskId: task.id } : null;
}

// Smoothly animate the exit-popup HP bar from `from` to `to` (0-100 scale)
function animateHPBar(from, to, callback){
  var duration = 900, startT = performance.now(), MAX_W = 141;
  function step(now){
    var t = Math.min(1, (now - startT) / duration);
    var eased = t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
    var cur   = from + (to - from) * eased;
    var pct   = Math.max(0, Math.min(100, cur));
    var clipW = Math.round(MAX_W * pct / 100);
    var color = hpColor(pct);
    var clipR = document.getElementById('exit-hp-clip-rect');
    var fill  = document.getElementById('exit-hp-fill');
    var glow  = document.getElementById('exit-hp-glow');
    var val   = document.getElementById('exit-hp-val');
    if(clipR) clipR.setAttribute('width', String(clipW));
    if(fill)  fill.setAttribute('fill', color);
    if(glow)  glow.setAttribute('fill', color);
    if(val)   val.textContent = Math.round(cur);
    if(t < 1){ requestAnimationFrame(step); } else if(callback){ callback(); }
  }
  requestAnimationFrame(step);
}

function showExitPopup(){
  const ov = document.getElementById('exit-overlay'); if(!ov) return;
  const q  = EXIT_QUESTIONS[Math.floor(Math.random()*EXIT_QUESTIONS.length)];
  const qEl = document.getElementById('exit-question');
  if(qEl) qEl.textContent = q;
  // Reset all steps to initial state
  const btns    = document.getElementById('exit-btns');
  const microDiv = document.getElementById('exit-microaction');
  const ans     = document.getElementById('exit-answered');
  const hint    = document.getElementById('exit-hint');
  if(btns)     btns.style.display = 'flex';
  if(microDiv) microDiv.style.display = 'none';
  if(ans)      { ans.style.display = 'none'; ans.innerHTML = ''; }
  if(hint)     hint.style.display = 'block';
  updateHPBar(); // sync preview bar
  ov.style.display = 'flex';
}
function hideExitPopup(){
  const ov=document.getElementById('exit-overlay'); if(ov) ov.style.display='none';
}

// Bind exit popup buttons
(function bindExitBtns(){
  const ouiBtn = document.getElementById('exit-oui');
  const nonBtn = document.getElementById('exit-non');
  if(!ouiBtn||!nonBtn) return;

  // ── OUI ────────────────────────────────────────────────────
  ouiBtn.addEventListener('click', ()=>{
    // Remet les PV à 100, efface les malus, +5 XP
    hpState.nonCount = 0;
    hpState.current  = HP_MAX;
    saveHP(); updateHPBar();
    grantXP(5, 'Journée accomplie !');
    _exitAnswered = true;
    const btns    = document.getElementById('exit-btns');
    const microDiv = document.getElementById('exit-microaction');
    const ans     = document.getElementById('exit-answered');
    const hint    = document.getElementById('exit-hint');
    if(btns)     btns.style.display = 'none';
    if(microDiv) microDiv.style.display = 'none';
    if(hint)     hint.style.display = 'none';
    if(ans){
      ans.style.display = 'block';
      ans.innerHTML =
        '<span style="color:#00ff9d;font-size:26px">⚡</span><br>'
       +'<strong style="color:#00ff9d;font-size:15px">Bien joué !</strong><br>'
       +'<span style="color:var(--mist);font-size:13px">Tu continues d\'avancer vers ton objectif.<br>'
       +'PV remontés à 100 — continue comme ça ! 👋</span>';
    }
    showToast('✅ PV remontés à 100 — malus effacés !');
  });

  // ── NON ────────────────────────────────────────────────────
  nonBtn.addEventListener('click', ()=>{
    // PV inchangés pour l'instant — on propose une micro-action
    const btns     = document.getElementById('exit-btns');
    const microDiv = document.getElementById('exit-microaction');
    const hint     = document.getElementById('exit-hint');
    const microTaskEl = document.getElementById('exit-micro-task');
    if(btns)  btns.style.display  = 'none';
    if(hint)  hint.style.display  = 'none';

    // Construire le texte de la micro-action
    const micro = getMicroAction();
    if(microTaskEl){
      if(micro){
        microTaskEl.innerHTML =
          '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">'
         +'<span style="font-size:20px">'+_escHtmlExit(micro.questIcon)+'</span>'
         +'<strong style="color:var(--accent);font-size:13px;letter-spacing:0.3px">'+_escHtmlExit(micro.questName)+'</strong>'
         +'</div>'
         +'<span style="font-size:14px;color:var(--snow)">'+_escHtmlExit(micro.taskText)+'</span>';
      } else {
        microTaskEl.innerHTML =
          '<span style="color:var(--fog);font-size:13px">Ouvre une quête et complète une étape, même toute petite.</span>';
      }
    }
    if(microDiv) microDiv.style.display = 'block';

    // ── Rebind micro-action buttons (clone pour éviter les doublons) ──────
    const oldDoBtn   = document.getElementById('exit-micro-do');
    const oldSkipBtn = document.getElementById('exit-micro-skip');

    // Faire l'action
    if(oldDoBtn){
      const doBtn = oldDoBtn.cloneNode(true);
      oldDoBtn.parentNode.replaceChild(doBtn, oldDoBtn);
      doBtn.addEventListener('click', ()=>{
        // PV remontés à 100 + effacement des malus + +5 XP
        hpState.nonCount = 0;
        hpState.current  = HP_MAX;
        saveHP(); updateHPBar();
        grantXP(5, 'Micro-action accomplie !');
        _exitAnswered = true;
        hideExitPopup();
      });
    }

    // Je veux quand même arrêter → perte de PV
    if(oldSkipBtn){
      const skipBtn = oldSkipBtn.cloneNode(true);
      oldSkipBtn.parentNode.replaceChild(skipBtn, oldSkipBtn);
      skipBtn.addEventListener('click', ()=>{
        hpState.nonCount = (hpState.nonCount || 0) + 1;
        const prevHP = hpState.current;
        const newHP  = Math.max(0, HP_MAX - hpState.nonCount * 10);
        _exitAnswered = true;
        if(microDiv) microDiv.style.display = 'none';

        // Afficher le résultat d'abord, puis animer la barre
        const ans = document.getElementById('exit-answered');
        if(ans){
          ans.style.display = 'block';
          ans.innerHTML =
            '<span style="color:#ff6b8a;font-size:26px">💔</span><br>'
           +'<strong style="color:#ff6b8a;font-size:15px">Rythme en baisse.</strong><br>'
           +'<span style="color:var(--mist);font-size:13px">'
           +'Tu n\'as rien fait aujourd\'hui. Ton élan diminue.<br>'
           +'Demain tu repartiras à <strong style="color:var(--accent)">'+newHP+' PV</strong>.</span>';
        }

        // Animer la barre HP du popup de prevHP → newHP
        animateHPBar(prevHP, newHP, ()=>{
          hpState.current = newHP;
          saveHP();
          updateHPBar();
          checkHPZero();
        });

        showToast('💔 Demain : '+newHP+' PV · '+hpState.nonCount+' Non cumulé'+(hpState.nonCount>1?'s':''));
      });
    }
  });
})();

// Quit button in sidebar
document.getElementById('sidebar-quit-btn').addEventListener('click', ()=>{
  _exitAnswered = false;
  showExitPopup();
  setTimeout(() => {
    const epn = document.getElementById('exit-hp-player-name');
    if(epn && window.userProfile) epn.textContent = (window.userProfile.pseudo||'').toUpperCase();
  }, 50);
  const epn = document.getElementById('exit-hp-player-name');
  if(epn && window.userProfile) epn.textContent = (window.userProfile.pseudo||'').toUpperCase();
});

// ── SIDEBAR TOGGLE ─────────────────────────────────────────
(function(){
  let sidebarVisible = true;
  const btn = document.getElementById('sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const main = document.querySelector('.main');
  const player = document.getElementById('music-player');



  function setSidebar(visible){
    sidebarVisible = visible;
    if(visible){
      sidebar.classList.remove('hidden');
      main.classList.remove('expanded');
      player.style.left = '250px';
    } else {
      sidebar.classList.add('hidden');
      main.classList.add('expanded');
      player.style.left = '0';
    }
    try{ localStorage.setItem('hz_sidebar', visible ? '1' : '0'); }catch(e){}
  }

  // Restore state
  try{
    const saved = localStorage.getItem('hz_sidebar');
    if(saved === '0') setSidebar(false);
  }catch(e){}

  btn.addEventListener('click', ()=> setSidebar(!sidebarVisible));
})();

// ── EDITOR ─────────────────────────────────────────────────
(function(){
  let saveTimer=null, editorInited=false;
  let cropImg=null, cropX=40, cropY=40, cropW=200, cropH=150;
  let cDrag=false, cResize=false, cDir='';
  let cSX,cSY,cOX,cOY,cOW,cOH;

  function initEditor(){
    const body=document.getElementById('editor-body');
    const title=document.getElementById('editor-title-input');
    const status=document.getElementById('editor-save-status');
    const wc=document.getElementById('editor-wc');
    if(!body) return;

    // Restore
    const saved=lsGet('hz_editor',{title:'',content:''});
    title.value=saved.title||'';
    if(saved.content){body.innerHTML=saved.content;setTimeout(initImgs,120);}

    // Save
    function save(){
      clearTimeout(saveTimer);
      if(status) status.textContent='✎ Sauvegarde...';
      if(wc){const t=(body.innerText||'').trim();wc.textContent=(t?t.split(/\s+/).length:0)+' mots';}
      saveTimer=setTimeout(()=>{
        lsSet('hz_editor',{title:title.value,content:body.innerHTML});
        if(status){status.textContent='✓ Sauvegardé';setTimeout(()=>{status.textContent='';},1800);}
      },700);
    }
    body.addEventListener('input',save);
    title.addEventListener('input',save);

    // Format buttons
    document.querySelectorAll('#editor-toolbar .tb-btn[data-cmd]').forEach(btn=>{
      btn.addEventListener('mousedown',e=>{
        e.preventDefault();
        document.execCommand(btn.dataset.cmd,false,null);
        syncTB(); body.focus();
      });
    });

    // Style select
    document.getElementById('tb-heading').addEventListener('change',function(){
      document.execCommand('formatBlock',false,this.value);
      body.focus(); syncTB();
    });

    // Font
    document.getElementById('tb-font').addEventListener('change',function(){
      document.execCommand('fontName',false,this.value); body.focus();
    });

    // Size
    document.getElementById('tb-size').addEventListener('change',function(){
      document.execCommand('fontSize',false,this.value); body.focus();
    });

    // Color
    const colInp=document.getElementById('tb-color');
    document.getElementById('tb-color-btn').addEventListener('mousedown',e=>{e.preventDefault();colInp.click();});
    colInp.addEventListener('input',()=>{document.execCommand('foreColor',false,colInp.value);});

    // Highlight
    const hlInp=document.getElementById('tb-hl');
    document.getElementById('tb-hl-btn').addEventListener('mousedown',e=>{e.preventDefault();hlInp.click();});
    hlInp.addEventListener('input',()=>{document.execCommand('hiliteColor',false,hlInp.value);});

    // Table
    document.getElementById('tb-table').addEventListener('mousedown',e=>{
      e.preventDefault();
      document.getElementById('ed-tbl-modal').style.display='flex';
    });
    document.getElementById('tbl-no').addEventListener('click',()=>{document.getElementById('ed-tbl-modal').style.display='none';});
    document.getElementById('tbl-yes').addEventListener('click',()=>{
      const r=parseInt(document.getElementById('tbl-r').value)||3;
      const c=parseInt(document.getElementById('tbl-c').value)||3;
      let h='<table><thead><tr>';
      for(let i=0;i<c;i++) h+='<th>En-tête '+(i+1)+'</th>';
      h+='</tr></thead><tbody>';
      for(let i=0;i<r;i++){h+='<tr>';for(let j=0;j<c;j++) h+='<td>&nbsp;</td>';h+='</tr>';}
      h+='</tbody></table><p><br></p>';
      body.focus(); document.execCommand('insertHTML',false,h);
      document.getElementById('ed-tbl-modal').style.display='none';
    });

    // Link
    document.getElementById('tb-link').addEventListener('mousedown',e=>{
      e.preventDefault();
      const u=prompt('URL du lien :');
      if(u) document.execCommand('createLink',false,u.startsWith('http')?u:'https://'+u);
      body.focus();
    });

    // Image insert
    const imgInp=document.getElementById('tb-img-inp');
    document.getElementById('tb-img-btn').addEventListener('mousedown',e=>{e.preventDefault();imgInp.click();});
    imgInp.addEventListener('change',e=>{
      const f=e.target.files[0]; if(!f) return;
      const rd=new FileReader();
      rd.onload=ev=>{
        body.focus();
        document.execCommand('insertHTML',false,'<img src="'+ev.target.result+'" data-ei="1" style="max-width:100%"><p><br></p>');
        save(); setTimeout(initImgs,60);
      };
      rd.readAsDataURL(f); e.target.value='';
    });

    // HR
    document.getElementById('tb-divider').addEventListener('mousedown',e=>{
      e.preventDefault(); body.focus();
      document.execCommand('insertHTML',false,'<hr><p><br></p>');
    });

    // Import
    const impInp=document.getElementById('tb-imp-inp');
    document.getElementById('tb-imp').addEventListener('mousedown',e=>{e.preventDefault();impInp.click();});
    impInp.addEventListener('change',e=>{
      const f=e.target.files[0]; if(!f) return;
      const rd=new FileReader();
      rd.onload=ev=>{
        if(f.name.match(/\.html?$/i)) body.innerHTML=ev.target.result;
        else body.innerHTML=ev.target.result.split('\n').map(l=>l?'<p>'+l.replace(/</g,'&lt;')+'</p>':'<p><br></p>').join('');
        title.value=f.name.replace(/\.[^.]+$/,'');
        save();
      };
      rd.readAsText(f); e.target.value='';
    });

    // Export
    function dl(name,content,type){
      const a=document.createElement('a');
      a.href=URL.createObjectURL(new Blob([content],{type}));
      a.download=name; document.body.appendChild(a); a.click();
      setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},1000);
    }
    document.getElementById('tb-exp-html').addEventListener('click',()=>{
      const t=title.value||'document';
      dl(t+'.html','<!DOCTYPE html><html><head><meta charset="UTF-8"><title>'+t+'</title><style>body{font-family:Georgia,serif;max-width:780px;margin:40px auto;color:#1a1a1a;line-height:1.9;font-size:15px}h1{font-size:24px;border-bottom:2px solid #eee;padding-bottom:6px}table{border-collapse:collapse;width:100%}td,th{border:1px solid #ddd;padding:8px 12px}th{background:#f5f5f5}</style></head><body><h1>'+t+'</h1>'+body.innerHTML+'</body></html>','text/html');
    });
    document.getElementById('tb-exp-txt').addEventListener('click',()=>{
      dl((title.value||'document')+'.txt',(title.value?title.value+'\n\n':'')+body.innerText,'text/plain');
    });
    document.getElementById('tb-print').addEventListener('click',()=>window.print());

    // Clear
    document.getElementById('tb-clear').addEventListener('click',()=>{
      if(!confirm('Effacer tout le contenu de la page ?')) return;
      body.innerHTML=''; title.value='';
      lsSet('hz_editor',{title:'',content:''});
      if(status){status.textContent='✓ Effacé';setTimeout(()=>{status.textContent='';},1500);}
      if(wc) wc.textContent='0 mots';
    });

    // Toolbar sync
    function syncTB(){
      document.querySelectorAll('#editor-toolbar .tb-btn[data-cmd]').forEach(btn=>{
        try{btn.classList.toggle('tb-active',document.queryCommandState(btn.dataset.cmd));}catch(e){}
      });
      const bl=document.queryCommandValue('formatBlock').toLowerCase();
      const sel=document.getElementById('tb-heading');
      if(['h1','h2','h3','blockquote','pre'].includes(bl)) sel.value=bl; else sel.value='p';
    }
    body.addEventListener('keyup',syncTB);
    body.addEventListener('mouseup',syncTB);
    body.addEventListener('focus',()=>{if(!body.innerHTML.trim()) document.execCommand('formatBlock',false,'p');});
    body.addEventListener('click',e=>{if(!e.target.closest('.ei-wrap')) document.querySelectorAll('.ei-wrap').forEach(w=>w.classList.remove('ei-sel'));});

    // ── IMAGE RESIZE + CROP ───────────────────────────────
    function initImgs(){
      body.querySelectorAll('img[data-ei]').forEach(img=>{
        if(img.dataset.wrapped) return;
        img.dataset.wrapped='1';
        const wrap=document.createElement('span');
        wrap.className='ei-wrap'; wrap.contentEditable='false';
        img.parentNode.insertBefore(wrap,img); wrap.appendChild(img);
        // Handles
        ['nw','ne','sw','se','e','w'].forEach(d=>{
          const h=document.createElement('span');
          h.className='ei-handle eh-'+d; wrap.appendChild(h);
          h.addEventListener('mousedown',ev=>{
            ev.preventDefault(); ev.stopPropagation();
            const sx=ev.clientX,sy=ev.clientY,sw=img.offsetWidth,sh=img.offsetHeight,rt=sh/sw;
            const onM=e=>{
              const dx=e.clientX-sx,dy=e.clientY-sy;
              let nw=sw,nh=sh;
              if(d.includes('e')) nw=Math.max(30,sw+dx);
              if(d.includes('w')) nw=Math.max(30,sw-dx);
              if(d.includes('s')) nh=Math.max(24,sh+dy);
              if(d.includes('n')) nh=Math.max(24,sh-dy);
              if(d.length===2){nh=Math.round(nw*rt);}
              img.style.width=nw+'px';
              img.style.height=(d.length===2)?nh+'px':'auto';
            };
            const onU=()=>{document.removeEventListener('mousemove',onM);document.removeEventListener('mouseup',onU);save();};
            document.addEventListener('mousemove',onM); document.addEventListener('mouseup',onU);
          });
        });
        // Float toolbar
        const fb=document.createElement('div'); fb.className='ei-floatbar';
        fb.innerHTML='<button data-a="left">⬅</button><button data-a="center">↔</button><button data-a="right">➡</button><button data-a="full">⬌ Full</button><button data-a="crop">✂ Rogner</button><button data-a="del" style="color:#e55">🗑</button>';
        wrap.appendChild(fb);
        fb.querySelectorAll('button').forEach(btn=>{
          btn.addEventListener('mousedown',ev=>{
            ev.preventDefault(); ev.stopPropagation();
            const a=btn.dataset.a;
            if(a==='left'){wrap.style.float='left';wrap.style.margin='4px 12px 4px 0';}
            else if(a==='center'){wrap.style.float='none';wrap.style.display='block';wrap.style.margin='8px auto';}
            else if(a==='right'){wrap.style.float='right';wrap.style.margin='4px 0 4px 12px';}
            else if(a==='full'){img.style.width='100%';img.style.height='auto';wrap.style.float='none';wrap.style.display='block';}
            else if(a==='del'){wrap.remove();save();return;}
            else if(a==='crop'){openCrop(img);return;}
            save();
          });
        });
        img.addEventListener('click',ev=>{
          ev.preventDefault();
          document.querySelectorAll('.ei-wrap').forEach(w=>w.classList.remove('ei-sel'));
          wrap.classList.add('ei-sel');
        });
      });
    }

    // Crop
    function openCrop(img){
      cropImg=img;
      const ov=document.getElementById('ed-crop-ov');
      const ci=document.getElementById('ed-crop-img');
      ci.onload=()=>{
        const iw=ci.offsetWidth,ih=ci.offsetHeight;
        cropX=Math.round(iw*.1);cropY=Math.round(ih*.1);
        cropW=Math.round(iw*.8);cropH=Math.round(ih*.8);
        drawCropBox();
      };
      ci.src=img.src;
      ov.style.display='flex';
    }
    function drawCropBox(){
      const b=document.getElementById('ed-crop-box');
      b.style.left=cropX+'px';b.style.top=cropY+'px';
      b.style.width=cropW+'px';b.style.height=cropH+'px';
    }
    const cropBox=document.getElementById('ed-crop-box');
    cropBox.addEventListener('mousedown',e=>{
      e.preventDefault(); e.stopPropagation();
      const t=e.target;
      if(t.classList.contains('ec-corner')){
        cResize=true;
        cDir=t.className.split(' ').find(c=>c.startsWith('ec-')).replace('ec-','');
      } else cDrag=true;
      cSX=e.clientX;cSY=e.clientY;cOX=cropX;cOY=cropY;cOW=cropW;cOH=cropH;
    });
    document.addEventListener('mousemove',e=>{
      if(!cDrag&&!cResize) return;
      const ci=document.getElementById('ed-crop-img');
      const iw=ci.offsetWidth,ih=ci.offsetHeight;
      const dx=e.clientX-cSX,dy=e.clientY-cSY;
      if(cDrag){
        cropX=Math.max(0,Math.min(iw-cropW,cOX+dx));
        cropY=Math.max(0,Math.min(ih-cropH,cOY+dy));
      } else {
        let nx=cOX,ny=cOY,nw=cOW,nh=cOH;
        if(cDir.includes('e')) nw=Math.max(20,cOW+dx);
        if(cDir.includes('s')) nh=Math.max(20,cOH+dy);
        if(cDir.includes('w')){nx=Math.max(0,cOX+dx);nw=Math.max(20,cOW-dx);}
        if(cDir.includes('n')){ny=Math.max(0,cOY+dy);nh=Math.max(20,cOH-dy);}
        cropX=nx;cropY=ny;cropW=nw;cropH=nh;
      }
      drawCropBox();
    });
    document.addEventListener('mouseup',()=>{cDrag=false;cResize=false;});

    document.getElementById('ed-crop-yes').addEventListener('click',()=>{
      if(!cropImg) return;
      const ci=document.getElementById('ed-crop-img');
      const sx=cropImg.naturalWidth/ci.offsetWidth,sy=cropImg.naturalHeight/ci.offsetHeight;
      const cv=document.createElement('canvas');
      cv.width=Math.round(cropW*sx);cv.height=Math.round(cropH*sy);
      const ctx=cv.getContext('2d');
      const tmp=new Image();
      tmp.onload=()=>{
        ctx.drawImage(tmp,cropX*sx,cropY*sy,cropW*sx,cropH*sy,0,0,cv.width,cv.height);
        cropImg.src=cv.toDataURL('image/png');
        cropImg.style.width='';cropImg.style.height='';
        document.getElementById('ed-crop-ov').style.display='none';
        save();
      };
      tmp.src=cropImg.src;
    });
    document.getElementById('ed-crop-no').addEventListener('click',()=>{
      document.getElementById('ed-crop-ov').style.display='none';
    });
  }

  window._editorInit=function(){
    if(!editorInited){editorInited=true;initEditor();}
  };
})();

// ── SIDEBAR SECTIONS TOGGLE ────────────────────────────────
(function(){
  ['vues','pages'].forEach(id => {
    const label = document.getElementById('label-'+id);
    const section = document.getElementById('section-'+id);
    if(!label || !section) return;
    // Restore saved state
    const saved = localStorage.getItem('hz_section_'+id);
    if(saved === '0') section.classList.add('collapsed');
    label.addEventListener('click', () => {
      section.classList.toggle('collapsed');
      localStorage.setItem('hz_section_'+id, section.classList.contains('collapsed') ? '0' : '1');
    });
  });
})();

// ── INTRO SYSTEM ───────────────────────────────────────────
const INTROS = [
  {
    id: 'intro_demo',
    label: 'Link Start',
    src: 'https://res.cloudinary.com/dkgad0spg/video/upload/0323_wbjvkx.mp4',
    thumb: 'data:image/png;base64,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'
  }
];

let selectedIntroId = lsGet('hz_intro', null);

function buildIntrosGrid(){
  const grid = document.getElementById('intros-grid');
  if(!grid) return;
  if(!INTROS.length){
    grid.innerHTML = '<div class="intro-empty">Aucune intro disponible pour le moment.<br>Le shop arrive bientôt !</div>';
    return;
  }
  grid.innerHTML = INTROS.map(intro => `
    <div class="intro-thumb${selectedIntroId===intro.id?' selected':''}" data-intro="${intro.id}" title="${intro.label}">
      <img src="${intro.thumb}" alt="${intro.label}">
      <div class="intro-thumb-badge">✓ Actif</div>
      <div class="intro-thumb-label">${intro.label}</div>
    </div>
  `).join('');
  grid.querySelectorAll('.intro-thumb').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.intro;
      if(selectedIntroId === id){
        // Deselect
        selectedIntroId = null;
        lsSet('hz_intro', null);
      } else {
        selectedIntroId = id;
        lsSet('hz_intro', id);
        showToast('✓ Intro sélectionnée !');
      }
      buildIntrosGrid();
    });
  });
}

document.getElementById('btn-skip-intro').addEventListener('click', () => {
  selectedIntroId = null;
  lsSet('hz_intro', null);
  buildIntrosGrid();
  showToast('Intro désactivée');
});

function playIntroIfNeeded(){
  const shell = document.getElementById('app-shell');
  if(!selectedIntroId){
    shell.style.opacity = '1';
    shell.style.pointerEvents = '';
    return;
  }
  const intro = INTROS.find(i => i.id === selectedIntroId);
  if(!intro) return;

  const entryScreen = document.getElementById('entry-screen');
  const ov = document.getElementById('intro-overlay');
  const vid = document.getElementById('intro-video');
  const skipBtn = document.getElementById('intro-skip');

  const finish = () => {
    ov.style.transition = 'opacity 0.7s';
    ov.style.opacity = '0';
    const shell = document.getElementById('app-shell');
    shell.style.transition = 'opacity 0.7s';
    shell.style.opacity = '1';
    shell.style.pointerEvents = '';
    setTimeout(() => {
      ov.style.display = 'none';
      ov.style.opacity = '1';
      ov.style.transition = '';
    }, 700);
  };

  // Show entry screen first — one click unlocks audio for the whole session
  entryScreen.style.display = 'flex';
  entryScreen.addEventListener('click', () => {
    // Immediately show the black video overlay BEFORE fading entry screen
    // so the site is never visible between the two
    vid.src = intro.src;
    vid.muted = false;
    ov.style.display = 'flex';
    vid.play().catch(() => {
      vid.muted = true;
      vid.play().catch(()=>{});
    });

    // Now fade out entry screen (video is already showing behind)
    entryScreen.style.transition = 'opacity 0.4s';
    entryScreen.style.opacity = '0';
    setTimeout(() => {
      entryScreen.style.display = 'none';
      entryScreen.style.opacity = '1';
      entryScreen.style.transition = '';
    }, 400);

    vid.addEventListener('ended', finish, {once:true});
    skipBtn.addEventListener('click', () => { vid.pause(); finish(); }, {once:true});
  }, {once:true});
}

// Run intro on load
playIntroIfNeeded();

// Build grid when navigating to params
const _origNavigate = navigate;
// Patch: build intros grid whenever params view is opened
// params nav handled via navigate()

/* ═══════════════════════════════════════════════════════
   CALENDAR MODULE
═══════════════════════════════════════════════════════ */
(function(){

// ── STATE ────────────────────────────────────────────────
const EV_COLORS = [
  {hex:'#00f5ff',dim:'rgba(0,245,255,0.18)'},
  {hex:'#00ff9d',dim:'rgba(0,255,157,0.18)'},
  {hex:'#7b5fff',dim:'rgba(123,95,255,0.22)'},
  {hex:'#ff2d6b',dim:'rgba(255,45,107,0.2)'},
  {hex:'#e8c96a',dim:'rgba(232,201,106,0.22)'},
  {hex:'#ff00c8',dim:'rgba(255,0,200,0.18)'},
  {hex:'#6aa8e8',dim:'rgba(106,168,232,0.22)'},
  {hex:'#e8706a',dim:'rgba(232,112,106,0.22)'},
];

let calView = 'month';
let calDate = new Date();
let calEvents = [];
let editEvId = null;
let editEvImages = [];
let calDetailId = null;

// ── PERSISTENCE ──────────────────────────────────────────
function saveCalEvents(){
  const lean = calEvents.map(e => {const c={...e}; delete c.images; return c;});
  lsSet('hz_cal_events', lean);
  calEvents.forEach(ev => {
    if(ev.images && ev.images.length){
      idbSet('calevimg_'+ev.id, ev.images).catch(()=>{});
    } else {
      idbDel('calevimg_'+ev.id).catch(()=>{});
    }
  });
}
async function loadCalEvents(){
  const lean = lsGet('hz_cal_events', []);
  if(!lean.length) return [];
  try {
    return await Promise.all(lean.map(async e => {
      const ev = {...e};
      try { const imgs = await idbGet('calevimg_'+e.id); if(imgs) ev.images=imgs; } catch(_){}
      if(!ev.images) ev.images = [];
      return ev;
    }));
  } catch(_){ return lean.map(e=>({...e, images: e.images||[]})); }
}
function calEvId(){ return Date.now() + Math.random().toString(36).slice(2,7); }

// ── HELPERS ──────────────────────────────────────────────
const DOW_FR = ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];
const MONTHS_FR = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
function dateStr(d){ return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function todayDateStr(){ return dateStr(new Date()); }
function parseDate(s){ return new Date(s+'T00:00:00'); }
function sameDay(a,b){ return a.slice(0,10)===b.slice(0,10); }
function eventsForDay(dateS){ return calEvents.filter(e => e.date && e.date.slice(0,10)===dateS); }
function colorFor(hex){ return EV_COLORS.find(c=>c.hex===hex) || EV_COLORS[0]; }
function formatTime(t){ if(!t)return''; const [h,m]=t.split(':'); const hh=+h; return (hh===0?'00h':hh<10?'0'+hh+'h':hh+'h')+(m&&m!=='00'?m:''); }

// ── RENDER ROUTER ─────────────────────────────────────────
function renderCalendar(){
  const body = document.getElementById('cal-body');
  if(!body) return;
  if(calView==='month') renderMonth(body);
  else if(calView==='week') renderWeek(body);
  else renderDay(body);
  updateCalTitle();
}

function updateCalTitle(){
  const el = document.getElementById('cal-title');
  if(!el) return;
  if(calView==='month') el.textContent = MONTHS_FR[calDate.getMonth()] + ' ' + calDate.getFullYear();
  else if(calView==='week'){
    const mon = getWeekStart(calDate);
    const sun = new Date(mon); sun.setDate(sun.getDate()+6);
    el.textContent = mon.getDate()+' '+MONTHS_FR[mon.getMonth()].slice(0,3)+' – '+sun.getDate()+' '+MONTHS_FR[sun.getMonth()].slice(0,3)+' '+sun.getFullYear();
  } else {
    el.textContent = calDate.getDate()+' '+MONTHS_FR[calDate.getMonth()]+' '+calDate.getFullYear();
  }
}

// ── MONTH VIEW ───────────────────────────────────────────
function renderMonth(body){
  const year = calDate.getFullYear(), month = calDate.getMonth();
  const first = new Date(year, month, 1);
  const last  = new Date(year, month+1, 0);
  let startDow = first.getDay(); if(startDow===0) startDow=7; startDow--;
  const today = todayDateStr();

  let html = '<div class="cal-month">';
  html += '<div class="cal-dow-row">';
  DOW_FR.forEach(d => html += `<div class="cal-dow">${d}</div>`);
  html += '</div><div class="cal-days-grid">';

  // prev month padding
  for(let i=0;i<startDow;i++){
    const d = new Date(year, month, 1-startDow+i);
    html += buildMonthCell(d, true, today);
  }
  // current month
  for(let d=1; d<=last.getDate(); d++){
    const dt = new Date(year, month, d);
    html += buildMonthCell(dt, false, today);
  }
  // next month padding
  const total = startDow + last.getDate();
  const remaining = total%7===0?0:7-(total%7);
  for(let i=1;i<=remaining;i++){
    const dt = new Date(year, month+1, i);
    html += buildMonthCell(dt, true, today);
  }
  html += '</div></div>';
  body.innerHTML = html;

  // bind cell clicks
  body.querySelectorAll('.cal-cell').forEach(cell => {
    cell.addEventListener('click', e => {
      if(e.target.closest('.cal-ev-pill')) return;
      openNewEvent(cell.dataset.date);
    });
    cell.querySelectorAll('.cal-ev-pill').forEach(pill => {
      pill.addEventListener('click', e => {
        e.stopPropagation();
        openDetailPanel(pill.dataset.evid);
      });
    });
    const more = cell.querySelector('.cal-more');
    if(more) more.addEventListener('click', e => {
      e.stopPropagation();
      openDayFromCell(cell.dataset.date);
    });
  });
}

function buildMonthCell(dt, otherMonth, today){
  const ds = dateStr(dt);
  const evs = eventsForDay(ds);
  const isToday = ds===today;
  let cls = 'cal-cell';
  if(isToday) cls+=' today';
  if(otherMonth) cls+=' other-month';
  if(evs.length) cls+=' has-events';

  let inner = `<div class="cal-day-num"><span>${dt.getDate()}</span>`;
  if(evs.length){
    const col = colorFor(evs[0].color||EV_COLORS[0].hex);
    inner += `<span class="cal-day-dot" style="background:${col.hex}"></span>`;
  }
  inner += '</div>';

  const maxShow = 3;
  evs.slice(0,maxShow).forEach(ev => {
    const col = colorFor(ev.color||EV_COLORS[0].hex);
    const doneCls = ev.done ? ' done-pill' : '';
    inner += `<div class="cal-ev-pill${doneCls}" data-evid="${ev.id}" style="background:${col.dim};color:${col.hex};border-left:2px solid ${col.hex}">
      <span class="ev-check" style="background:${ev.done?col.hex:'transparent'};border:1px solid ${col.hex}">${ev.done?'✓':''}</span>
      ${ev.time?formatTime(ev.time)+' ':''}${escHtml(ev.title||'Sans titre')}
    </div>`;
  });
  if(evs.length>maxShow) inner += `<div class="cal-more">+${evs.length-maxShow} autre${evs.length-maxShow>1?'s':''}</div>`;
  inner += '<span class="cal-add-hint">+</span>';

  return `<div class="${cls}" data-date="${ds}">${inner}</div>`;
}

function openDayFromCell(ds){
  calDate = parseDate(ds);
  calView = 'day';
  document.querySelectorAll('.cal-vsw-btn').forEach(b=>b.classList.toggle('active',b.dataset.calview==='day'));
  renderCalendar();
}

// ── WEEK VIEW ────────────────────────────────────────────
function getWeekStart(d){
  const dt = new Date(d);
  let dow = dt.getDay(); if(dow===0) dow=7; dow--;
  dt.setDate(dt.getDate()-dow);
  return dt;
}

function renderWeek(body){
  const mon = getWeekStart(calDate);
  const today = todayDateStr();
  const HOURS = Array.from({length:24},(_,i)=>i);

  // Build days array
  const days = Array.from({length:7},(_,i)=>{const d=new Date(mon);d.setDate(d.getDate()+i);return d;});

  let html = '<div class="cal-week">';
  // Header
  html += '<div class="cal-week-header"><div></div>';
  days.forEach(d => {
    const ds = dateStr(d);
    const isTod = ds===today;
    html += `<div class="cal-week-dh${isTod?' today-col':''}">
      <div class="cal-week-dh-name">${DOW_FR[days.indexOf(d)]}</div>
      <div class="cal-week-dh-num">${d.getDate()}</div>
    </div>`;
  });
  html += '</div>';

  // Body
  html += '<div class="cal-week-body">';
  HOURS.forEach(h => {
    const label = h===0?'':String(h).padStart(2,'0')+'h';
    html += `<div class="cal-hour-label">${label}</div>`;
    days.forEach(d => {
      const ds = dateStr(d);
      const isTod = ds===today;
      const hevs = calEvents.filter(e=>e.date&&e.date.slice(0,10)===ds&&e.time&&parseInt(e.time.split(':')[0])===h);
      let evHtml = '';
      hevs.forEach(ev => {
        const col = colorFor(ev.color||EV_COLORS[0].hex);
        evHtml += `<div class="cal-week-ev" data-evid="${ev.id}" style="background:${col.dim};border-left:2px solid ${col.hex};color:${col.hex};${ev.done?'opacity:0.5;text-decoration:line-through':''}">
          ${formatTime(ev.time)} ${escHtml(ev.title||'—')}
        </div>`;
      });
      html += `<div class="cal-week-col${isTod?' today-col':''}" data-date="${ds}" data-hour="${h}">${evHtml}</div>`;
    });
  });
  html += '</div></div>';
  body.innerHTML = html;

  body.querySelectorAll('.cal-week-col').forEach(col => {
    col.addEventListener('click', e => {
      if(e.target.closest('.cal-week-ev')) return;
      const h = col.dataset.hour.padStart(2,'0')+':00';
      openNewEvent(col.dataset.date, h);
    });
    col.querySelectorAll('.cal-week-ev').forEach(ev => {
      ev.addEventListener('click', e=>{ e.stopPropagation(); openDetailPanel(ev.dataset.evid); });
    });
  });
}

// ── DAY VIEW ─────────────────────────────────────────────
function renderDay(body){
  const ds = dateStr(calDate);
  const today = todayDateStr();
  const now = new Date();
  const HOURS = Array.from({length:24},(_,i)=>i);

  let html = `<div class="cal-day-view">`;
  HOURS.forEach(h => {
    const label = String(h).padStart(2,'0')+'h';
    const hevs = calEvents.filter(e=>e.date&&e.date.slice(0,10)===ds&&e.time&&parseInt(e.time.split(':')[0])===h);
    const isNowHour = ds===today && now.getHours()===h;
    let evHtml = '';
    hevs.forEach(ev => {
      const col = colorFor(ev.color||EV_COLORS[0].hex);
      const mins = ev.time?parseInt(ev.time.split(':')[1])||0:0;
      const topPx = Math.round((mins/60)*52);
      evHtml += `<div class="cal-day-ev" data-evid="${ev.id}" style="top:${topPx}px;background:${col.dim};border-left:3px solid ${col.hex};color:${col.hex};${ev.done?'opacity:0.5;text-decoration:line-through':''}">
        <strong>${formatTime(ev.time)}</strong> ${escHtml(ev.title||'—')}
        ${ev.note?`<div style="font-size:10px;color:${col.hex};opacity:0.7;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escHtml(ev.note.slice(0,60))}</div>`:''}
      </div>`;
    });
    html += `<div class="cal-day-slot">
      <div class="cal-slot-time">${label}</div>
      <div class="cal-slot-col${isNowHour?' now-line':''}" data-date="${ds}" data-hour="${h}">${evHtml}</div>
    </div>`;
  });
  html += '</div>';
  body.innerHTML = html;

  body.querySelectorAll('.cal-slot-col').forEach(col => {
    col.addEventListener('click', e => {
      if(e.target.closest('.cal-day-ev')) return;
      openNewEvent(col.dataset.date, col.dataset.hour.padStart(2,'0')+':00');
    });
    col.querySelectorAll('.cal-day-ev').forEach(ev => {
      ev.addEventListener('click', e=>{ e.stopPropagation(); openDetailPanel(ev.dataset.evid); });
    });
  });
}

// ── EVENT MODAL ──────────────────────────────────────────
function buildEventModal(){
  if(document.getElementById('ev-overlay')) return;
  const div = document.createElement('div');
  div.className='overlay';
  div.id='ev-overlay';
  div.innerHTML=`
  <div class="ev-modal">
    <div class="modal-title" id="ev-modal-title">Nouvel évènement</div>
    <div class="form-group">
      <label class="form-label">Titre *</label>
      <input class="form-input" id="ev-title" placeholder="Ex: Réunion, Deadline, Idée...">
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Date</label><input class="form-input" type="date" id="ev-date"></div>
      <div class="form-group"><label class="form-label">Heure</label><input class="form-input" type="time" id="ev-time"></div>
    </div>
    <div class="form-group">
      <label class="form-label">Couleur</label>
      <div class="ev-color-row" id="ev-color-row"></div>
    </div>
    <div class="form-group">
      <label class="form-label">Notes</label>
      <textarea class="form-input" id="ev-note" rows="3" placeholder="Détails, idées, rappels..."></textarea>
    </div>
    <div class="form-group">
      <label class="form-label">Images / GIFs</label>
      <div class="ev-upload-drop" id="ev-drop-zone">
        <div style="font-size:28px;margin-bottom:8px">🖼</div>
        <div class="upload-zone-text">Glisser ou <span>cliquer pour importer</span></div>
        <p>PNG, JPG, GIF, WEBP — max 8 Mo</p>
      </div>
      <input type="file" id="ev-file-inp" multiple accept="image/*,image/gif" style="display:none">
      <div class="ev-img-grid" id="ev-img-grid"></div>
    </div>
    <div class="form-group" style="display:flex;align-items:center;gap:10px">
      <input type="checkbox" id="ev-done-chk" style="accent-color:var(--accent);width:16px;height:16px;cursor:pointer">
      <label for="ev-done-chk" style="font-size:13px;color:var(--mist);cursor:pointer;letter-spacing:0.5px">Marquer comme terminé</label>
    </div>
    <div class="modal-footer">
      <button class="btn-ghost" id="ev-delete-btn" style="margin-right:auto;display:none;color:var(--red);border-color:rgba(255,45,107,0.3)">Supprimer</button>
      <button class="btn-ghost" id="ev-cancel-btn">Annuler</button>
      <button class="btn-primary" id="ev-save-btn">Enregistrer</button>
    </div>
  </div>`;
  document.body.appendChild(div);

  // Color picker
  const cr = document.getElementById('ev-color-row');
  EV_COLORS.forEach((c,i) => {
    const dot = document.createElement('div');
    dot.className='ev-color-dot'+(i===0?' selected':'');
    dot.style.background=c.hex;
    dot.dataset.idx=i;
    dot.addEventListener('click',()=>{
      cr.querySelectorAll('.ev-color-dot').forEach(d=>d.classList.remove('selected'));
      dot.classList.add('selected');
    });
    cr.appendChild(dot);
  });

  // Drop zone
  const dropZone=document.getElementById('ev-drop-zone');
  const fileInp=document.getElementById('ev-file-inp');
  dropZone.addEventListener('click',()=>fileInp.click());
  dropZone.addEventListener('dragover',e=>{e.preventDefault();dropZone.classList.add('drag-over');});
  dropZone.addEventListener('dragleave',()=>dropZone.classList.remove('drag-over'));
  dropZone.addEventListener('drop',e=>{e.preventDefault();dropZone.classList.remove('drag-over');handleEvFiles(e.dataTransfer.files);});
  fileInp.addEventListener('change',e=>{handleEvFiles(e.target.files);e.target.value='';});

  document.getElementById('ev-cancel-btn').addEventListener('click',()=>closeOverlay('ev-overlay'));
  document.getElementById('ev-delete-btn').addEventListener('click',deleteCurrentEv);
  document.getElementById('ev-save-btn').addEventListener('click',saveCurrentEv);
  div.addEventListener('click',e=>{if(e.target===div)closeOverlay('ev-overlay');});
}

function handleEvFiles(files){
  Array.from(files).forEach(f=>{
    if(!f.type.startsWith('image/')) return;
    if(f.size>8*1024*1024){showToast('Image trop lourde (max 8 Mo)');return;}
    const r=new FileReader();
    r.onload=ev=>{
      editEvImages.push({name:f.name,data:ev.target.result,type:f.type});
      renderEvImgGrid();
    };
    r.readAsDataURL(f);
  });
}

function renderEvImgGrid(){
  const grid=document.getElementById('ev-img-grid');
  if(!grid) return;
  grid.innerHTML=editEvImages.map((img,i)=>`
    <div class="ev-img-thumb">
      <img src="${img.data}" alt="${escHtml(img.name)}">
      <button class="ev-img-del" data-idx="${i}">✕</button>
    </div>`).join('');
  grid.querySelectorAll('.ev-img-del').forEach(btn=>{
    btn.addEventListener('click',e=>{e.stopPropagation();editEvImages.splice(+btn.dataset.idx,1);renderEvImgGrid();});
  });
}

function openNewEvent(date='', time=''){
  buildEventModal();
  editEvId=null;
  editEvImages=[];
  document.getElementById('ev-modal-title').textContent='Nouvel évènement';
  document.getElementById('ev-title').value='';
  document.getElementById('ev-date').value=date||todayDateStr();
  document.getElementById('ev-time').value=time||'';
  document.getElementById('ev-note').value='';
  document.getElementById('ev-done-chk').checked=false;
  document.getElementById('ev-delete-btn').style.display='none';
  const cr=document.getElementById('ev-color-row');
  cr.querySelectorAll('.ev-color-dot').forEach((d,i)=>d.classList.toggle('selected',i===0));
  renderEvImgGrid();
  openOverlay('ev-overlay');
}

function openEditEvent(id){
  const ev=calEvents.find(e=>e.id===id); if(!ev) return;
  buildEventModal();
  editEvId=id;
  editEvImages=[...(ev.images||[])];
  document.getElementById('ev-modal-title').textContent='Modifier l\'évènement';
  document.getElementById('ev-title').value=ev.title||'';
  document.getElementById('ev-date').value=ev.date?ev.date.slice(0,10):'';
  document.getElementById('ev-time').value=ev.time||'';
  document.getElementById('ev-note').value=ev.note||'';
  document.getElementById('ev-done-chk').checked=!!ev.done;
  document.getElementById('ev-delete-btn').style.display='';
  const cr=document.getElementById('ev-color-row');
  const idx=EV_COLORS.findIndex(c=>c.hex===(ev.color||EV_COLORS[0].hex));
  cr.querySelectorAll('.ev-color-dot').forEach((d,i)=>d.classList.toggle('selected',i===(idx<0?0:idx)));
  renderEvImgGrid();
  openOverlay('ev-overlay');
}

function saveCurrentEv(){
  const title=document.getElementById('ev-title').value.trim();
  if(!title){document.getElementById('ev-title').focus();return;}
  const date=document.getElementById('ev-date').value;
  const time=document.getElementById('ev-time').value;
  const note=document.getElementById('ev-note').value.trim();
  const done=document.getElementById('ev-done-chk').checked;
  const cr=document.getElementById('ev-color-row');
  const selDot=cr.querySelector('.ev-color-dot.selected');
  const color=selDot?EV_COLORS[+selDot.dataset.idx].hex:EV_COLORS[0].hex;

  if(editEvId){
    const idx=calEvents.findIndex(e=>e.id===editEvId);
    if(idx>=0) calEvents[idx]={...calEvents[idx],title,date,time,note,done,color,images:editEvImages};
  } else {
    calEvents.push({id:calEvId(),title,date,time,note,done,color,images:editEvImages,created:todayDateStr()});
  }
  saveCalEvents();
  closeOverlay('ev-overlay');
  renderCalendar();
  showToast(editEvId?'Évènement modifié !':'Évènement ajouté !');
}

function deleteCurrentEv(){
  if(!editEvId) return;
  calEvents=calEvents.filter(e=>e.id!==editEvId);
  idbDel('calevimg_'+editEvId).catch(()=>{});
  saveCalEvents();
  closeOverlay('ev-overlay');
  closeDetailPanel();
  renderCalendar();
  showToast('Évènement supprimé.');
}

// ── DETAIL PANEL ─────────────────────────────────────────
function buildDetailPanel(){
  if(document.getElementById('cal-detail-panel')) return;
  const panel=document.createElement('div');
  panel.className='cal-detail-panel';
  panel.id='cal-detail-panel';
  panel.innerHTML=`
    <div class="cdp-header">
      <div class="cdp-color-bar" id="cdp-color-bar"></div>
      <div style="flex:1">
        <div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--fog);margin-bottom:4px" id="cdp-badge"></div>
        <div class="cdp-title" id="cdp-title"></div>
      </div>
      <button class="cdp-close" id="cdp-close">✕</button>
    </div>
    <div class="cdp-body">
      <div class="cdp-meta" id="cdp-meta"></div>
      <div class="cdp-note" id="cdp-note" style="display:none"></div>
      <div class="cdp-imgs" id="cdp-imgs"></div>
    </div>
    <div class="cdp-footer">
      <button class="btn-ghost" id="cdp-done-btn" style="flex:1;text-align:center"></button>
      <button class="btn-primary" id="cdp-edit-btn" style="flex:1;text-align:center">Modifier</button>
    </div>`;
  document.body.appendChild(panel);
  document.getElementById('cdp-close').addEventListener('click',closeDetailPanel);
  document.getElementById('cdp-edit-btn').addEventListener('click',()=>{ var idToEdit=calDetailId; closeDetailPanel(); openEditEvent(idToEdit); });
  document.getElementById('cdp-done-btn').addEventListener('click',()=>{
    const ev=calEvents.find(e=>e.id===calDetailId); if(!ev) return;
    ev.done=!ev.done;
    saveCalEvents();
    renderCalendar();
    openDetailPanel(calDetailId);
    showToast(ev.done?'Évènement marqué terminé !':'Évènement rouvert.');
  });
}

function openDetailPanel(id){
  const ev=calEvents.find(e=>e.id===id); if(!ev) return;
  buildDetailPanel();
  calDetailId=id;
  const col=colorFor(ev.color||EV_COLORS[0].hex);
  document.getElementById('cdp-color-bar').style.background=col.hex;
  document.getElementById('cdp-badge').textContent=ev.done?'✓ Terminé':'Évènement';
  document.getElementById('cdp-badge').style.color=ev.done?col.hex:col.hex;
  document.getElementById('cdp-title').textContent=ev.title||'Sans titre';
  document.getElementById('cdp-title').style.color=ev.done?col.hex:'';
  document.getElementById('cdp-title').style.textDecoration=ev.done?'line-through':'';

  let meta='';
  if(ev.date){const d=parseDate(ev.date);meta+=`<span>📅 ${d.getDate()} ${MONTHS_FR[d.getMonth()]} ${d.getFullYear()}</span>`;}
  if(ev.time) meta+=`<span>🕐 ${ev.time}</span>`;
  if(ev.images&&ev.images.length) meta+=`<span>🖼 ${ev.images.length} image${ev.images.length>1?'s':''}</span>`;
  document.getElementById('cdp-meta').innerHTML=meta;

  const noteEl=document.getElementById('cdp-note');
  if(ev.note){noteEl.textContent=ev.note;noteEl.style.display='';}
  else noteEl.style.display='none';

  const imgsEl=document.getElementById('cdp-imgs');
  if(ev.images&&ev.images.length){
    imgsEl.innerHTML=ev.images.map(img=>`<div class="cdp-img-wrap"><img src="${img.data}" alt="${escHtml(img.name||'')}"></div>`).join('');
    imgsEl.style.display='grid';
  } else {
    imgsEl.innerHTML='';
    imgsEl.style.display='none';
  }

  const doneBtn=document.getElementById('cdp-done-btn');
  doneBtn.textContent=ev.done?'Rouvrir':'Marquer terminé';
  doneBtn.style.borderColor=ev.done?'rgba(0,245,255,0.3)':'rgba(0,255,157,0.3)';
  doneBtn.style.color=ev.done?'var(--mist)':'var(--green)';

  document.getElementById('cal-detail-panel').classList.add('open');
}

function closeDetailPanel(){
  const panel=document.getElementById('cal-detail-panel');
  if(panel) panel.classList.remove('open');
  calDetailId=null;
}

// ── HELPERS ──────────────────────────────────────────────
function openOverlay(id){document.getElementById(id).classList.add('open');}
function closeOverlay(id){document.getElementById(id).classList.remove('open');}
function escHtml(s){return(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

// ── NAVIGATION ───────────────────────────────────────────
document.getElementById('cal-prev').addEventListener('click',()=>{
  if(calView==='month'){calDate=new Date(calDate.getFullYear(),calDate.getMonth()-1,1);}
  else if(calView==='week'){calDate.setDate(calDate.getDate()-7);}
  else {calDate.setDate(calDate.getDate()-1);}
  renderCalendar();
});
document.getElementById('cal-next').addEventListener('click',()=>{
  if(calView==='month'){calDate=new Date(calDate.getFullYear(),calDate.getMonth()+1,1);}
  else if(calView==='week'){calDate.setDate(calDate.getDate()+7);}
  else {calDate.setDate(calDate.getDate()+1);}
  renderCalendar();
});
document.getElementById('cal-today-btn').addEventListener('click',()=>{
  calDate=new Date();
  renderCalendar();
});
document.querySelectorAll('.cal-vsw-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    calView=btn.dataset.calview;
    document.querySelectorAll('.cal-vsw-btn').forEach(b=>b.classList.toggle('active',b===btn));
    renderCalendar();
  });
});
document.getElementById('cal-new-ev-btn').addEventListener('click',()=>openNewEvent());

// ── PATCH navigate() ─────────────────────────────────────
// Extend the global navigate function to also handle calendar rendering
const _origNavCal = navigate;
navigate = function(view){
  _origNavCal(view);
  if(view==='calendar') renderCalendar();
  else closeDetailPanel();
};
// Note: nav item listeners already bound above — do NOT re-bind here

// ── PAGE_TITLES patch ────────────────────────────────────
PAGE_TITLES['calendar'] = 'Calendrier';

// ── INIT ─────────────────────────────────────────────────
loadCalEvents().then(evs=>{
  calEvents=evs;
  if(currentView==='calendar') renderCalendar();
});

})(); // end CALENDAR MODULE



// LIGHTBOX
(function(){
  var lb=document.getElementById('hz-lb');
  var im=document.getElementById('hz-lb-img');
  var pc=document.getElementById('hz-lb-pct');
  if(!lb||!im||!pc)return;
  var sc=1;
  function show(src){sc=1;im.src=src;im.style.transform='scale(1)';pc.textContent='100%';lb.classList.add('on');}
  function hide(){lb.classList.remove('on');im.src='';}
  function zoom(v){sc=Math.min(5,Math.max(0.1,Math.round(v*20)/20));im.style.transform='scale('+sc+')';pc.textContent=Math.round(sc*100)+'%';}
  document.getElementById('hz-lb-x').onclick=hide;
  document.getElementById('hz-lb-in').onclick=function(e){e.stopPropagation();zoom(sc+0.25);};
  document.getElementById('hz-lb-out').onclick=function(e){e.stopPropagation();zoom(sc-0.25);};
  document.getElementById('hz-lb-rst').onclick=function(e){e.stopPropagation();zoom(1);};
  lb.onclick=function(e){if(e.target===lb)hide();};
  lb.addEventListener('wheel',function(e){e.preventDefault();zoom(sc+(e.deltaY<0?0.15:-0.15));},{passive:false});
  document.addEventListener('keydown',function(e){if(!lb.classList.contains('on'))return;if(e.key==='Escape')hide();if(e.key==='+'||e.key==='=')zoom(sc+0.25);if(e.key==='-')zoom(sc-0.25);if(e.key==='0')zoom(1);});
  document.addEventListener('click',function(e){var w=e.target.closest('.cdp-img-wrap');if(w&&!e.target.closest('button')){var i=w.querySelector('img');if(i)show(i.src);}});
})();

// ── STREAK SYSTEM ──────────────────────────────────────────
(function(){
  var TODAY = new Date().toISOString().split('T')[0];

  function getStreak(){
    return lsGet('hz_streak', {count:0, best:0, lastDay:'', history:[]});
  }
  function saveStreak(s){ lsSet('hz_streak', s); }

  function updateStreak(){
    var s = getStreak();
    var last = s.lastDay;
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate()-1);
    var yStr = yesterday.toISOString().split('T')[0];

    if(last === TODAY){
      // Already logged today — no change
    } else if(last === yStr){
      // Consecutive day
      s.count++;
      s.lastDay = TODAY;
    } else if(last === ''){
      // First ever visit
      s.count = 1;
      s.lastDay = TODAY;
    } else {
      // Missed at least one day — reset
      s.count = 1;
      s.lastDay = TODAY;
    }

    if(s.count > s.best) s.best = s.count;

    // Keep last 7 days history
    if(!s.history) s.history = [];
    if(s.history[s.history.length-1] !== TODAY){
      s.history.push(TODAY);
      if(s.history.length > 7) s.history = s.history.slice(-7);
    }

    saveStreak(s);
    renderStreak(s);
  }

  function renderStreak(s){
    var wrap = document.getElementById('streak-wrap');
    var countEl = document.getElementById('streak-count');
    var bestEl = document.getElementById('streak-best');
    var fireEl = document.getElementById('streak-fire');
    var dotsEl = document.getElementById('streak-dots');
    if(!wrap) return;

    // Check if streak is alive (logged today or yesterday)
    var alive = (s.lastDay === TODAY);
    wrap.classList.toggle('streak-dead', !alive);

    countEl.textContent = s.count;
    bestEl.textContent = 'Meilleur: ' + s.best;

    // Change flame emoji intensity based on count
    if(!alive)       fireEl.textContent = '🔥';
    else if(s.count >= 30) fireEl.textContent = '🌋';
    else if(s.count >= 14) fireEl.textContent = '⚡';
    else if(s.count >= 7)  fireEl.textContent = '🔥';
    else                   fireEl.textContent = '🔥';

    // Build last 7 days dots
    var dots = '';
    var now = new Date();
    for(var i=6; i>=0; i--){
      var d = new Date(now);
      d.setDate(d.getDate()-i);
      var ds = d.toISOString().split('T')[0];
      var isToday = (ds === TODAY);
      var wasActive = s.history && s.history.indexOf(ds) !== -1;
      var cls = 'streak-dot' + (isToday && wasActive ? ' today' : (wasActive ? ' active' : ''));
      dots += '<div class="'+cls+'" title="'+ds+'"></div>';
    }
    dotsEl.innerHTML = dots;
  }

  // Run on load
  updateStreak();
})();
// ══════════════════════════════════════════════════════════
// MES PAGES MODULE
// ══════════════════════════════════════════════════════════
(function(){

  // ── STATE ──────────────────────────────────────────────
  var pages = [];
  var currentPageId = null; // null = new unsaved page
  var pagesSaveTimer = null;

  // ── PERSISTENCE ────────────────────────────────────────
  function loadPages(){
    try { pages = JSON.parse(localStorage.getItem('hz_pages') || '[]'); } catch(e){ pages = []; }
  }
  function savePages(){
    localStorage.setItem('hz_pages', JSON.stringify(pages));
  }
  function genId(){
    return 'pg_' + Date.now() + '_' + Math.random().toString(36).slice(2,6);
  }

  // ── RENDER SIDEBAR ─────────────────────────────────────
  function renderPagesNav(){
    var nav = document.getElementById('pages-nav');
    if(!nav) return;
    if(!pages.length){ nav.innerHTML = ''; return; }
    nav.innerHTML = pages.map(function(p){
      var isActive = (currentPageId === p.id);
      var _navIcon = p.type==='mindmap' ? '&#129504;' : p.type==='todo' ? '&#9989;' : '&#128196;';
      return '<div class="page-nav-item' + (isActive?' active':'') + '" data-pageid="'+p.id+'">' +
        '<span class="page-nav-link" title="'+escHtmlP(p.title||'Sans titre')+'">'+_navIcon+' '+escHtmlP(p.title||'Sans titre')+'</span>' +
        '<button class="page-nav-del" data-delidpage="'+p.id+'" title="Supprimer cette page">&#10005;</button>' +
        '</div>';
    }).join('');

    // Click on page title → open it
    nav.querySelectorAll('.page-nav-item').forEach(function(el){
      el.querySelector('.page-nav-link').addEventListener('click', function(){
        openPage(el.dataset.pageid);
      });
    });
    // Click delete button
    nav.querySelectorAll('.page-nav-del').forEach(function(btn){
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        deletePage(btn.dataset.delidpage);
      });
    });
  }

  function escHtmlP(s){
    return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // ── OPEN A SAVED PAGE ─────────────────────────────────
  function openPage(id){
    var page = pages.find(function(p){ return p.id === id; });
    if(!page) return;
    if(page.type === 'todo'){
      currentPageId = id;
      document.querySelectorAll('.nav-item[data-view], .page-nav-item').forEach(function(n){ n.classList.remove('active'); });
      document.getElementById('label-params').classList.remove('active');
      renderPagesNav();
      document.querySelectorAll('.view').forEach(function(v){ v.classList.remove('active'); });
      document.getElementById('view-todo').classList.add('active');
      document.getElementById('page-title').textContent = page.title || 'To Do';
      currentView = 'todo';
      var _mpTD = document.getElementById('music-player');
      if(_mpTD) _mpTD.style.display = '';
      if(window._tdLoadPage) window._tdLoadPage(page);
      return;
    }
    if(page.type === 'mindmap'){
      currentPageId = id;
      document.querySelectorAll('.nav-item[data-view], .page-nav-item').forEach(function(n){ n.classList.remove('active'); });
      document.getElementById('label-params').classList.remove('active');
      renderPagesNav();
      document.querySelectorAll('.view').forEach(function(v){ v.classList.remove('active'); });
      document.getElementById('view-mindmap').classList.add('active');
      document.getElementById('page-title').textContent = page.title || 'Mind Map';
      currentView = 'mindmap';
      var _mpMM = document.getElementById('music-player');
      if(_mpMM) _mpMM.style.display = 'none';
        if(window._mmLoadPage) window._mmLoadPage(page);
      return;
    }
    currentPageId = id;

    // Activate editor view without navigate() resetting currentPageId
    var currentViewBak = currentView;
    currentView = 'editor';

    // Deactivate all nav items
    document.querySelectorAll('.nav-item[data-view], .page-nav-item').forEach(function(n){
      n.classList.remove('active');
    });
    document.getElementById('label-params').classList.remove('active');
    // Activate pages section item
    renderPagesNav(); // re-render to reflect active state

    // Activate view-editor
    document.querySelectorAll('.view').forEach(function(v){ v.classList.remove('active'); });
    document.getElementById('view-editor').classList.add('active');
    document.getElementById('page-title').textContent = page.title || 'Page sans titre';

    // Hide music player (same as editor behaviour)
    var mp = document.getElementById('music-player');
    if(mp) mp.style.display = 'none';

    // Init editor if not already done
    if(window._editorInit) window._editorInit();

    // Load this page's content into editor fields
    var titleEl = document.getElementById('editor-title-input');
    var bodyEl  = document.getElementById('editor-body');
    if(titleEl) titleEl.value = page.title || '';
    if(bodyEl)  bodyEl.innerHTML = page.content || '';
  }

  // ── NEW PAGE (blank) ───────────────────────────────────
  function openNewPage(){
    currentPageId = null;
    // Let normal navigate('editor') handle view switching
    if(typeof navigate === 'function') navigate('editor');
    // Clear fields after navigate (which may restore saved draft)
    setTimeout(function(){
      var titleEl = document.getElementById('editor-title-input');
      var bodyEl  = document.getElementById('editor-body');
      if(titleEl) titleEl.value = '';
      if(bodyEl)  bodyEl.innerHTML = '';
      renderPagesNav(); // deactivate any active page
    }, 0);
  }

  // ── AUTO-SAVE ─────────────────────────────────────────
  function schedulePageSave(){
    clearTimeout(pagesSaveTimer);
    pagesSaveTimer = setTimeout(function(){
      doPageSave();
    }, 700);
  }

  function doPageSave(){
    var _curP = currentPageId !== null ? pages.find(function(p){ return p.id === currentPageId; }) : null;
    if(_curP && (_curP.type === 'mindmap' || _curP.type === 'todo')) return;
    var titleEl = document.getElementById('editor-title-input');
    var bodyEl  = document.getElementById('editor-body');
    if(!titleEl || !bodyEl) return;
    var title = titleEl.value.trim();
    var content = bodyEl.innerHTML;

    if(!title) return; // don't save pages without a title

    if(currentPageId === null){
      // Create new page
      var newPage = { id: genId(), title: title, content: content, created: new Date().toISOString().split('T')[0] };
      pages.push(newPage);
      currentPageId = newPage.id;
      savePages();
      renderPagesNav();
      // Update sidebar nav-item text as well as page-title bar
      document.getElementById('page-title').textContent = title;
    } else {
      // Update existing page
      var page = pages.find(function(p){ return p.id === currentPageId; });
      if(page){
        page.title = title;
        page.content = content;
        savePages();
        renderPagesNav();
        document.getElementById('page-title').textContent = title;
      }
    }
  }

  // ── DELETE PAGE ────────────────────────────────────────
  function deletePage(id){
    pages = pages.filter(function(p){ return p.id !== id; });
    savePages();

    if(currentPageId === id){
      currentPageId = null;
      // Navigate away to new blank page
      openNewPage();
    } else {
      renderPagesNav();
    }
    if(typeof showToast === 'function') showToast('Page supprimée.');
  }

  // ── HOOK INTO EDITOR EVENTS ────────────────────────────
  function hookEditorEvents(){
    var titleEl = document.getElementById('editor-title-input');
    var bodyEl  = document.getElementById('editor-body');
    if(!titleEl || !bodyEl) return;

    titleEl.addEventListener('input', schedulePageSave);
    bodyEl.addEventListener('input', schedulePageSave);
  }

  // ── PATCH navigate('editor') ──────────────────────────
  var _origNavigatePages = navigate;
  navigate = function(view){
    if(view === 'editor'){
      // Reset to new page context
      currentPageId = null;
    }
    _origNavigatePages(view);
    if(view === 'editor'){
      renderPagesNav(); // clear active state on saved pages
    }
  };

  // ── HOOK "Nouvelle page" NAV ITEM ──────────────────────
  var newPageBtn = document.getElementById('nav-new-page');
  if(newPageBtn){
    // Replace the default data-view listener with our own
    newPageBtn.removeAttribute('data-view');
    newPageBtn.addEventListener('click', function(){
      openOv('page-type-overlay');
    });
  }

  // ── INIT ─────────────────────────────────────────────
  loadPages();
  renderPagesNav();

  // Hook editor events after the editor IIFE has had a chance to init
  // We wait for _editorInit to be called the first time, then add our listeners
  var _origEditorInit = window._editorInit;
  window._editorInit = function(){
    if(_origEditorInit) _origEditorInit();
    hookEditorEvents();
    // Only hook once
    window._editorInit = _origEditorInit;
  };

  // Also expose openPage globally for any future use
  window._openPage = openPage;

  // ── MINDMAP SAVE BRIDGE ─────────────────────────────────
  window._mmPageSave = function(pageId, title, mmData){
    if(!pageId){
      var _np = {id:'pg_'+Date.now()+'_'+Math.random().toString(36).slice(2,6), title:title||'Mind Map', type:'mindmap', mmData:mmData, created:new Date().toISOString().split('T')[0]};
      pages.push(_np);
      currentPageId = _np.id;
      savePages(); renderPagesNav();
      var _pt = document.getElementById('page-title');
      if(_pt) _pt.textContent = _np.title;
      return _np.id;
    } else {
      var _ep = pages.find(function(p){ return p.id === pageId; });
      if(_ep){ _ep.title = title||_ep.title; _ep.mmData = mmData; savePages(); renderPagesNav();
        var _pt = document.getElementById('page-title');
        if(_pt) _pt.textContent = _ep.title;
      }
      return pageId;
    }
  };

  // ── OPEN BLANK PAGE (from type picker) ──────────────────
  window._openBlankPage = function(){
    closeOv('page-type-overlay');
    currentPageId = null;
    _origNavigatePages('editor');
    setTimeout(function(){
      var titleEl = document.getElementById('editor-title-input');
      var bodyEl  = document.getElementById('editor-body');
      if(titleEl) titleEl.value = '';
      if(bodyEl)  bodyEl.innerHTML = '';
      renderPagesNav();
      var pt = document.getElementById('page-title');
      if(pt) pt.textContent = 'Nouvelle page';
    }, 0);
  };

  // ── OPEN MINDMAP PAGE (from type picker) ─────────────────
  window._openMindmapPage = function(){
    closeOv('page-type-overlay');
    currentPageId = null;
    document.querySelectorAll('.nav-item[data-view], .page-nav-item').forEach(function(n){ n.classList.remove('active'); });
    document.getElementById('label-params').classList.remove('active');
    renderPagesNav();
    document.querySelectorAll('.view').forEach(function(v){ v.classList.remove('active'); });
    var mmView = document.getElementById('view-mindmap');
    if(mmView) mmView.classList.add('active');
    var pt = document.getElementById('page-title');
    if(pt) pt.textContent = 'Nouveau Mind Map';
    currentView = 'mindmap';
    var _mpMM = document.getElementById('music-player');
    if(_mpMM) _mpMM.style.display = 'none';
    if(window._mmNewPage) window._mmNewPage();
  };

  window._openTodoPage = function(){
    closeOv('page-type-overlay');
    currentPageId = null;
    document.querySelectorAll('.nav-item[data-view], .page-nav-item').forEach(function(n){ n.classList.remove('active'); });
    document.getElementById('label-params').classList.remove('active');
    renderPagesNav();
    document.querySelectorAll('.view').forEach(function(v){ v.classList.remove('active'); });
    document.getElementById('view-todo').classList.add('active');
    var pt = document.getElementById('page-title');
    if(pt) pt.textContent = 'Nouvelle To Do List';
    currentView = 'todo';
    if(window._tdNewPage) window._tdNewPage();
  };

  window._tdPageSave = function(pageId, title, tdData){
    if(!pageId){
      var _np = {id:'pg_'+Date.now()+'_'+Math.random().toString(36).slice(2,6), title:title||'To Do', type:'todo', tdData:tdData, created:new Date().toISOString().split('T')[0]};
      pages.push(_np);
      currentPageId = _np.id;
      savePages(); renderPagesNav();
      var _pt = document.getElementById('page-title');
      if(_pt) _pt.textContent = _np.title;
      return _np.id;
    } else {
      var _ep = pages.find(function(p){ return p.id === pageId; });
      if(_ep){ _ep.title = title||_ep.title; _ep.tdData = tdData; savePages(); renderPagesNav();
        var _pt = document.getElementById('page-title');
        if(_pt) _pt.textContent = _ep.title;
      }
      return pageId;
    }
  };

})();


// ══════════════════════════════════════════════════════════
// TYPE PICKER — event delegation (works regardless of DOM order)
// ══════════════════════════════════════════════════════════
(function(){
  // Use event delegation on document — works even if overlay HTML
  // comes after this script tag in the source
  document.addEventListener('click', function(e){
    var target = e.target;

    // Walk up to find the card or button
    var blank  = target.closest ? target.closest('#ptype-blank')   : null;
    var mm_    = target.closest ? target.closest('#ptype-mindmap') : null;
    var todo_  = target.closest ? target.closest('#ptype-todo')    : null;
    var cancel = target.closest ? target.closest('#ptype-cancel')  : null;

    if(!blank && !mm_ && !todo_ && !cancel){
      var el = target;
      while(el && el !== document){
        if(el.id==='ptype-blank')   { blank  = el; break; }
        if(el.id==='ptype-mindmap') { mm_    = el; break; }
        if(el.id==='ptype-todo')    { todo_  = el; break; }
        if(el.id==='ptype-cancel')  { cancel = el; break; }
        el = el.parentNode;
      }
    }

    if(blank)  { e.stopPropagation(); if(window._openBlankPage)   window._openBlankPage();   return; }
    if(mm_)    { e.stopPropagation(); if(window._openMindmapPage) window._openMindmapPage(); return; }
    if(todo_)  { e.stopPropagation(); if(window._openTodoPage)    window._openTodoPage();    return; }
    if(cancel) { e.stopPropagation(); closeOv('page-type-overlay');                           return; }
  });

  // PAGE_TITLES entry for mindmap
  if(typeof PAGE_TITLES !== 'undefined') PAGE_TITLES['mindmap'] = 'Mind Map';
})();

// ══════════════════════════════════════════════════════════
// MINDMAP ENGINE
// ══════════════════════════════════════════════════════════
(function(){
  'use strict';

  var COLORS = ['#00f5ff','#00ff9d','#7b5fff','#ff2d6b','#e8c96a','#ff00c8','#6aa8e8','#e8706a'];
  var _seq = 0;
  function nid(){ return 'mn'+(++_seq)+'_'+Date.now().toString(36); }
  function eid(){ return 'me'+(++_seq)+'_'+Date.now().toString(36); }

  var mm = {
    pageId:null, pageTitle:'',
    nodes:[], edges:[],
    pan:{x:0,y:0}, zoom:1,
    sel:null, selType:null,
    drag:null, panning:null, conn:null, editId:null,
    ready:false
  };
  var undoStack = [];
  var saveTimer = null;

  function esc(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function h2rgba(hex,a){
    var r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
    return 'rgba('+r+','+g+','+b+','+a+')';
  }
  function getWrap(){ return document.getElementById('mm-canvas-wrap'); }
  function getSVG(){  return document.getElementById('mm-svg'); }
  function getVP(){   return document.getElementById('mm-vp'); }
  function toWorld(cx,cy){
    var r=getWrap().getBoundingClientRect();
    return {x:(cx-r.left-mm.pan.x)/mm.zoom, y:(cy-r.top-mm.pan.y)/mm.zoom};
  }

  // ── UNDO ──────────────────────────────────────────────
  function snap(){
    undoStack.push(JSON.stringify({nodes:mm.nodes,edges:mm.edges}));
    if(undoStack.length>30) undoStack.shift();
  }
  function undo(){
    if(!undoStack.length) return;
    var s=JSON.parse(undoStack.pop());
    mm.nodes=s.nodes; mm.edges=s.edges;
    mm.sel=null; mm.selType=null;
    render(); scheduleSave();
  }

  // ── GEOMETRY ────────────────────────────────────────
  function nodeSize(n){
    var fs=n.fontSize||13, lines=(n.text||'Idée').split('\n');
    var maxLen=lines.reduce(function(m,l){return Math.max(m,l.length);},0);
    return {w:Math.max(80,Math.min(240,Math.ceil(maxLen*fs*0.58)+40)),
            h:Math.max(36,Math.ceil(lines.length*fs*1.6)+16)};
  }

  function shapeSVGStr(n,hw,hh){
    var sh=n.shape||'rounded';
    if(sh==='rect')    return '<rect x="'+(-hw)+'" y="'+(-hh)+'" width="'+(hw*2)+'" height="'+(hh*2)+'" rx="3"/>';
    if(sh==='rounded') return '<rect x="'+(-hw)+'" y="'+(-hh)+'" width="'+(hw*2)+'" height="'+(hh*2)+'" rx="14"/>';
    if(sh==='circle')  return '<ellipse cx="0" cy="0" rx="'+hw+'" ry="'+hh+'"/>';
    if(sh==='diamond') return '<polygon points="0,'+(-hh)+' '+hw+',0 0,'+hh+' '+(-hw)+',0"/>';
    var pts=[];
    for(var i=0;i<6;i++){var a=Math.PI/3*i-Math.PI/6;pts.push((hw*.93*Math.cos(a)).toFixed(1)+','+(hh*.93*Math.sin(a)).toFixed(1));}
    return '<polygon points="'+pts.join(' ')+'"/>';
  }

  // ── BUILD SVG ───────────────────────────────────────
  function buildNodeSVG(n){
    var sz=nodeSize(n); n._w=sz.w; n._h=sz.h;
    var hw=sz.w/2,hh=sz.h/2,col=n.color||COLORS[0],fs=n.fontSize||13;
    var sel=(mm.sel===n.id&&mm.selType==='node');
    var fill=h2rgba(col,sel?.25:.12), sw=sel?2.5:1.5;
    var glow=sel?'filter:drop-shadow(0 0 8px '+col+')':'';
    var lines=(n.text||'Idée').split('\n'), lh=fs*1.6, ty0=-(lines.length-1)*lh/2;
    var textSVG=lines.map(function(l,i){
      return '<text x="0" y="'+(ty0+i*lh).toFixed(1)+'" text-anchor="middle" dominant-baseline="middle"'+
             ' fill="'+col+'" font-family="Outfit,sans-serif" font-size="'+fs+'px"'+
             ' style="pointer-events:none;user-select:none">'+esc(l||' ')+'</text>';
    }).join('');
    var handle='<circle class="mmH" cx="'+(hw+9)+'" cy="0" r="6"'+
      ' fill="'+col+'" stroke="rgba(0,0,0,0.4)" stroke-width="1.2" opacity="0.8"'+
      ' data-nid="'+n.id+'" style="cursor:crosshair"/>';
    var shape='<g style="fill:'+fill+';stroke:'+col+';stroke-width:'+sw+';'+glow+'">'+shapeSVGStr(n,hw,hh)+'</g>';
    return '<g class="mmN" id="mmN'+n.id+'" data-id="'+n.id+'"'+
      ' transform="translate('+n.x.toFixed(1)+','+n.y.toFixed(1)+')" style="cursor:move">'+
      shape+textSVG+handle+'</g>';
  }

  // Returns the point on the border of node n closest to direction (tx-n.x, ty-n.y)
  function borderPoint(n, tx, ty){
    var hw=(n._w||100)/2, hh=(n._h||40)/2;
    var dx=tx-n.x, dy=ty-n.y;
    if(dx===0 && dy===0) return {x:n.x+hw, y:n.y};
    // scale factor so the ray hits the rectangle border
    var scaleX = dx!==0 ? hw/Math.abs(dx) : Infinity;
    var scaleY = dy!==0 ? hh/Math.abs(dy) : Infinity;
    var scale  = Math.min(scaleX, scaleY);
    return { x: n.x + dx*scale, y: n.y + dy*scale };
  }

  function buildEdgeSVG(e){
    var f=mm.nodes.find(function(n){return n.id===e.from;});
    var t=mm.nodes.find(function(n){return n.id===e.to;});
    if(!f||!t) return '';
    // Exit point on source border, toward target center
    var p1=borderPoint(f, t.x, t.y);
    // Entry point on target border, toward source center
    var p2=borderPoint(t, f.x, f.y);
    var dx=p2.x-p1.x;
    var cp=Math.max(Math.abs(dx)*.5, 40);
    var d='M'+p1.x.toFixed(1)+','+p1.y.toFixed(1)+
          ' C'+(p1.x+cp).toFixed(1)+','+p1.y.toFixed(1)+
          ' '+(p2.x-cp).toFixed(1)+','+p2.y.toFixed(1)+
          ' '+p2.x.toFixed(1)+','+p2.y.toFixed(1);
    var sel=(mm.sel===e.id&&mm.selType==='edge');
    var col=sel?'rgba(255,255,255,.9)':'rgba(0,245,255,.5)', sw=sel?2.5:1.5;
    return '<g class="mmE" id="mmE'+e.id+'" data-id="'+e.id+'">'+
      '<path d="'+d+'" stroke="'+col+'" stroke-width="'+sw+'" fill="none" marker-end="url(#mm-arrowhead)"/>'+
      '<path d="'+d+'" stroke="transparent" stroke-width="16" fill="none" style="cursor:pointer"/>'+
    '</g>';
  }

  // ── RENDER ─────────────────────────────────────────
  function render(){
    var vp=getVP(), eg=document.getElementById('mm-edges-g'), ng=document.getElementById('mm-nodes-g');
    if(!vp||!eg||!ng) return;
    vp.setAttribute('transform','translate('+mm.pan.x.toFixed(1)+','+mm.pan.y.toFixed(1)+') scale('+mm.zoom.toFixed(4)+')');
    eg.innerHTML=mm.edges.map(buildEdgeSVG).join('');
    ng.innerHTML=mm.nodes.map(buildNodeSVG).join('');
    var hint=document.getElementById('mm-hint');
    if(hint) hint.style.display=mm.nodes.length?'none':'block';
    bindNodeEvt(); bindEdgeEvt(); updateProps();
  }

  function bindNodeEvt(){
    var ng=document.getElementById('mm-nodes-g'); if(!ng) return;
    ng.querySelectorAll('.mmN').forEach(function(el){
      el.addEventListener('mousedown',function(e){
        if(e.target.classList.contains('mmH')) return;
        e.stopPropagation(); onNodeDown(e,el.dataset.id);
      });
      el.addEventListener('dblclick',function(e){e.stopPropagation();e.preventDefault();openTextEdit(el.dataset.id);});
    });
    ng.querySelectorAll('.mmH').forEach(function(el){
      el.addEventListener('mousedown',function(e){e.stopPropagation();e.preventDefault();startConn(el.dataset.nid,e);});
    });
  }

  function bindEdgeEvt(){
    var eg=document.getElementById('mm-edges-g'); if(!eg) return;
    eg.querySelectorAll('.mmE').forEach(function(el){
      el.addEventListener('mousedown',function(e){e.stopPropagation();selectEdge(el.dataset.id);});
    });
  }

  // ── PAN INIT ───────────────────────────────────────
  function initPan(){
    var wrap=getWrap(); if(!wrap) return;
    var r=wrap.getBoundingClientRect();
    if(r.width===0) return;
    mm.pan.x=r.width/2; mm.pan.y=r.height/2; mm.ready=true;
  }

  // ── NODE OPS ───────────────────────────────────────
  function addNode(wx,wy){
    snap();
    var n={id:nid(),x:wx,y:wy,text:'Idée',color:COLORS[mm.nodes.length%COLORS.length],shape:'rounded',fontSize:13};
    mm.nodes.push(n); render(); scheduleSave();
    setTimeout(function(){openTextEdit(n.id);},40);
  }
  function deleteNode(id){
    snap();
    mm.nodes=mm.nodes.filter(function(n){return n.id!==id;});
    mm.edges=mm.edges.filter(function(e){return e.from!==id&&e.to!==id;});
    if(mm.sel===id){mm.sel=null;mm.selType=null;}
    render(); scheduleSave();
  }
  function selectNode(id){mm.sel=id;mm.selType='node';render();updateProps();}
  function selectEdge(id){mm.sel=id;mm.selType='edge';render();updateProps();}
  function deselect(){mm.sel=null;mm.selType=null;render();updateProps();}

  // ── EDGE OPS ───────────────────────────────────────
  function addEdge(from,to){
    var dup=mm.edges.some(function(e){return(e.from===from&&e.to===to)||(e.from===to&&e.to===from);});
    if(dup){if(typeof showToast==='function')showToast('Connexion déjà existante.');return;}
    snap(); mm.edges.push({id:eid(),from:from,to:to}); render(); scheduleSave();
  }
  function deleteEdge(id){
    snap();
    mm.edges=mm.edges.filter(function(e){return e.id!==id;});
    if(mm.sel===id){mm.sel=null;mm.selType=null;}
    render(); scheduleSave();
  }
  function startConn(fromId,e){
    deselect();
    var wp=toWorld(e.clientX,e.clientY);
    mm.conn={from:fromId,tx:wp.x,ty:wp.y};
    getWrap().classList.add('mm-connecting');
  }
  function cancelConn(){
    mm.conn=null;
    var tl=document.getElementById('mm-temp-line'); if(tl) tl.innerHTML='';
    var w=getWrap(); if(w) w.classList.remove('mm-connecting');
  }
  function completeConn(toId){
    var from=mm.conn?mm.conn.from:null; cancelConn();
    if(!from||from===toId) return; addEdge(from,toId);
  }
  function drawTempLine(fn,tx,ty){
    var tl=document.getElementById('mm-temp-line'); if(!tl||!fn) return;
    // Start from border of source node toward cursor
    var bp=borderPoint(fn,tx,ty); fn={x:bp.x,y:bp.y};
    var cp=Math.max(Math.abs(tx-fn.x)*.5,50);
    tl.innerHTML='<path d="M'+fn.x+','+fn.y+' C'+(fn.x+cp)+','+fn.y+' '+(tx-cp)+','+ty+' '+tx+','+ty+'"'+
      ' stroke="rgba(0,245,255,.7)" stroke-width="1.8" fill="none" stroke-dasharray="6,3" marker-end="url(#mm-arrowhead)"/>';
  }

  // ── TEXT EDIT ──────────────────────────────────────
  function openTextEdit(nodeId){
    var n=mm.nodes.find(function(x){return x.id===nodeId;}); if(!n) return;
    var sz=nodeSize(n), ov=document.getElementById('mm-text-overlay'), ta=document.getElementById('mm-text-ta');
    if(!ov||!ta) return;
    var sx=n.x*mm.zoom+mm.pan.x, sy=n.y*mm.zoom+mm.pan.y;
    var sw=Math.max(sz.w*mm.zoom,120), sh=Math.max(sz.h*mm.zoom,36);
    ov.style.left=(sx-sw/2)+'px'; ov.style.top=(sy-sh/2-2)+'px';
    ov.style.width=sw+'px'; ov.style.display='flex';
    ta.style.minHeight=sh+'px'; ta.value=n.text||'';
    mm.editId=nodeId;
    setTimeout(function(){ta.focus();ta.select();},0);
  }
  function confirmTextEdit(){
    var ta=document.getElementById('mm-text-ta'), ov=document.getElementById('mm-text-overlay');
    if(!mm.editId||!ta) return;
    var n=mm.nodes.find(function(x){return x.id===mm.editId;});
    if(n){
      n.text=ta.value.trim()||'Idée';
      if(mm.nodes.length===1&&!mm.pageTitle){
        mm.pageTitle=n.text;
        var ti=document.getElementById('mm-title-inp'); if(ti) ti.value=n.text;
        var pt=document.getElementById('page-title');  if(pt) pt.textContent=n.text;
      }
      render(); scheduleSave();
    }
    if(ov) ov.style.display='none'; mm.editId=null;
  }
  function cancelTextEdit(){
    var ov=document.getElementById('mm-text-overlay'); if(ov) ov.style.display='none'; mm.editId=null;
  }

  // ── PROPS PANEL ────────────────────────────────────
  function updateProps(){
    var panel=document.getElementById('mm-props'); if(!panel) return;
    if(mm.sel&&mm.selType==='node'){
      panel.style.display='block';
      panel.querySelectorAll('.mm-node-only').forEach(function(e){e.style.display='';});
      panel.querySelectorAll('.mm-edge-only').forEach(function(e){e.style.display='none';});
      var n=mm.nodes.find(function(x){return x.id===mm.sel;}); if(!n) return;
      panel.querySelectorAll('.mm-c-dot').forEach(function(d){d.classList.toggle('mm-c-active',d.dataset.color===(n.color||COLORS[0]));});
      panel.querySelectorAll('.mm-sh-btn').forEach(function(b){b.classList.toggle('mm-sh-active',b.dataset.shape===(n.shape||'rounded'));});
      panel.querySelectorAll('.mm-fs-btn').forEach(function(b){b.classList.toggle('mm-fs-active',+b.dataset.fs===(n.fontSize||13));});
    } else if(mm.sel&&mm.selType==='edge'){
      panel.style.display='block';
      panel.querySelectorAll('.mm-node-only').forEach(function(e){e.style.display='none';});
      panel.querySelectorAll('.mm-edge-only').forEach(function(e){e.style.display='';});
    } else { panel.style.display='none'; }
  }

  function initPropsPanel(){
    var panel=document.getElementById('mm-props'); if(!panel) return;
    panel.querySelectorAll('.mm-c-dot').forEach(function(dot){
      dot.addEventListener('click',function(){
        if(mm.sel&&mm.selType==='node'){snap();var n=mm.nodes.find(function(x){return x.id===mm.sel;});if(n){n.color=dot.dataset.color;render();scheduleSave();}}
      });
    });
    panel.querySelectorAll('.mm-sh-btn').forEach(function(btn){
      btn.addEventListener('click',function(){
        if(mm.sel&&mm.selType==='node'){snap();var n=mm.nodes.find(function(x){return x.id===mm.sel;});if(n){n.shape=btn.dataset.shape;render();scheduleSave();}}
      });
    });
    panel.querySelectorAll('.mm-fs-btn').forEach(function(btn){
      btn.addEventListener('click',function(){
        if(mm.sel&&mm.selType==='node'){snap();var n=mm.nodes.find(function(x){return x.id===mm.sel;});if(n){n.fontSize=+btn.dataset.fs;render();scheduleSave();}}
      });
    });
    var delEdgeBtn=document.getElementById('mm-del-edge-btn');
    if(delEdgeBtn) delEdgeBtn.addEventListener('click',function(){if(mm.sel&&mm.selType==='edge')deleteEdge(mm.sel);});
  }

  // ── FIT VIEW ───────────────────────────────────────
  function fitAll(){
    if(!mm.nodes.length){mm.pan.x=0;mm.pan.y=0;mm.zoom=1;render();return;}
    var wrap=getWrap(); if(!wrap) return;
    var ww=wrap.clientWidth,wh=wrap.clientHeight; if(!ww||!wh) return;
    var minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity;
    mm.nodes.forEach(function(n){
      var hw=(n._w||100)/2,hh=(n._h||40)/2;
      minX=Math.min(minX,n.x-hw);maxX=Math.max(maxX,n.x+hw);
      minY=Math.min(minY,n.y-hh);maxY=Math.max(maxY,n.y+hh);
    });
    var pad=80, nz=Math.max(0.1,Math.min(1.6,Math.min(ww/(maxX-minX+pad*2),wh/(maxY-minY+pad*2))));
    mm.zoom=nz; mm.pan.x=(ww-(minX+maxX)*nz)/2; mm.pan.y=(wh-(minY+maxY)*nz)/2; render();
  }

  // ── SAVE ───────────────────────────────────────────
  function scheduleSave(){clearTimeout(saveTimer);saveTimer=setTimeout(doSave,600);}
  function doSave(){
    var ti=document.getElementById('mm-title-inp');
    var title=(ti?ti.value.trim():'')||mm.pageTitle||'Mind Map';
    mm.pageTitle=title;
    var data={
      nodes:mm.nodes.map(function(n){return {id:n.id,x:n.x,y:n.y,text:n.text,color:n.color,shape:n.shape,fontSize:n.fontSize};}),
      edges:mm.edges.map(function(e){return {id:e.id,from:e.from,to:e.to};})
    };
    if(window._mmPageSave) mm.pageId=window._mmPageSave(mm.pageId,title,data);
  }

  // ── MOUSE/KEY EVENTS ───────────────────────────────
  function onNodeDown(e,nodeId){
    if(mm.conn){completeConn(nodeId);return;}
    selectNode(nodeId);
    var wp=toWorld(e.clientX,e.clientY);
    var n=mm.nodes.find(function(x){return x.id===nodeId;});
    if(n) mm.drag={nid:nodeId,ox:wp.x-n.x,oy:wp.y-n.y};
  }
  function onBgDown(e){
    if(e.target.closest&&(e.target.closest('.mmN')||e.target.closest('.mmE')||e.target.closest('.mm-props')||e.target.closest('.mm-text-overlay')||e.target.closest('.mm-toolbar'))) return;
    deselect();
    mm.panning={sx:e.clientX,sy:e.clientY,px:mm.pan.x,py:mm.pan.y};
    getWrap().style.cursor='grabbing';
  }
  function onMouseMove(e){
    if(mm.panning){
      mm.pan.x=mm.panning.px+(e.clientX-mm.panning.sx);
      mm.pan.y=mm.panning.py+(e.clientY-mm.panning.sy);
      var vp=getVP();if(vp)vp.setAttribute('transform','translate('+mm.pan.x.toFixed(1)+','+mm.pan.y.toFixed(1)+') scale('+mm.zoom.toFixed(4)+')');
      return;
    }
    if(mm.drag){
      var wp=toWorld(e.clientX,e.clientY);
      var n=mm.nodes.find(function(x){return x.id===mm.drag.nid;}); if(!n) return;
      n.x=wp.x-mm.drag.ox; n.y=wp.y-mm.drag.oy;
      var el=document.getElementById('mmN'+n.id);
      if(el) el.setAttribute('transform','translate('+n.x.toFixed(1)+','+n.y.toFixed(1)+')');
      var eg=document.getElementById('mm-edges-g');
      if(eg){
        mm.edges.forEach(function(ed){
          if(ed.from!==n.id&&ed.to!==n.id) return;
          var eEl=document.getElementById('mmE'+ed.id); if(!eEl) return;
          var f=mm.nodes.find(function(x){return x.id===ed.from;}),t=mm.nodes.find(function(x){return x.id===ed.to;});
          if(f&&t){
            var newSVG=buildEdgeSVG(ed),tmp=document.createElementNS('http://www.w3.org/2000/svg','g');
            tmp.innerHTML=newSVG;
            if(tmp.firstChild){
              eg.replaceChild(tmp.firstChild,eEl);
              var newEl=document.getElementById('mmE'+ed.id);
              if(newEl) newEl.addEventListener('mousedown',function(ev){ev.stopPropagation();selectEdge(ed.id);});
            }
          }
        });
      }
      return;
    }
    if(mm.conn){
      var wp2=toWorld(e.clientX,e.clientY); mm.conn.tx=wp2.x; mm.conn.ty=wp2.y;
      var fn=mm.nodes.find(function(x){return x.id===mm.conn.from;});
      if(fn) drawTempLine(fn,mm.conn.tx,mm.conn.ty);
    }
  }
  function onMouseUp(e){
    if(mm.panning){mm.panning=null;getWrap().style.cursor='';}
    if(mm.drag){mm.drag=null;scheduleSave();}
    if(mm.conn){
      var wp=toWorld(e.clientX,e.clientY),hit=null;
      mm.nodes.forEach(function(n){
        if(n.id===mm.conn.from) return;
        var hw=(n._w||100)/2+14,hh=(n._h||40)/2+14;
        if(Math.abs(n.x-wp.x)<hw&&Math.abs(n.y-wp.y)<hh) hit=n;
      });
      if(hit) completeConn(hit.id); else cancelConn();
    }
  }
  function onDblClick(e){
    if(e.target.closest&&(e.target.closest('.mmN')||e.target.closest('.mm-props')||e.target.closest('.mm-toolbar')||e.target.closest('.mm-text-overlay'))) return;
    if(!mm.ready){initPan();mm.ready=true;}
    var wp=toWorld(e.clientX,e.clientY); addNode(wp.x,wp.y);
  }
  function onWheel(e){
    e.preventDefault();
    var r=getWrap().getBoundingClientRect(),cx=e.clientX-r.left,cy=e.clientY-r.top;
    var delta=e.deltaY>0?.88:1.14, nz=Math.max(0.08,Math.min(3.5,mm.zoom*delta));
    mm.pan.x=cx-(cx-mm.pan.x)*(nz/mm.zoom); mm.pan.y=cy-(cy-mm.pan.y)*(nz/mm.zoom); mm.zoom=nz;
    var vp=getVP();if(vp)vp.setAttribute('transform','translate('+mm.pan.x.toFixed(1)+','+mm.pan.y.toFixed(1)+') scale('+mm.zoom.toFixed(4)+')');
  }
  function onKey(e){
    var tag=document.activeElement?document.activeElement.tagName:'';
    if(tag==='INPUT'||tag==='TEXTAREA') return;
    var mmView=document.getElementById('view-mindmap');
    if(!mmView||!mmView.classList.contains('active')) return;
    if((e.key==='Delete'||e.key==='Backspace')&&mm.sel){
      e.preventDefault();
      if(mm.selType==='node') deleteNode(mm.sel); else if(mm.selType==='edge') deleteEdge(mm.sel);
    }
    if((e.ctrlKey||e.metaKey)&&e.key==='z'){e.preventDefault();undo();}
    if(e.key==='Escape'){deselect();cancelTextEdit();cancelConn();}
  }

  // ── TOOLBAR ────────────────────────────────────────
  function initToolbar(){
    var addBtn=document.getElementById('mm-tb-add');
    if(addBtn) addBtn.addEventListener('click',function(){
      if(!mm.ready){initPan();mm.ready=true;}
      var wrap=getWrap(),cx=wrap?wrap.clientWidth/2:400,cy=wrap?wrap.clientHeight/2:300;
      var ang=mm.nodes.length*2.4, rad=60+(mm.nodes.length%8)*40;
      var wp=toWorld(cx+Math.cos(ang)*rad,cy+Math.sin(ang)*rad); addNode(wp.x,wp.y);
    });
    var delBtn=document.getElementById('mm-tb-del');
    if(delBtn) delBtn.addEventListener('click',function(){if(mm.sel){if(mm.selType==='node')deleteNode(mm.sel);else if(mm.selType==='edge')deleteEdge(mm.sel);}});
    var undoBtn=document.getElementById('mm-tb-undo');
    if(undoBtn) undoBtn.addEventListener('click',undo);
    var fitBtn=document.getElementById('mm-tb-fit');
    if(fitBtn) fitBtn.addEventListener('click',fitAll);
    var zinBtn=document.getElementById('mm-tb-zin');
    if(zinBtn) zinBtn.addEventListener('click',function(){mm.zoom=Math.min(3.5,mm.zoom*1.2);var vp=getVP();if(vp)vp.setAttribute('transform','translate('+mm.pan.x.toFixed(1)+','+mm.pan.y.toFixed(1)+') scale('+mm.zoom.toFixed(4)+')');});
    var zoutBtn=document.getElementById('mm-tb-zout');
    if(zoutBtn) zoutBtn.addEventListener('click',function(){mm.zoom=Math.max(0.08,mm.zoom/1.2);var vp=getVP();if(vp)vp.setAttribute('transform','translate('+mm.pan.x.toFixed(1)+','+mm.pan.y.toFixed(1)+') scale('+mm.zoom.toFixed(4)+')');});
    var zrBtn=document.getElementById('mm-tb-zreset');
    if(zrBtn) zrBtn.addEventListener('click',function(){mm.zoom=1;mm.pan={x:0,y:0};mm.ready=false;initPan();var vp=getVP();if(vp)vp.setAttribute('transform','translate('+mm.pan.x.toFixed(1)+','+mm.pan.y.toFixed(1)+') scale('+mm.zoom.toFixed(4)+')');});
    var ti=document.getElementById('mm-title-inp');
    if(ti){
      ti.addEventListener('input',function(){
        mm.pageTitle=this.value;
        scheduleSave();
        var pt=document.getElementById('page-title');
        if(pt) pt.textContent=this.value.trim()||'Mind Map';
      });
      ti.addEventListener('keydown',function(e){
        if(e.key==='Enter'){e.preventDefault();this.blur();getWrap()&&getWrap().focus();}
      });
    }
  }

  // ── TEXT OVERLAY EVENTS ────────────────────────────
  function initTextOverlay(){
    var ta=document.getElementById('mm-text-ta'),okBtn=document.getElementById('mm-text-ok');
    if(ta){
      ta.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();confirmTextEdit();}else if(e.key==='Escape')cancelTextEdit();});
      ta.addEventListener('blur',function(){setTimeout(function(){if(mm.editId)confirmTextEdit();},200);});
    }
    if(okBtn) okBtn.addEventListener('click',confirmTextEdit);
  }

  // ── CANVAS INIT ────────────────────────────────────
  function initCanvas(){
    var svg=getSVG(),wrap=getWrap(); if(!svg||!wrap) return;
    svg.addEventListener('mousedown',onBgDown);
    svg.addEventListener('dblclick',onDblClick);
    wrap.addEventListener('wheel',onWheel,{passive:false});
    document.addEventListener('mousemove',onMouseMove);
    document.addEventListener('mouseup',onMouseUp);
    document.addEventListener('keydown',onKey);
  }

  // ── PUBLIC API ─────────────────────────────────────
  window._mmNewPage=function(){
    mm.pageId=null;mm.pageTitle='';mm.nodes=[];mm.edges=[];
    mm.sel=null;mm.selType=null;mm.conn=null;mm.drag=null;mm.panning=null;
    mm.pan={x:0,y:0};mm.zoom=1;mm.ready=false; undoStack=[];
    var ti=document.getElementById('mm-title-inp');if(ti)ti.value='';
    cancelTextEdit();
    setTimeout(function(){
      initPan(); render();
      var ti2=document.getElementById('mm-title-inp');
      if(ti2){ti2.focus();ti2.select();}
    },80);
  };
  window._mmLoadPage=function(page){
    mm.pageId=page.id;mm.pageTitle=page.title||'';
    var d=page.mmData||{nodes:[],edges:[]};
    mm.nodes=JSON.parse(JSON.stringify(d.nodes||[]));
    mm.edges=JSON.parse(JSON.stringify(d.edges||[]));
    mm.sel=null;mm.selType=null;mm.conn=null;mm.drag=null;mm.panning=null;
    mm.pan={x:0,y:0};mm.zoom=1;mm.ready=false; undoStack=[];
    var ti=document.getElementById('mm-title-inp');if(ti)ti.value=mm.pageTitle;
    cancelTextEdit();
    setTimeout(function(){initPan();render();if(mm.nodes.length)setTimeout(fitAll,80);},80);
  };

  // ── INIT ───────────────────────────────────────────
  initCanvas(); initTextOverlay(); initToolbar(); initPropsPanel();

})();

// ══════════════════════════════════════════════════════════
// TODO LIST ENGINE
// ══════════════════════════════════════════════════════════
(function(){
  'use strict';

  var td = {
    pageId: null,
    title: '',
    lists: []  // [{id, name, collapsed, items:[{id,text,done,priority,due}]}]
  };
  var saveTimer = null;
  var _duePendingItemId = null;

  function genId(){ return 'td'+ Date.now().toString(36) + Math.random().toString(36).slice(2,5); }

  // ── PERSISTENCE ─────────────────────────────────────────
  function scheduleSave(){ clearTimeout(saveTimer); saveTimer = setTimeout(doSave, 500); }
  function doSave(){
    var ti = document.getElementById('todo-title-inp');
    var title = (ti ? ti.value.trim() : '') || td.title || 'To Do';
    td.title = title;
    var data = JSON.parse(JSON.stringify(td.lists));
    if(window._tdPageSave) td.pageId = window._tdPageSave(td.pageId, title, data);
  }

  // ── STATS ────────────────────────────────────────────────
  function updateStats(){
    var total=0, done=0;
    td.lists.forEach(function(l){ l.items.forEach(function(it){ total++; if(it.done) done++; }); });
    var pct = total ? Math.round(done/total*100) : 0;
    var fill = document.getElementById('todo-prog-fill');
    var dc   = document.getElementById('todo-done-count');
    var tc   = document.getElementById('todo-total-count');
    if(fill) fill.style.width = pct + '%';
    if(dc)   dc.textContent = done;
    if(tc)   tc.textContent = total;
  }

  // ── DUE DATE HELPERS ────────────────────────────────────
  function todayStr(){ return new Date().toISOString().split('T')[0]; }
  function dueClass(due){
    if(!due) return '';
    var today = todayStr();
    if(due < today) return 'overdue';
    if(due === today) return 'today';
    var diff = Math.ceil((new Date(due+'T00:00:00') - new Date(today+'T00:00:00'))/86400000);
    if(diff <= 3) return 'soon';
    return '';
  }
  function dueLabel(due){
    if(!due) return '+ Échéance';
    var today = todayStr();
    if(due === today) return '📅 Aujourd\'hui';
    var diff = Math.ceil((new Date(due+'T00:00:00') - new Date(today+'T00:00:00'))/86400000);
    if(diff < 0) return '⚠ ' + Math.abs(diff) + 'j dépassé';
    if(diff === 1) return '📅 Demain';
    var d = new Date(due+'T00:00:00');
    return '📅 ' + d.getDate() + '/' + (d.getMonth()+1);
  }
  function prioLabel(p){ return p==='high'?'Haute':p==='low'?'Basse':'Moy.'; }
  function nextPrio(p){ return p==='med'?'high':p==='high'?'low':'med'; }

  // ── RENDER ───────────────────────────────────────────────
  function render(){
    var container = document.getElementById('todo-lists-container');
    if(!container) return;
    container.innerHTML = td.lists.map(function(list){
      var totalItems = list.items.length;
      var doneItems  = list.items.filter(function(i){return i.done;}).length;
      var countTxt   = doneItems + '/' + totalItems;
      var itemsHtml  = list.items.map(function(item){
        var dc = dueClass(item.due);
        var pc = 'prio-'+(item.priority||'med');
        return '<div class="todo-item" data-itemid="'+item.id+'" data-listid="'+list.id+'">' +
          '<div class="todo-check-wrap"><div class="todo-check'+(item.done?' checked':'')+'" data-check data-itemid="'+item.id+'" data-listid="'+list.id+'"></div></div>' +
          '<div class="todo-item-body">' +
            '<textarea class="todo-item-text'+(item.done?' checked':'')+'" data-textinp data-itemid="'+item.id+'" data-listid="'+list.id+'" rows="1" placeholder="Tâche...">' + escH(item.text||'') + '</textarea>' +
            '<div class="todo-item-sub">' +
              '<span class="todo-item-due '+ dc +'" data-due data-itemid="'+item.id+'" data-listid="'+list.id+'">'+dueLabel(item.due)+'</span>' +
              '<span class="todo-item-prio '+ pc +'" data-prio data-itemid="'+item.id+'" data-listid="'+list.id+'">'+prioLabel(item.priority||'med')+'</span>' +
            '</div>' +
          '</div>' +
          '<button class="todo-item-del" data-itemdel data-itemid="'+item.id+'" data-listid="'+list.id+'">✕</button>' +
        '</div>';
      }).join('');
      return '<div class="todo-list-block'+(list.collapsed?' collapsed':'')+'" id="tdb-'+list.id+'">' +
        '<div class="todo-list-header" data-listhdr data-listid="'+list.id+'">' +
          '<span class="todo-list-collapse">▼</span>' +
          '<input class="todo-list-name-inp" value="'+escH(list.name||'')+'" placeholder="Nom de la liste..." data-listname data-listid="'+list.id+'" maxlength="80" spellcheck="false">' +
          '<span class="todo-list-count">'+countTxt+'</span>' +
          '<button class="todo-list-del" data-listdel data-listid="'+list.id+'" title="Supprimer">✕</button>' +
        '</div>' +
        '<div class="todo-list-body">' +
          itemsHtml +
          '<div class="todo-add-item-row">' +
            '<input class="todo-add-item-inp" placeholder="+ Ajouter une tâche..." data-addinp data-listid="'+list.id+'" maxlength="200" spellcheck="false">' +
            '<button class="todo-add-item-btn" data-addbtn data-listid="'+list.id+'">Ajouter</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');
    bindEvents();
    updateStats();
    autoResizeAll();
  }

  function escH(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function autoResizeAll(){
    document.querySelectorAll('#todo-lists-container .todo-item-text').forEach(autoResize);
  }
  function autoResize(ta){
    ta.style.height='auto';
    ta.style.height=ta.scrollHeight+'px';
  }

  // ── EVENT BINDING ────────────────────────────────────────
  function bindEvents(){
    var container = document.getElementById('todo-lists-container');
    if(!container) return;

    // Checkbox toggle
    container.querySelectorAll('[data-check]').forEach(function(el){
      el.addEventListener('click', function(){
        var item = findItem(el.dataset.listid, el.dataset.itemid);
        if(!item) return;
        item.done = !item.done;
        render(); scheduleSave();
      });
    });

    // Text input
    container.querySelectorAll('[data-textinp]').forEach(function(ta){
      autoResize(ta);
      ta.addEventListener('input', function(){
        var item = findItem(ta.dataset.listid, ta.dataset.itemid);
        if(!item) return;
        item.text = ta.value;
        autoResize(ta);
        scheduleSave();
      });
      ta.addEventListener('keydown', function(e){
        if(e.key==='Enter'&&!e.shiftKey){
          e.preventDefault();
          // Add new item below this one in the same list
          addItemAfter(ta.dataset.listid, ta.dataset.itemid);
        }
        if(e.key==='Backspace'&&ta.value===''){
          e.preventDefault();
          removeItem(ta.dataset.listid, ta.dataset.itemid);
        }
      });
    });

    // Due date
    container.querySelectorAll('[data-due]').forEach(function(el){
      el.addEventListener('click', function(e){
        e.stopPropagation();
        _duePendingItemId = el.dataset.itemid + '|' + el.dataset.listid;
        var di = document.getElementById('todo-date-inp-hidden');
        if(!di) return;
        var item = findItem(el.dataset.listid, el.dataset.itemid);
        if(item && item.due) di.value = item.due; else di.value = '';
        di.showPicker ? di.showPicker() : di.click();
      });
    });

    // Priority cycle
    container.querySelectorAll('[data-prio]').forEach(function(el){
      el.addEventListener('click', function(){
        var item = findItem(el.dataset.listid, el.dataset.itemid);
        if(!item) return;
        item.priority = nextPrio(item.priority||'med');
        render(); scheduleSave();
      });
    });

    // Item delete
    container.querySelectorAll('[data-itemdel]').forEach(function(btn){
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        removeItem(btn.dataset.listid, btn.dataset.itemid);
      });
    });

    // List collapse toggle
    container.querySelectorAll('[data-listhdr]').forEach(function(hdr){
      hdr.addEventListener('click', function(e){
        // Don't collapse if clicking inside input or button
        if(e.target.tagName==='INPUT'||e.target.tagName==='BUTTON') return;
        var list = findList(hdr.dataset.listid);
        if(!list) return;
        list.collapsed = !list.collapsed;
        render(); scheduleSave();
      });
    });

    // List name
    container.querySelectorAll('[data-listname]').forEach(function(inp){
      inp.addEventListener('input', function(){
        var list = findList(inp.dataset.listid);
        if(list){ list.name = inp.value; scheduleSave(); updateStats(); }
      });
      inp.addEventListener('click', function(e){ e.stopPropagation(); });
    });

    // List delete
    container.querySelectorAll('[data-listdel]').forEach(function(btn){
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        td.lists = td.lists.filter(function(l){ return l.id !== btn.dataset.listid; });
        render(); scheduleSave();
        if(typeof showToast==='function') showToast('Liste supprimée.');
      });
    });

    // Add item input (Enter key)
    container.querySelectorAll('[data-addinp]').forEach(function(inp){
      inp.addEventListener('keydown', function(e){
        if(e.key==='Enter'){ e.preventDefault(); addItemFromInput(inp); }
      });
      inp.addEventListener('click', function(e){ e.stopPropagation(); });
    });

    // Add item button
    container.querySelectorAll('[data-addbtn]').forEach(function(btn){
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        var inp = document.querySelector('[data-addinp][data-listid="'+btn.dataset.listid+'"]');
        if(inp) addItemFromInput(inp);
      });
    });
  }

  // ── FIND HELPERS ─────────────────────────────────────────
  function findList(lid){ return td.lists.find(function(l){ return l.id===lid; }); }
  function findItem(lid, iid){
    var list = findList(lid);
    return list ? list.items.find(function(i){ return i.id===iid; }) : null;
  }

  // ── ITEM OPERATIONS ──────────────────────────────────────
  function addItemFromInput(inp){
    var listId = inp.dataset.listid;
    var text = inp.value.trim();
    inp.value = '';
    var list = findList(listId);
    if(!list) return;
    var newItem = {id:genId(), text:text, done:false, priority:'med', due:''};
    list.items.push(newItem);
    render(); scheduleSave();
    // Re-query the input after render (DOM was rebuilt) and refocus it
    setTimeout(function(){
      var newInp = document.querySelector('[data-addinp][data-listid="'+listId+'"]');
      if(newInp) newInp.focus();
    }, 30);
  }

  function addItemAfter(lid, afterId){
    var list = findList(lid); if(!list) return;
    var idx = list.items.findIndex(function(i){ return i.id===afterId; });
    var newItem = {id:genId(), text:'', done:false, priority:'med', due:''};
    list.items.splice(idx+1, 0, newItem);
    render(); scheduleSave();
    setTimeout(function(){
      var newTa = document.querySelector('[data-textinp][data-itemid="'+newItem.id+'"]');
      if(newTa) newTa.focus();
    }, 30);
  }

  function removeItem(lid, iid){
    var list = findList(lid); if(!list) return;
    var idx = list.items.findIndex(function(i){ return i.id===iid; });
    if(idx < 0) return;
    list.items.splice(idx, 1);
    render(); scheduleSave();
  }

  // ── ADD LIST ─────────────────────────────────────────────
  function addList(){
    var newList = {id:genId(), name:'', collapsed:false, items:[]};
    td.lists.push(newList);
    render(); scheduleSave();
    setTimeout(function(){
      var inp = document.querySelector('[data-listname][data-listid="'+newList.id+'"]');
      if(inp) inp.focus();
    }, 30);
  }

  // ── TITLE ────────────────────────────────────────────────
  function initTitleInput(){
    var ti = document.getElementById('todo-title-inp');
    if(!ti) return;
    ti.addEventListener('input', function(){
      td.title = this.value;
      scheduleSave();
      var pt = document.getElementById('page-title');
      if(pt) pt.textContent = this.value.trim() || 'To Do';
    });
    ti.addEventListener('keydown', function(e){
      if(e.key==='Enter'){ e.preventDefault(); this.blur(); }
    });
  }

  // ── DUE DATE PICKER ──────────────────────────────────────
  function initDatePicker(){
    var di = document.getElementById('todo-date-inp-hidden');
    if(!di) return;
    di.addEventListener('change', function(){
      if(!_duePendingItemId) return;
      var parts = _duePendingItemId.split('|');
      var iid = parts[0], lid = parts[1];
      var item = findItem(lid, iid);
      if(item){ item.due = di.value; render(); scheduleSave(); }
      _duePendingItemId = null;
    });
  }

  // ── PUBLIC API ────────────────────────────────────────────
  window._tdNewPage = function(){
    td.pageId = null; td.title = ''; td.lists = [];
    var ti = document.getElementById('todo-title-inp');
    if(ti){ ti.value=''; setTimeout(function(){ ti.focus(); }, 80); }
    render();
    // Auto-create first list
    addList();
  };

  window._tdLoadPage = function(page){
    td.pageId = page.id; td.title = page.title || '';
    td.lists = JSON.parse(JSON.stringify(page.tdData || []));
    var ti = document.getElementById('todo-title-inp');
    if(ti) ti.value = td.title;
    render();
  };

  // ── ADD LIST BUTTON ──────────────────────────────────────
  var addListBtn = document.getElementById('todo-add-list-btn');
  if(addListBtn) addListBtn.addEventListener('click', addList);

  // ── INIT ─────────────────────────────────────────────────
  initTitleInput();
  initDatePicker();

})();

// ══════════════════════════════════════════════════════════
// MAP MODULE — v3 (progress bars + neon hover per zone)
// ══════════════════════════════════════════════════════════
(function(){
  'use strict';

  // ── Zone definitions ────────────────────────────────────
  // id       = SVG path id AND app category name
  // label    = display name
  // emoji    = panel icon
  // hoverClr = neon fill on hover when unlocked (rgba)
  var ZONES = [
    { id:'Projets',       label:'Projects Island',   emoji:'🗺',  cat:'Projets',       hoverClr:'rgba(160,160,170,0.35)' },
    { id:'Creatif',       label:'Creative Glacier',  emoji:'🎨',  cat:'Creatif',       hoverClr:'rgba(100,180,230,0.35)' },
    { id:'Sport',         label:'Sports Valleys',    emoji:'🏃',  cat:'Sport',         hoverClr:'rgba(100,220,140,0.35)' },
    { id:'Apprentissage', label:'Learning Kingdom',  emoji:'📚',  cat:'Apprentissage', hoverClr:'rgba(100,220,140,0.30)' },
    { id:'Personnel',     label:'Personal Garden',   emoji:'🌱',  cat:'Personnel',     hoverClr:'rgba(40,120,50,0.45)'   },
    { id:'Voyage',        label:'Travel Canyon',     emoji:'✈️', cat:'Voyage',        hoverClr:'rgba(255,165,60,0.35)'  },
    { id:'Carriere',      label:'Career Wasteland',  emoji:'⚙️', cat:'Carriere',      hoverClr:'rgba(120,40,160,0.45)'  },
    { id:'Bien-etre',     label:'Well-Being Area',   emoji:'🌸',  cat:'Bien-etre',     hoverClr:'rgba(240,230,100,0.35)' },
    { id:'Social',        label:'Social Field',      emoji:'🤝',  cat:'Social',        hoverClr:'rgba(100,220,140,0.30)' }
  ];

  var LS_KEY = 'hz_map_unlocked';
  var tooltipInited = false;

  // ── Persistence ─────────────────────────────────────────
  function loadUnlocked(){
    try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); } catch(e){ return []; }
  }
  function saveUnlocked(arr){
    try { localStorage.setItem(LS_KEY, JSON.stringify(arr)); } catch(e){}
  }

  // ── Stats complètes par catégorie ───────────────────────
  function statsByCategory(){
    var stats = {};
    ZONES.forEach(function(z){
      stats[z.cat] = { quests: 0, tasksDone: 0, tasksTotal: 0, avgProgress: 0, _pSum: 0 };
    });
    if(typeof goals === 'undefined' || !Array.isArray(goals)) return stats;
    goals.forEach(function(g){
      if(!stats.hasOwnProperty(g.cat)) return;
      var s = stats[g.cat];
      s.quests++;
      var ms = g.milestones || [];
      s.tasksTotal += ms.length;
      s.tasksDone  += ms.filter(function(m){ return m.done; }).length;
      s._pSum      += Math.min(g.progress || 0, 100);
    });
    ZONES.forEach(function(z){
      var s = stats[z.cat];
      s.avgProgress = s.quests > 0 ? Math.round(s._pSum / s.quests) : 0;
    });
    return stats;
  }

  // ── Compute unlocked zones (has at least 1 quest) ────────
  function computeUnlocked(){
    if(typeof goals === 'undefined' || !Array.isArray(goals)) return [];
    var out = [];
    ZONES.forEach(function(z){
      if(goals.some(function(g){ return g.cat === z.cat; })){
        out.push(z.id);
      }
    });
    return out;
  }

  // ── Zone label positions (SVG viewBox 0 0 1004 754) ────────────
  // x/y = centre du texte %, positionné sous le nom écrit sur le PNG
  var ZONE_LABEL_POS = {
    'Projets':       { x: 205, y: 155 },
    'Creatif':       { x: 453, y: 118 },
    'Sport':         { x: 778, y: 230 },
    'Apprentissage': { x: 278, y: 360 },
    'Personnel':     { x: 516, y: 368 },
    'Voyage':        { x: 782, y: 400 },
    'Carriere':      { x: 228, y: 572 },
    'Bien-etre':     { x: 455, y: 538 },
    'Social':        { x: 678, y: 536 },
  };

  function renderMapLabels(unlocked) {
    var g = document.getElementById('map-labels-g');
    if (!g) return;
    var cats = statsByCategory();
    var html = '';

    ZONES.forEach(function(z) {
      if (unlocked.indexOf(z.id) === -1) return;
      var pos = ZONE_LABEL_POS[z.id];
      if (!pos) return;

      var s     = cats[z.cat] || { avgProgress: 0 };
      var pct   = s.avgProgress;
      var color = pct >= 100 ? '#00ff9d' : '#00f5ff';
      var glow  = pct >= 100 ? 'rgba(0,255,157,0.85)' : 'rgba(0,245,255,0.85)';
      var glowS = pct >= 100 ? 'rgba(0,255,157,0.25)' : 'rgba(0,245,255,0.25)';

      var barW  = 80;
      var barH  = 4;
      var fillW = Math.round(barW * pct / 100);
      var bx    = pos.x - barW / 2;
      var by    = pos.y;

      html +=
        '<g class="map-zone-lbl" pointer-events="none">' +

          // ── Shadow blur under bar (spread glow effect, no solid bg) ──
          '<rect x="' + (bx - 4) + '" y="' + (by - 4) + '"'
            + ' width="' + (barW + 8) + '" height="' + (barH + 8) + '"'
            + ' rx="6" fill="' + glow + '" opacity="0.18"'
            + ' style="filter:blur(6px)"/>' +

          // ── Bar track (dark semi-transparent) ──
          '<rect x="' + bx + '" y="' + by + '"'
            + ' width="' + barW + '" height="' + barH + '"'
            + ' rx="2" fill="rgba(0,0,0,0.45)"/>' +

          // ── Bar fill ──
          (fillW > 0
            ? '<rect x="' + bx + '" y="' + by + '"'
              + ' width="' + fillW + '" height="' + barH + '"'
              + ' rx="2" fill="' + color + '"'
              + ' style="filter:drop-shadow(0 0 4px ' + glow + ') drop-shadow(0 0 8px ' + glowS + ')"/>'
            : '') +

          // ── Percentage text below bar ──
          '<text x="' + pos.x + '" y="' + (by + barH + 13) + '"'
            + ' text-anchor="middle" dominant-baseline="middle"'
            + ' fill="' + color + '"'
            + ' font-size="11" font-family="Outfit,sans-serif" font-weight="700"'
            + ' letter-spacing="1"'
            + ' style="filter:drop-shadow(0 0 5px ' + glow + ') drop-shadow(0 0 10px ' + glowS + ')">'
            + pct + '%</text>' +

        '</g>';
    });

    g.innerHTML = html;
  }

  // ── Render right panel ───────────────────────────────────
  function renderPanel(unlocked){
    var listEl   = document.getElementById('map-panel-list');
    var countEl  = document.getElementById('map-panel-count');
    var subEl    = document.getElementById('map-topbar-sub');
    if(!listEl) return;

    var cats = statsByCategory();

    listEl.innerHTML = ZONES.map(function(z){
      var isUnlocked = unlocked.indexOf(z.id) !== -1;
      var s          = cats[z.cat] || { quests:0, tasksDone:0, tasksTotal:0, avgProgress:0 };
      var barPct     = isUnlocked ? s.avgProgress : 0;

      var barLabel;
      if(!isUnlocked){
        barLabel = 'Verrouillée';
      } else {
        var questStr = s.quests + ' quête' + (s.quests > 1 ? 's' : '');
        var taskStr  = s.tasksTotal > 0
          ? s.tasksDone + '/' + s.tasksTotal + ' tâches'
          : 'aucune tâche';
        barLabel = questStr + '  ·  ' + taskStr + '  ·  ' + s.avgProgress + '%';
      }

      return '<div class="map-panel-item' + (isUnlocked ? ' zone-unlocked' : '') + '" data-zone="' + z.id + '">'
        + '<div class="map-panel-item-row">'
        +   '<div class="map-panel-dot"></div>'
        +   '<span class="map-panel-emoji">' + z.emoji + '</span>'
        +   '<span class="map-panel-name">' + z.label + '</span>'
        +   '<span class="map-panel-lock">🔒</span>'
        + '</div>'
        + '<div class="map-panel-bar-wrap">'
        +   '<div class="map-panel-bar-track">'
        +     '<div class="map-panel-bar-fill" style="width:' + barPct + '%"></div>'
        +   '</div>'
        +   '<div class="map-panel-bar-label">' + barLabel + '</div>'
        + '</div>'
        + '</div>';
    }).join('');

    var n = unlocked.length;
    if(countEl) countEl.textContent = n + '/' + ZONES.length;
    if(subEl)   subEl.textContent   = n + '/' + ZONES.length + ' zones déverrouillées';

    // Panel item click → pulse highlight on map
    listEl.querySelectorAll('.map-panel-item').forEach(function(item){
      item.addEventListener('click', function(){
        var zoneId = item.dataset.zone;
        var svg = document.querySelector('#map-svg-overlay svg');
        if(!svg) return;
        var path = svg.querySelector('#' + CSS.escape(zoneId));
        if(!path) return;
        var prev = path.style.fill;
        path.style.transition = 'fill 0.08s';
        path.style.fill = 'rgba(0,245,255,0.25)';
        setTimeout(function(){
          path.style.fill = prev;
          setTimeout(function(){ path.style.transition = 'fill 0.45s ease'; }, 150);
        }, 350);
      });
    });
  }

  // ── Apply SVG zone states ────────────────────────────────
  function applyZoneStates(unlocked, animateNew){
    var svg = document.querySelector('#map-svg-overlay svg');
    if(!svg) return;

    ZONES.forEach(function(z){
      var path = svg.querySelector('#' + CSS.escape(z.id));
      if(!path) return;
      var isUnlocked  = unlocked.indexOf(z.id) !== -1;
      var wasUnlocked = path.classList.contains('unlocked');

      if(isUnlocked){
        if(animateNew && !wasUnlocked){
          path.classList.remove('inactive');
          path.classList.add('unlocking');
          (function(p){
            setTimeout(function(){
              p.classList.remove('unlocking');
              p.classList.add('unlocked');
              p.setAttribute('fill', 'transparent');
              p.style.fill = 'transparent';
            }, 1500);
          })(path);
        } else if(!wasUnlocked){
          path.classList.remove('inactive', 'unlocking');
          path.classList.add('unlocked');
          path.setAttribute('fill', 'transparent');
          path.style.fill = 'transparent';
        }
      } else {
        path.classList.remove('unlocked', 'unlocking');
        path.classList.add('inactive');
        path.removeAttribute('fill');
        path.style.fill = '';
      }
    });
  }

  // ── Tooltip ──────────────────────────────────────────────
  function initTooltip(){
    if(tooltipInited) return;
    var tooltip = document.getElementById('map-tooltip');
    var frame   = document.getElementById('map-frame');
    var svg     = document.querySelector('#map-svg-overlay svg');
    if(!tooltip || !frame || !svg) return;
    tooltipInited = true;

    ZONES.forEach(function(z){
      (function(zone){
        var path = svg.querySelector('#' + CSS.escape(zone.id));
        if(!path) return;

        path.addEventListener('mouseenter', function(){
          var isUnlocked = path.classList.contains('unlocked');
          if(isUnlocked){
            var cats = statsByCategory();
            var s = cats[zone.cat] || { quests:0, tasksDone:0, tasksTotal:0, avgProgress:0 };
            var pct = s.avgProgress;
            var questStr = s.quests + ' quête' + (s.quests > 1 ? 's' : '');
            var taskStr  = s.tasksTotal > 0
              ? s.tasksDone + '/' + s.tasksTotal + ' tâche' + (s.tasksTotal > 1 ? 's' : '')
              : 'aucune tâche';
            var barColor = pct >= 100 ? 'var(--green)' : 'var(--accent)';
            tooltip.innerHTML =
              '<div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--accent);margin-bottom:6px">' + zone.label + '</div>'
            + '<div style="display:flex;align-items:center;gap:8px;margin-bottom:5px">'
            +   '<div style="flex:1;height:5px;background:rgba(255,255,255,0.1);border-radius:3px;overflow:hidden">'
            +     '<div style="height:100%;width:' + pct + '%;background:' + barColor + ';border-radius:3px;box-shadow:0 0 6px ' + barColor + '"></div>'
            +   '</div>'
            +   '<span style="font-size:12px;font-weight:700;color:' + barColor + ';min-width:32px;text-align:right">' + pct + '%</span>'
            + '</div>'
            + '<div style="font-size:10px;color:var(--fog);display:flex;gap:12px">'
            +   '<span>📜 ' + questStr + '</span>'
            +   '<span>✅ ' + taskStr + '</span>'
            + '</div>';
            tooltip.style.minWidth = '220px';
          } else {
            tooltip.innerHTML = '<span style="letter-spacing:1.5px;text-transform:uppercase;font-size:11px;color:var(--fog)">' + zone.label + '  🔒</span>';
            tooltip.style.minWidth = '';
          }
          tooltip.classList.add('visible');
        });

        path.addEventListener('mousemove', function(e){
          var r = frame.getBoundingClientRect();
          var x = e.clientX - r.left + 14;
          var y = e.clientY - r.top  - 40;
          if(x + 260 > r.width)  x = e.clientX - r.left - 260;
          if(y < 0)               y = e.clientY - r.top  + 14;
          tooltip.style.left = x + 'px';
          tooltip.style.top  = y + 'px';
        });

        path.addEventListener('mouseleave', function(){
          tooltip.classList.remove('visible');
        });
      })(z);
    });
  }

  // ── Full render ──────────────────────────────────────────
  function renderMap(animateNew){
    var prev    = loadUnlocked();
    var current = computeUnlocked();
    var hasNew  = current.some(function(z){ return prev.indexOf(z) === -1; });
    saveUnlocked(current);
    applyZoneStates(current, animateNew && hasNew);
    renderPanel(current);
    renderMapLabels(current);
  }

  // ── Patch navigate() ─────────────────────────────────────
  var _origNav = navigate;
  navigate = function(view){
    _origNav(view);
    if(view === 'map'){
      setTimeout(function(){
        renderMap(false);
        initTooltip();
      }, 60);
    }
  };

  // ── Watch quest saves/deletes ────────────────────────────
  document.addEventListener('click', function(e){
    if(e.target.closest('#goal-save-btn') || e.target.closest('#goal-cancel-btn')){
      setTimeout(function(){ renderMap(true); }, 180);
    }
  }, true);

  // ── Patch PAGE_TITLES ────────────────────────────────────
  if(typeof PAGE_TITLES !== 'undefined') PAGE_TITLES['map'] = 'Carte des Zones';

  // ── Init after goals load ────────────────────────────────
  function waitAndInit(){
    if(typeof goals !== 'undefined' && Array.isArray(goals)){
      renderMap(false);
    } else {
      setTimeout(waitAndInit, 200);
    }
  }
  setTimeout(waitAndInit, 400);

})(); // end MAP MODULE


// ══════════════════════════════════════════════════════════
// ACHIEVEMENT SYSTEM
// ══════════════════════════════════════════════════════════
(function(){
  'use strict';

  // ── Rarity colours ──────────────────────────────────────
  const RARITY_COL  = { 'Commun':'#8b8ba0', 'Rare':'#6aa8e8', 'Épique':'#b06ae8', 'Légendaire':'#e8c96a' };
  const RARITY_GLOW = { 'Commun':'rgba(139,139,160,0.35)', 'Rare':'rgba(106,168,232,0.45)', 'Épique':'rgba(176,106,232,0.45)', 'Légendaire':'rgba(232,201,106,0.55)' };

  // ── Achievement definitions ──────────────────────────────
  const ACH = [
    // PROGRESSION
    { id:'p1', name:'Premier pas',              desc:'Compléter 1 tâche',                                     cat:'Progression',  rarity:'Commun',     type:'cumul', stat:'tasks_done', target:1,   icon:'👣', hidden:false },
    { id:'p2', name:'Ça démarre',               desc:'Compléter 5 tâches',                                    cat:'Progression',  rarity:'Commun',     type:'cumul', stat:'tasks_done', target:5,   icon:'🚀', hidden:false },
    { id:'p3', name:'Lancé',                    desc:'Compléter 10 tâches',                                   cat:'Progression',  rarity:'Rare',       type:'cumul', stat:'tasks_done', target:10,  icon:'⚡', hidden:false },
    { id:'p4', name:'Machine',                  desc:'Compléter 25 tâches',                                   cat:'Progression',  rarity:'Rare',       type:'cumul', stat:'tasks_done', target:25,  icon:'⚙️', hidden:false },
    { id:'p5', name:'Inarrêtable',              desc:'Compléter 50 tâches',                                   cat:'Progression',  rarity:'Épique',     type:'cumul', stat:'tasks_done', target:50,  icon:'💪', hidden:false },
    { id:'p6', name:'Monstre de productivité',  desc:'Compléter 100 tâches',                                  cat:'Progression',  rarity:'Épique',     type:'cumul', stat:'tasks_done', target:100, icon:'👾', hidden:false },
    // RÉGULARITÉ
    { id:'r1', name:'Retour aux affaires',      desc:'Atteindre 2 jours de streak',                          cat:'Régularité',   rarity:'Commun',     type:'cumul', stat:'streak_best', target:2,   icon:'🔥', hidden:false },
    { id:'r2', name:'Habitude',                 desc:'Atteindre 5 jours de streak',                          cat:'Régularité',   rarity:'Commun',     type:'cumul', stat:'streak_best', target:5,   icon:'📅', hidden:false },
    { id:'r3', name:'Discipline',               desc:'Atteindre 10 jours de streak',                         cat:'Régularité',   rarity:'Rare',       type:'cumul', stat:'streak_best', target:10,  icon:'🎯', hidden:false },
    { id:'r4', name:'Impliqué',                 desc:'Atteindre 20 jours de streak',                         cat:'Régularité',   rarity:'Épique',     type:'cumul', stat:'streak_best', target:20,  icon:'🏆', hidden:false },
    { id:'r5', name:'Déterminé',                desc:'Atteindre 30 jours de streak',                         cat:'Régularité',   rarity:'Épique',     type:'cumul', stat:'streak_best', target:30,  icon:'👑', hidden:false },
    // SURVIE
    { id:'hp1', name:'Juste à temps',           desc:'Ouvrir l\'app avec ≤ 20 PV',                           cat:'Survie',       rarity:'Rare',       type:'event', icon:'💙', hidden:false },
    { id:'hp2', name:'Survivant',               desc:'10 jours consécutifs sans tomber à 0 PV',              cat:'Survie',       rarity:'Rare',       type:'cumul', stat:'days_no_zero', target:10, icon:'🛡', hidden:false },
    { id:'hp3', name:'Résistant',               desc:'Passer de ≤ 10 PV à 100 PV',                          cat:'Survie',       rarity:'Épique',     type:'event', icon:'💊', hidden:false },
    { id:'hp4', name:'Phénix',                  desc:'Atteindre 0 PV puis revenir le lendemain',             cat:'Survie',       rarity:'Épique',     type:'event', icon:'🦅', hidden:false },
    { id:'hp5', name:'Indestructible',          desc:'30 jours consécutifs sans tomber à 0 PV',             cat:'Survie',       rarity:'Légendaire', type:'cumul', stat:'days_no_zero', target:30, icon:'💎', hidden:false },
    // COMPORTEMENT
    { id:'b1', name:'Honnête',                  desc:'Répondre "non" 5 fois à la popup de fin',              cat:'Comportement', rarity:'Commun',     type:'cumul', stat:'exit_non', target:5,   icon:'🙏', hidden:false },
    { id:'b2', name:'Sérieux',                  desc:'Répondre "oui" 10 fois à la popup de fin',             cat:'Comportement', rarity:'Commun',     type:'cumul', stat:'exit_oui', target:10,  icon:'💼', hidden:false },
    { id:'b3', name:'Focus',                    desc:'Répondre "oui" 3 jours d\'affilée',                    cat:'Comportement', rarity:'Rare',       type:'event', icon:'🧠', hidden:false },
    { id:'b4', name:'Rebond',                   desc:'Répondre "oui" le lendemain d\'un "non"',              cat:'Comportement', rarity:'Rare',       type:'event', icon:'↩️', hidden:false },
    { id:'b5', name:'Persévérant',              desc:'Atteindre 0 PV puis répondre "oui" dans les 3 jours', cat:'Comportement', rarity:'Épique',     type:'event', icon:'⚔️', hidden:false },
    // DÉFIS
    { id:'d1', name:'Grosse journée',           desc:'Compléter 3 tâches en 1 journée',                     cat:'Défi',         rarity:'Rare',       type:'event', icon:'💥', hidden:false },
    { id:'d2', name:'Hardcore',                 desc:'Compléter une tâche de difficulté ★★★★★',            cat:'Défi',         rarity:'Rare',       type:'event', icon:'☠️', hidden:false },
    { id:'d3', name:'Marathon',                 desc:'Répondre "oui" 7 jours d\'affilée',                   cat:'Défi',         rarity:'Épique',     type:'event', icon:'🏅', hidden:false },
    { id:'d4', name:'Momentum',                 desc:'Compléter 2 tâches dans la même journée',             cat:'Défi',         rarity:'Rare',       type:'event', icon:'💨', hidden:false },
    { id:'d5', name:'En feu',                   desc:'Compléter 3 tâches dans la même journée',             cat:'Défi',         rarity:'Épique',     type:'event', icon:'🔥', hidden:false },
    // SECRETS
    { id:'s1', name:'Tu es encore là ?',        desc:'Ouvrir l\'app entre 2h et 5h du matin',               cat:'Secret',       rarity:'Commun',     type:'event', icon:'🌙', hidden:true },
    { id:'s2', name:'Revenant',                 desc:'Revenir après 10 jours d\'absence',                   cat:'Secret',       rarity:'Rare',       type:'event', icon:'👻', hidden:true },
    { id:'s3', name:'Crash',                    desc:'Atteindre exactement 0 PV',                           cat:'Secret',       rarity:'Rare',       type:'event', icon:'💀', hidden:true },
    { id:'s4', name:'Meta',                     desc:'Débloquer 10 succès',                                  cat:'Secret',       rarity:'Rare',       type:'cumul', stat:'ach_count', target:10, icon:'🏆', hidden:true },
    { id:'s5', name:'Explorateur',              desc:'Débloquer toutes les zones de la carte',               cat:'Secret',       rarity:'Épique',     type:'event', icon:'🗺',  hidden:true },
    { id:'s6', name:'Complétionniste',          desc:'Débloquer tous les succès',                            cat:'Secret',       rarity:'Légendaire', type:'event', icon:'🌟', hidden:true },
    { id:'s7', name:'Comeback',                 desc:'Atteindre 0 PV puis compléter une tâche le même jour',cat:'Secret',       rarity:'Épique',     type:'event', icon:'🔄', hidden:true },
    { id:'s8', name:'Fantôme',                  desc:'Revenir après 7 jours d\'absence',                    cat:'Secret',       rarity:'Rare',       type:'event', icon:'👤', hidden:true },
  ];

  // ── State ───────────────────────────────────────────────
  const LS_KEY = 'hz_ach';
  let as = {}; // achievement state

  function loadAS(){
    try{ as = JSON.parse(localStorage.getItem(LS_KEY)||'{}'); }catch(e){ as={}; }
    if(!as.unlocked)  as.unlocked  = {};
    if(!as.stats)     as.stats     = {};
    if(!as.tracking)  as.tracking  = {};
  }
  function saveAS(){ localStorage.setItem(LS_KEY, JSON.stringify(as)); }
  function isUnlocked(id){ return !!as.unlocked[id]; }
  function todayS(){ return new Date().toISOString().split('T')[0]; }
  function yesterdayS(){
    const d=new Date(); d.setDate(d.getDate()-1);
    return d.toISOString().split('T')[0];
  }

  // ── Unlock ──────────────────────────────────────────────
  function unlock(id){
    if(isUnlocked(id)) return;
    const a = ACH.find(x=>x.id===id);
    if(!a) return;
    as.unlocked[id] = { date: todayS() };
    // Update ach_count
    const count = Object.keys(as.unlocked).length;
    as.stats.ach_count = count;
    as.unseen = (as.unseen||0) + 1;
    saveAS();
    showAchToast(a);
    // XP bonus
    const xpMap = {'Commun':5,'Rare':10,'Épique':20,'Légendaire':40};
    if(typeof grantXP==='function') grantXP(xpMap[a.rarity]||5, 'Succès : '+a.name);
    // Meta + Complétionniste
    setTimeout(()=>{
      checkStat('ach_count', count);
      if(ACH.every(x=>isUnlocked(x.id)) && !isUnlocked('s6')) unlock('s6');
    }, 600);
    refreshAchUI();
  }

  // ── Stat-based checks ───────────────────────────────────
  function checkStat(stat, val){
    as.stats[stat] = Math.max(as.stats[stat]||0, val);
    ACH.forEach(a=>{
      if(a.type==='cumul' && a.stat===stat && !isUnlocked(a.id)){
        if(val >= a.target) unlock(a.id);
      }
    });
  }

  // ── Task done ────────────────────────────────────────────
  function onTaskDone(diff){
    // Cumulative count
    as.stats.tasks_done = (as.stats.tasks_done||0)+1;
    checkStat('tasks_done', as.stats.tasks_done);

    // Daily count (resets per day)
    const today = todayS();
    const t = as.tracking;
    if(t.tasks_today_date !== today){ t.tasks_today_date=today; t.tasks_today=0; }
    t.tasks_today = (t.tasks_today||0)+1;
    if(t.tasks_today>=2 && !isUnlocked('d4')) unlock('d4');
    if(t.tasks_today>=3 && !isUnlocked('d1')) unlock('d1');
    if(t.tasks_today>=3 && !isUnlocked('d5')) unlock('d5');

    // Hardcore (diff 5)
    if(diff>=5 && !isUnlocked('d2')) unlock('d2');

    // Comeback (0HP same day then task)
    if(t.zero_hp_today === today && !isUnlocked('s7')) unlock('s7');
    saveAS();
  }

  // ── Streak update ────────────────────────────────────────
  function onStreakUpdate(count){
    // Use best streak for cumul checks
    const best = Math.max(as.stats.streak_best||0, count);
    checkStat('streak_best', best);
  }

  // ── HP change ────────────────────────────────────────────
  function onHPChange(newHP, prevHP){
    const today = todayS();
    const t = as.tracking;

    // hp1: open with ≤20HP
    if(newHP<=20 && newHP>0 && !isUnlocked('hp1')) unlock('hp1');

    // hp3: recover from ≤10 to 100
    if(typeof prevHP==='number' && prevHP<=10 && newHP>=100 && !isUnlocked('hp3')) unlock('hp3');

    // s3 + s7 tracking: exactly 0HP
    if(newHP<=0){
      if(!isUnlocked('s3')) unlock('s3');
      t.zero_hp_today      = today;
      t.zero_hp_date       = today;   // for Phénix / Persévérant
      t.days_no_zero       = 0;
      saveAS();
    }
  }

  // ── Daily session check (called on app open) ─────────────
  function onAppOpen(){
    const today = todayS();
    const yesterday = yesterdayS();
    const t = as.tracking;
    const now = new Date();
    const h = now.getHours();

    // s1: night owl
    if(h>=2 && h<5 && !isUnlocked('s1')) unlock('s1');

    // Absence checks
    const lastOpen = t.last_open_date;
    if(lastOpen && lastOpen!==today){
      const gap = Math.round((new Date(today+'T00:00:00')-new Date(lastOpen+'T00:00:00'))/86400000);
      if(gap>=10 && !isUnlocked('s2')) unlock('s2');
      if(gap>=7  && !isUnlocked('s8')) unlock('s8');
    }
    t.last_open_date = today;

    // hp4 Phénix: had 0HP yesterday, back today
    if(t.zero_hp_date===yesterday && !isUnlocked('hp4')) unlock('hp4');

    // Persévérant: had 0HP ≤3 days ago — tracked via oui response
    if(t.zero_hp_date){
      const daysSince = Math.round((new Date(today+'T00:00:00')-new Date(t.zero_hp_date+'T00:00:00'))/86400000);
      if(daysSince>3) t.perseverant_window=false;
      else            t.perseverant_window=true;
    }

    // days_no_zero: increment if yesterday wasn't 0HP
    if(t.last_day_start!==today){
      t.last_day_start=today;
      if(t.zero_hp_date!==yesterday){
        t.days_no_zero=(t.days_no_zero||0)+1;
      } else {
        t.days_no_zero=0;
      }
      checkStat('days_no_zero', t.days_no_zero||0);
    }

    saveAS();
  }

  // ── Exit popup handlers ──────────────────────────────────
  function onExitOui(){
    const today = todayS();
    const t = as.tracking; const s = as.stats;

    s.exit_oui=(s.exit_oui||0)+1;
    checkStat('exit_oui', s.exit_oui);

    // Consecutive oui days
    if(t.oui_streak_last===yesterdayS()){ t.oui_streak=(t.oui_streak||1)+1; }
    else if(t.oui_streak_last!==today)  { t.oui_streak=1; }
    t.oui_streak_last=today;

    if(t.oui_streak>=3 && !isUnlocked('b3')) unlock('b3');
    if(t.oui_streak>=7 && !isUnlocked('d3')) unlock('d3');

    // b4 Rebond: non yesterday, oui today
    if(t.non_last_date===yesterdayS() && !isUnlocked('b4')) unlock('b4');

    // b5 Persévérant: in perseverant window
    if(t.perseverant_window && !isUnlocked('b5')) unlock('b5');

    saveAS();
  }

  function onExitNon(){
    const today = todayS(); const s=as.stats; const t=as.tracking;
    s.exit_non=(s.exit_non||0)+1;
    checkStat('exit_non', s.exit_non);
    t.non_last_date=today;
    // break oui streak if not already set today
    if(t.oui_streak_last!==today) t.oui_streak=0;
    saveAS();
  }

  // ── Map zones ────────────────────────────────────────────
  function onZonesUpdate(unlockedArr){
    if(unlockedArr.length>=9 && !isUnlocked('s5')) unlock('s5');
  }

  // ── Toast ────────────────────────────────────────────────
  function showAchToast(a){
    const col  = RARITY_COL[a.rarity]  || '#8b8ba0';
    const glow = RARITY_GLOW[a.rarity] || 'rgba(139,139,160,0.3)';
    const div  = document.createElement('div');
    div.className='ach-toast';
    div.innerHTML=`<div class="ach-toast-inner" style="border-color:${col};box-shadow:0 0 28px ${glow},0 6px 24px rgba(0,0,0,0.9)">
      <div class="ach-toast-glow" style="background:linear-gradient(90deg,transparent,${glow},transparent)"></div>
      <div class="ach-toast-icon">${a.icon||'🏆'}</div>
      <div class="ach-toast-body">
        <div class="ach-toast-top">
          <span class="ach-toast-badge" style="color:${col};border-color:${col};background:${col}18">Succès · ${a.rarity}</span>
          <span class="ach-toast-cat">${a.cat}</span>
        </div>
        <div class="ach-toast-name" style="color:${col};text-shadow:0 0 10px ${col}">${a.name}</div>
        <div class="ach-toast-desc">${a.desc}</div>
      </div>
    </div>`;
    document.body.appendChild(div);
    setTimeout(()=>{
      div.classList.add('ach-toast-out');
      setTimeout(()=>div.remove(),600);
    },4200);
  }

  // ── Build achievements view ──────────────────────────────
  function buildAchView(){
    var viewEl=document.getElementById('view-achievements');
    if(!viewEl) return;

    // Ensure state is loaded
    if(!as||!as.unlocked) loadAS();

    var totalUnlocked=Object.keys(as.unlocked).length;
    var totalAll=ACH.length;
    var pct=totalAll?Math.round(totalUnlocked/totalAll*100):0;

    var html='<div class="ach-wrap">';

    html+='<div class="ach-header">'
      +'<div class="ach-header-count">'
      +'<span class="ach-header-num">'+totalUnlocked+'</span>'
      +'<span class="ach-header-sep">/</span>'
      +'<span class="ach-header-total">'+totalAll+'</span>'
      +'</div>'
      +'<div class="ach-global-bar-wrap"><div class="ach-global-bar" style="width:'+pct+'%"></div></div>'
      +'<div style="font-size:11px;color:var(--fog);letter-spacing:1.5px;text-transform:uppercase;margin-top:4px">succ\u00e8s d\u00e9bloqu\u00e9s \u00b7 '+pct+'%</div>'
      +'</div>';

    var cats=['Progression','R\u00e9gularit\u00e9','Survie','Comportement','D\u00e9fi','Secret'];
    for(var ci=0;ci<cats.length;ci++){
      var cat=cats[ci];
      var list=ACH.filter(function(a){return a.cat===cat;});
      if(!list.length) continue;
      var catUnlocked=list.filter(function(a){return isUnlocked(a.id);}).length;

      html+='<div class="ach-cat"><div class="ach-cat-header">'
        +'<span class="ach-cat-name">'+cat+'</span>'
        +'<span class="ach-cat-count">'+catUnlocked+' / '+list.length+'</span>'
        +'</div><div class="ach-list">';

      for(var ai=0;ai<list.length;ai++){
        var a=list[ai];
        var unlocked=isUnlocked(a.id);
        var col=RARITY_COL[a.rarity]||'#8b8ba0';
        var isHidden=a.hidden&&!unlocked;
        var unlockedDate=unlocked&&as.unlocked[a.id]?as.unlocked[a.id].date:null;

        var progressHTML='';
        if(!unlocked&&a.type==='cumul'&&!isHidden){
          var cur=Math.min(as.stats&&as.stats[a.stat]?as.stats[a.stat]:0, a.target);
          var fpct=a.target?Math.round(cur/a.target*100):0;
          progressHTML='<div class="ach-prog-row">'
            +'<div class="ach-prog-track"><div class="ach-prog-fill" style="width:'+fpct+'%;background:'+col+';box-shadow:0 0 4px '+col+'"></div></div>'
            +'<span class="ach-prog-val" style="color:'+col+'">'+cur+'/'+a.target+'</span>'
            +'</div>';
        }

        var cardStyle=unlocked?'border-color:'+col+'28;background:'+col+'07':'';
        var iconStyle=unlocked?'color:'+col+';text-shadow:0 0 14px '+col+'80;background:'+col+'18;border-color:'+col+'35':'';
        var nameStyle=unlocked?'color:'+col:'';
        var checkHTML=unlocked?'<span class="ach-check" style="color:'+col+'">&#10003;</span>':'';
        var dateHTML=unlocked&&unlockedDate?'<div class="ach-unlock-date">&#128197; '+fmtDate(unlockedDate)+'</div>':'';

        html+='<div class="ach-card'+(unlocked?' ach-unlocked':'')+(isHidden?' ach-hidden':'')+'" style="'+cardStyle+'">'
          +'<div class="ach-card-icon" style="'+iconStyle+'">'+(isHidden?'?':(a.icon||'&#127942;'))+'</div>'
          +'<div class="ach-card-body">'
          +'<div class="ach-card-top">'
          +'<span class="ach-card-name" style="'+nameStyle+'">'+(isHidden?'???':a.name)+'</span>'
          +'<span class="ach-rarity-badge" style="color:'+col+';background:'+col+'14;border-color:'+col+'30">'+a.rarity+'</span>'
          +checkHTML
          +'</div>'
          +'<div class="ach-card-desc">'+(isHidden?'Succ\u00e8s cach\u00e9 \u2014 continue \u00e0 explorer !':a.desc)+'</div>'
          +progressHTML
          +dateHTML
          +'</div>'
          +'</div>';
      }

      html+='</div></div>';
    }

    html+='</div>'; // close ach-wrap
    viewEl.innerHTML=html;
  }

  function fmtDate(d){
    if(!d) return '';
    const dt=new Date(d+'T00:00:00');
    const M=['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc'];
    return dt.getDate()+' '+M[dt.getMonth()]+'. '+dt.getFullYear();
  }

  // ── Add nav item ─────────────────────────────────────────
  function addAchNav(){
    const el=document.getElementById('nav-ach');
    if(!el) return;
    // Clone pour éviter les doublons d'event listeners
    const fresh=el.cloneNode(true);
    el.parentNode.replaceChild(fresh,el);
    fresh.addEventListener('click',()=>navigate('achievements'));
  }

  function refreshAchUI(){
    const el=document.getElementById('badge-ach');
    const unseen = as.unseen||0;
    if(el){
      if(unseen>0){
        el.textContent=unseen;
        el.style.display='';
        el.style.background='rgba(255,45,107,0.25)';
        el.style.color='#ff6b8a';
        el.style.boxShadow='0 0 6px rgba(255,45,107,0.5)';
      } else {
        el.textContent='';
        el.style.display='none';
      }
    }
    if(typeof currentView!=='undefined'&&currentView==='achievements') buildAchView();
  }

  // ── Patch navigate ───────────────────────────────────────
  const _origNavAch=navigate;
  navigate=function(view){
    _origNavAch(view);
    if(view==='achievements'){
      buildAchView();       // called once, no try/catch hiding errors
      as.unseen=0;
      saveAS();
      // Update badge directly — do NOT call refreshAchUI() here to avoid
      // a second buildAchView() call triggered by its currentView check
      var bdg=document.getElementById('badge-ach');
      if(bdg){ bdg.textContent=''; bdg.style.display='none'; }
    }
  };

  // ── Patch toggleM (task completion hook) ─────────────────
  const _origToggleMAch=toggleM;
  window.toggleM=function(gid,mid){
    // Capture state BEFORE toggle
    var g=typeof goals!=='undefined'?goals.find(x=>x.id===gid):null;
    var wasDone=g?(g.milestones||[]).find(x=>x.id===mid)?.done:false;
    _origToggleMAch(gid,mid);
    // After toggle: if now done (was not done before) → fire achievement
    if(g){
      var m=(g.milestones||[]).find(x=>x.id===mid);
      if(m&&m.done&&!wasDone) onTaskDone(m.diff||0);
    }
  };

  // ── Patch HP to track changes ─────────────────────────────
  // We store previous HP to detect Résistant condition
  let _prevHP=100;
  const _origUpdateHPBar=updateHPBar;
  window.updateHPBar=function(){
    _origUpdateHPBar();
    var cur=(typeof hpState!=='undefined'&&hpState)?hpState.current:100;
    onHPChange(cur, _prevHP);
    _prevHP=cur;
  };

  // ── Patch map render to detect all-zones-unlocked ────────
  window._onZonesUpdateAch=onZonesUpdate;
  // The map module calls _onZonesUpdateAch in renderMap — we patch renderMap patch
  const _origAchMapRender=window._mmPageSave||null; // just ensure hook exists
  // Hook via event listener on achievement check after any map render
  document.addEventListener('hz-zones-update',function(e){
    if(e.detail&&e.detail.unlocked) onZonesUpdate(e.detail.unlocked);
  });

  // ── Patch exit popup buttons ─────────────────────────────
  setTimeout(()=>{
    const ouiBtn=document.getElementById('exit-oui');
    const nonBtn=document.getElementById('exit-non');
    const microDoBtn=document.getElementById('exit-micro-do');
    if(ouiBtn)     ouiBtn.addEventListener('click',    onExitOui);
    if(nonBtn)     nonBtn.addEventListener('click',    onExitNon);
    if(microDoBtn) microDoBtn.addEventListener('click',onExitOui);
  },200);

  // ── Reset task achievements (one-time clean slate) ──────────
  (function resetTaskAch(){
    if(as.tracking&&as.tracking._task_reset_v1) return;
    var ids=['p1','p2','p3','p4','p5','p6','d1','d2','d4','d5'];
    ids.forEach(function(id){ delete as.unlocked[id]; });
    as.stats.tasks_done=0;
    if(!as.tracking) as.tracking={};
    as.tracking._task_reset_v1=true;
    as.tracking.tasks_today=0;
    as.tracking.tasks_today_date='';
    as.unseen=Math.max(0,(as.unseen||0));
    saveAS();
  })();

  // ── Init ─────────────────────────────────────────────────
  loadAS();
  onAppOpen();

  // Post-init checks (wait for hpState + streak to be loaded)
  setTimeout(()=>{
    if(typeof hpState!=='undefined'&&hpState){
      _prevHP=hpState.current||100;
      // hp1: check on load
      if(hpState.current<=20&&hpState.current>0&&!isUnlocked('hp1')) unlock('hp1');
    }
    if(typeof lsGet==='function'){
      const streak=lsGet('hz_streak',{count:0,best:0});
      onStreakUpdate(Math.max(streak.count||0, streak.best||0));
    }
    // Refresh map zones
    if(typeof goals!=='undefined'&&Array.isArray(goals)){
      const cats=new Set(goals.map(g=>g.cat));
      // count unlocked zones based on goal categories matching zone ids
      const ZONE_IDS=['Projets','Creatif','Sport','Apprentissage','Personnel','Voyage','Carriere','Bien-etre','Social'];
      const unlocked=ZONE_IDS.filter(z=>cats.has(z));
      onZonesUpdate(unlocked);
    }
    addAchNav();
  },500);

  // Also call addAchNav after a bit more delay (in case DOM not ready)
  setTimeout(addAchNav,1200);

  // Expose for external use
  window._achSystem={unlock,onTaskDone,onStreakUpdate,onHPChange,onExitOui,onExitNon,onZonesUpdate,refreshAchUI};

})();

// ── Patch existing streak system to notify achievements ───
// The streak IIFE runs on load and sets window._onStreakUpdateAch
// We patch via a MutationObserver on the streak count element
(function(){
  var el=document.getElementById('streak-count');
  if(!el) return;
  var obs=new MutationObserver(function(){
    var count=parseInt(el.textContent)||0;
    if(window._achSystem) window._achSystem.onStreakUpdate(count);
  });
  obs.observe(el,{childList:true,characterData:true,subtree:true});
})();

// ── Patch map renderMap to fire zones event ───────────────
(function(){
  // We wait for the map module to define its renderMap logic
  // then dispatch an event with unlocked zones
  var _origMapRenderAch=null;
  setTimeout(function(){
    // Map module exposes nothing directly, but we can check map panel list
    // Instead, re-check goals->zones every time navigate('map') is called
    var _origNavForMap=navigate;
    navigate=function(view){
      _origNavForMap(view);
      if(view==='map'){
        setTimeout(function(){
          if(typeof goals!=='undefined'&&Array.isArray(goals)){
            var cats=new Set(goals.map(function(g){return g.cat;}));
            var ZONE_IDS=['Projets','Creatif','Sport','Apprentissage','Personnel','Voyage','Carriere','Bien-etre','Social'];
            var unlocked=ZONE_IDS.filter(function(z){return cats.has(z);});
            if(window._achSystem) window._achSystem.onZonesUpdate(unlocked);
          }
        },200);
      }
    };
  },800);
})();

// ── PROFILE VIEW ─────────────────────────────────────────
function buildProfileView() {
  const el = document.getElementById('view-profile');
  if (!el) return;
  const p = window.userProfile || {};
  const u = window.currentUser || {};
  const joined = u.created_at ? new Date(u.created_at).toLocaleDateString('fr-FR', {month:'long', year:'numeric'}) : '';
  el.innerHTML = `
    <div style="max-width:680px;margin:0 auto;padding:24px 16px">
      <div style="background:rgba(8,6,20,0.75);border:1px solid rgba(0,245,255,0.12);border-radius:16px;overflow:hidden;backdrop-filter:blur(12px);box-shadow:0 0 40px rgba(0,245,255,0.04)">
        <!-- Bannière -->
        <div style="height:180px;background:${p.banniere_url ? 'url('+p.banniere_url+') center/cover no-repeat' : 'linear-gradient(135deg,rgba(0,245,255,0.08),rgba(139,91,255,0.12))'};position:relative;">
          <div style="position:absolute;inset:0;background:linear-gradient(to bottom,transparent 50%,rgba(8,6,20,0.8))"></div>
        </div>
        <!-- Avatar + infos -->
        <div style="padding:0 24px 24px;margin-top:-36px;position:relative">
          <div style="width:72px;height:72px;border-radius:50%;border:3px solid rgba(0,245,255,0.4);overflow:hidden;background:var(--night2);margin-bottom:12px;box-shadow:0 0 16px rgba(0,245,255,0.2)">
            <img src="${p.avatar_url||''}" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display='none'">
          </div>
          <div style="font-size:22px;font-weight:700;color:#e8e6f0;margin-bottom:4px;font-family:'Playfair Display',serif">${p.pseudo||'Aventurier'}</div>
          <div style="font-size:13px;color:var(--accent);margin-bottom:6px">${p.statut||''}</div>
          <div style="font-size:11px;color:var(--fog);margin-bottom:16px;letter-spacing:0.5px">⚔️ Aventurier depuis ${joined}</div>
          ${p.bio ? '<div style="font-size:13px;color:#9896aa;line-height:1.7;margin-bottom:20px;padding:12px;background:rgba(0,245,255,0.03);border-radius:8px;border-left:2px solid rgba(0,245,255,0.2)">'+p.bio+'</div>' : ''}
          <div style="display:flex;gap:10px;flex-wrap:wrap">
            <button onclick="window.location.href='profile-setup.html'" style="padding:8px 20px;background:rgba(0,245,255,0.08);border:1px solid rgba(0,245,255,0.2);border-radius:6px;color:var(--accent);cursor:pointer;font-size:13px" onmouseover="this.style.background='rgba(0,245,255,0.15)'" onmouseout="this.style.background='rgba(0,245,255,0.08)'">✏️ Modifier le profil</button>
            <button onclick="window.supabaseSignOut()" style="padding:8px 20px;background:rgba(255,50,50,0.08);border:1px solid rgba(255,50,50,0.2);border-radius:6px;color:#ff6b6b;cursor:pointer;font-size:13px" onmouseover="this.style.background='rgba(255,50,50,0.15)'" onmouseout="this.style.background='rgba(255,50,50,0.08)'">⏻ Déconnexion</button>
          </div>
        </div>
      </div>
    </div>`;
}
