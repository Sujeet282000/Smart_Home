# Smart Home Dashboard

A full-stack smart home dashboard application with device control, todo management, and weather updates.

---

## Submission Instructions



---

## Project Structure

```
smart-home-dashboard/
  client/    # Frontend (React + Vite)
  server/    # Backend (Node.js + Express + MongoDB)
```

---

## Frontend Setup (client)

1. **Install dependencies:**
   ```bash
   cd client
   npm install
   ```
2. **Create a `.env` file:**
   - Copy the example below and fill in your values.
   ```env

   VITE_OPENWEATHER_API_KEY=2f0de1d4c944b648558a6e728b43cbdc
   VITE_API_BASE_URL=http://localhost:5000
   ```
3. **Start the frontend:**
   ```bash
   npm run dev
   ```
   The app will run at [http://localhost:5173](http://localhost:5173) by default.

---



## Backend Setup (server)

1. **Install dependencies:**
   ```bash
   cd server
   npm install
   ```
2. **Create a `.env` file:**
   - Copy the example below and fill in your values.
   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/Dashboard
   JWT_SECRET=mysecretjwt
   ```
3. **Start the backend:**
   ```bash
   npm start
   ```
   The server will run at [http://localhost:5000](http://localhost:5000) by default.

4. **Seed the database with initial device data:**
   ```bash
   node seed.js
   ```
   This will populate your database with default smart device entries.

---





## API Details

### Auth
- `POST /api/auth/login` — Login with email and password

### Devices
- `GET /api/devices` — List all devices
- `PUT /api/devices/:id/toggle` — Toggle device status

### Todos
- `GET /api/todos` — List all todos
- `POST /api/todos` — Add a new todo
- `PUT /api/todos/:id` — Update a todo
- `DELETE /api/todos/:id` — Delete a todo
- `PUT /api/todos/:id/toggle` — Toggle complete status of a todo

---

## Credentials & Environment Variables

### Frontend (`client/.env`)
- `VITE_API_BASE_URL` — URL of the backend server (e.g., http://localhost:5000)
- `VITE_OPENWEATHER_API_KEY` — Your OpenWeather API key

### Backend (`server/.env`)
- `PORT` — Port for backend server (default: 5000)
- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — Secret for JWT authentication

---

## Notes
- Make sure MongoDB is running locally or use a cloud MongoDB service.
- Obtain a free API key from [OpenWeather](https://openweathermap.org/api) for weather data.
- For any issues, try to contact me or reach out to me. 
