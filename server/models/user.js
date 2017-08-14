let mongoose = require('mongoose');

let User = mongoose.model('User', {
    email: {
        type: String,
        validate: {
            validator: (email) => {
                return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
            }, 
            message: `{VALUE} is not a valid email address`
        },
        required: [true, 'Email required'],
        lowercase: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {
    User
};