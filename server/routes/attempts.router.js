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
router.get('/total/:id', rejectUnauthenticated, (req, res) => {
  // GET route code here
  const queryText = `SELECT * FROM "attempts" 
  WHERE "challenge_id" = $1;`;
  pool.query(queryText, [req.params.id]).then(result => {
    res.send(result.rows);
  }).catch(error => {
    res.sendStatus(500);
    console.log('Error in /GET challenge-total', error);
  })
});

/**
 * GET the number of successful attempts for the challenge
 * with the specificied ID
 */
router.get('/success/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT COUNT("success" = true) FROM "attempts"
  WHERE "challenge_id" = $1;`;
  pool.query(queryText, [req.params.id]).then(result => {
    res.send(result.rows[0]);
  }).catch(error => {
    res.sendStatus(500);
    console.log('Eror in /GET success', error);
  })
});

/**
 * GET the attempts performed on a challenge by a specific user
 */
router.get('/user/:id', (req, res) => {
  // GET route code here
  const queryText = `SELECT DISTINCT("challenge_id") FROM "attempts" WHERE "user_id" = $1;`;
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
