require('./src/db/mongoose');
const Task = require('./src/models/task');

// Task.findByIdAndDelete('60995c7abac72189b22fc961')
// 	.then((task) => {
// 		console.log(task);
// 		return Task.countDocuments({ completed: false });
// 	})
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

const deleteTaskAndCount = async (id) => {
	const task = await Task.findByIdAndDelete(id);
	const count = Task.countDocuments({ completed: false });
	return count;
};

deleteTaskAndCount('60995c7abac72189b22fc961')
	.then((count) => {
		console.log(count);
	})
	.catch((e) => {
		console.log(e);
	});
