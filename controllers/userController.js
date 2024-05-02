const { User } = require("../models");

module.exports = {
  // Gets all users.
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Gets one user based on the id in the url.
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Creates a new user.
  async createUser(req, res) {
    try {
      const userData = await User.create(req.body);
      /* Example Data
        {
            "username": "lernantino",
            "email": "lernantino@gmail.com"
        }
      */
      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Updates one user based on the id in the url.
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        req.body,
        { new: true }
      );
      /* Example Data
        {
            "username": "lernantino",
            "email": "lernantino@gmail.com"
        }
      */
      if (!updatedUser) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Deleted one user based on the id in the url.
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findOneAndDelete({
        _id: req.params.userId,
      });
      if (!deletedUser) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.json({ message: "User deleted successfully" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

//TODO: Add Post and Delete route for user's friend list.
