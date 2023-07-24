const router = require("express").Router();
const { productController } = require("../controllers");

router.get("/", productController.getProductList);

module.exports = router;