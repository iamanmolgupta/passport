  var express  = require("express");
  var app  = express();
  var authRoutes = require('./routes/auth-routes');
  var profileRoutes = require('./routes/profile-routes');
  const passportSetup = require('./config/passport-setup');
  const mongoose = require('mongoose');
  const keys = require('./config/keys');
  const cookieSession = require('cookie-session');
  const passport = require('passport');
  //set up routes 

  //creat a view engine
  app.set('view engine','ejs');


  app.use(cookieSession({
    maxAge : 24*60*60*1000,
    keys:[keys.session.cookieKey]
  }))

  //initialize passport   
  app.use(passport.initialize());
  app.use(passport.session());


  app.use('/auth',authRoutes);
  app.use('/profile',profileRoutes);
  //connect mongodb
  mongoose.connect(keys.mongodb.dbURI,()=>{
    console.log('connected to mongodb');
  })
  //create home route
  app.get('/',function(req,res){
    res.render('home',{user:req.user});
  })

  app.listen(8081,()=>{
    console.log("server is running");
  }) 