require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const path = require('path');

//////////////////////////////////////////////////////////SETTING PATH FOR PUBLIC FOLDER
const publicPath = path.join(__dirname, 'public')

//////////////////////////////////////////////////////////REQUIRING ALL ROUTES
const indexRouter = require("./routes/indexRoutes");
const registerRouter = require("./routes/registerRoutes");
const loginRouter = require("./routes/loginRoutes");
const passport = require('passport');

//////////////////////////////////////////////////////////CREATING EXPRESS APPLICATION
const app = express();

//////////////////////////////////////////////////////////SETTING VIEW ENGINE EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//////////////////////////////////////////////////////////SETTING MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(publicPath));
app.use(cookieParser());

//////////////////////////////////////////////////////////SETTING SESSION
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 //1 DAY
    }
}));

//////////////////////////////////////////////////////////REQUIRING PASSPORT AUTHENTICATION
require('./config/passport')

//////////////////////////////////////////////////////////SETTING PASSPORT MIDDLEWARES
app.use(passport.initialize());
app.use(passport.session());

//////////////////////////////////////////////////////////SETTING ALL ROUTES
app.use("/", indexRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

//////////////////////////////////////////////////////////LISTENING TO PORT
app.listen(process.env.PORT, ()=>{
    console.log(`SERVER STARTED ON ${process.env.PORT}`);
})