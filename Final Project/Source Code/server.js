const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const smartRuleRoutes = require('./routes/smartRule'); // ✅ Import unified route

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/smart-rules', smartRuleRoutes); // ✅ Use only smartRule

// ❌ Removed old separate crop, pest, and weather routes

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

const setupSwagger = require('./swagger');
setupSwagger(app); // Add this after routes
