const { Product, Review } = require("../models");

exports.getProductList = async (req, res) => {
  try {
    const productList = await Product.find({}).sort("-createdAt");
    for (item of productList) {
        const review = await Review.find({productId: item._id}).sort("-createdAt");
        item._doc.review = review;
    }
    res.status(200).json(productList);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
