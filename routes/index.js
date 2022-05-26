var express = require('express');
var router = express.Router();
/* image credits:
  ballpoint pen: https://www.jetpens.com/blog/The-41-Best-Pens-for-2022-Gel-Ballpoint-Rollerball-and-Fountain-Pens/pt/974
  luxury pen: https://www.ubuy.gt/en/product/4AP13YU-mr-pen-luxury-pen-fancy-pens-executive-pens-bible-pen-pens-gift-pen-pen-for-gift-nice-pens-pen-gift-
  pen kit: https://www.collegefashion.net/college-life/school-supplies-cute-pens-and-pencils/
  gel pen: https://www.123ink.ca/p-390375-mos-ga108902-box-gel-pens-07mm-tip-black-12box-moustache
  felt tip pen: https://www.jetpens.com/Paper-Mate-Flair-Felt-Tip-Pen-Medium-Point-Green/pd/13334
  clicky pen: https://www.perfectpen.ca/site/products/WRT-11184
  refillable pen: https://www.amazon.ca/AmazonBasics-Refillable-Fountain-Pen-Medium/dp/B07SNFK6TP
  ink brush: https://www.jetpens.com/Pentel-Pigment-Ink-Brush-Pen-Medium/pd/10975
*/
let cardData = [
  {id: 1, title: 'Ballpoint Pen', img: 'images/ballpoint_pen.jpg', description: 'For the times that you really need a pen. This is the perfect item for your daily needs.'},
  {id: 2, title: 'Luxury Pen', img: 'images/fancy_pen.jpg', description: 'For those special occasions that a regular pen won\'t do. Feel the difference.'},
  {id: 3, title: 'Pen Kit', img: 'images/pen_kit.jpg', description: 'For every artist, a felt-tip. For every writer, a fountain. For every student, a gel. For everyone, a pen.'}
],
statData = [
  {id: 1, statTitle: 'Pens sold', statValue: '1,000,000,000'},
  {id: 3, statTitle: 'Recyclability', statValue: '100%'},
  {id: 2, statTitle: 'Users Reached', statValue: '72,000,000'},
  {id: 4, statTitle: 'Customers Satisfied', statValue: '100%'}
],
featuredData = [
  {id: 1, featuredTitle: 'Ballpoint Pen', featuredImg: 'images/ballpoint_pen.jpg'},
  {id: 2, featuredTitle: 'Luxury Pen', featuredImg: 'images/fancy_pen.jpg'},
  {id: 3, featuredTitle: 'Pen Kit', featuredImg: 'images/pen_kit.jpg'}
],
productData = [
  {id: 1, productTitle: 'Ballpoint Pen', productImg: 'images/ballpoint_pen.jpg', productPrice: 0.25},
  {id: 2, productTitle: 'Luxury Fountain Pen', productImg: 'images/fancy_pen.jpg', productPrice: 2.50},
  {id: 3, productTitle: 'Gel Pen', productImg: 'images/gel_pen.jpeg', productPrice: 0.50},
  {id: 4, productTitle: 'Pen Kit', productImg: 'images/pen_kit.jpg', productPrice: 7.00},
  {id: 5, productTitle: 'Felt Tip Pen', productImg: 'images/felt_pen.jpg', productPrice: 2.25},
  {id: 6, productTitle: 'Clicky Pen', productImg: 'images/clicky_pen.jpg', productPrice: 0.35},
  {id: 7, productTitle: 'Refillable Ink Pen', productImg: 'images/refillable_pen.jpg', productPrice: 3.00},
  {id: 8, productTitle: 'Ink Brush', productImg: 'images/ink_brush.jpg', productPrice: 5.00},
];


/* GET home page. */
router.get('/', (req, res, next) => {

  res.render('index', { 
    title: 'Home', 
    cardData: cardData,
    statData: statData
  });
});

router.get("/products", (req, res, next) => {
  res.render("products", {
    title: "Products",
    featuredData: featuredData,
    productData: productData
  });
});

router.get("/about", (req, res, next) => {
  res.render("about", {
    title: "About",
  });
});

module.exports = router;
