const fetch = require('node-fetch');
const sneakerController = {};

// Middleware to make a get request to sneaker database
sneakerController.getShoes = (req, res, next) => {
  // Convert shoe category to an object to be stored in request body
  let url = 'https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=15&shoe=';
  switch (req.query.category) {
    case '0':
      url += 'Jordan%201%20Retro%20High';
      break;
    case '1':
      url += 'Nike Dunk High';
      break;
    case '2':
      url += 'Nike Dunk Low';
      break;
    default:
      url += 'Jordan 1 Mid';
      break;
  }
  fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '324525e47dmshe4ac5f7930cff96p17f69cjsnd84de699ff4e',
      'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.locals.shoes = data.results;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = sneakerController;
