const express = require("express")
const authcontrollers = require("../controllers/auth.controller")

const router = express.Router();
 
router.post("/register", authcontrollers.registerUser)

module.exports = router;