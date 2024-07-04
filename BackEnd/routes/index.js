// * to collect the routes

const express = require('express');


// ` call router method from express
const router = express.Router()


// *  Import the Router files

// ` Import Install router
const installRouter = require('./install.routes')





// =========================

// * Use the route

// ` add the install router to the main router
router.use( installRouter)



module.exports = router;


