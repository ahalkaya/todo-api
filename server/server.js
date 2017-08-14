const express = require('express');
const bodyParser = require('body-parser');

let { mongoose } = require('./db/mongoose');
let { Todo } = require('./models/todo');
let { User } = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    // todo 
    let todo = new Todo({
        text: req.body.text
    });
    // save
    todo.save()
        .then(
            (doc) => {
                res.send(doc);
            }, 
            (err) => {
                res.status(400).send(err.message);
            }
        );
});

app.listen(3000, () => {
    console.log('Started at port 3000');
});

module.exports = {
    app
}