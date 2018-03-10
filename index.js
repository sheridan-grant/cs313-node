const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

function getRate(weight, typeOfMail) {
  switch (typeOfMail) {
    case "Letters (Stamped)":
      if (weight <= 1) {
        return .5;
      } else if (weight <= 2) {
        return .71;
      } else if (weight <= 3) {
        return .92;
      } else if (weight > 3) {
        return 1.13;
      }
      break;
    case "Letters (Metered)":
      if (weight <= 1) {
        return .47;
      } else if (weight <= 2) {
        return .68;
      } else if (weight <= 3) {
        return .89;
      } else if (weight > 3) {
        return 1.10;
      }
      break;
    case "Large Envelopes (Flats)":
      if (weight <= 1) {
        return 1.00;
      } else if (weight <= 2) {
        return 1.21;
      } else if (weight <= 3) {
        return 1.42;
      } else if (weight <= 4) {
        return 1.63;
      } else if (weight <= 5) {
        return 1.84;
      } else if (weight <= 6) {
        return 2.05;
      } else if (weight <= 7) {
        return 2.26;
      } else if (weight <= 8) {
        return 2.47;
      } else if (weight <= 9) {
        return 2.68;
      } else if (weight <= 10) {
        return 2.89;
      } else if (weight <= 11) {
        return 3.10;
      } else if (weight <= 12) {
        return 3.31;
      } else if (weight <= 13) {
        return 3.52;
      }
      break;
    case "First-Class Package Service—Retail":
      if (weight <= 1) {
        return 3.50;
      } else if (weight <= 2) {
        return 3.50;
      } else if (weight <= 3) {
        return 3.50;
      } else if (weight <= 4) {
        return 3.50;
      } else if (weight <= 5) {
        return 3.75;
      } else if (weight <= 6) {
        return 3.75;
      } else if (weight <= 7) {
        return 3.75;
      } else if (weight <= 8) {
        return 3.75;
      } else if (weight <= 9) {
        return 4.10;
      } else if (weight <= 10) {
        return 4.45;
      } else if (weight <= 11) {
        return 4.80;
      } else if (weight <= 12) {
        return 5.15;
      } else if (weight <= 13) {
        return 5.50;
      }
      break;
    default:
      return false;
  }
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool',
    function(request, response) {
      response.send(cool());
  })
  .get('/postage',
    function (req, res) {
      var typeOfMail = req.param('typeOfMail')
      var weight = req.param('weight');

      res.render('pages/postage', {
          typeOfMail: typeOfMail,
          weight: weight
      });
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
