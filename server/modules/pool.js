/* the only line you likely need to change is

 database: 'prime_app',

 change `prime_app` to the name of your database, and you should be all set!
*/

const pg = require('pg');
const url = require('url');

let config = {};


config = {
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'access-granted',
  host: process.env.DB_HOST || 'localhost', // Server hosting the postgres database
  port: process.env.DB_PORT || 5432, // env var: PGPORT
  database: process.env.DB_NAME || 'sifr', // CHANGE THIS LINE! env var: PGDATABASE, this is likely the one thing you need to change to get up and running
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
//console.log(config);


// this creates the pool that will be shared by all other modules
const pool = new pg.Pool(config);

// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err) => {
  console.log('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;
