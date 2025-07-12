# 🧑‍💼 Job Portal

A full-stack job portal web application where companies can manage job applications submitted through a streamlined frontend and backend system.

Built with:
- ⚛️ React + Vite (frontend)
- 🧩 Express + Node.js (backend)
- ☁️ MongoDB Atlas, Cloudinary
- 🔐 Clerk for authentication

Live Demo: [https://job-portal.vercel.app](https://job-portal.vercel.app)

---

## 📂 Project Structure

```
job-portal/
├── client/         # React frontend
└── server/         # Express backend
```

---

## 🚀 Features

- Clerk authentication with JWT support
- Company-side dashboard for viewing applicants
- RESTful backend API
- MongoDB cloud database with Mongoose
- Cloudinary file uploads (e.g., resumes or profile pics)
- Responsive UI with Vite development speed

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- MongoDB Atlas account
- Cloudinary account
- Clerk account for authentication

---

## 🔧 Environment Variables

### 📁 `client/.env`

Rename `client/.env.example` to `.env` and fill in:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:5000
```

---

### 📁 `server/.env`

Rename `server/.env.example` to `.env` and fill in:

```env
JWT_SECRET=your_jwt_secret

MONGODB_URI=your_mongo_uri

CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

---

## 🧪 Local Development

### Start Backend (Express)

```bash
cd server
npm install
npm start
```

Server runs on `http://localhost:5000`

---

### Start Frontend (Vite + React)

```bash
cd client
npm install
npm run dev
```

Frontend runs on `http://localhost:5173` (or whichever port Vite assigns)

---

## 🧾 API Overview

> Base URL: `http://localhost:5000/api`

Example endpoints:

| Method | Endpoint               | Description                 |
|--------|------------------------|-----------------------------|
| GET    | `/applications/`       | List all applications       |
| POST   | `/applications/`       | Submit a new application    |
| GET    | `/company/dashboard`   | View company dashboard      |
| POST   | `/webhook/clerk`       | Handle Clerk webhook        |

---


## ☁️ Deployment Notes

- Frontend: Deployed to [Vercel](https://vercel.com/)
- Backend: Recommended: Render, Railway, or Heroku (not included in this repo)
- Configure production `.env` values in the deployment dashboard
- Secure all secrets

---

## 🧑‍💻 Author

**Ryan Barszcz**  
[GitHub @RyanBarszcz](https://github.com/RyanBarszcz)  
Computer Science Graduate @ University of Michigan

---

## 📜 License

This project is for demonstration and educational purposes.
