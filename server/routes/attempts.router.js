const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET the number of attempts for the challenge with the
 * specified ID
 */
router.get('/challenge/:id', (req, res) => {
  // GET route code here
});

/**
 * GET route template
 */
router.get('/user/:id', (req, res) => {
  // GET route code here
});


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
