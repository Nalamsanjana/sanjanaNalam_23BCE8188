const SmartRule = require('../models/SmartRule');

// CREATE
exports.createSmartRule = async (req, res) => {
  try {
    const rule = await SmartRule.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json(rule);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ - all for logged-in user
exports.getAllSmartRules = async (req, res) => {
  try {
    const rules = await SmartRule.find({ createdBy: req.user._id });
    res.status(200).json(rules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// UPDATE
exports.updateSmartRule = async (req, res) => {
  try {
    const updated = await SmartRule.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user._id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Rule not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteSmartRule = async (req, res) => {
  try {
    const deleted = await SmartRule.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id
    });
    if (!deleted) return res.status(404).json({ error: 'Rule not found' });
    res.status(200).json({ message: 'Rule deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
