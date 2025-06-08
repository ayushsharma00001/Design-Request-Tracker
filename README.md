# Design Request Tracker

A full-stack MERN application for tracking design requests.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or local MongoDB)

## Project Structure

```
.
├── backend
│   ├── app.js
│   ├── db/
│   └── routes/
├── frontend
│   ├── src/
│   ├── public/
│   └── dist/
├── .env
├── package.json
└── README.md
```

## Environment Variables

Create a `.env` file in the root directory with the following content:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your actual MongoDB URI.

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies for both backend and frontend:**
   ```sh
   npm install
   npm install --prefix frontend
   ```

## Running Locally

### 1. Build the Frontend

```sh
npm run build --prefix frontend
```

### 2. Start the Backend Server

```sh
npm start
```

- The backend will run on `http://localhost:8080` by default.
- The frontend build will be served from the backend.

## Development Mode

You can run the frontend and backend separately in development:

**Start the backend:**
```sh
cd backend
npm run dev
```

**Start the frontend (in a new terminal):**
```sh
cd frontend
npm run dev
```

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:8080](http://localhost:8080)

## Deployment (Render)

- Set the build command to:
  ```
  npm run build
  ```
- Set the start command to:
  ```
  npm start
  ```
- Add your environment variables (`PORT`, `MONGO_URI`) in the Render dashboard.

## Troubleshooting

- **MongoDB connection errors:**  
  Make sure your MongoDB Atlas cluster allows connections from your current IP or from Render’s IPs.
- **Frontend not loading:**  
  Ensure the frontend is built (`frontend/dist` exists) before starting the backend.
