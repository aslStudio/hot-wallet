(() => {
  "use strict";

  window.onload = () => {
    const e = document.querySelector("#createAccountButton"),
      t = document.querySelector("#createAccountNext"),
      c = document.querySelector("#createReceiverNext"),
      r = document.querySelectorAll("input"),
      o = document.querySelector("#percentValue"),
      n = document.querySelector(".auth");
    e.addEventListener("click", () => {
      n.classList.remove("is-welcome"), n.classList.add("is-data");
    }), t.addEventListener("click", () => {
      n.classList.remove("is-data"), n.classList.add("is-receiver");
    }), c.addEventListener("click", () => {
      n.classList.remove("is-receiver"), n.classList.add("is-loading");
      const e = setInterval(() => {
        o.innerHTML = Number(o.innerHTML) + 1, 100 === Number(o.innerHTML) && clearInterval(e);
      }, 100);
    }), r.forEach(e => {
      e.addEventListener("focus", () => {
        document.querySelectorAll(".bottom").forEach(e => {
          e.style.marginBottom = "100%";
        });
      }), e.addEventListener("blur", () => {
        document.querySelectorAll(".bottom").forEach(e => {
          e.style.marginBottom = "0";
        });
      });
    });
  };
})();