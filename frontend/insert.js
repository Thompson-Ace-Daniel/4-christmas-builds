import { loadData } from "./app.js";

const addBtn = document.getElementById("addBtn");
const closeBtn = document.getElementById("closeBtn");
const modal = document.querySelector(".modal");
const units = document.querySelectorAll(".units");
const theName = document.getElementById("theName");
const matNO = document.getElementById("matNO");
const insertBtn = document.getElementById("insertBtn");

const toggleAdd = () => {
  if (modal.classList.contains("modal-open"))
    modal.classList.remove("modal-open");
  else modal.classList.add("modal-open");
};

addBtn.addEventListener("click", toggleAdd);
closeBtn.addEventListener("click", toggleAdd);

const theObj = () => {
  let requestObj = {
    mat: matNO.value,
    name: theName.value,
    ges: units[0].value,
    mth: units[1].value,
    eng: units[2].value,
    chm: units[3].value,
    phy: units[4].value,
  };

  const pushInsert = async () => {
    try {
      const res = await fetch("http://localhost:7000/api/insert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestObj),
      });

      if (!res.ok) throw new Error(`Error Status: ${res.status}`);

      const data = await res.json();
      console.log("Server: ", data);
    } catch (err) {
      console.error("Error: ", err);
    }
  };
  pushInsert();
};

insertBtn.addEventListener("click", () => {
  theObj();
  matNO.value = "";
  theName.value = "";
  units[0].value = "";
  units[1].value = "";
  units[2].value = "";
  units[3].value = "";
  units[4].value = "";
  modal.classList.remove("modal-open");
  const reload = async () => window.location.reload();
  reload();
});
