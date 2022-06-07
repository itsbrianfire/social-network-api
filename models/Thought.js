const { Schema, Types, model } = require('mongoose');
const moment = require('moment');

// Schema to create a course model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: currentTime => moment(currentTime).format('MMMM Do YYYY, h:mm:ss a'),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


const thoughtSchema = new Schema(
  {
    thought: {
      type: String,
      required: true,
      minLength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: currentTime => moment(currentTime).format('MMMM Do YYYY, h:mm:ss a'),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      reactionSchema
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

const thought = model('thought', thoughtSchema);

module.exports = thought;
