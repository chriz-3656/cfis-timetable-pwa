let deferred;
window.addEventListener("beforeinstallprompt",e=>{
  e.preventDefault();
  deferred=e;
  installBtn.hidden=false;
});
installBtn.onclick=()=>deferred.prompt();

navigator.serviceWorker?.register("sw.js");
