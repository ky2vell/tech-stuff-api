const Users = require('../renters/renters-model');

function validateTokenId() {
  return async (req, res, next) => {
    try {
      const user = await Users.findById(req.token.id);
      if (user) {
        req.user = user;

        next();
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      next(err);
    }
  };
}

function validateRegister() {
  return (req, res, next) => {
    if (!req.body.email) {
      res.status(400).json({ msg: 'Missing required email field' });
    } else if (!req.body.owner) {
      res.status(400).json({ msg: 'Missing required owner field' });
    }

    next();
  };
}

function validateLogin() {
  return (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      res
        .status(400)
        .json({ message: 'Username & password fields are required' });
    } else {
      next();
    }
  };
}

function validatePost() {
  return (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: 'Missing required data' });
    }

    next();
  };
}

module.exports = {
  validateTokenId,
  validateRegister,
  validateLogin,
  validatePost
};
