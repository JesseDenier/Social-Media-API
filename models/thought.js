const { Schema, Types, model } = require("mongoose");

// Defines the shape for the "child" reaction subdocument.
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now, //TODO: Format this on query.
  },
  username: { type: String, required: true }, //TODO: Relate this to the user that created it.
});

// Defines the shape for the "parent" thought document.
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now, //TODO: Format this on query.
    },
    username: { type: String, required: true }, //TODO: Relate this to the user that created it.
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "resaction",
      },
    ],
  },
  {
    // Includes virtuals in response.
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Creates a virtual property `reactionCount` that gets the amount of reactions per thought.
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initialize the thought model
const thought = model("thought", thoughtSchema);

module.exports = thought;
