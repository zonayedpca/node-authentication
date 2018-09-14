const User = require('../models/user'),
      passport = require('passport');

module.exports = app => {
  app.get('/login', (req, res) => {
    res.render('login');
  })

  app.post('/login', passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login'
  }))

  app.get('/register', (req, res) => {
    res.render('register');
  })

  app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.register(new User({username}), password);
      passport.authenticate('local')(req, res, () => {
        res.redirect('/secret');
      })
    } catch(err) {
      console.log(err);
      res.redirect('/register');
    }
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  })
}
