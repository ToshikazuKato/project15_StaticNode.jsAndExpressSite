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


//server start, app listens on PORT 3000
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});
