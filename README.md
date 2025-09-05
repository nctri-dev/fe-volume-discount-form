# Frontend Test Project

This project is a **ReactJS application** built as part of a coding test.  
It demonstrates skills in **form handling, validation, UI components, and state management**.

---

## 🚀 Tech Stack

- [React](https://reactjs.org/) – UI library
- [Vite / CRA] – Build tool (depending on setup)
- [React Hook Form](https://react-hook-form.com/) – Form handling
- [Shopify Polaris](https://polaris.shopify.com/) – UI components

---

## ✨ Features

- Dynamic form with validation using **React Hook Form**
- Form context sharing across multiple components (`useFormContext`)
- Field Array handling (add/remove options dynamically)
- Custom validation rules (e.g., at least one option is required)
- Integration with **Polaris** UI (TextField, Button, Toast, etc.)
- Loading state on form submission
- Toast notification on success (e.g. _“Created successfully”_)

---

## 📂 Project Structure

src/
├── components/ # Reusable UI components
├── libs/ # (constants)
├── pages/ # Page-level components
└── App.tsx # Entry point

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nctri-dev/fe-volume-discount-form.git
cd fe-volume-discount-form
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the app

```bash
npm run dev
# or
yarn dev
```

## 📌 Notes

Notes

Minimum 1 option is required in the form (validation rule).

The form resets after successful submission.

Project is intended to demonstrate coding practices, not production-ready design.

## 👤 Author

NguyenCaoTri – [nguyencaotri.dev@gmail.com]
