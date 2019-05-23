const route = require('express').Router();


route.post('/login', (req, res) => {
  if (req.body.username === 'simba@lionking.com' && req.body.password === 'iLikeNala') {
    res.status(200).send({ auth: true, token: 'hakunamatata' })
  } else {
    res.status(404).send({ auth: false, message: 'Go watch the Lion King' })
  }
});


module.exports = route;