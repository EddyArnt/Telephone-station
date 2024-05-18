const db = require('../models');
// CREATE call
exports.createCall = async (req, res) => {
  try {
    const call = await db.Call.create(req.body);
    res.status(201).json(call);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// READ all calls
exports.getAllCalls = async (req, res) => {
  try {
    const calls = await db.Call.findAll();
    res.json(calls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ call by ID
exports.getCallById = async (req, res) => {
  try {
    const call = await db.Call.findByPk(req.params.id);
    if (call === null) {
      res.status(404).json({ message: 'Call not found' });
    } else {
      res.json(call);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE call by ID
exports.updateCall = async (req, res) => {
  try {
    const [updated] = await db.Call.update(req.body, {
      where: { call_id: req.params.id },
    });
    if (updated) {
      const updatedCall = await db.Call.findByPk(req.params.id);
      res.status(200).json(updatedCall);
    } else {
      res.status(404).json({ message: 'Call not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE call by ID
exports.deleteCall = async (req, res) => {
  try {
    const deleted = await db.Call.destroy({
      where: { call_id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Call not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
