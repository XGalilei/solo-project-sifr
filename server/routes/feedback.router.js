const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const queryText = `INSERT INTO "feedback" ()
  VALUES ()`;
  pool.query(queryText).then((result) => {
    res.sendStatus(200);
  }).catch(error => {
    console.log("Error in ")
  })
});

module.exports = router;
