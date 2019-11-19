var router = require("express").Router();
const passport = require('passport');
//auth login
router.get('/login',function(req,res){
  res.render('login',{user:req.user});
})

//auth logout
router.get('/logout',function(req,res){
  //handle with passport
  req.logout();
  res.redirect('/');
})

//auth with google
router.get('/google',passport.authenticate('google',{
  scope:['profile']
})
  //handle with passport
  )

  //callback route for google redirect to
  router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    // res.send("you reached the callback URI"); 
    res.redirect('/profile/')
  })

module.exports = router;
