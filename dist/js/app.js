(() => {
  "use strict";

  function e() {
    const e = document.querySelector("main"),
      t = document.querySelector("header"),
      c = document.querySelector("footer");
    e.classList.add("not-clickable"), t.classList.add("not-clickable"), c.classList.add("not-clickable");
  }
  function t() {
    const e = document.querySelector("main"),
      t = document.querySelector("header"),
      c = document.querySelector("footer");
    e.classList.remove("not-clickable"), t.classList.remove("not-clickable"), c.classList.remove("not-clickable");
  }
  function c() {
    const e = document.querySelector("main"),
      t = document.querySelector("header"),
      c = document.querySelector("footer");
    e.classList.remove("not-clickable"), t.classList.remove("not-clickable"), c.classList.remove("not-clickable");
  }
  window.addEventListener("load", () => {
    document.querySelectorAll(".modal__close").forEach(e => {
      e.addEventListener("click", () => {
        document.querySelectorAll(".modal").forEach(e => {
          e.classList.remove("is-active");
        }), function () {
          const e = document.querySelector("main"),
            t = document.querySelector("header"),
            c = document.querySelector("footer");
          e.classList.remove("not-clickable"), t.classList.remove("not-clickable"), c.classList.remove("not-clickable");
        }();
      });
    });
  }), window.addEventListener("load", () => {
    const t = document.querySelectorAll("#claimButton"),
      c = document.querySelectorAll("#stakeButton");
    t.forEach(t => {
      t.addEventListener("click", () => {
        document.querySelector("#farmingModal").classList.add("is-active"), e();
      });
    }), c.forEach(t => {
      t.addEventListener("click", () => {
        document.querySelector("#farmingModal").classList.add("is-active"), e();
      });
    });
  }), window.addEventListener("load", () => {
    const e = document.querySelector("#filtersButton"),
      t = document.querySelector("#filterModal");
    e.addEventListener("click", () => {
      t.classList.add("is-active");
    });
  }), window.addEventListener("load", () => {
    document.querySelector(".header__notifications").addEventListener("click", () => {
      document.querySelector("#notificationsModal").classList.add("is-active"), function () {
        const e = document.querySelector("main"),
          t = document.querySelector("header"),
          c = document.querySelector("footer");
        e.classList.add("not-clickable"), t.classList.add("not-clickable"), c.classList.add("not-clickable");
      }();
    });
  }), window.addEventListener("load", () => {
    const e = document.querySelector("#showButton"),
      t = document.querySelector(".card-balance__value");
    e.addEventListener("click", () => {
      console.log("clickx"), e.classList.toggle("is-open"), e.classList.toggle("is-close"), e.classList.contains("is-open") ? t.innerHTML = "$0" : t.innerHTML = "****";
    });
  }), window.addEventListener("load", () => {
    const e = document.querySelector("#closeButton"),
      t = document.querySelector(".card-news");
    e.addEventListener("click", () => {
      t.classList.add("is-hidden");
    });
  }), window.addEventListener("load", () => {
    const e = document.querySelector("#allowButton"),
      c = document.querySelector("#laterButton"),
      o = document.querySelector("#notificationsModal");
    e.addEventListener("click", () => {
      o.classList.remove("is-active"), t();
    }), c.addEventListener("click", () => {
      o.classList.remove("is-active"), t();
    });
  }), window.addEventListener("load", () => {
    const e = document.querySelector("#homeButton"),
      t = document.querySelector("#farmingButton"),
      c = document.querySelector("#tasksButton");
    e.addEventListener("click", () => {
      document.body.className = "", document.body.classList.add("is-main");
    }), t.addEventListener("click", () => {
      document.body.className = "", document.body.classList.add("is-farming");
    }), c.addEventListener("click", () => {
      document.body.className = "", document.body.classList.add("is-tasks");
    });
  }), window.addEventListener("load", () => {
    const e = document.querySelector("#sendFarmingButton"),
      t = document.querySelector("#notYetButton"),
      o = document.querySelector(".farming-modal");
    e.addEventListener("click", () => {
      o.classList.remove("is-active"), c();
    }), t.addEventListener("click", () => {
      o.classList.remove("is-active"), c();
    });
  }), window.addEventListener("load", () => {
    const e = document.querySelector("#createAccountButton"),
      t = document.querySelector("#createAccountNext"),
      c = document.querySelector("#createReceiverNext"),
      o = document.querySelector("#login"),
      s = document.querySelectorAll("input"),
      n = document.querySelectorAll("textarea"),
      d = document.querySelector(".auth");
    e.addEventListener("click", () => {
      d.classList.remove("is-welcome"), d.classList.add("is-data");
    }), t.addEventListener("click", () => {
      d.classList.remove("is-data"), d.classList.add("is-receiver");
    }), c.addEventListener("click", () => {
      d.classList.remove("is-receiver"), d.classList.add("is-loading"), setTimeout(() => {
        document.body.classList.remove("is-auth"), document.body.classList.add("is-main"), document.querySelector("header").classList.remove("is-hidden"), document.querySelector("footer").classList.remove("is-hidden");
      }, 2e3);
    }), o.addEventListener("click", () => {
      document.body.classList.remove("is-auth"), document.body.classList.add("is-main"), document.querySelector("header").classList.remove("is-hidden"), document.querySelector("footer").classList.remove("is-hidden");
    }), s.forEach(e => {
      e.addEventListener("focus", () => {
        document.querySelectorAll(".bottom").forEach(e => {
          e.style.marginBottom = "100%";
        });
      }), e.addEventListener("blur", () => {
        document.querySelectorAll(".bottom").forEach(e => {
          e.style.marginBottom = "0";
        });
      });
    }), n.forEach(e => {
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
  }), window.addEventListener("load", () => {
    window.Telegram.WebApp.expand();
  });
})();