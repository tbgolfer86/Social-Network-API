const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Thought model
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
        default: Date.now,
        get: (date) => date.toDateString(),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets the amount of reactions per thought
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Initialize our thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;