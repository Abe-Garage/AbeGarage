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
    // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
};
// console.log(process.env.DB_USER);
//` create the connection pool

// Log environment variables (do not log passwords in production)

// console.log("DB Config - User:", process.env.DB_USER);
// console.log("DB Config - Database:", process.env.DB_NAME);
// console.log("DB Config - Password:", process.env.DB_PASSWORD);
// console.log("DB Config - Port:", process.env.PORT);


const pool =  mysql.createPool(dbConfig);

// ` prepare a function that will execute the sql queries asynchronously

// Function to execute SQL queries asynchronously
async function query(sql, params) {
    try {
        // Execute the query and destructure the result into rows and fields
        const [rows, fields] = await pool.execute(sql, params);

        // Return an object containing both rows and fields
        return { rows, fields };
    } catch (error) {
        console.error('Error executing query:', error);
        throw error; // Throw error for the caller to handle
    }
}
// ` export the function 
module.exports = {
    query
}



