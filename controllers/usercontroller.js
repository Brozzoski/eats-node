const router = require('express').Router()
const User = require('../db').import('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

//User signup
router.post('/create', function (req, res) {
  User.create({
    userName: req.body.user.userName,
    email: req.body.user.email,
    password: bcrypt.hashSync(req.body.user.password, 13 )
 
  })

    .then(function createSuccess(user) {
      let token = jwt.sign ({ id: user.id }, 'process.env.JWT_SECRET', {expiresIn: 60 * 60 * 24 })
    

      res.json({
        user: user,
        message: 'User successfully created',
        sessionToken: token,
      })
    })
    .catch((err) => res.status(500).json({ error: err }))


})


// *************USER SIGN IN ***************
router.post('/login', function (req, res) {
  User.findOne({
    where: {
      email: req.body.user.email,
    }
  })
    .then(function loginSuccess(user) {
      if (user) {
              bcrypt.compare(req.body.user.password, user.password, function (err, matches) {
                if (matches) {

                  let token = jwt.sign ({ id: user.id }, 'process.env.JWT_SECRET', {expiresIn: 60 * 60 * 24 })

        res.status(200).json({
          user: user,
                  message: "User successfully logged in!",
                  sessionToken: token
                })
            } else {
              res.status(502).send({ error: "Login Failed" });
            }
         });
      } else {
        res.status(500).json({ error: 'User does not exist.' })
      }
    })
    .catch((err) => res.status(500).json({ error: err }))
})

// **************NEW CODE -- FIND USER ****************
  // router
  //   .post('/signin', (req, res) => {
  //     User.findOne({
  //       where: {
  //         email: req.body.email,
  //       },
  //     }).then(
  //       (user) => {
  //         if (user) {
  //           bcrypt.compare(req.body.user.password, user.password, function(err, matches) {
  //             //comparing the password entered to the user password
  //             if (matches) {
  //               let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24, });
  //               res.json({
  //                 user: user,
  //                 message: 'Successfully Authenticated',
  //                 sessionToken: token,
  //               });
  //             } else {
  //               res.status(502).send({ error: 'bad gateway' });
  //             }
  //           });
  //         } else {
  //           res.status(500).send({ error: 'failed to authenticate' });
  //         }
  //       },
  //       (err) => res.status(501).send({ error: 'failed to process' })
  //   )
  //   })
  //   .catch(err => res.status(500).json( { error: err } ) );


module.exports = router
