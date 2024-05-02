const { Thought } = require("../models");

module.exports = {
  // Gets all thoughts.
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Gets one thought based on the id in the url.
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Creates a new thought.
  async createThought(req, res) {
    try {
      const thoughtData = await Thought.create(req.body);
      /* Example Data
        {
          "thoughtText": "Here's a cool thought...",
          "username": "lernantino",
          "userId": "5edff358a0fcb779aa7b118b"
        }
      */
      res.json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Updates one thought based on the id in the url.
  async updateThought(req, res) {
    try {
      const updatedThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtID },
        req.body,
        { new: true }
      );
      /* Example Data
        {
          "thoughtText": "Here's a cool thought...",
          "username": "lernantino",
          "userId": "5edff358a0fcb779aa7b118b"
        }
      */
      if (!updatedThought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      res.json(updatedThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Deleted one thought based on the id in the url.
  async deleteThought(req, res) {
    try {
      const deletedThought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });
      if (!deletedThought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      res.json({ message: "Thought deleted successfully" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

//TODO: Add Post and Delete route for thought's reaction list.
