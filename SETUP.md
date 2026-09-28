# TripTastic Configuration Setup Guide

## ✅ Configuration Files Created/Updated

### Backend Configuration
**File:** `backend/tours-and-travels-backend-master/src/main/resources/application.properties`

```properties
# MongoDB Configuration
spring.data.mongodb.uri=mongodb+srv://123cs0204:03082004ts@cluster0.eore8d9.mongodb.net/tours_travel_system
spring.data.mongodb.database=tours_travel_system

# CORS Configuration
frontend.url=http://localhost:3000

# File Upload
com.toursandtravel.image.folder.path=uploads
spring.servlet.multipart.max-file-size=10MB

# Server Port
server.port=8080
```

### Frontend Configuration
**File:** `frontend/tours-and-travels-frontend-master/.env`

```properties
REACT_APP_API_URL=http://localhost:8080/api
REACT_APP_URL=http://localhost:8080
REACT_APP_NAME=TripTastic
REACT_APP_ENV=development
```

### Upload Directory
**Created:** `backend/tours-and-travels-backend-master/uploads/`
- This directory will store all uploaded tour images

---

## 🚀 Quick Start Commands

### Start Both Servers (Recommended)
```powershell
# Run from TripTastic root directory
.\start-servers.ps1
```

### Start Servers Manually

**Backend:**
```bash
cd backend/tours-and-travels-backend-master
mvn spring-boot:run
```

**Frontend:**
```bash
cd frontend/tours-and-travels-frontend-master
npm start
```

---

## 🔧 Configuration Details

### Backend Settings

| Setting | Value | Description |
|---------|-------|-------------|
| Database | MongoDB Atlas | Cloud database |
| Server Port | 8080 | Backend API port |
| Upload Path | `uploads/` | Relative path for images |
| Max File Size | 10MB | Maximum upload size |
| CORS Origin | `http://localhost:3000` | Frontend URL |

### Frontend Settings

| Setting | Value | Description |
|---------|-------|-------------|
| API URL | `http://localhost:8080/api` | Backend API endpoint |
| Base URL | `http://localhost:8080` | Backend base URL |
| Environment | development | Current environment |

---

## 📋 Checklist

- [x] Backend `application.properties` configured
- [x] Frontend `.env` file configured
- [x] Uploads directory created
- [x] MongoDB connection string set
- [x] CORS configured for frontend
- [x] File upload limits set
- [x] Startup script created

---

## 🌐 Access Points

Once both servers are running:

- **Frontend Application:** http://localhost:3000
- **Backend API:** http://localhost:8080/api
- **API Documentation:** http://localhost:8080/swagger-ui.html
- **Health Check:** http://localhost:8080/actuator/health (if enabled)

---

## 🔐 Security Notes

### Current Setup (Development)
- MongoDB credentials are in `application.properties`
- CORS is open to `localhost:3000`
- File uploads limited to 10MB

### For Production
1. Move sensitive data to environment variables
2. Update MongoDB credentials
3. Configure proper CORS origins
4. Enable HTTPS
5. Add authentication tokens
6. Set up proper logging

---

## 🛠️ Troubleshooting

### Backend Won't Start
1. Check if port 8080 is available
2. Verify MongoDB connection string
3. Ensure Java 17+ is installed
4. Check Maven installation

### Frontend Won't Start
1. Check if port 3000 is available
2. Verify `.env` file exists
3. Run `npm install` if dependencies missing
4. Clear npm cache: `npm cache clean --force`

### Can't Connect to Backend
1. Ensure backend is running on port 8080
2. Check CORS configuration
3. Verify `.env` file has correct API URL
4. Check browser console for errors

---

## 📝 Next Steps

1. ✅ Configuration files are set up
2. ✅ Servers can be started
3. 🔄 Add initial data to MongoDB
4. 🔄 Test user registration and login
5. 🔄 Upload tour images
6. 🔄 Create sample tours

---

**Setup Complete! Ready to run TripTastic! 🎉**
