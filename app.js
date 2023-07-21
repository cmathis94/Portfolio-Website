const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const secure = require('ssl-express-www');

// const AppError = require('./util/appError');
// const catchAsync = require('./util/catchAsync');

const app = express();
const port = process.env.PORT || 3000;

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/assets'));
app.use(express.urlencoded({ extended: true }));
app.use(secure);

app.get('/', (req, res) => {
  res.render('home');
});

app.use((err, req, res, next) => {
  const { status, message = 'Something Went Wrong' } = err;
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log(`On port ${port}`);
});
