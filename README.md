# 🛍️ Product Filter App

A responsive web application that allows users to filter, search, and sort products by category, price, and name — with secure Google Authentication using Firebase.

## 🚀 Live Demo

🌐 [Click to View](https://vigneshwaran2406.github.io/product-filter/)

---

## 🔐 Features

- 🔎 **Search & Filter Products**
- 💵 **Price Range Filter**
- ↕️ **Sorting (Price & Name)**
- 👕 **Category-based Filtering**
- 🔐 **Google Login via Firebase**
- 📱 **Fully Mobile Responsive**
- 🧑 **User Info Dropdown with Logout**
- 🎨 **Modern UI with Gradient & Blur Effects**

---

## 📸 Screenshots

| Login Page | Product List |
|------------|--------------|
| ![Login](assests/screenshot-login.png) | ![Product](assests/screenshot-product.png) |

*(Add actual screenshots in the `assests` folder and replace these names)*

---

## 📁 Folder Structure
product-filter/
│
├── index.html # Main product page
├── login.html # Login screen
├── style.css # Main styling
├── login.css # Login-specific styles
├── script.js # Core app logic
├── login.js # Firebase login script
├── assests/ # Images and assets
│ └── bg.jpg, phone1.jpg, ...


---

## 🧪 Tech Stack

- HTML, CSS, JavaScript
- Firebase Auth (Google)
- Responsive design with media queries
- Vanilla JS DOM manipulation

---

## 🧰 Firebase Configuration

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  ...
};
git clone https://github.com/Vigneshwaran2406/product-filter.git
cd product-filter
# Open index.html in your browser or use Live Server
