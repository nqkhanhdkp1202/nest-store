const { User } = require("../models");

exports.createUser = async (req, res) => {
  try {
    let user = await User.findOne({ phoneNumber: req.body.phoneNumber });
    if (user) {
      res
        .status(403)
        .json("Phone number already registered for another account");
    }
    user = await User.findOne({ email: req.body.email });
    if (user)
      res.status(403).json("Email already registered for another account");
      
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    const token = jwt.sign(
      {
        id: savedUser._id,
      },
      process.env.TOKEN_SECRET_KEY
    );

    res.status(201).json({
      token,
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
