function a(){return"light"}function c(t){const n=document.querySelector(".theme-switch i.fas");n.classList.toggle("fa-moon",t==="dark"),n.classList.toggle("fa-sun",t!=="dark")}let e=a();document.documentElement.setAttribute("data-bs-theme",e);window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{e=a(),document.documentElement.setAttribute("data-bs-theme",e),c(e)});window.addEventListener("load",()=>{c(e),document.querySelectorAll(".theme-switch").forEach(t=>{t.addEventListener("click",n=>{e=e==="light"?"dark":"light",document.documentElement.setAttribute("data-bs-theme",e),localStorage.setItem("theme",e),c(e),n.preventDefault()})})});
