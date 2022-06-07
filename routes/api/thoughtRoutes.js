const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  deleteThoughtReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
  .get(getThoughts)
  .post(createThought); // !

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions // route isn't functional - needs troubleshooting
router.route('/:thoughtId/reactions')
  .post(addThoughtReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId  // route isn't functional - needs troubleshooting
router.route('/:thoughtId/reactions/:reactionId')  
  .delete(deleteThoughtReaction);

module.exports = router;
