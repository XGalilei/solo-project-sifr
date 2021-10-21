const { runSaga } = require('@redux-saga/core');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `SELECT * FROM "ciphers";`;
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch(error => {
    console.log('Error in /GET ciphers:', error);
  })
});

router.get('/:id', (req, res) => {
  const queryText = `SELECT * FROM "ciphers" WHERE "id" = $1;`;
  console.log('id:', req.params.id);
  pool.query(queryText, [req.params.id]).then((result) => {
    //console.log(result);
    res.send(result.rows[0]);
  }).catch(error => {
    console.log('Error in /GET single cipher', error);
  })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
