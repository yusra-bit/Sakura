// routes/api/users.js

const express = require('express');
const router = express.Router();

// Load Book model
const User = require('../../models/Users');


router.get('/test', (req, res) => res.send('user route testing!'));

router.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({nobooksfound: 'No Books found'}));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    User.create(req.body)
      .then(users => res.json({ msg: 'Registered  successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to register this User' }));
  });


  