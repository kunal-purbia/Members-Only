const bcrypt = require('bcryptjs')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {
    User
} = require('./database.js')

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({
                username: username
            })
            .then((user) => {
                if (!user) {
                    return done(null, false)
                } else{
                    bcrypt.compare(password, user.password, (err, result)=>{
                        if(err){
                            throw err;
                        } else if(result === false){
                            return done(null, false);
                        } else{
                            return done(null, user)
                        }
                    })
                }
            })
            .catch((err)=>{
                done(err);
            })
    }
))

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, (err, user) => {
        if (err) throw err;
        done(null, user)
    })
})