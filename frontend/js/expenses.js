const overlay = document.querySelector(".overlay");
const addBtn = document.querySelector(".addButton");
const closeBtn = document.getElementById("closeBtn");

const modalState = () => {
  if (overlay.classList.contains("overlay-out")) {
    overlay.classList.remove("overlay-out");
  } else {
    overlay.classList.add("overlay-out");
  }
};

addBtn.addEventListener("click", modalState);
closeBtn.addEventListener("click", modalState);
