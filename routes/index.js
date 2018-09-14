const isLoggedIn = require('../middlewares/isLoggedIn');

module.exports = app => {
  app.get('/', (req, res) => {
    const isAuthenticated = req.isAuthenticated();
    res.render('index', {isAuthenticated});
  })

  app.get('/secret', isLoggedIn, (req, res) => {
    res.render('secret');
  });
}
