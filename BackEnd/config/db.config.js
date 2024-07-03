// ` import mysql2 module promise wrapper
const mysql = require('mysql2/promise');


// `  prepare the db parameters
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:  process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10,
    // * add socket path for mac users
};
console.log(process.env.DB_USER);
//` create the connection pool

const pool =  mysql.createPool(dbConfig);

// ` prepare a function that will execute the sql queries asynchronously

async function query (sql,params) {
    const [rows, fields] = await pool.execute(sql,params);
    return rows;
}

// ` export the function 
module.exports = {
    query
}



