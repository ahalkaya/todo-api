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
    //     .findOneAndUpdate(
    //         { 
    //             _id: new ObjectID('5990d1be7626bdb67d30cdf1')
    //         },
    //         {
    //             $set: { completed: true }
    //         },
    //         {
    //             returnOriginal: false
    //         }
    //     )
    //     .then(
    //         (result) => {
    //             console.log(result);
    //         },
    //         (err) => {
    //             console.log('Unable to update todo', err);
    //         }
    //     );
    
    db.collection('Users')
        .findOneAndUpdate(
            {
                _id: new ObjectID('599099b44c97c205a55e17db')
            },
            {
                $set: { name: 'Alihan' },
                $inc: { age: -1 }
            },
            {
                returnOriginal: false
            }
        )
        .then(
            (result) => {
                console.log(result);
            }, 
            (err) => {
                console.log('Unable to update user', err);
            }
        );

    // db.close();
});