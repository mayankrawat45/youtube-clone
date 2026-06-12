# YouTube Clone (MERN Stack)

## Overview

This project is a YouTube Clone built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). It allows users to register, log in, upload videos, manage channels, search videos, filter by categories, like/dislike videos, and interact through comments.

## Demo Video

[Watch Demo Video](https://drive.google.com/file/d/1OaKj4Mv4UlH1ILoXHMmo27xjuit3mkcP/view?usp=sharing)

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Logout Functionality

### Video Management

* Upload Videos
* Edit Videos
* Delete Videos
* View Video Details
* Like and Dislike Videos

### Comments

* Add Comments
* Edit Comments
* Delete Comments

### Search & Filter

* Search Videos by Title
* Filter Videos by Category

### Channel Management

* View Uploaded Videos
* Manage Uploaded Videos

### User Interface

* Responsive Design
* YouTube-inspired Layout
* Recommended Videos Section

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Axios
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

## Installation

### Clone Repository

```bash
git clone https://github.com/mayankrawat45/youtube-clone.git
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in the backend folder:

```env
PORT=5000
MONGOURI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Project Structure

* Frontend (React + Tailwind CSS)
* Backend (Node.js + Express.js)
* MongoDB Database

## Author

Mayank Singh Rawat
