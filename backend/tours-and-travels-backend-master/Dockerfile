## ---- Build Stage ----
## ---- Build Stage ----
#FROM maven:3.9.6-eclipse-temurin-21 AS build
#WORKDIR /app
#
#COPY pom.xml .
#RUN mvn dependency:go-offline
#
#COPY src ./src
#RUN mvn clean package -DskipTests
#
## ---- Run Stage ----
#FROM eclipse-temurin:21-jre
#WORKDIR /app
#
## Copy jar from build stage
#COPY --from=build /app/target/*.jar app.jar
#
#EXPOSE 8080
#ENTRYPOINT ["java","-jar","app.jar"]
# ---- Build Stage ----
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

# Copy only Maven config first to cache dependencies
COPY pom.xml mvnw ./
COPY .mvn ./.mvn

# Download dependencies only (cached if pom.xml unchanged)
RUN mvn dependency:go-offline

# Copy source code
COPY src ./src

# Package app (skip tests for speed)
RUN mvn clean package -DskipTests

# ---- Run Stage ----
FROM eclipse-temurin:21-jre
WORKDIR /app

# Copy jar from build stage
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
