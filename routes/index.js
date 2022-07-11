var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

const Data = require('../model/registration');
const post_data = require('../model/addpost');
const comment_data = require('../model/comment');
const like_data = require('../model/like');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// router.post('/reg', async function (req, res) {
//   var hash = bcrypt.hashSync(req.body.password, 8);
//   try {
//     const User = await Data.create({
//       firstname: req.body.firstname,
//       lastname: req.body.lastname,
//       gender: req.body.gender,
//       dob: req.body.dob,
//       mobile: req.body.mobile,
//       avtar: req.body.avtar,
//       email: req.body.email,
//       username: req.body.username,
//       password: hash
//     })
//     res.status(201).json({
//       status: "Sucess",
//       Data: User
//     });
//   } catch (error) {
//     res.status("Error");
//   }
// });

// router.post('/post', async function (req, res) {
//   const data = await Data.findOne();
//   try {
//     const User = await post_data.create({
//       User_id: data._id,
//       avtar: req.body.avtar,
//       title: req.body.title,
//       description: req.body.description

//     })
//     res.status(201).json({
//       status: "Sucess",
//       data: User
//     })
//   } catch (error) {
//     res.status("Error")
//   }
// })

// router.post('/comment', async function (req, res) {
//   const data = await post_data.findOne();
//   try {
//     const User = await comment_data.create({
//       post_id: data._id,
//       comment: req.body.comment,
//     })
//     res.status(201).json({
//       status: "Sucess",
//       data: User
//     })
//   } catch (error) {
//     res.status("Error")
//   }
// })
// router.post('/like', async function (req, res) {
//   const data = await post_data.findOne();
//   try {
//     const User = await like_data.create({
//       post_id: data._id,
//       like: req.body.like,
//     })
//     res.status(201).json({
//       status: "Sucess",
//       data: User
//     })
//   } catch (error) {
//     res.status("Error")
//   }
// })

// router.get('/login', async function (req, res, next) {

//   const email = req.body.email;
//   const password = req.body.password;
//   const data = await Data.findOne({ email: email });
//   console.log("pass==>", data.password);
//   let c_password = bcrypt.compareSync(password, data.password);
//   console.log("C_PASSWORD==>", c_password);


//   if (password === data.password) {
//     res.send("Sucessful Login");
//   }
//   else {
//     res.send("Wrong Email & Password");
//   }

// })

module.exports = router;
