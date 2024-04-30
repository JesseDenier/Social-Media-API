const { user } = require("../models");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await user.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await user.findOne({ _id: req.params.postId });
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const userData = await user.create(req.body);
      /* Example Data
        {
            "username": "lernantino",
            "email": "lernantino@gmail.com"
        }*/
      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      //TODO: Add a put route
      /* Example Data
        {
            "username": "lernantino",
            "email": "lernantino@gmail.com"
        }*/
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      //TODO: Add a delete route
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

//TODO: Add Post and Delete route for user's friend list.
