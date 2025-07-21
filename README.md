# E-Commerce Website (MERN Stack)

A full-stack e-commerce platform built with the **MERN stack** (MongoDB, Express.js, React, Node.js), featuring secure payment processing with **Stripe** and **Razorpay**, and image management using **Cloudinary**. This project allows users to browse products, add them to a cart, place orders, and make payments, with an admin panel for managing products and orders.


## Usage
1. **User Flow**:
   - Visit the live website: [E-Commerce Store](https://nexcart-ten.vercel.app/)
   - Register or log in to the platform.
   - Browse products, add to cart, and proceed to checkout.
   - Choose Stripe or Razorpay for payment and complete the order.
   - View order history in the user dashboard.

2. **Admin Flow**:
   - Log in as an admin on the live website: [E-Commerce Store Admin](https://nexcart-admin.vercel.app/) (requires admin credentials).
   - Access the admin panel to manage products and orders.
   - Upload product images and details, and check orders.



## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Payment Gateways](#payment-gateways)
- [Image Management](#image-management)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Features**:
  - Browse products by category, search, or filter.
  - Add/remove products to/from the cart.
  - Secure checkout with Stripe and Razorpay payment gateways.
  - Order history and tracking.
  - User authentication (signup, login, logout) with JWT.
- **Admin Features**:
  - Add, update, and delete products.
  - Manage orders and update order status.
- **Responsive Design**: Optimised for desktop and mobile devices.
- **Image Management**: Product images are stored and managed via Cloudinary.
- **Secure Payments**: Integrated with Stripe and Razorpay for seamless transactions.

## Tech Stack
- **Frontend**: React, useContext (state management), Axios (API calls), Tailwind CSS (styling)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Payment Gateways**: Stripe, Razorpay
- **Image Hosting**: Cloudinary
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Vercel for frontend, backend, MongoDB Atlas for database)

## Installation

### Prerequisites
- Node.js (>= 14.x)
- MongoDB (local or MongoDB Atlas)
- Accounts with Stripe, Razorpay, and Cloudinary
- Git

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ecommerce-mern.git
   cd ecommerce-mern
