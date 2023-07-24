const express = require("express");
const router = require("express").Router();

router.use("/admin", require("./adminRoute"));
router.use("/user", require("./userRoute"));
router.use("/product", require("./productRoute"));
// router.use("/order", require("./orderRoute"));
// router.use("/orderItem", require("./orderItemRoute"));
// router.use("/review", require("./reviewRoute"));


module.exports = router;
