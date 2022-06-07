const connection = require('../config/connection');
const { Thought, User } = require('../models');
const Users = require('./userData');
const Thoughts = require('./thoughtData');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing Thoughts
  await Thought.deleteMany({});

  // Drop existing Users
  await User.deleteMany({});

  // Add Users to the collection and await the results
  await User.collection.insertMany(Users);

  // Add Thoughts to the collection and await the results
  await Thought.collection.insertMany(Thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(Thoughts);
  console.table(Users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});