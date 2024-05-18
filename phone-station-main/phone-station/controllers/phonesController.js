const db = require('../models');

// CREATE phone
exports.createPhone = async (req, res) => {
  try {
    const phone = await db.Phone.create(req.body);
    res.status(201).json(phone);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// READ all phones
exports.getAllPhones = async (req, res) => {
  try {
    const phones = await db.Phone.findAll();
    res.json(phones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ phone by ID
exports.getPhoneById = async (req, res) => {
  try {
    const phone = await db.Phone.findByPk(req.params.id);
    if (phone === null) {
      res.status(404).json({ message: 'Phone not found' });
    } else {
      res.json(phone);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE phone by ID
exports.updatePhone = async (req, res) => {
  try {
    const [updated] = await db.Phone.update(req.body, {
      where: { phone_id: req.params.id },
    });
    if (updated) {
      const updatedPhone = await db.Phone.findByPk(req.params.id);
      res.status(200).json(updatedPhone);
    } else {
      res.status(404).json({ message: 'Phone not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE phone by ID
exports.deletePhone = async (req, res) => {
  try {
    const deleted = await db.Phone.destroy({
      where: { phone_id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Phone not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
