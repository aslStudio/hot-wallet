(()=>{"use strict";window.addEventListener("load",()=>{const e=document.querySelector("#filtersButton"),t=document.querySelector(".filter-button");e.addEventListener("click",()=>{t.classList.toggle("is-active")}),document.querySelectorAll(".filter-button__item").forEach(e=>{e.addEventListener("click",()=>{t.classList.toggle("is-active")})})}),window.addEventListener("load",()=>{document.querySelector(".header__notifications").addEventListener("click",()=>{document.querySelector(".notifications-modal").classList.add("is-active")})}),window.addEventListener("load",()=>{const e=document.querySelector("#showButton"),t=document.querySelector(".card-balance__value");e.addEventListener("click",()=>{console.log("clickx"),e.classList.toggle("is-open"),e.classList.toggle("is-close"),e.classList.contains("is-open")?t.innerHTML="$0":t.innerHTML="****"})}),window.addEventListener("load",()=>{const e=document.querySelector("#closeButton"),t=document.querySelector(".card-news");e.addEventListener("click",()=>{t.classList.add("is-hidden")})}),window.addEventListener("load",()=>{const e=document.querySelector("#allowButton"),t=document.querySelector("#laterButton"),o=document.querySelector(".notifications-modal");e.addEventListener("click",()=>{o.classList.remove("is-active")}),t.addEventListener("click",()=>{o.classList.remove("is-active")})}),window.addEventListener("load",()=>{var e=document.querySelector("#homeButton"),t=document.querySelector("#farmingButton"),o=document.querySelector("#tasksButton");e.addEventListener("click",()=>{document.body.className="",document.body.classList.add("is-main")}),t.addEventListener("click",()=>{document.body.className="",document.body.classList.add("is-farming")}),o.addEventListener("click",()=>{document.body.className="",document.body.classList.add("is-tasks")})}),window.addEventListener("load",()=>{const e=document.querySelector("#createAccountButton"),t=document.querySelector("#createAccountNext"),o=document.querySelector("#createReceiverNext"),c=document.querySelector("#login"),n=document.querySelectorAll("input"),s=document.querySelectorAll("textarea"),d=document.querySelector("#percentValue"),r=document.querySelector(".auth");e.addEventListener("click",()=>{r.classList.remove("is-welcome"),r.classList.add("is-data")}),t.addEventListener("click",()=>{r.classList.remove("is-data"),r.classList.add("is-receiver")}),o.addEventListener("click",()=>{r.classList.remove("is-receiver"),r.classList.add("is-loading");const e=setInterval(()=>{d.innerHTML=Number(d.innerHTML)+1,100===Number(d.innerHTML)&&(document.body.classList.remove("is-auth"),document.body.classList.add("is-main"),document.querySelector("header").classList.remove("is-hidden"),document.querySelector("footer").classList.remove("is-hidden"),clearInterval(e))},100)}),c.addEventListener("click",()=>{document.body.classList.remove("is-auth"),document.body.classList.add("is-main"),document.querySelector("header").classList.remove("is-hidden"),document.querySelector("footer").classList.remove("is-hidden")}),n.forEach(e=>{e.addEventListener("focus",()=>{document.querySelectorAll(".bottom").forEach(e=>{e.style.marginBottom="100%"})}),e.addEventListener("blur",()=>{document.querySelectorAll(".bottom").forEach(e=>{e.style.marginBottom="0"})})}),s.forEach(e=>{e.addEventListener("focus",()=>{document.querySelectorAll(".bottom").forEach(e=>{e.style.marginBottom="100%"})}),e.addEventListener("blur",()=>{document.querySelectorAll(".bottom").forEach(e=>{e.style.marginBottom="0"})})})}),window.addEventListener("load",()=>{window.Telegram.WebApp.expand()})})();