import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Run() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    var header = document.querySelector("header");

    window.addEventListener('scroll', function () {
      var sc = window.scrollY;
      if (sc >= 100) {
        header.classList.add("sticky")
      } else {
        header.classList.remove("sticky");
      }
    })

    if (document.querySelector(".navbar-collapse.collapse").classList.contains("show")) {
      document.querySelector(".navbar-nav button").click();
    }

    if (window.location.pathname === "/") {
      header.classList.add("fixed");
    } else {
      if (header.classList.contains("fixed")) {
        header.classList.remove("fixed");
      }
    }
  }, [pathname]);
  return null;
}

export default Run;
