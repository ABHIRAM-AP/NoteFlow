# Note Taking App (Flask + React)

A simple full-stack **Note Taking Application** built with **Flask** (backend) and **React** (frontend).
The application allows users to **create, view, update, and delete notes** through a REST API and a minimal web interface.

This project demonstrates a basic **full-stack architecture**, API design, database integration, and frontend-backend communication.

---

# Features

* Create new notes
* View all notes
* Update existing notes
* Delete notes
* Minimal and clean UI
* Timestamp tracking (`created_at`, `updated_at`)
* RESTful API design

---

# Tech Stack

### Backend

* Python
* Flask
* Flask-SQLAlchemy
* Flask-CORS
* SQLite

### Frontend

* React
* Axios
* Basic CSS

---

# Project Structure

```
note-app
│
├── backend
│   ├── app.py
│   ├── database.py
│   ├── models.py
│   ├── routes.py
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │   ├── api.js
│   │   ├── App.js
│   │   └── components
│   │       ├── NoteForm.js
│   │       ├── NoteList.js
│   │       └── NoteItem.js
│   └── package.json
│
└── README.md
```

---

# Database Schema

### Note Model

| Field      | Type     | Description                |
| ---------- | -------- | -------------------------- |
| id         | Integer  | Primary key                |
| title      | String   | Note title                 |
| content    | Text     | Note content               |
| created_at | DateTime | Time note was created      |
| updated_at | DateTime | Time note was last updated |

---

# API Endpoints

## Get all notes

```
GET /notes
```

Response:

```
[
 {
   "id": 1,
   "title": "First Note",
   "content": "Example content",
   "created_at": "...",
   "updated_at": "..."
 }
]
```

---

## Create a note

```
POST /notes
```

Request body:

```
{
 "title": "Meeting Notes",
 "content": "Discuss project tasks"
}
```

---

## Update a note

```
PUT /notes/<id>
```

Request body:

```
{
 "title": "Updated title",
 "content": "Updated content"
}
```

---

## Delete a note

```
DELETE /notes/<id>
```

---

# Backend Setup

Navigate to backend folder:

```
cd backend
```

Create virtual environment:

```
python -m venv venv
```

Activate environment:

### Windows

```
venv\Scripts\activate
```

### Linux / Mac

```
source venv/bin/activate
```

Install dependencies:

```
pip install -r requirements.txt
```

Run the backend server:

```
python app.py
```

Backend will run on:

```
http://127.0.0.1:5000
```

---

# Frontend Setup

Navigate to frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Run React app:

```
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

# How It Works

1. The React frontend sends API requests using **Axios**.
2. The Flask backend exposes REST APIs for notes.
3. Notes are stored in an **SQLite database** using **SQLAlchemy ORM**.
4. The frontend fetches and displays notes dynamically.

---

# Future Improvements

Potential improvements include:

* Search notes
* Tagging system
* Markdown support
* Dark mode
* Authentication
* Pagination
* Better UI styling
* Docker deployment

---

# Author

Abhiram A P
