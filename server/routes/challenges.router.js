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
  const queryText = `INSERT INTO "challenges"
  ("encrypted", "decrypted", "key", "cipher_id", "creator_id")
  VALUES ($1 $2 $3 $4 $5);`;
  const cipherText = req.body.encrypted;
  const plainText = req.body.decrypted;
  const key = req.body.key;
  const cipherId = req.body.cipherId;
  const creatorId = req.user.id;

  pool.query(queryText, [cipherText, plainText, key, cipherId, creatorId])
  .then(result => {
    res.sendStatus(200);
  }).catch(error => {
    console.log('Error in /POST challenges', error);
    res.sendStatus(500);
  })
});

module.exports = router;
