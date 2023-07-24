const express = require('express');
const router = require('express').Router();

router.use('/user', require('./userRoute'));

module.exports = router;
