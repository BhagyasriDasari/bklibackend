# Authentication Backend

Deployed Link:https://bklibackend-1.onrender.com/

This is the **backend** of the Klickks application, built using **Node.js** and **Express.js**. It handles user registration, login, and authentication using SQLite as the database.

## Features

- User registration with hashed passwords using `bcrypt`.
- User login with session management.
- Protected routes for authenticated users.
- SQLite database for storing user credentials.
- Express session and cookies for authentication persistence.
- CORS enabled to allow frontend communication.

## Technologies

- Node.js
- Express.js
- SQLite3
- bcrypt
- express-session & connect-sqlite3
- CORS
- cookie-parser

## Setup Instructions

1. Install dependencies:

```bash
npm install
Start the server:

bash
Copy code
node src/app.js
The server will run at http://localhost:4000 (default).