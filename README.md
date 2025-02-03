# User Management System

This project is developed as part of the ElementalX assignment. It is a **User Management System** implemented using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. The application supports user authentication, authorization, and profile management.

---

## Features

### Backend Features
- **/login**: Endpoint to log in users and provide a JWT token for session management.
- **/logout**: Endpoint to log out users and invalidate the session token.
- **/users**: Endpoint to get all the registered users in the database.
- **Middleware for Authorization**: Secures backend routes by verifying JWT tokens and user roles.

### Frontend Features
- **Login Component**: Allows users to log in with their credentials.
- **Logout Functionality**: Enables users to safely log out of their sessions.
- **Profiles**: Displays user profiles and additional user data fetched securely from the backend.
- **Navbar**: Includes navigation links for Login, Profile, and Logout options based on user state.
- **Footer**: Static footer included across all pages for a consistent UI.

---

## Tech Stack

### Frontend
- React.js with **Hooks** and **Redux Toolkit** for state management.
- **Axios** for API requests.
- Tailwind CSS for responsive and modern styling.

### Backend
- Node.js with **Express.js** for RESTful API implementation.
- MongoDB for database management.
- JWT for user authentication and route protection.
- **bcrypt.js** for password encryption.

### Tools
- Postman for API testing.
- VS Code for development.
- Git/GitHub for version control.