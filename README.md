# Personal Portfolio Website

A modern and responsive personal portfolio website built using the MERN Stack ecosystem. This portfolio showcases my projects, technical skills, education, experience, and provides a contact form for professional communication.

## Live Demo

Frontend: https://portfolio-website-sable-nine-73.vercel.app/

Backend API: https://portfolio-website-1-h1ru.onrender.com

## Features

* Responsive Design
* Professional Hero Section
* About Me Section
* Skills Showcase
* Education Section
* Project Portfolio
* Resume Download
* Contact Form
* MongoDB Integration
* REST API Backend
* Mobile Friendly UI
* Smooth Navigation
* Social Media Integration

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv
* cors

### Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

## Project Structure

Portfolio-Website/

├── frontend/

│ ├── src/

│ ├── assets/

│ ├── components/

│ ├── data/

│ └── services/

│

├── backend/

│ ├── config/

│ ├── controllers/

│ ├── models/

│ ├── routes/

│ └── server.js

│

└── README.md

## Database Schema

### Contact

| Field     | Type   |
| --------- | ------ |
| name      | String |
| email     | String |
| subject   | String |
| message   | String |
| createdAt | Date   |

## Installation

### Clone Repository

```bash
git clone https://github.com/ankitumath/Portfolio-Website.git
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

## API Endpoints

### Send Contact Message

```http
POST /api/contact
```

Request Body:

```json
{
  "name": "Ankit",
  "email": "ankit@example.com",
  "subject": "Internship Opportunity",
  "message": "Let's connect."
}
```

## Projects Included

### Online Course Management System

A MERN Stack application that enables students to browse courses, enroll in courses, and track learning progress.

### Hackathon Team Builder

A platform that helps students discover hackathons and build teams for participation.

### Squid Hack Website

A responsive hackathon website UI inspired by modern event platforms.

## Future Improvements

* Admin Dashboard
* Blog Section
* Project Filtering
* Email Notifications
* Visitor Analytics

## Author

Ankit Umath

LinkedIn:
https://www.linkedin.com/in/ankit-umath-26b928328/

GitHub:
https://github.com/ankitumath

Email:
[ankitumath30@gmail.com](mailto:ankitumath30@gmail.com)

## License

This project is licensed under the MIT License.
