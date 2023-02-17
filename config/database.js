const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connection succesful");
}).catch((e) => {
    console.log("Error occured");
});

const userShcema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    member: {
        type: Boolean,
        default: false
    },
    admin: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('User', userShcema);

const messageSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    useremail: {
        type: String,
        required: true
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = {
    User,
    Message
};