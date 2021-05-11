// CRUD practice
// Node.js MongoDB Driver API documentation site

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

// destructure
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

// connecting to databases

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(error, client) => {
		if (error) {
			return console.log('Unable to connect to database!');
		}
		const db = client.db(databaseName);

		/////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////
		// delete

		// db.collection('users')
		// 	.deleteMany({
		// 		age: 27,
		// 	})
		// 	.then((result) => {
		// 		console.log(result);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});

		db.collection('task')
			.deleteOne({
				description: 'TODO',
			})
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});

		/////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////
		// update

		// db.collection('users')
		// 	.updateOne(
		// 		{
		// 			_id: new ObjectID('6098cb57f8eefb374a33127b'),
		// 		},
		// 		{
		// 			$set: {
		// 				name: 'Mike',
		// 			},
		// 		}
		// 	)
		// 	.then((result) => {
		// 		console.log(result);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});

		// db.collection('task')
		// 	.updateMany(
		// 		{
		// 			completed: false,
		// 		},
		// 		{
		// 			$set: {
		// 				completed: true,
		// 			},
		// 		}
		// 	)
		// 	.then((result) => {
		// 		console.log(result.modifiedCount);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});

		/////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////
		// Search

		/////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////
		// Search

		// db.collection('users').findOne(
		// 	{ _id: new ObjectID('6098cf3d77cf5141a14f1815') },
		// 	(error, user) => {
		// 		if (error) {
		// 			return console.log('Unable to fetch');
		// 		}

		// 		console.log(user);
		// 	}
		// );

		// db.collection('users')
		// 	.find({ age: 27 })
		// 	.toArray((error, users) => {
		// 		console.log(users);
		// 	});

		// db.collection('users')
		// 	.find({ age: 27 })
		// 	.count((error, count) => {
		// 		console.log(count);
		// 	});

		// db.collection('task').findOne(
		// 	{ _id: new ObjectID('6098d16c722e8b47b8ecf366') },
		// 	(error, task) => {
		// 		console.log(task);
		// 	}
		// );

		// db.collection('task')
		// 	.find({ completed: false })
		// 	.toArray((error, task) => {
		// 		console.log(task);
		// 	});

		/////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////
		// CREATE

		// db.collection('users').insertOne(
		// 	{
		// 		_id: id,
		// 		name: 'Andrew',
		// 		age: 27,
		// 	},
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log('Unable to insert user');
		// 		}

		// 		console.log(result.ops);
		// 	}
		// );

		// db.collection('users').insertMany(
		// 	[
		// 		{
		// 			name: 'Jen',
		// 			age: 28,
		// 		},
		// 		{
		// 			name: 'Gunther',
		// 			age: 27,
		// 		},
		// 	],
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log('Unable to insert documents');
		// 		}
		// 		console.log(result.ops);
		// 	}
		// );

		// db.collection('task').insertMany(
		// 	[
		// 		{
		// 			description: 'TODO',
		// 			completed: false,
		// 		},
		// 		{
		// 			description: 'asdfasdf',
		// 			completed: true,
		// 		},
		// 		{
		// 			description: 'sadfasdf',
		// 			completed: false,
		// 		},
		// 	],
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log('unable to insert document');
		// 		}
		// 		console.log(result.ops);
		// 	}
		// );
	}
);
