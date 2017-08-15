const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo
//     .remove({})
//     .then((result) => {
//         console.log(result);
//     });

// Todo
//     .findOneAndRemove({
//         _id: '59933ecff067a4d40bad6ca9'
//     })
//     .then((todo) => {
//         console.log(todo);
//     });

Todo
    .findByIdAndRemove('59933ecff067a4d40bad6ca9')
    .then((todo) => {
        console.log(todo);
    });