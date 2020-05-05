const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { Donor } = require('../db/donormodel');

passport.serializeUser(function (user, done) {

  done(null, user.user_id)
});

passport.deserializeUser(function (userKey, done) {

    student_basic_detail.findByPrimary(userKey).then((user) => {
    done(null, user)
  }).catch((err) => {

    done(err)
  })
});



passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  
function(username, password, done) {
  Donor.findOne({ username: username }, function (err, user) {
    if (err) { return done(err); }
    if (!user) { return done(null, false); }
    bcrypt.compare(password, user.password, function(
      err,
      isMatch
    ){
    if(err) { return done(null, false); }
      if(isMatch){
        return done(null, user);
      }
  }
    
  );
})
}))
  


module.exports = passport