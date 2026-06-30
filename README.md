# 📈 Stock Trading Platform

A full-stack **Stock Trading Platform** built using the **MERN Stack**. The application provides secure user authentication, portfolio management, and a protected trading dashboard for viewing holdings, positions, and orders.

The project follows a **modular architecture** with three independent applications:

* 🌐 **Frontend** – Public landing website
* 📊 **Dashboard** – Protected trading dashboard
* ⚙️ **Backend API** – RESTful API with MongoDB and JWT authentication

---

# 🚀 Live Demo

* 🌐 Landing Website: https://stockify-rho.vercel.app


---

# ✨ Features

### 🔐 Authentication

* User Registration
* User Login
* User Logout
* JWT Authentication
* HTTP-only Cookie Authentication
* Protected Routes
* Persistent Authentication using HTTP-only Cookies

### 🌐 Landing Website

* Responsive Landing Page
* Home
* About
* Product
* Pricing
* Support
* Dynamic Navigation Bar
* Dashboard Access

### 📊 Trading Dashboard

* Protected Dashboard
* Portfolio Overview
* Holdings
* Positions
* Orders
* Portfolio Charts
* Buy/Sell Order Management

### ⚙️ Backend

* RESTful API
* MongoDB Integration
* Secure Authentication
* Protected Endpoints
* Database Operations

---

# 🏗️ Project Architecture

```text
                           User
                             │
                             ▼
                  Landing Website (React)
                             │
                     Login / Signup
                             │
                             ▼
                  Backend API (Express.js)
                             │
              JWT (HTTP-only Cookie Authentication)
                             │
            ┌────────────────┴────────────────┐
            │                                 │
            ▼                                 ▼
     Landing Website                 Trading Dashboard
                                             │
                                             ▼
                                   Protected REST APIs
                                             │
                                             ▼
                                      MongoDB Database
```

# 📡 REST API

## Authentication

| Method | Endpoint       | Protected | Description                 |
| ------ | -------------- | :-------: | --------------------------- |
| POST   | `/auth/signup` |     ❌     | Register a new user         |
| POST   | `/auth/login`  |     ❌     | Authenticate user           |
| POST   | `/auth/logout` |     ✅     | Logout current user         |
| GET    | `/auth/me`     |     ✅     | Retrieve authenticated user |

### Holdings

| Method | Endpoint    | Protected | Description       |
| ------ | ----------- | :-------: | ----------------- |
| GET    | `/holdings` |     ✅     | Retrieve holdings |

### Positions

| Method | Endpoint     | Protected | Description        |
| ------ | ------------ | :-------: | ------------------ |
| GET    | `/positions` |     ✅     | Retrieve positions |

### Orders

| Method | Endpoint            | Protected | Description         |
| ------ | ------------------- | :-------: | ------------------- |
| GET    | `/orders/allOrders` |     ✅     | Retrieve all orders |
| POST   | `/orders/newOrder`  |     ✅     | Place a new order   |

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* React Router DOM
* Bootstrap
* Axios
* React Hot Toast

## Dashboard

* React
* Vite
* Material UI
* Chart.js
* Axios

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* cookie-parser

---

# 🔐 Authentication Flow

1. User registers or logs in.
2. Backend validates the credentials.
3. JWT is generated.
4. JWT is stored in an HTTP-only cookie.
5. Frontend restores the authenticated session using `/auth/me`.
6. Dashboard verifies the authenticated session.
7. Protected APIs become accessible only after successful authentication.

---

# 🌍 Deployment

| Application | Platform      |
| ----------- | ------------- |
| Frontend    | Vercel        |
| Dashboard   | Vercel        |
| Backend     | Render        |
| Database    | MongoDB Atlas |

---

# 🚀 Future Improvements

* Live Stock Market Data Integration
* Portfolio Analytics
* Watchlist Management
* Historical Transaction Tracking
* Search & Filtering
* Price Alerts
* Real-Time Portfolio Updates
* Dark Mode

---

# 👨‍💻 Author

**Divyansh Tak**

If you found this project useful, consider giving it a ⭐ on GitHub.
