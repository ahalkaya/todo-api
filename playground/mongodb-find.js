const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos')
    //     .find({
    //         _id: new ObjectID('5990988f1874ac059eb50d57')
    //     }).toArray().then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, null, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    // db.collection('Todos')
    //     .find()
    //     .count()
    //     .then((count) => {
    //         console.log('Todos');
    //         console.log(`Todos count: ${count}`);
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    let usersCollection = db.collection('Users');
    usersCollection
        .find({
            name: 'Alihan'
        })
        .toArray()
        .then((docs) => {
            console.log(JSON.stringify(docs, null, 2));
        }, (err) => {
            console.log('Unable to fetch users', err)
        });

    // db.close();
});