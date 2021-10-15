const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = 'SELECT * FROM "challenges";';
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch(error => {
    console.log('Error in /GET challenges', error);
    res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  //const queryText = `INSERT INTO "challenges ("")
  //VALUES ();`;
});

module.exports = router;
