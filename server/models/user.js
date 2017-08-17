const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

let UserSchema = new mongoose.Schema({
        email: {
            type: String,
            validate: [{
                validator: value => validator.isEmail(value),
                msg: `{VALUE} is not a valid email address`
            }],
            required: [true, 'Email required'],
            lowercase: true,
            minlength: 1,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            require: true,
            minlength: 6
        },
        tokens: [{
            access: {
                type: String,
                required: true
            },
            token: {
                type: String,
                required: true
            }
        }]
    }

);

UserSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
    let user = this;
    let access = 'auth';
    let token = jwt.sign({
        _id: user._id.toHexString(),
        access
    }, 'abc123').toString();

    user.tokens.push({
        access,
        token
    });
    // return promise for later call in server.js
    return user.save().then(() => {
        return token;
    });
};

UserSchema.statics.findByToken = function (token) {
    let User = this;
    let decoded;

    try {
        decoded = jwt.verify(token, 'abc123');
    } catch (e) {
        // return new Promise((resolve, reject) => {
        //     reject();
        // });
        return Promise.reject();
    }

    return User
        .findOne({
            '_id': decoded._id,
            'tokens.token': token,
            'tokens.access': 'auth'
        });
};

let User = mongoose.model('User', UserSchema);

module.exports = {
    User
};

// email: {
//     type: String,
//     validate: {
//         validator: (email) => {
//             return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
//         }, 
//         message: `{VALUE} is not a valid email address`
//     },
//     required: [true, 'Email required'],
//     lowercase: true,
//     minlength: 1,
//     trim: true
// }