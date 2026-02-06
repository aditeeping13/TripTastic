# 🌍 TripTastic - Tours and Travel Management System

A full-stack web application for managing tours, bookings, events, and travel services with a modern SaaS-inspired dashboard interface.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.0-brightgreen.svg)
![React](https://img.shields.io/badge/React-18.3.1-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green.svg)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Running the Application](#-running-the-application)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### User Management
- 🔐 **Role-based Authentication** - Admin, Tour Guide, and Customer roles
- 👤 **User Profiles** - Manage personal information and addresses
- 🔑 **JWT Security** - Secure authentication and authorization

### Tour Management
- 🗺️ **Tour Creation** - Create and manage tour packages
- 📍 **Location Management** - Add and manage tour locations
- 🏨 **Lodging Options** - Manage accommodation details
- 🚗 **Transport Services** - Configure transportation options
- 🎫 **Ticket Pricing** - Flexible pricing and availability management

### Booking System
- 📅 **Tour Bookings** - Easy booking process for customers
- 💳 **Booking Management** - Track and manage all bookings
- ✅ **Status Tracking** - Real-time booking status updates
- 📊 **Booking History** - Complete booking records

### Event Management
- 🎉 **Events** - Create and manage travel events
- 🎟️ **Event Tickets** - Ticket management and pricing
- 📍 **Venue Details** - Venue type and location information

### Admin Dashboard
- 📊 **Modern SaaS UI** - Clean, professional dashboard interface
- 📈 **Analytics** - View all bookings, tours, and customers
- 🎨 **Responsive Design** - Works seamlessly on all devices
- 🔍 **Data Tables** - Advanced table views with hover effects and status badges

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18.3.1
- **Routing:** React Router DOM 6.24.0
- **HTTP Client:** Axios 1.7.2
- **Notifications:** React Toastify 10.0.5
- **Build Tool:** Create React App 5.0.1
- **Styling:** Custom CSS with modern SaaS design patterns
- **Fonts:** Inter & Montserrat (Google Fonts)

### Backend
- **Framework:** Spring Boot 3.3.0
- **Language:** Java 17
- **Security:** Spring Security with JWT
- **Database:** MongoDB (Spring Data MongoDB)
- **Logging:** Log4j2
- **Build Tool:** Maven
- **Development:** Spring Boot DevTools

### Database
- **Primary:** MongoDB
- **Migration:** MySQL to MongoDB migration script included

## 🏗️ Architecture

```
TripTastic/
├── frontend/                          # React Frontend Application
│   └── tours-and-travels-frontend-master/
│       ├── public/                    # Static assets
│       ├── src/
│       │   ├── EventComponent/        # Event management components
│       │   ├── LocationComponent/     # Location management
│       │   ├── LodgingComponent/      # Lodging management
│       │   ├── NavbarComponent/       # Navigation components
│       │   ├── PageComponent/         # Page components (Home, etc.)
│       │   ├── TourBookingComponent/  # Booking management
│       │   ├── TourComponent/         # Tour management
│       │   ├── TransportComponent/    # Transport management
│       │   ├── UserComponent/         # User management
│       │   ├── styles/                # Global styles (TableStyles.css)
│       │   └── images/                # Image assets
│       └── package.json
│
├── backend/                           # Spring Boot Backend
│   └── tours-and-travels-backend-master/
│       ├── src/
│       │   ├── main/
│       │   │   ├── java/              # Java source files
│       │   │   └── resources/         # Application properties
│       │   └── test/                  # Test files
│       └── pom.xml
│
└── mysql_to_mongo.py                  # Database migration script
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0 or higher)
- **npm** (v6.0 or higher)
- **Java JDK** (17 or higher)
- **Maven** (3.6 or higher)
- **MongoDB** (Latest version)
- **Git**

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/aditeeping13/TripTastic.git
cd TripTastic
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend/tours-and-travels-backend-master

# Install dependencies (Maven will download them automatically)
mvn clean install

# Or if you prefer to skip tests
mvn clean install -DskipTests
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend/tours-and-travels-frontend-master

# Install dependencies
npm install
```

## ⚙️ Configuration

### Backend Configuration

Create or update `application.properties` in `backend/tours-and-travels-backend-master/src/main/resources/`:

```properties
# Server Configuration
server.port=8080

# MongoDB Configuration
spring.data.mongodb.uri=mongodb://localhost:27017/triptastic
spring.data.mongodb.database=triptastic

# JWT Configuration
jwt.secret=your-secret-key-here
jwt.expiration=86400000

# File Upload Configuration
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB

# Logging
logging.level.root=INFO
logging.level.com.toursandtravel=DEBUG
```

### Frontend Configuration

Create `.env` file in `frontend/tours-and-travels-frontend-master/`:

```env
REACT_APP_URL=http://localhost:8080
```

### MongoDB Setup

1. **Install MongoDB** (if not already installed)
2. **Start MongoDB service:**
   ```bash
   # Windows
   net start MongoDB
   
   # Linux/Mac
   sudo systemctl start mongod
   ```
3. **Create database:**
   ```bash
   mongosh
   use triptastic
   ```

## 🏃 Running the Application

### Start Backend Server

```bash
# Navigate to backend directory
cd backend/tours-and-travels-backend-master

# Run with Maven
mvn spring-boot:run

# Or run the JAR file
java -jar target/tours-and-travels-backend-0.0.1-SNAPSHOT.jar
```

Backend will start on: `http://localhost:8080`

### Start Frontend Development Server

```bash
# Navigate to frontend directory
cd frontend/tours-and-travels-frontend-master

# Start development server
npm start
```

Frontend will start on: `http://localhost:3000`

### Access the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8080/api

## 🌐 Live Demo

### Deployed Application

- **Frontend URL:** https://triptastic-tourism.netlify.app/
- **Backend API:** https://triptastic-aaux.onrender.com/api

### Demo Admin Credentials

You can login as an admin to test all features:

```
Email: demo.admin@demo.com
Password: 123456
Role: Admin
```

**Admin Features:**
- Manage all tours, locations, lodging, and transport
- View all bookings and customers
- Manage tour guides
- Full access to dashboard analytics

**Note:** The demo admin account is pre-configured in the system for testing purposes.

## 📁 Project Structure

### Frontend Components

```
src/
├── EventComponent/
│   ├── AddEvent.jsx
│   ├── UpdateEvent.jsx
│   └── ViewAllEvents.jsx
├── LocationComponent/
│   ├── AddLocation.jsx
│   ├── UpdateLocation.jsx
│   └── ViewAllLocations.jsx
├── LodgingComponent/
│   ├── AddLodge.jsx
│   ├── UpdateLodge.jsx
│   └── ViewAllLodges.jsx
├── TourComponent/
│   ├── AddTour.jsx
│   ├── UpdateTour.jsx
│   ├── ViewAllEvents.jsx
│   ├── ViewGuideTours.jsx
│   └── ActionButtons.css
├── TourBookingComponent/
│   ├── ViewAllTourBookings.jsx
│   └── ViewTourGuideTourBookings.jsx
├── UserComponent/
│   ├── ViewAllCustomers.jsx
│   └── ViewAllTourGuides.jsx
├── NavbarComponent/
│   ├── AdminHeader.jsx
│   ├── CustomerHeader.jsx
│   ├── TourGuideHeader.jsx
│   └── NormalHeader.jsx
├── PageComponent/
│   ├── HomePage.jsx
│   └── AboutUs.jsx
└── styles/
    └── TableStyles.css          # Modern SaaS table styling
```

### Backend Package Structure

```
com.toursandtravel/
├── config/                      # Security & Configuration
├── controller/                  # REST Controllers
├── dto/                         # Data Transfer Objects
├── entity/                      # MongoDB Entities
├── exception/                   # Custom Exceptions
├── repository/                  # MongoDB Repositories
├── service/                     # Business Logic
└── utility/                     # Helper Classes
```

## 📚 API Documentation

### Authentication Endpoints

```
POST   /api/user/register        # Register new user
POST   /api/user/login           # User login
GET    /api/user/fetch/role-wise # Get users by role
```

### Tour Management

```
GET    /api/tour/fetch/all       # Get all tours
GET    /api/tour/{id}            # Get tour by ID
POST   /api/tour/add             # Create new tour
PUT    /api/tour/update          # Update tour
DELETE /api/tour/delete/{id}     # Delete tour
```

### Booking Management

```
GET    /api/booking/fetch/all    # Get all bookings
POST   /api/booking/add          # Create booking
PUT    /api/booking/update       # Update booking status
DELETE /api/booking/delete/{id}  # Delete booking
```

### Event Management

```
GET    /api/event/fetch/all      # Get all events
POST   /api/event/add            # Create event
PUT    /api/event/update         # Update event
DELETE /api/event/delete/{id}    # Delete event
```

## 🎨 Design Features

### Modern SaaS Dashboard
- **Clean White Containers** - Professional card-based layout
- **Muted Grey Headers** - Subtle #F9FAFB background
- **Soft Hover Effects** - Smooth row interactions
- **Status Badges** - Color-coded status indicators
- **Rounded Images** - 60x60px professional image display
- **Professional Typography** - Inter & Montserrat fonts
- **Responsive Tables** - Mobile-friendly data views

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Aditi** - [@aditeeping13](https://github.com/aditeeping13)

## 🙏 Acknowledgments

- Design inspired by Stripe and Airbnb
- Spring Boot community
- React community
- MongoDB documentation

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

---

**Made with ❤️ by the TripTastic Team**
