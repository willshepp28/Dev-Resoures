const router = require('express').Router(),
    models = require('../models'),
    bcrypt = require('bcrypt');



router
    .route('/')
    .get( async(request, response) => {

        var languages = await models.Language.findAll()
            .then(function(languages) {
                response.render('home', { languages: languages});
            })      
    });





router
    .route('/login')
    .get((request, response) => {
        response.render('login')
    })
    .post((request, response) => {

    });




router
    .route('/register')
    .get((request, response) => {
        response.render('register')
    })
    .post((request, response) => {

    });


router
    .route('/language/:id')
    .get( async(request,response) => {

        var language = models.Language.findOne({ where: { id: request.params.id }})
            .then(function(language){
                response.render('language', { language: language })
            })
            .catch(function(err){
                console.log(err);
                response.redirect('/');
            })
    });


module.exports = router;