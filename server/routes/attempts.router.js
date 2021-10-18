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
router.get('/challenge-total/:id', (req, res) => {
  // GET route code here
  const queryText = `SELECT * FROM "attempts" 
  WHERE "challenge_id" = $1;`;
});

/**
 * GET the number of successful attempts for the challenge
 * with the specificied ID
 */
router.get('/challenge-success/:id', (req, res) => {
  const queryText = `SELECT * FROM "attempts"
  WHERE "challenge_id" = $1 AND "success" = true;`;
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
  const queryText = `INSERT INTO "attempts" ("success", "user_id", "challenge_id")
  VALUES ($1, $2, $3);`;
  const success = req.body.success;
  const user_id = req.user.id;
  const challenge_id = req.body.challenge;
  pool.query(queryText, [success, user_id, challenge_id])
  .then(result => {
    res.sendStatus(200);
  }).catch(error => {
    console.log('Error in /POST attempt:', error);
    res.sendStatus(500);
  })
});


router.delete('/', (req, res) => {
  const queryText = `DELETE FROM "attempts" WHERE "challenge_id" = $1;`;
  const challengeId = req.body.challenge_id;
  pool.query(queryText, [challengeId]).then(result => {
    res.sendStatus(200);
  }).catch(error => {
    console.log('Error in /DELETE attempts:', error);
    res.sendStatus(500);
  })
});

module.exports = router;
