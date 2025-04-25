## E-Product Rating System

A React-based E-Commerce product review system built using the Fake Store API and a local JSON server. Users can browse products, submit ratings using clickable stars, and explore real-time reviews — all in a sleek and responsive interface styled with Bootstrap.

## MVP Features (Minimum Viable Product)

- Product listing from Fake Store API  
- View individual products with image, title, and price  
- Submit a review (Name, Star Rating, Comment) via a modal  
- Clickable star rating input  
- Search products by name  
- Filter reviews by product  
- Reviews displayed with:
  - Product image
  - Product name
  - Username
  - Number of stars
  - Comment  
- Store reviews using JSON Server (`db.json`)  
- Real-time review submission via POST  
- Review layout styled horizontally  
- Delete a review  

## Technologies Used

- React
- Bootstrap CSS
- React Router DOM
- JSON Server (local REST API)
- Fetch API
- React Toastify (for notification messages)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Abby4cc/e-product-rate-app.git
cd e-product-rate-app

### 2.Install Dependencies

```bash
git npm install

### 3.Start Json server

```bash
git npm run server 

### 4.Start React Application

```bash
git npm start

## Deployment Instructions
-Build the poduction version

```bash
git npm run build
-Deploy the build folder to your hosting service of choice (Netlify, Vercel, GitHub Pages, etc.)

Author
Made by Abigail Chelangat