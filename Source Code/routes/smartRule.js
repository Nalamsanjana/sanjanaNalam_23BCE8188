const express = require('express');
const router = express.Router();
const {
  createSmartRule,
  getAllSmartRules,
  updateSmartRule,
  deleteSmartRule
} = require('../controllers/smartRuleController');
const authMiddleware = require('../middleware/authMiddleware');

// Routes
router.post('/', authMiddleware, createSmartRule);
router.get('/', authMiddleware, getAllSmartRules);
router.put('/:id', authMiddleware, updateSmartRule);
router.delete('/:id', authMiddleware, deleteSmartRule);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     SmartRule:
 *       type: object
 *       required:
 *         - minTemp
 *         - maxTemp
 *         - minHumidity
 *         - maxHumidity
 *         - crop
 *       properties:
 *         minTemp:
 *           type: number
 *         maxTemp:
 *           type: number
 *         minHumidity:
 *           type: number
 *         maxHumidity:
 *           type: number
 *         minRainfall:
 *           type: number
 *         maxRainfall:
 *           type: number
 *         crop:
 *           type: string
 *         pestRisk:
 *           type: string
 *         pesticide:
 *           type: string
 *         weatherMessage:
 *           type: string
 */

/**
 * @swagger
 * /smart-rules:
 *   post:
 *     summary: Create a new smart rule
 *     tags: [SmartRule]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SmartRule'
 *     responses:
 *       201:
 *         description: Smart rule created successfully
 *
 *   get:
 *     summary: Get all smart rules created by the logged-in user
 *     tags: [SmartRule]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of smart rules
 */

/**
 * @swagger
 * /smart-rules/{id}:
 *   put:
 *     summary: Update a smart rule by ID
 *     tags: [SmartRule]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the smart rule to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SmartRule'
 *     responses:
 *       200:
 *         description: Smart rule updated successfully
 *
 *   delete:
 *     summary: Delete a smart rule by ID
 *     tags: [SmartRule]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the smart rule to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Smart rule deleted successfully
 */
