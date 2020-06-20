const bcrypt = require('bcryptjs');

const User = require('../models/User');
const generateAccessToken = require('../helpers/generateAccessToken');

module.exports = {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;

      const user = await User.create({ name, email, password });

      user.password = undefined;

      return res.status(200).json({
        authenticated: true,
        accessToken: generateAccessToken(user._id),
        user: { _id: user._id, email: user.email, name: user.name },
      });
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async authenticate(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email }).select('+password');

      if (!user) {
        return res.status(400).json({ message: 'User not found.' });
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: 'Invalid password.' });
      }

      const { _id, name } = user;

      return res.status(200).json({
        authenticated: true,
        accessToken: generateAccessToken(_id),
        user: { _id, email: user.email, name },
      });
    } catch (err) {
      return res.status(400).json(err);
    }
  },
};
