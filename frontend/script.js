const thisYear = document.getElementById("thisYear");
const themeBtn = document.querySelector(".theme-switcher");
const dropdown = document.querySelector(".dropdown");
const menuBtn = document.querySelector(".menu");

const date = new Date();
const year = date.getFullYear();
thisYear.innerHTML = year;

const themeSwitcher = () => {
  if (themeBtn.innerHTML === "sunny") {
    document.documentElement.classList.add("dark");
    themeBtn.innerHTML = "bedtime";
  } else {
    document.documentElement.classList.remove("dark");
    themeBtn.innerHTML = "sunny";
  }
};

themeBtn.addEventListener("click", themeSwitcher);

const menuController = () => {
  dropdown.classList.toggle("disappear");
  if (dropdown.classList.contains("disappear")) {
    menuBtn.innerHTML = "menu";
  } else {
    menuBtn.innerHTML = "arrow_down";
  }
};

menuBtn.addEventListener("click", menuController);
