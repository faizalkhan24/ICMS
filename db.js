const mysql = require('mysql2');
const { db } = require('./config/config');

const pool = mysql.createPool(db);
const promisePool = pool.promise();

module.exports = promisePool;
