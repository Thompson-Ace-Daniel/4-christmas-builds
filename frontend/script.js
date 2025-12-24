const thisYear = document.getElementById("thisYear");
const themeBtn = document.querySelector(".theme-switcher");
const dropdown = document.querySelector(".dropdown");
const menuBtn = document.querySelector(".menu");
const term = document.getElementById("term");
const level = document.getElementById("level")
const entry = document.getElementById("entry");

const date = new Date();
const year = date.getFullYear();
const entryYear = 2025;
thisYear.innerHTML = year;
entry.textContent = entryYear;

const thisTerm = "1st";
term.textContent = thisTerm;

const thisLvl = 100;
level.textContent = thisLvl;

// const setThemeCookie = (name, value, days) => {
//   const date = new Date();
//   date.setTime(date.getTime + days * 24 * 60 * 60 * 1000);
//   const expires = "expires=" + date.toUTCString();
//   document.cookie =
//     name + "=" + encodeURIComponent(value) + ";" + expires + "; path=/";
// };
// document.addEventListener(
//   "DOMCONTENTLOADED", () => {
//     setThemeCookie("theme", "light", 7);
//   }
// );

// const getThemeCookie = (name) => {
//   const nameEQ = name + "=";
//   const cookies = document.cookie.split(";");
//   for (let i = 0; i < cookies.length; i++) {
//     let c = cookies[i].trim();
//     if (c.indexOf(nameEQ === 0)) {
//       return decodeURIComponent(c.substring(nameEQ.length));
//     }
//   }
//   return null;
// };

// document.addEventListener("load", getThemeCookie("theme"));

const themeSwitcher = () => {
  if (themeBtn.innerHTML === "bedtime") {
    // setThemeCookie("theme", "light", 7)
    document.documentElement.classList.add("dark");
    themeBtn.innerHTML = "sunny";
  } else {
    // setThemeCookie("theme", "dark", 7);
    document.documentElement.classList.remove("dark");
    themeBtn.innerHTML = "bedtime";
  }
};

themeBtn.addEventListener("click", themeSwitcher);

const menuController = () => {
  dropdown.classList.toggle("disappear");
  if (dropdown.classList.contains("disappear")) {
    menuBtn.innerHTML = "menu";
  } else {
    menuBtn.innerHTML = "keyboard_arrow_up";
  }
};

menuBtn.addEventListener("click", menuController);
