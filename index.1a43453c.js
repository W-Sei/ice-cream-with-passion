const e=document.querySelector("#nav"),t=document.querySelector("#menu"),n=document.querySelector(".nav__toggle");let c=!1;n.addEventListener("click",(l=>{l.preventDefault(),c=!c,n.setAttribute("aria-expanded",String(c)),t.hidden=!c,e.classList.toggle("nav--open")})),e.addEventListener("keydown",(e=>{if(!c||e.ctrlKey||e.metaKey||e.altKey)return;const l=t.querySelectorAll(".nav__link");9===e.keyCode&&(e.shiftKey?document.activeElement===l[0]&&(n.focus(),e.preventDefault()):document.activeElement===n&&(l[0].focus(),e.preventDefault()))}));
//# sourceMappingURL=index.1a43453c.js.map