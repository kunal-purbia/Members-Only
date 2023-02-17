const {
    User
} = require('../config/database');

//////////////////////////////////////////////////////////SAVING USER DATA INTO DATABASE
module.exports.registerUser = (data) => {
    new User(data).save((err) => {
        if (err) throw err
    })
}

//////////////////////////////////////////////////////////UPDATING USER AS ADMIN INTO DATABASE
module.exports.updateAdmin = (id) => {
    User.findByIdAndUpdate(id, {
        admin: true
    }, (err) => {
        if (err) throw err;
    })
}

//////////////////////////////////////////////////////////UPDATING USER AS MEMBER INTO DATABASE
module.exports.updateMember = (id) => {
    User.findByIdAndUpdate(id, {
        member: true
    }, (err) => {
        if (err) throw err;
    })
}