/* Nav Glass */

const navEl = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEl.classList.add(".navbar-scrolled");
  } else if (window.scrollY < 56) {
    navEl.classList.remove(".navbar-scrolled");
  }
});

/* <typer> */

var typed = new Typed(".typer", {
  strings: ["<i>Geek.</i>", "Diseñador.", "<i>Desarrollador.</i>"],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true,
});
/* Contador */
let valueNumbers = document.querySelectorAll(".exp-number");
let interval = 3000;

valueNumbers.forEach((valueNumber) => {
  let startValue = 0;
  let endValue = parseInt(valueNumber.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    startValue += 1;
    valueNumber.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
/* Skills */
const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("skills__active");
    });

    target.classList.add("skills__active");

    tabs.forEach((tab) => {
      tab.classList.remove("skills__active");
    });

    tab.classList.add("skills__active");
  });
});

/* Portfolio */
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    myModal.show();
  }
});
