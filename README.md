# 📚 Library Management System

A full-stack Library Management System built using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**. This application helps manage library operations, including book management, user authentication, and borrowing activities through a responsive web interface.

## 🚀 Features

- User registration and login
- Email verification using OTP
- Secure authentication
- Book management
- Library management dashboard
- MongoDB database integration
- Responsive React frontend
- RESTful API integration

## 🛠️ Tech Stack

**Frontend**
- React.js
- Redux Toolkit
- Vite
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Brevo Email API

## 📂 Project Structure

```text
Library_Management/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── database/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/praveenpraveennaik9-hash/Library_Management.git
cd Library_Management
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create `backend/config/config.env` and configure:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
BREVO_API_KEY=your_brevo_api_key
BREVO_SENDER_EMAIL=your_verified_sender_email
```

Start the backend:

```bash
npm run dev
```

### 3. Frontend setup

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Open the frontend at:

http://localhost:5173

## 🔐 Environment Variables

Keep your API keys, database credentials, and other secrets private. Never upload your `config.env` file to GitHub.

## 👨‍💻 Developer

**Banoth Praveen**

B.Tech – Electrical Engineering  
Motilal Nehru National Institute of Technology Allahabad

- GitHub: [praveenpraveennaik9-hash](https://github.com/praveenpraveennaik9-hash)

## 📌 Future Improvements

- Book search and filtering
- Book issue and return tracking
- Fine calculation
- Deployment and live access
- Enhanced dashboard and analytics

---

⭐ If you find this project useful, consider giving it a star!