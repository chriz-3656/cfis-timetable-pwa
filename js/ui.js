import { SUBJECTS, TIMETABLE } from "./data.js";
import { openModal, closeModal } from "./modal.js";

// Add keyboard support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

const timeline = document.getElementById("timeline");
const select = document.getElementById("daySelect");
const title = document.getElementById("dayTitle");
const clock = document.getElementById("clock");

Object.keys(TIMETABLE).forEach(d=>{
  const o=document.createElement("option");
  o.value=o.textContent=d;
  select.appendChild(o);
});

function isLive(range){
  const [a,b]=range.split("–");
  const [sh,sm]=a.split(":").map(Number);
  const [eh,em]=b.split(":").map(Number);
  const now=new Date();
  const s=new Date(); s.setHours(sh,sm,0,0);
  const e=new Date(); e.setHours(eh,em,0,0);
  return now>=s && now<=e;
}

function render(day){
  timeline.innerHTML="";
  title.textContent=day;

  TIMETABLE[day].forEach(b=>{
    const el=document.createElement("div");

    if(b.break||b.lunch){
      el.className="block break";
      el.textContent=b.break || `Lunch ${b.lunch}`;
    } else {
      const sub=SUBJECTS[b.s];
      el.className=`block ${sub.type==="Lab"?"lab":""}`;
      if(isLive(b.t)) el.classList.add("live");
      el.innerHTML=`<strong>${sub.name}</strong><br><small>${b.t}</small>`;
      el.onclick=()=>openModal(sub,b.t,day); // Pass day information
    }
    timeline.appendChild(el);
  });
}

setInterval(()=>{
  clock.textContent=new Date().toLocaleTimeString([],{
    hour:"2-digit",minute:"2-digit"
  });
},1000);

const today=new Date().toLocaleDateString("en-US",{weekday:"long"});
select.value=today;
render(today);
select.onchange=e=>render(e.target.value);
