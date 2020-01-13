const express = require("express");

const router = express.Router();

// Register
router.get('/register', (req, res, next) => {
   res.send("Register page");
});

// Authenticate
router.get('/authenticate', (req, res, next) => {
   res.send("Authenticate page");
});

// Profile
router.get('/profile', (req, res, next) => {
   res.send("Profile page");
});

// Validate
router.get('/validate', (req, res, next) => {
   res.send("Validate page");
});

module.exports = router;