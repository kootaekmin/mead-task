const add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (a < 0 || b < 0) {
				return reject('Numbers must be non-negative');
			}

			resolve(a + b);
		}, 2000);
	});
};

add(1, 1)
	.then((sum) => {
		console.log(sum);
		return add(sum, 4);
	})
	.then((sum2) => {
		console.log(sum2);
	})
	.catch((e) => {
		console.log(e);
	});
