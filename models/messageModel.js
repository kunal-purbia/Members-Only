const {
    Message
} = require('../config/database');

//////////////////////////////////////////////////////////FETCHING ALL MESSAGES FROM DATABASE
module.exports.getMessages = () => {
    return new Promise((resolve) => {
        Message.find({}, (err, result) => {
            if (err) throw err;
            else {
                resolve(result)
            }
        })
    })
}

//////////////////////////////////////////////////////////SAVING MESSAGE INTO DATABASE
module.exports.saveMessage = (data) => {
    Message(data).save(err => {
        if (err) throw err;
    })
}

//////////////////////////////////////////////////////////DELETING MESSAGE FROM DATABASE
module.exports.deleteMessage = (id) => {
    Message.deleteOne({
        _id: id
    }, (err) => {
        if (err) throw err;
    })
}