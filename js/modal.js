export function openModal(sub,time){
  const m=document.getElementById("modal");
  m.innerHTML=`
  <div class="glass" style="margin:1rem;padding:1.5rem">
    <h2>${sub.name}</h2>
    <p>${time}</p>
    <p><b>Faculty:</b> ${sub.faculty}</p>
    <p><b>Course Code:</b> ${sub.code}</p>
    <p><b>Type:</b> ${sub.type}</p>
    ${sub.batch?`<p><b>Batch:</b> ${sub.batch}</p>`:""}
    <button onclick="this.closest('#modal').innerHTML=''">Close</button>
  </div>`;
}
