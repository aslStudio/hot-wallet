(()=>{"use strict";function o(){var e=document.querySelector("main"),t=document.querySelector("header"),o=document.querySelector("footer");e.classList.add("not-clickable"),t.classList.add("not-clickable"),o.classList.add("not-clickable")}function c(){var e=document.querySelector("main"),t=document.querySelector("header"),o=document.querySelector("footer");e.classList.remove("not-clickable"),t.classList.remove("not-clickable"),o.classList.remove("not-clickable")}function d(){var e=document.querySelector("main"),t=document.querySelector("header"),o=document.querySelector("footer");e.classList.remove("not-clickable"),t.classList.remove("not-clickable"),o.classList.remove("not-clickable")}window.addEventListener("load",()=>{document.querySelectorAll(".modal__close").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".modal").forEach(e=>{e.classList.remove("is-active")})})})}),window.addEventListener("load",()=>{var e=document.querySelectorAll("#claimButton"),t=document.querySelectorAll("#stakeButton");e.forEach(e=>{e.addEventListener("click",()=>{document.querySelector(".farming-modal").classList.add("is-active"),o()})}),t.forEach(e=>{e.addEventListener("click",()=>{document.querySelector(".farming-modal").classList.add("is-active"),o()})})}),window.addEventListener("load",()=>{const e=document.querySelector("#filtersButton"),t=document.querySelector("#filterModal");e.addEventListener("click",()=>{t.classList.add("is-active")})}),window.addEventListener("load",()=>{document.querySelector(".header__notifications").addEventListener("click",()=>{var e,t,o;document.querySelector(".notifications-modal").classList.add("is-active"),e=document.querySelector("main"),t=document.querySelector("header"),o=document.querySelector("footer"),e.classList.add("not-clickable"),t.classList.add("not-clickable"),o.classList.add("not-clickable")})}),window.addEventListener("load",()=>{const e=document.querySelector("#showButton"),t=document.querySelector(".card-balance__value");e.addEventListener("click",()=>{console.log("clickx"),e.classList.toggle("is-open"),e.classList.toggle("is-close"),e.classList.contains("is-open")?t.innerHTML="$0":t.innerHTML="****"})}),window.addEventListener("load",()=>{const e=document.querySelector("#closeButton"),t=document.querySelector(".card-news");e.addEventListener("click",()=>{t.classList.add("is-hidden")})}),window.addEventListener("load",()=>{const e=document.querySelector("#allowButton"),t=document.querySelector("#laterButton"),o=document.querySelector(".notifications-modal");e.addEventListener("click",()=>{o.classList.remove("is-active"),c()}),t.addEventListener("click",()=>{o.classList.remove("is-active"),c()})}),window.addEventListener("load",()=>{var e=document.querySelector("#homeButton"),t=document.querySelector("#farmingButton"),o=document.querySelector("#tasksButton");e.addEventListener("click",()=>{document.body.className="",document.body.classList.add("is-main")}),t.addEventListener("click",()=>{document.body.className="",document.body.classList.add("is-farming")}),o.addEventListener("click",()=>{document.body.className="",document.body.classList.add("is-tasks")})}),window.addEventListener("load",()=>{const e=document.querySelector("#sendFarmingButton"),t=document.querySelector("#notYetButton"),o=document.querySelector(".farming-modal");e.addEventListener("click",()=>{o.classList.remove("is-active"),d()}),t.addEventListener("click",()=>{o.classList.remove("is-active"),d()})}),window.addEventListener("load",()=>{const e=document.querySelector("#createAccountButton"),t=document.querySelector("#createAccountNext"),o=document.querySelector("#createReceiverNext"),c=document.querySelector("#login"),d=document.querySelectorAll("input"),s=document.querySelectorAll("textarea"),n=document.querySelector(".auth");e.addEventListener("click",()=>{n.classList.remove("is-welcome"),n.classList.add("is-data")}),t.addEventListener("click",()=>{n.classList.remove("is-data"),n.classList.add("is-receiver")}),o.addEventListener("click",()=>{n.classList.remove("is-receiver"),n.classList.add("is-loading"),setTimeout(()=>{document.body.classList.remove("is-auth"),document.body.classList.add("is-main"),document.querySelector("header").classList.remove("is-hidden"),document.querySelector("footer").classList.remove("is-hidden")},2e3)}),c.addEventListener("click",()=>{document.body.classList.remove("is-auth"),document.body.classList.add("is-main"),document.querySelector("header").classList.remove("is-hidden"),document.querySelector("footer").classList.remove("is-hidden")}),d.forEach(e=>{e.addEventListener("focus",()=>{document.querySelectorAll(".bottom").forEach(e=>{e.style.marginBottom="100%"})}),e.addEventListener("blur",()=>{document.querySelectorAll(".bottom").forEach(e=>{e.style.marginBottom="0"})})}),s.forEach(e=>{e.addEventListener("focus",()=>{document.querySelectorAll(".bottom").forEach(e=>{e.style.marginBottom="100%"})}),e.addEventListener("blur",()=>{document.querySelectorAll(".bottom").forEach(e=>{e.style.marginBottom="0"})})})}),window.addEventListener("load",()=>{window.Telegram.WebApp.expand()})})();