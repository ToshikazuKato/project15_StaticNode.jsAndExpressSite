//require middleware
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { projects } = require('./data.json');
const projectsRoute = require('./routes/projects');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

//to be able to provide images, css and js that are in public folder
app.use('/static', express.static('public'));

app.use('/projects', projectsRoute);

app.set('view engine', 'pug');


//setting routes
app.get('/', (req, res, next) => {
  res.render('index', { projects });
});

app.get('/about', (req, res, next) => {
  res.render('about');
});

//error handling
app.use(function(req,res,next){
  const err = new Error("You got lost but it serves you right!");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next){
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});


//server start, app listens on PORT 3000
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});
