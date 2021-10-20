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
  const queryText = `SELECT "challenges"."id", "encrypted", "decrypted", "title", "name", "key", "type_code", "username", "creator_id"
  FROM "challenges"
  JOIN "user" ON "challenges"."creator_id" = "user"."id"
  JOIN "ciphers" ON "challenges"."cipher_id" = "ciphers"."id"`;
  pool.query(queryText).then((result) => {
    //console.log(result);
    //console.log(result.rows[0].row.split(','));
    res.send(result.rows);
  }).catch(error => {
    console.log('Error in /GET challenges', error);
    res.sendStatus(500);
  })
});

router.get('/single/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT  "challenges"."id", "encrypted", "decrypted", "title", "name", "key", "type_code", "username" FROM "challenges"
  JOIN "user" ON "challenges"."creator_id" = "user"."id"
  JOIN "ciphers" ON "challenges"."cipher_id" = "ciphers"."id"
   WHERE "challenges"."id" = $1;`;
  //console.log('Testing single challenge:', req.params.id);
  pool.query(queryText, [req.params.id]).then(result => {
    res.send(result.rows[0]);
    //console.log(result.rows);
  }).catch(error => {
    console.log('Error in /GET single challenge', error);
    res.sendStatus(500);
  })
})

/**
 * GET the challenges created by a specific user
 */
router.get('/user-created/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT "challenges"."id", "encrypted", "decrypted", "title", "name", "key", "type_code" 
  FROM "challenges" 
  JOIN "ciphers" ON "challenges"."cipher_id" = "ciphers"."id"
  WHERE "creator_id" = $1;`;
  pool.query(queryText, [req.params.id]).then((result) => {
    res.send(result.rows);
  }).catch(error => {
    console.log('Error in /GET user-created challenges', error);
    res.sendStatus(500);
  })
})

router.get('/user-attempted/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT "challenges"."id", "encrypted", "title", "name", "type_code", "username"
  FROM "challenges" JOIN "user" ON "challenges"."creator_id" = "user"."id"
  JOIN "ciphers" ON "challenges"."cipher_id" = "ciphers"."id"
  WHERE EXISTS (SELECT DISTINCT("challenge_id") FROM "attempts" 
  WHERE "challenges"."id" = "challenge_id" AND "attempts"."user_id" = $1);`;
   pool.query(queryText, [req.params.id]).then((result) => {
     res.send(result.rows);
   }).catch(error => {
     console.log('Error in /GET user-attempted', error);
     res.sendStatus(500);
   })
});

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

router.put('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `UPDATE "challenges" SET
  "title" = $1, "encrypted" = $2, "decrypted" = $3, "key" = $4
  WHERE "id" = $5;`;
  const newPlaintext = req.body.decrypted;
  const newCiphertext = req.body.encrypted;
  const newKey = req.body.key;
  const newTitle = req.body.title;
  const challengeId = req.body.id;
  pool.query(queryText, [newTitle, newCiphertext, newPlaintext, newKey, challengeId])
  .then(result => {
    res.sendStatus(200);
  }).catch(error => {
    console.log('Error in /PUT challenge', error);
    res.sendStatus(500);
  })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `DELETE FROM "challenges" WHERE "id" = $1;`;
  pool.query(queryText, [req.params.id]).then(result => {
    res.sendStatus(200);
  }).catch(error => {
    console.log('Error in /DELETE challenge', error);
    res.sendStatus(500);
  })
})

module.exports = router;
