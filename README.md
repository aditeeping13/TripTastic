# TripTastic - Tours & Travel Booking System

A modern, minimalist professional travel booking application with a Spring Boot backend and React frontend.

## 🚀 Quick Start

### Prerequisites
- **Java 17** or higher
- **Node.js 18** or higher
- **Maven 3.6+**
- **MongoDB Atlas** account (or local MongoDB)

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend/tours-and-travels-backend-master
   ```

2. **Configure database:**
   - Open `src/main/resources/application.properties`
   - Update MongoDB connection string if needed (currently using MongoDB Atlas)
   - The uploads folder will be created automatically at `backend/tours-and-travels-backend-master/uploads`

3. **Install dependencies:**
   ```bash
   mvn clean install
   ```

4. **Run the backend:**
   ```bash
   mvn spring-boot:run
   ```
   
   Backend will start at: **http://localhost:8080**

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend/tours-and-travels-frontend-master
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   - The `.env` file is already configured for local development
   - Backend API URL: `http://localhost:8080`

4. **Run the frontend:**
   ```bash
   npm start
   ```
   
   Frontend will start at: **http://localhost:3000**

## 📋 Configuration Files

### Backend Configuration
**File:** `backend/tours-and-travels-backend-master/src/main/resources/application.properties`

Key configurations:
- **MongoDB:** Cloud database (MongoDB Atlas)
- **Server Port:** 8080
- **Upload Path:** `uploads/` (relative to backend directory)
- **Max File Size:** 10MB
- **CORS:** Configured for `http://localhost:3000`

### Frontend Configuration
**File:** `frontend/tours-and-travels-frontend-master/.env`

Key configurations:
- **API URL:** `http://localhost:8080`
- **Environment:** development

## 🎨 Features

### User Interface
- ✅ Minimalist professional design
- ✅ Clean white backgrounds with sophisticated typography
- ✅ Hero section with integrated search
- ✅ Popular destinations showcase
- ✅ Responsive tour cards with subtle shadows
- ✅ Professional footer

### Backend Features
- ✅ RESTful API with Spring Boot
- ✅ MongoDB database integration
- ✅ JWT authentication
- ✅ File upload support
- ✅ Swagger/OpenAPI documentation
- ✅ CORS configuration

### Frontend Features
- ✅ React 18 with React Router
- ✅ Axios for API calls
- ✅ Toast notifications
- ✅ Responsive design with Bootstrap 5
- ✅ Google Fonts (Inter & Montserrat)

## 📁 Project Structure

```
TripTastic/
├── backend/
│   └── tours-and-travels-backend-master/
│       ├── src/
│       │   ├── main/
│       │   │   ├── java/com/toursandtravel/
│       │   │   └── resources/
│       │   │       └── application.properties
│       │   └── test/
│       ├── uploads/                    # Image upload directory
│       └── pom.xml
│
└── frontend/
    └── tours-and-travels-frontend-master/
        ├── public/
        ├── src/
        │   ├── components/
        │   ├── images/
        │   ├── index.css              # Global styles
        │   └── App.js
        ├── .env                        # Environment variables
        └── package.json
```

## 🔧 API Endpoints

### Base URL
`http://localhost:8080/api`

### Main Endpoints
- **Tours:** `/api/tour/*`
- **Locations:** `/api/location/*`
- **Users:** `/api/user/*`
- **Bookings:** `/api/booking/*`
- **Transports:** `/api/transport/*`
- **Lodging:** `/api/lodge/*`

### API Documentation
Access Swagger UI at: **http://localhost:8080/swagger-ui.html**

## 🗄️ Database

### MongoDB Collections
- `tours` - Tour packages
- `locations` - Travel locations
- `users` - User accounts (customers, guides, admins)
- `bookings` - Tour bookings
- `transports` - Transportation options
- `lodges` - Accommodation options

## 🎯 User Roles

1. **Customer**
   - Browse and search tours
   - Book tours
   - View booking history

2. **Tour Guide**
   - Create and manage tours
   - Add tour activities and meals
   - View tour bookings

3. **Admin**
   - Manage locations, transports, and lodges
   - View all users and bookings
   - System administration

## 🚦 Running Both Servers

### Option 1: Separate Terminals
```bash
# Terminal 1 - Backend
cd backend/tours-and-travels-backend-master
mvn spring-boot:run

# Terminal 2 - Frontend
cd frontend/tours-and-travels-frontend-master
npm start
```

### Option 2: PowerShell Script
Create a `start-servers.ps1` file:
```powershell
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend/tours-and-travels-backend-master; mvn spring-boot:run"
Start-Sleep -Seconds 2
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd frontend/tours-and-travels-frontend-master; npm start"
```

## 📝 Environment Variables

### Backend (.env or application.properties)
```properties
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env)
```properties
REACT_APP_URL=http://localhost:8080
REACT_APP_API_URL=http://localhost:8080/api
REACT_APP_NAME=TripTastic
REACT_APP_ENV=development
```

## 🛠️ Troubleshooting

### Backend Issues

**Port 8080 already in use:**
```bash
# Find and kill process on port 8080
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

**MongoDB connection error:**
- Check MongoDB Atlas connection string
- Verify network access in MongoDB Atlas
- Check IP whitelist settings

### Frontend Issues

**Port 3000 already in use:**
- The app will prompt to use a different port
- Or manually kill the process on port 3000

**API connection error:**
- Ensure backend is running on port 8080
- Check `.env` file configuration
- Verify CORS settings in backend

## 📦 Building for Production

### Backend
```bash
cd backend/tours-and-travels-backend-master
mvn clean package
java -jar target/tours-and-travels-backend-0.0.1-SNAPSHOT.jar
```

### Frontend
```bash
cd frontend/tours-and-travels-frontend-master
npm run build
# Serve the build folder with a static server
```

## 🔐 Security Notes

- Change default MongoDB credentials in production
- Use environment variables for sensitive data
- Enable HTTPS in production
- Implement rate limiting
- Regular security updates

## 📄 License

This project is for educational purposes.

## 👥 Support

For issues or questions, please check the documentation or contact the development team.

---

**Happy Traveling with TripTastic! ✈️🌍**
