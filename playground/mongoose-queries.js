const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5991f5ec42850211fc4619d3aaa';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// // This gives an array including the results
// Todo
//     .find({
//         _id: id
//     })
//     .then((todos) => {
//         console.log('Todos', todos);
//     });

// // This gives an object
// Todo
//     .findOne({
//         _id: id
//     })
//     .then((todo) => {
//         console.log('Todo', todo);
//     });

// Todo
//     .findById(id)
//     .then((todo) => {
//         if (!todo) {
//             return console.log('Id not found');
//         } 
//         console.log('Todo By Id', todo);
//     })
//     .catch((e) => console.log(e.message));

User
    .findById('5991b1546e8b1a07d38ab7a0')
    .then((user) => {
        if (!user) {
            return console.log('User not found');
        }
        console.log(JSON.stringify(user, null, 2));
    })
    .catch((e) => console.log(e.message));