(() => {
  "use strict";

  window.onload = () => {
    const e = document.querySelector("#createAccountButton"),
      t = document.querySelector("#createAccountNext"),
      o = document.querySelectorAll("input"),
      c = document.querySelector(".auth");
    e.addEventListener("click", () => {
      c.classList.remove("is-welcome"), c.classList.add("is-data");
    }), t.addEventListener("click", () => {
      c.classList.remove("is-data");
    }), o.forEach(e => {
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