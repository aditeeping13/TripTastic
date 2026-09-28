# TripTastic - Start Both Servers
# This script starts both the backend and frontend servers in separate PowerShell windows

Write-Host "🚀 Starting TripTastic Servers..." -ForegroundColor Cyan
Write-Host ""

# Get the script directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path

# Start Backend Server
Write-Host "📦 Starting Backend Server (Spring Boot)..." -ForegroundColor Green
$backendPath = Join-Path $scriptPath "backend\tours-and-travels-backend-master"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$backendPath'; Write-Host '🔧 Backend Server Starting...' -ForegroundColor Yellow; mvn spring-boot:run"

# Wait a moment before starting frontend
Start-Sleep -Seconds 3

# Start Frontend Server
Write-Host "⚛️  Starting Frontend Server (React)..." -ForegroundColor Green
$frontendPath = Join-Path $scriptPath "frontend\tours-and-travels-frontend-master"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$frontendPath'; Write-Host '🎨 Frontend Server Starting...' -ForegroundColor Yellow; npm start"

Write-Host ""
Write-Host "✅ Both servers are starting!" -ForegroundColor Green
Write-Host ""
Write-Host "📍 Backend will be available at: http://localhost:8080" -ForegroundColor Cyan
Write-Host "📍 Frontend will be available at: http://localhost:3000" -ForegroundColor Cyan
Write-Host "📍 API Documentation: http://localhost:8080/swagger-ui.html" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press any key to exit this window..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
