const articles = document.querySelectorAll(".article");
function changeAttribute() {
  if (window.matchMedia("(max-width: 720px)").matches) {
    articles.forEach((item) => {
      item.setAttribute("data-aos", "fade-right");
    });
  } else if (window.matchMedia("(max-width: 960px)").matches) {
    articles.forEach((item) => {
      if (item.classList.contains("article2")) {
        item.setAttribute("data-aos", "fade-right");
      } else if (item.classList.contains("article3")) {
        item.setAttribute("data-aos", "fade-left");
      }
    });
  }
}

changeAttribute();
AOS.init();
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 4,
    width: "100%",
    rewind: true,
    perMove: 1,
    drag: true,
    autoplay: "play",
    pagination: false,
    waitForTransition: false,
    speed: 10000,
    interval: 10000,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
  splide.mount();
});

const header = document.querySelector("header");
const searchBar = document.querySelector(".search-div");
const hammenu = document.querySelector(".hammenu");
header.addEventListener("click", (e) => {
  if (e.target.classList.contains("search-img-1")) {
    searchBar.classList.toggle("search-div-toggle");
  } else if (
    e.target.classList.contains("cross") ||
    e.target.classList.contains("l1") ||
    e.target.classList.contains("l2")
  ) {
    searchBar.classList.remove("search-div-toggle");
  }
});
