# 🌲 MyWoods Backend (Wood CMS)

Welcome to the backend service for **MyWoods (Wood CMS)**. This project is a robust RESTful API built on top of Node.js and Express.js, providing secure authentication, product catalog management, and order processing capabilities.

## 🚀 Tech Stack

- **Runtime Environment:** [Node.js](https://nodejs.org/)
- **Web Framework:** [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Image Cloud Storage:** [Cloudinary](https://cloudinary.com/) (integrated using Multer)
- **Security & Session:** [JSON Web Tokens (JWT)](https://jwt.io/) & [Bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- **File Uploads:** [Multer](https://github.com/expressjs/multer) & [Multer Storage Cloudinary](https://github.com/cpseager/multer-storage-cloudinary)

---

## 🛠️ Folder Structure

```
BACKEND/
├── config/          # Database connection & Cloudinary setup
├── controllers/     # Controller logic for authentication, products, and orders
├── middleware/      # Authentication & File-upload middlewares
├── models/          # Mongoose schemas (User, Product, Order)
├── routes/          # API route definitions (auth, products, orders)
└── server.js        # Entry point of the Express server
```

---

## 📂 API Endpoints

### 🔐 Authentication (`/api/auth`)
* `POST /api/auth/register` - Register a new user
* `POST /api/auth/login` - Login to account (returns JWT token)
* `GET /api/auth/profile` - Get currently logged-in user profile (requires token)

### 📦 Product Management (`/api/products`)
* `GET /api/products` - Retrieve all products
* `GET /api/products/:id` - Retrieve a single product by ID
* `POST /api/products` - Create a new product (Admin only, supports image upload)
* `PUT /api/products/:id` - Update a product (Admin only)
* `DELETE /api/products/:id` - Delete a product (Admin only)

### 🛒 Order Management (`/api/orders`)
* `GET /api/orders` - Retrieve orders (Admin: all orders, User: user-specific orders)
* `POST /api/orders` - Place a new order
* `PUT /api/orders/:id` - Update order status (Admin only)

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adityaasingh07/mywoods-BACKEND.git
   cd mywoods-BACKEND
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory of the backend project and configure the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Run the Server:**
   * **Development Mode (with auto-restart):**
     ```bash
     npm run dev
     ```
   * **Production Mode:**
     ```bash
     npm start
     ```

---

## 🔒 Security & DNS
* Includes automatic DNS server configuration to bypass local MongoDB connection resolution issues by defaulting DNS lookups to Google (`8.8.8.8`) and Cloudflare (`1.1.1.1`).
* Uses bcrypt for password hashing and JSON Web Tokens (JWT) for secure authentication state transfer.
