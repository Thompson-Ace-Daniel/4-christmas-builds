Below is a **clean, executive-grade reconstruction** of your `README.md`.
This is structured, scannable, and credible. No fluff. No noise. Copy-paste ready.

---

# 🎄 The 4 Christmas Builds — 2025

**Date:** 25-12-2025

![Node](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-Backend-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

> Four backend-heavy Christmas projects built to stress-test fundamentals:
> **Auth, CRUD, routing, controllers, middleware, and vanilla JS integration.**

---

## ✅ Project Status

- [x] Authentication
- [x] CRUD Operations
- [ ] Deployment

> **Question:** Can all four be completed before Christmas Day ends?
> **Answer:** Yes—if scope discipline is enforced. No feature creep.

---

## 📦 Project Overview

This repository contains **four independent but related applications**, all sharing a single backend architecture and using **vanilla HTML, CSS, and JavaScript** on the frontend.

No React. No frameworks. Pure fundamentals.

---

## 🎁 The Four Builds

### **Project 1 — Christmas Wish Module**

A public space where users can anonymously drop their Christmas wishes.

**Planned Extension**

- Optional greeting variant
- Address wishes to specific people

---

### **Project 2 — Christmas Expense Tracker**

A lightweight expense tracker focused on holiday spending.

**Purpose**

- Track expenses
- Categorize spending
- Reality check (no running from it)

---

### **Project 3 — Anonymous Feedback Service**

An unstructured, free-form feedback wall.

**Key Characteristics**

- Anonymous submissions
- No rigid schema for content
- Community interaction (future comments feature)
- Potential for future scaling

---

### **Project 4 — Admin User Panel**

A minimal admin dashboard.

**Scope**

- Create users
- Read users
- Update users
- Delete users

No overengineering. Just clean CRUD.

---

## 🗂️ Project Structure

```txt
4-christmas-builds/
│
├── backend/
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── Wish.js
│   │   ├── Expense.js
│   │   ├── User.js
│   │   └── Message.js
│   ├── routes/
│   │   ├── wishes.routes.js
│   │   ├── expenses.routes.js
│   │   ├── users.routes.js
│   │   └── messages.routes.js
│   ├── controllers/
│   │   ├── wishes.controller.js
│   │   ├── expenses.controller.js
│   │   ├── users.controller.js
│   │   └── messages.controller.js
│   └── middleware/
│       └── errorHandler.js
│
├── frontend/
│   ├── index.html        # Wish Module / Guestbook
│   ├── expenses.html
│   ├── users.html
│   ├── feedback.html
│   ├── css/
|   |
│   └── js/
│       ├── wishes.js
│       ├── expenses.js
│       ├── users.js
│       └── messages.js
│
├── .env
├── package.json
└── README.md
```

---

## 🚀 How to Run the Project

### 1. Start the Backend

```bash
npm run dev
```

### 2. Open the Frontend

Open any of the HTML files inside the `frontend/` directory directly in your browser.

Example:

- `index.html` → Wish module
- `expenses.html` → Expense tracker
- `feedback.html` → Anonymous feedback
- `users.html` → Admin user panel

---

## ⚙️ Environment Requirements

### MongoDB

This project runs **locally** and requires MongoDB to be active.

**To confirm MongoDB is running on Windows:**

1. Press `Windows + R`
2. Type `services.msc`
3. Look for **MongoDB Server**
4. Ensure it is running

---

## 🔌 API Information

- Base URL:

  ```txt
  http://localhost:5000
  ```

- API is **local-only** for now
- Deployment is intentionally deferred

---

## 🧰 Tech Stack

**Backend**

- Node.js
- Express.js
- MongoDB
- Mongoose

**Frontend**

- Vanilla HTML
- Vanilla CSS
- Vanilla JavaScript

> This is intentionally **not** React.
> After a year of React and React Native collaboration work, this project refocuses on raw fundamentals and backend clarity.

---

## 🧠 Final Note

This repo is not about polish.
It’s about **execution, discipline, and architectural clarity under time pressure**.

Christmas build. Real constraints. Real learning.
**HAVE A MERRY CHRISTMAS AND HAPPY NEW YEAR**

---

#2026 HERE I COME!!!
