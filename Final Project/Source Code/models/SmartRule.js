// models/SmartRule.js
const mongoose = require('mongoose');

const smartRuleSchema = new mongoose.Schema({
  // Environmental conditions
  minTemp: Number,
  maxTemp: Number,
  minHumidity: Number,
  maxHumidity: Number,
  minRainfall: Number,
  maxRainfall: Number,

  // Final recommendation fields
  crop: String,             // Recommended crop
  pestRisk: String,         // Pest risk (Low, Medium, High)
  pesticide: String,        // Suggested pesticide
  weatherMessage: String,   // Any special weather warning/summary

  // Optional analyzed inputs if used
  temperature: Number,
  humidity: Number,
  rainfall: Number,
  soilTypes: [String],      // Array of soil types like ["Loamy", "Clay"]

  // Reference to user
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('SmartRule', smartRuleSchema);
