# 🎬 Movie Booking System

A full-stack web application inspired by **BookMyShow**, built as part of a hiring assignment. This project demonstrates end-to-end development with backend APIs, frontend UI/UX, database design, and deployment.

🚀 **Deployed Project:** [Live Demo](https://chiragbms.vercel.app/)

---

## 📌 Features

### Core Functionality

- **User Management**: Register/login users and associate them with bookings.
- **Cinemas & Screens**: List available cinemas and their screens.
- **Movies**: Display details and listings.
- **Shows**: Manage showtimes (e.g., Movie X at 3PM on Screen 2).
- **Bookings**: Users can select up to 6 seats per booking, confirm, and view their booking history.
- **Seat Layout**: Fixed layout (10x10 grid), showing booked vs. available seats.

### Bonus Features (Implemented)

- ✅ **Admin Panel**: Add/edit/delete cinemas, screens, and movies.
- ✅ **Booking Confirmation**: Users see a confirmation screen after booking.
- ✅ **Booking History**: Users can view their past bookings.

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Redux, Ant Design, Axios
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Deployment**: Vercel (Frontend + Backend)

---

## ⚙️ Installation & Setup (Local)

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local or Atlas)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/sharmachirag760/bookMyShow.git
   cd bookMyShow
   Install dependencies for both frontend & backend:
   ```

bash
Copy code
cd server
npm install

cd ../client
npm install
Configure environment variables:
Create a .env file in the server directory with:

env
Copy code
MONGO_URL="Mongo_URL"
JWT_SECRET=mysecret
PORT=8082

Run the backend:
cd server
npm i
npm start

Run the frontend:
cd client
npm i
npm start
It will Open the app in browser:

📌 Evaluation Criteria Alignment
Functionality: Covers all required flows (users, movies, cinemas, shows, bookings).

Code Quality: Clean, modular, and maintainable structure.

Backend Design: RESTful APIs with JWT authentication.

Frontend: React with Redux for state management, Ant Design for UI.

Deployment: Hosted on Vercel for live demo.

📜 License
This project is built for educational and hiring assignment purposes.
