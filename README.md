# E-Commerce Platform

An eCommerce platform built with the MERN stack. It is created with M(ongoDb)E(xpress)R(eact)N(ode) Stack. It has user authentication system, an admin user who can add new products in the app, check for order and payments and also choose which order has been delivered from the store.

![Homepage](/screens/homepage.png)
![Login](/screens/signin.png)
![Signup](/screens/signup.png)
![Profile](/screens/user-profile.png)

## Features

- Full featured shopping cart
- Product reviews and ratings
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)

## Built With

- NodeJs
- Express
- ReactJs
- Redux
- MongoDb
- JSON Web Tokens

## Usage

### Dependencies

Install dependencies both on the frontend and backend:

```
npm install
cd frontend
npm install
```

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Author

- [Ephrem Getachew](https://github.com/Ephrem2166/)
