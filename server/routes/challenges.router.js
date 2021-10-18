const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route: used to gather all challenges
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
 * GET the challenges created by a specific user
 */
router.get('/user-created', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "challenges" 
  WHERE "creator_id" = $1;`;
  pool.query(queryText, [req.user.id]).then((result) => {
    res.send(result.rows);
  }).catch(error => {
    console.log('Error in /GET user-created challenges', error);
    res.sendStatus(500);
  })
})

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  const queryText = `INSERT INTO "challenges"
  ("encrypted", "decrypted", "key", "cipher_id", "creator_id", "title")
  VALUES ($1, $2, $3, $4, $5, $6);`;
  const cipherText = req.body.encrypted;
  const plainText = req.body.decrypted;
  const key = req.body.key;
  const cipherId = req.body.cipherId;
  const creatorId = req.user.id;
  const title = req.body.title;
  console.log('IN /POST', req.body);
  pool.query(queryText, [cipherText, plainText, key, cipherId, creatorId, title])
  .then(result => {
    res.sendStatus(200);
  }).catch(error => {
    console.log('Error in /POST challenges', error);
    res.sendStatus(500);
  })
});

router.put('/', rejectUnauthenticated, (req, res) => {
  const queryText = `UPDATE "challenges" SET
  "title" = $1, "encrypted" = $2, "decrypted" = $3, "key" = $4, "title" = $5
  WHERE "id" = $6;`;
  const newPlaintext = req.body.decrypted;
  const newCiphertext = req.body.encrypted;
  const newKey = req.body.key;
  const newTitle = req.body.title;
  const challengeId = req.body.id;
  pool.query(queryText, [newTitle, newCiphertext, newPlaintext, newKey, newTitle, challengeId])
  .then(result => {
    res.sendStatus(200);
  }).catch(error => {
    console.log('Error in /PUT challenge', error);
    res.sendStatus(500);
  })
});

module.exports = router;
