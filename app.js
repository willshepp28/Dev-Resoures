const express = require('express'),
    bodyParser = require('body-parser'),
    bcrypt = require('bcrypt'),
    session = require('express-session'),
    path = require('path'),
    morgan = require('morgan'),
    handlebars = require('express-handlebars'),
    validator = require('express-validator'),
    index = require('./routes/index'),
    application = express();



/*
|--------------------------------------------------------------------------
|  Middleware
|--------------------------------------------------------------------------
*/
// Register `hbs.engine` with the Express app.
application.engine('handlebars', handlebars({ defaultLayout: 'main' }));
application.set('view engine', 'handlebars');

// Set Static Files
application.use('/assets', express.static(path.join(__dirname, 'public')));

application.use(morgan('dev'));
// application.use(morgan('combined'))

// parse application/x-www-form-urlencoded
application.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
application.use(bodyParser.json());


application.use(session({
    secret: 'somanyparts',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));




// Express Validator
application.use(validator({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.')
            , root = namespace.shift()
            , formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));

// // Global Vars
// application.use(function (request, response, next) {
//     response.locals.success_msg = request.flash('success_msg');
//     response.locals.error_msg = request.flash('error_msg');
//     response.locals.error = request.flash('error');
//     response.locals.user = request.user || null;
//     next();
// });


// sequelize model:create --name User --attributes

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/


application.use('/', index);






application.listen(3000, function () {
    console.log('Server listening on port 3000');
});