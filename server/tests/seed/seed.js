const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

let userOneId = new ObjectID();
let userTwoId = new ObjectID();
const users = [{
    _id: userOneId,
    email: 'userone@example.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }]
}, {
    _id: userTwoId,
    email: 'usertwo@example.com',
    password: 'userTwoPass'
}];

const todos = [{
    _id: new ObjectID(),
    text: 'First text todo'
}, {
    _id: new ObjectID(),
    text: 'Second text todo',
    completed: true,
    completedAt: 333
}];

const populateTodos = (done) => {
    Todo
        .remove({})
        .then(() => {
            return Todo.insertMany(todos);
        }).then(() => done());
};

const populateUsers = (done) => {
    User
        .remove({})
        .then(()=> {
            let userOne = new User(users[0]).save();
            let userTwo = new User(users[1]).save();

            return Promise.all([userOne, userTwo]);
        }).then(() => done());
};

module.exports = {
    users,
    todos,
    populateUsers,
    populateTodos
};