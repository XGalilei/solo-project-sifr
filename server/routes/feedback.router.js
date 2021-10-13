const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "feedback";`;
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch(error => {
    console.log('Error in /GET feedback:', error);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const queryText = `INSERT INTO "feedback" ("message", "user_id")
  VALUES ($2, $1)`;
  console.log(req.body);
  pool.query(queryText, [req.user.id, req.body]).then((result) => {
    console.log('method running');
    res.sendStatus(200);
  }).catch(error => {
    console.log("Error in /POST feedback:", error);
  })
});

module.exports = router;
