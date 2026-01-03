const usersContainer = document.getElementById("users-container");
const deleteBtn = document.getElementById("deleteBtn");
const reloadBtn = document.getElementById("reloadBtn");
const addBtn = document.getElementById("addBtn");
const inputSect = document.querySelector(".inputSect");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const sendBtn = document.getElementById("sendBtn");
const modal = document.querySelector(".modalHolder");
const cancelBtn = document.getElementById("cancelBtn");
const confirmBtn = document.getElementById("confirmBtn");
const totalUsers = document.getElementById("total");

const renderUsers = (users) => {
  const usersEl = (name, email, index) => `<div class="user-card">
    <div class="user-select">
    <span>${index}.</span>
    <div class="user-info">
    <p class="user-name">Name: ${name}</p>
                            <p class="user-email">Email: ${email}</p>
                        </div>
                    </div>
                    <div class="user-actions">
                    <button type="button" class="edit-user-btn" title="Edit User"><span
                    class="material-symbols-outlined">edit</span></button>
                    <button type="button" class="delete-user-btn" title="Delete User"><span
                    class="material-symbols-outlined">delete</span></button>
                    </div>
                    </div>`;

  users.forEach((el, i) => {
    const name = el.name;
    const email = el.email;
    usersContainer.innerHTML += usersEl(name, email, i + 1);
  });
};

const getUsers = async () => {
  const res = await fetch("http://localhost:5000/api/users/get", {
    method: "GET",
  });

  const data = await res.json();

  if (data.length > 0) usersContainer.innerHTML = "";

  renderUsers(data);
  getUserId(data);
  totalUsers.textContent = data.length;
  console.log("Fetched & Rendered Users");
};

const deleteUsers = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/users/delete-all", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error(`DELETE ERROR: ${res.status}`);
  } catch (err) {
    console.error("Couldn't Delete", err);
  }
};

const addUsers = async () => {
  const nameVal = nameInput.value;
  const emailVal = emailInput.value;

  const newUser = {
    name: nameVal,
    email: emailVal,
  };
  try {
    const res = await fetch("http://localhost:5000/api/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    if (!res.ok) throw new Error(`Post Error: ${res.status}`);

    console.log("New User Added");
    getUsers();
  } catch (err) {
    console.error("Couldn't Add User", err);
  }
};

const toggleAddState = () => {
  addBtn.classList.toggle("opened");
  inputSect.classList.toggle("hidden");
};

const toggleModalVisibility = () => {
  modal.classList.toggle("hidden");
  if (!modal.classList.contains("hidden"))
    document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";
};

const getUserId = async (data) => {
  data.forEach((el, i) => {
    const miniDelBtn = document.querySelectorAll(".delete-user-btn");
    const miniEditBtn = document.querySelectorAll(".edit-user-btn");

    const user = {
      id: el._id,
      nameFix: "fifjf",
      emailFix: "giom",
    };

    const editOne = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users/edit-one", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
      } catch (err) {
        console.error("Couldn't Update User", err.message);
      }
    };

    const deleteOne = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users/delete-one", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });

        const json = await res.json();

        if (!res.ok)
          throw new Error(json.error || `DELETE ERROR: ${res.status}`);

        console.log("User Deleted");

        getUsers();
      } catch (err) {
        console.error("Couldn't Delete User", err.message);
      }
    };

    miniDelBtn[i].addEventListener("click", deleteOne);
    miniEditBtn[i].addEventListener("click", editOne);
  });
};

addBtn.addEventListener("click", toggleAddState);

deleteBtn.addEventListener("click", toggleModalVisibility);

cancelBtn.addEventListener("click", toggleModalVisibility);

confirmBtn.addEventListener("click", () => {
  deleteUsers();
  getUsers();
});

reloadBtn.addEventListener("click", getUsers);

sendBtn.addEventListener("click", () => {
  addUsers();
  nameInput.value = "";
  emailInput.value = "";
  getUsers();
});

getUsers();
