const express = require("express")
const router = express.Router();

const ctrlUser = require('./api/user.controller');

router.post("/register",ctrlUser.register);

module.exports = router;