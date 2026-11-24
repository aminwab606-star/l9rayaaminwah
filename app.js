const curriculum={
 primary:{label:"الابتدائي",grades:["الأول ابتدائي","الثاني ابتدائي","الثالث ابتدائي","الرابع ابتدائي","الخامس ابتدائي","السادس ابتدائي"],subjects:["اللغة العربية","اللغة الفرنسية","الرياضيات","النشاط العلمي","التربية الإسلامية","الاجتماعيات"]},
 middle:{label:"الإعدادي",grades:["الأولى إعدادي","الثانية إعدادي","الثالثة إعدادي"],subjects:["اللغة العربية","اللغة الفرنسية","اللغة الإنجليزية","الرياضيات","الفيزياء والكيمياء","علوم الحياة والأرض","الاجتماعيات","التربية الإسلامية"]},
 high:{label:"الثانوي التأهيلي",grades:["الجذع المشترك","الأولى باك","الثانية باك"],subjects:["اللغة العربية","اللغة الفرنسية","اللغة الإنجليزية","الرياضيات","الفيزياء والكيمياء","علوم الحياة والأرض","الفلسفة","التاريخ والجغرافيا","التربية الإسلامية","الاقتصاد العام والإحصاء"],tracks:["الجذع العلمي","الجذع الأدبي","علوم تجريبية","علوم رياضية","علوم اقتصادية","آداب وعلوم إنسانية","علوم وتكنولوجيات"]}
};
const resources=[
{id:"ln",title:"الدالة اللوغاريتمية ln",stage:"high",grade:"الثانية باك",subject:"الرياضيات",track:"علوم تجريبية",kind:"lesson",desc:"تعريف الدالة اللوغاريتمية وخواصها الأساسية ومشتقتها.",tags:["الدوال","اللوغاريتم","باك"],video:"8L1tElQBlgA",videoTitle:"تصحيح فرض الثانية باك: ln ودراسة الدوال - فعقلي",body:`<h3>1. مجال التعريف</h3><p>الدالة اللوغاريتمية النيبيرية معرفة على المجال <span class="formula">]0,+∞[</span>، وتكتب <span class="formula">f(x)=ln(x)</span>.</p><h3>2. خواص أساسية</h3><ul><li><span class="formula">ln(1)=0</span> و <span class="formula">ln(e)=1</span>.</li><li><span class="formula">ln(ab)=ln(a)+ln(b)</span> عندما a وb موجبان.</li><li><span class="formula">ln(a/b)=ln(a)-ln(b)</span> عندما a وb موجبان.</li><li><span class="formula">ln(aⁿ)=n ln(a)</span> عندما a موجب.</li></ul><h3>3. المشتقة</h3><p>على المجال الموجب: <span class="formula">(ln x)'=1/x</span>. بما أن 1/x موجب، فالدالة ln متزايدة تماماً.</p><p><strong>تذكّر:</strong> قبل استعمال ln، تأكد أن ما داخل اللوغاريتم موجب تماماً.</p>`},
{id:"exp",title:"الدالة الأسية eˣ",stage:"high",grade:"الثانية باك",subject:"الرياضيات",track:"علوم تجريبية",kind:"lesson",desc:"خواص الدالة الأسية وعلاقتها بالدالة اللوغاريتمية.",tags:["الدوال","الأسية"],body:`<h3>تعريف</h3><p>الدالة الأسية تربط كل عدد حقيقي x بالعدد <span class="formula">eˣ</span>، وهي موجبة على ℝ.</p><h3>خواص مهمة</h3><ul><li><span class="formula">e⁰=1</span></li><li><span class="formula">eᵃ×eᵇ=eᵃ⁺ᵇ</span></li><li><span class="formula">eᵃ/eᵇ=eᵃ⁻ᵇ</span></li><li><span class="formula">(eˣ)'=eˣ</span></li></ul><h3>العلاقة مع ln</h3><p><span class="formula">ln(eˣ)=x</span> و <span class="formula">eˡⁿˣ=x</span> عندما x موجب.</p>`},
{id:"fractions-video",title:"الكسور المختلطة",stage:"primary",grade:"السادس ابتدائي",subject:"الرياضيات",kind:"video",desc:"شرح الكسور المختلطة مع أمثلة وتطبيقات وفق المستوى السادس.",tags:["كسور","فيديو","ابتدائي"],video:"pKlp9NLXduI",videoTitle:"الكسور المختلطة - رياضيات المدرسة الرائدة المستوى السادس والخامس"},
{id:"motion",title:"الحركة والسكون والسرعة",stage:"middle",grade:"الثالثة إعدادي",subject:"الفيزياء والكيمياء",kind:"lesson",desc:"مفاهيم الحركة والمرجع وحساب السرعة المتوسطة.",tags:["فيزياء","سرعة"],body:`<h3>الحركة والمرجع</h3><p>نصف حركة جسم بالنسبة إلى مرجع محدد. قد يكون الجسم متحركاً بالنسبة إلى مرجع وساكناً بالنسبة إلى مرجع آخر.</p><h3>السرعة المتوسطة</h3><p><span class="formula">v = d / Δt</span></p><p>حيث d المسافة المقطوعة و Δt المدة الزمنية. وحّد الوحدات قبل الحساب.</p>`},
{id:"fractions-ex",title:"تطبيقات على الكسور",stage:"primary",grade:"السادس ابتدائي",subject:"الرياضيات",kind:"exercise",desc:"تمارين قصيرة للتدرب على قراءة الكسور ومقارنتها.",tags:["تمارين","رياضيات"],body:`<h3>التمرين</h3><p>بسّط الكسر 6/8، ثم قارن بين 2/3 و3/4.</p><h3>تصحيح مقترح</h3><p>6/8 = 3/4 بقسمة البسط والمقام على 2. وللمقارنة نوحّد المقام: 2/3 = 8/12 و3/4 = 9/12، إذن 2/3 أصغر من 3/4.</p>`}
];
const $=id=>document.getElementById(id), cards=$("cards"), search=$("search"), grade=$("grade"), subject=$("subject"), track=$("track"), empty=$("empty");
let stage="",kind="";
function fillSelect(el,values){[...new Set(values)].sort((a,b)=>a.localeCompare(b,"ar")).forEach(v=>el.add(new Option(v,v)))}
fillSelect(grade,Object.values(curriculum).flatMap(x=>x.grades));
fillSelect(subject,Object.values(curriculum).flatMap(x=>x.subjects));
fillSelect(track,curriculum.high.tracks);
function safe(s=""){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function render(){
 const q=search.value.trim().toLowerCase();
 const filtered=resources.filter(r=>(!q||[r.title,r.desc,r.grade,r.subject,r.track,...(r.tags||[])].join(" ").toLowerCase().includes(q))&&(!grade.value||r.grade===grade.value)&&(!subject.value||r.subject===subject.value)&&(!track.value||r.track===track.value)&&(!stage||r.stage===stage)&&(!kind||r.kind===kind));
 cards.innerHTML=filtered.map(r=>`<article class="card"><span class="badge ${r.kind}">${r.kind==="lesson"?"درس":r.kind==="exercise"?"تمرين":"فيديو"}</span><h3>${safe(r.title)}</h3><p>${safe(r.desc)}</p><div class="meta"><span>${curriculum[r.stage].label}</span><span>${safe(r.grade)}</span><span>${safe(r.subject)}</span></div><button class="open-card" data-id="${r.id}">فتح المحتوى ←</button></article>`).join("");
 $("count").textContent=filtered.length+" موارد في العرض الحالي";
 empty.hidden=filtered.length!==0;cards.hidden=filtered.length===0;
 cards.querySelectorAll("[data-id]").forEach(b=>b.addEventListener("click",()=>openResource(b.dataset.id)));
}
function openResource(id){
 const r=resources.find(x=>x.id===id);if(!r)return;
 $("modalGrade").textContent=r.grade;$("modalSubject").textContent=r.subject;$("modalTitle").textContent=r.title;$("modalDesc").textContent=r.desc;
 $("modalBody").innerHTML=r.body||"<p>هذا المورد عبارة عن فيديو تعليمي. شاهده ودوّن أهم الأفكار، ثم جرّب تطبيقها في تمرين.</p>";
 $("videoBox").innerHTML=r.video?`<iframe class="video-frame" src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(r.video)}" title="${safe(r.videoTitle||r.title)}" loading="lazy" allow="accelerometer; autoplay; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`:"";
 $("searchYoutube").href="https://www.youtube.com/results?search_query="+encodeURIComponent(r.grade+" "+r.subject+" "+r.title+" المغرب شرح");
 $("overlay").hidden=false;document.body.style.overflow="hidden";$("close").focus();
}
function closeModal(){$("overlay").hidden=true;document.body.style.overflow=""}
[search,grade,subject,track].forEach(el=>el.addEventListener(el===search?"input":"change",render));
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>{kind=b.dataset.kind;document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x===b));render()}));
document.querySelectorAll("[data-stage]").forEach(b=>b.addEventListener("click",()=>{stage=b.dataset.stage;grade.value="";subject.value="";track.value="";$("library").scrollIntoView({behavior:"smooth"});render()}));
$("reset").addEventListener("click",()=>{search.value="";grade.value="";subject.value="";track.value="";stage="";kind="";document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",!x.dataset.kind));render()});
$("close").addEventListener("click",closeModal);$("back").addEventListener("click",closeModal);$("overlay").addEventListener("click",e=>{if(e.target===$("overlay"))closeModal()});document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("overlay").hidden)closeModal()});
$("year").textContent=new Date().getFullYear();render();