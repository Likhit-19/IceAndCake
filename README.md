# 🍰 Ice & Cake

**Ice & Cake** is a full-stack e-commerce application for browsing and purchasing cakes and ice creams. It follows a **client-server architecture**, with a React.js frontend communicating with a Node.js/Express.js backend through REST APIs.

## 🚀 Features

* 🔐 User authentication and authorization
* 🍰 Browse and manage cake & ice cream products
* 🛒 Shopping cart with Redux Toolkit
* ➕➖ Add, remove, and update product quantities
* 💰 Dynamic cart and order total calculation
* 🖼️ Cloudinary integration for product image storage
* 💳 Checkout and payment workflow
* 🗄️ PostgreSQL database for persistent data storage
* 🌐 Nginx reverse proxy for deployment

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit
* React Router
* Tailwind CSS

### Backend

* Node.js
* Express.js
* REST APIs

### Database & Services

* PostgreSQL
* Cloudinary

### Deployment

* Nginx

## 🏗️ Architecture

```text
                User
                 │
                 ▼
          React.js Frontend
                 │
             REST APIs
                 │
                 ▼
        Node.js + Express.js
                 │
          ┌──────┴──────┐
          ▼             ▼
     PostgreSQL      Cloudinary
      Database       Image Storage
```

## 📁 Project Structure

```text
Ice-And-Cake/
│
├── FrontEnd/
│   ├── src/
│   │   ├── components/
│   │   ├── Page/
│   │   └── redux/
│   │
│   └── package.json
│
├── BackEnd/
│   ├── route/
│   ├── controller/
│   ├── connection/
│   └── package.json
│
├── .env.example
├── .gitignore
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd Ice-And-Cake
```

### 2. Install frontend dependencies

```bash
cd FrontEnd
npm install
```

### 3. Install backend dependencies

```bash
cd ../BackEnd
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the backend directory and add your required configuration:

```env
PORT=
DATABASE_URL=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

**Never commit your `.env` file to GitHub.**

### 5. Run the application

Start the backend:

```bash
npm start
```

Start the frontend in a separate terminal:

```bash
cd FrontEnd
npm run dev
```

## 🌐 Deployment

The application can be deployed using **Nginx as a reverse proxy**, routing requests between the React frontend and Node.js/Express backend.

## 📌 Project Highlights

* Client-server architecture
* RESTful API design
* Centralized state management with Redux Toolkit
* Relational database design using PostgreSQL
* Cloud-based image management with Cloudinary
* Production deployment using Nginx

---

⭐ **If you find this project useful, consider giving it a star!**
