const mongoose = require('mongoose');

// connecting to database
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

// const me = new User({
// 	name: '       andDFSSFew',
// 	age: 24,
// 	email: 'kootaekmin@fmadf.com',
// 	password: '    asdfasdf asdf234 ',
// });

// me.save()
// 	.then(() => {
// 		console.log(me);
// 	})
// 	.catch((error) => {
// 		console.log('error');
// 	});

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// const task = new Task({
// 	description: '        Learn the moongoose library',
// 	completed: false,
// });

// task
// 	.save()
// 	.then(() => {
// 		console.log(task);
// 	})
// 	.catch((error) => {
// 		console.log('error');
// 	});
