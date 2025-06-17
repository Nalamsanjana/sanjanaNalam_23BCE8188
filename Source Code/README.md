# 🌾 Smart Crop Recommendation System (Backend)

This is the backend of the **Smart Crop Recommendation System**. It allows users to register/login and manage **smart agricultural rules** that combine crop suggestions, pest risks, pesticide recommendations, and weather insights — all in a single unified API.

---

## 🚀 Features

- ✅ User Authentication (Register/Login with JWT)
- ✅ Unified Smart Rule Management:
  - Temperature, Humidity, Rainfall
  - Crop Recommendation
  - Pest Risk Level
  - Pesticide Suggestion
  - Weather Messages
- ✅ Full CRUD operations
- ✅ Swagger API Documentation
- ✅ Postman Collection Included

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Swagger (OpenAPI)
- Postman Collection for API Testing

---

## 📁 Project Structure

smart-crop-backend/
├── controllers/
├── middleware/
├── models/
├── routes/
├── postman/
│ └── SmartCrop.postman_collection.json
├── swagger/
│ └── swagger.js
├── .env
├── server.js
└── README.md


---

## 🔐 Authentication

All endpoints are protected using JWT. First register or login to get a token, then use it in headers like:


Authorization: Bearer <your-token-here>


---

## 🔧 Setup Instructions

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd smart-crop-backend

2. Install dependencies:
   npm install

3.Create a .env file in the root with the following:

    PORT=5001
    MONGO_URI=<your-mongodb-uri>
    JWT_SECRET=<your-secret-key>

4. Start the Server:
  node server.js


  📬 Postman Collection
You can find the Postman collection in the /postman folder.

How to Use
Open Postman.

Click on Import.

Choose the file:
/postman/SmartCrop.postman_collection.json

Start testing endpoints like:

POST /auth/register

POST /auth/login

POST /smart-rules

GET /smart-rules

Example base URL: http://localhost:5001/api

📖 Swagger API Docs
Access live documentation at:

http://localhost:5001/api-docs
You can try out all endpoints directly in the browser using Swagger UI.

🧪 Sample SmartRule Schema
{
  "minTemp": 20,
  "maxTemp": 30,
  "minHumidity": 40,
  "maxHumidity": 80,
  "minRainfall": 50,
  "maxRainfall": 100,
  "crop": "Wheat",
  "pestRisk": "Medium",
  "pesticide": "Pesticide A",
  "weatherMessage": "Moderate rainfall expected"
}

👩‍💻 Developed by
Sanjana Nalam – for Industrial Certification MongoDB Project

📌 License
This project is for educational use. All rights reserved.

yaml


---

Let me know if you also want a Postman collection file or a sample `.env` file template to include!