const submitBtn = document.getElementById("submit");
const wishesContainer = document.getElementById("wishes-container");

const getFetcher = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/wishes");
    const data = await res.json();

    renderWishes(data);

    console.log(data);

    if (!res.ok) throw new Error(`Error Status: ${res.status}`);
  } catch (err) {
    console.error("Fetch Error", err.message);
  }
};

const postFetcher = async (json) => {
  try {
    const res = await fetch("http://localhost:5000/api/wishes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
    });

    if (!res.ok) throw new Error(`Error Status: ${res.status}`);

    console.log("Create Wish Sent");
  } catch (err) {
    console.error("Fetch Error: ", err.message);
  }
};

const renderWishes = async (data) => {
  wishesContainer.innerHTML = "";

  const meridianTime = (time) => {
    const timeParser = time.split(":");
    let bforeString = "";
    let meridian = "";

    if (timeParser[0] <= 12) {
      bforeString = timeParser[0];
      meridian = "AM";
    }
    if (timeParser[0] > 12) {
      bforeString = timeParser[0] - 12;
      meridian = "PM";
    }
    if (timeParser[0] == 0) {
      bforeString = 12;
      meridian = "AM";
    }

    return `${bforeString}:${timeParser[1]} ${meridian}`;
  };

  data.forEach((el) => {
    const timeDate = el.time.split("T");
    const newTime = new Date(el.time).toLocaleTimeString();
    const localTime = newTime.toString().split("T");
    const timeTime = localTime[0].slice(0, 5);
    const meridianVal = meridianTime(timeTime);
    const wishCardEl = `<div class="wish-card">
                    <h3 class="wish-to">TO: ${el.to}</h3>
                    <p class="wish-message">${el.message}</p>
                    <p class="wish-from">From: ${el.name}</p>
                    <p class="wish-date">${timeDate[0]} - ${meridianVal}</p>
                </div>
        </section>`;
    // alert(timeDate)
    wishesContainer.innerHTML += wishCardEl;
  });
};

const date = new Date();

const createWishes = async () => {
  const nameInput = document.getElementById("name");
  const toInput = document.getElementById("to");
  const wishInput = document.getElementById("wishes");

  const createJson = {
    name: nameInput.value,
    to: toInput.value,
    message: wishInput.value,
    time: new Date(),
  };

  postFetcher(createJson);

  nameInput.value = "";
  toInput.value = "";
  wishInput.value = "";
};

submitBtn.addEventListener("click", () => {
  createWishes();
  getFetcher();
});
window.addEventListener("load", getFetcher);
