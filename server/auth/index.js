const router = require('express').Router();
const { user }  = require('../db')
module.exports = router;

router.post('/login', async (req, res, next) => {
  try {
    res.send({ token: await user.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    const user = await user.create(req.body);
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists');
    } else {
      next(err);
    }
  }
});

router.get('/me', async (req, res, next) => {
  try {
    res.send(await user.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});

router.get('/:username', async (req, res, next) => {
  try {
    const userName = req.params.username
    const foundUser = await user.findOne({where: {username: userName}})
    res.send(foundUser)
  } catch (err) {
    next(err)
  }
})