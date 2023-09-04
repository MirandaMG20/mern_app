# GoalSetter Web Application

## Overview

The GoalSetter web application is a simple goal management tool that allows users to set, view, update, and delete their personal goals. It includes user authentication and Redux integration for state management. This README.md file provides an overview of the project structure and key components.

## Table of Contents

- [Project Structure](#project-structure)
- [Frontend](#frontend)
  - [React Components](#react-components)
  - [Redux Store](#redux-store)
- [Backend](#backend)
  - [Express Server](#express-server)
  - [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Running the Application](#running-the-application)
- [Contributors](#contributors)
- [License](#license)

## Project Structure

The project consists of both frontend and backend components.

- **Frontend**: The frontend is built using React.js and uses Redux for state management. It includes components for user authentication, setting goals, and displaying goals.
- **Backend**: The backend is built with Node.js and Express.js, providing RESTful APIs for user registration, login, and goal management. It uses MongoDB as the database.

## Frontend

### React Components

- `Dashboard.jsx`: The main dashboard component that displays user information and the list of goals. It also includes a goal creation form.
- `Login.jsx`: The login component for user authentication.
- `Register.jsx`: The registration component for user registration.
- `GoalForm.jsx`: A reusable component for creating new goals.
- `GoalItem.jsx`: A reusable component for displaying individual goals.
- `Header.jsx`: The header component that includes navigation links and user authentication controls.
- `Spinner.jsx`: A loading spinner component.

### Redux Store

- `authSlice.js`: Manages user authentication state, including registration, login, and logout actions.
- `goalSlice.js`: Manages user goals, including creating, retrieving, and deleting goals.

## Backend

### Express Server

- `server.js`: The main Express server file that sets up the server, connects to the MongoDB database, and defines API routes.
- `connectDB.js`: A module for establishing a connection to the MongoDB database.

### API Endpoints

- `/api/users`: Handles user registration login and logout.
- `/api/goals`: Manages user goals, including creating, retrieving, updating, and deleting goals.

## Testing

- Unit tests are included using Jest and the React Testing Library to test components and Redux slices.
- The tests ensure that components render correctly and that Redux actions and reducers function as expected.
