// dependecies
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHanlder = require('express-async-handler');
const User = require('../models/userModel');

const handler = {};

//@desc register new User
//@route POST /api/users
//@access public
handler.registerUser = asyncHanlder(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Must provide all fields');
  }

  ///check existance
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error('User Already Exist');
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
});

//@desc Authenticate a  User
//@route POST /api/users/login
//@access public
handler.loginUser = asyncHanlder(async (req, res) => {
  const { email, password } = req.body;

  //check user and password
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Email or password is Invalid');
  }
});

//@desc Get loggin in user's data
//@route GET /api/users/login
//@access private
handler.getMe = asyncHanlder(async (req, res) => {
  res.status(200).json(req.user);
});

//demo perpose
handler.getAllUsers = asyncHanlder(async (req, res) => {
  const users = await User.find();
  res.json(users);
});

//generate Json web token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '3d',
  });
};

module.exports = handler;
