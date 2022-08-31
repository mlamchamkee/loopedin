const models = require('./models');

const bioController = {};

bioController.getAllBios = (req, res, next) => {
  models.Person.find({})
    .then(data => {
      res.locals.bios = data;
      console.log('got all bios');
      return next();
    })
    .catch(err => next({ message: { err: 'Error in getAllBios controller'}}));
};

bioController.addBio = (req, res, next) => {
  // error handling for empty bios provided
  // console.log('attempting to create bio');
  // console.log(req.body);
  if (!Object.keys(req.body).length) return next({
    log: 'Request body is empty',
    message: { err: 'Required information not provided'},
  });

  // creates the record in database
  models.Person.create(req.body)
    .then((bio) => {
      res.locals.newBio = bio;
      console.log('added bio', res.locals.newBio);
      return next();
    })
    .catch(err => next({ message: { err: 'Error in addBio controller' } }));
};

module.exports = bioController;