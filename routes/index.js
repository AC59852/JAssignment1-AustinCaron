var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) => {
  let cardData = [
    {id: 1, title: 'Ballpoint Pen', img: 'images/ballpoint_pen.jpg', description: 'For the times that you really need a pen. This is the perfect item for your daily needs.'},
    {id: 2, title: 'Luxury Pen', img: 'images/fancy_pen.jpg', description: 'For those special occasions that a regular pen won\'t do. Feel the difference.'},
    {id: 3, title: 'Pen Kit', img: 'images/pen_kit.jpg', description: 'For every artist, a felt-tip. For every writer, a fountain. For every student, a gel. For everyone, a pen.'}
  ],
  statData = [
    {id: 1, statTitle: 'Pens sold', statValue: '100,000,000'},
    {id: 3, statTitle: 'Recyclability', statValue: '100%'},
    {id: 2, statTitle: 'Users Reached', statValue: '6,000,000'},
    {id: 4, statTitle: 'Customers Satisfied', statValue: '100%'}
  ];

  res.render('index', { 
    title: 'Home', 
    cardData: cardData,
    statData: statData
  });
});

router.get("/products", (req, res, next) => {
  res.render("products", {
    title: "Products"
  });
});

module.exports = router;
