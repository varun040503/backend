const User = require('../models/User');

const adminController = {
  login: async (req, res) => {
    // Authentication logic
  },
  addMember: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const newUser = new User({ name, email, password });
      await newUser.save();
      res.status(201).json({ message: 'Member added successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateMember: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;
      await User.findByIdAndUpdate(id, { name, email, password });
      res.status(200).json({ message: 'Member updated successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteMember: async (req, res) => {
    try {
      const { id } = req.params;
      await User.findByIdAndDelete(id);
      res.status(200).json({ message: 'Member deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // Other controller methods...
};

module.exports = adminController;
