const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');

const router = new express.Router();

// create an account
router.post('/users', async (req, res) => {
	const user = new User(req.body);

	try {
		await user.save();
		const token = await user.generateAuthToken();
		res.status(201).send({ user, token });
	} catch (e) {
		res.status(400).send(e);
	}

	// user
	// 	.save()
	// 	.then(() => {
	// 		res.status(201).send(user);
	// 	})
	// 	.catch((error) => {
	// 		res.status(400).send(error);
	// 	});
});

// router for login
router.post('/users/login', async (req, res) => {
	try {
		const user = await User.findByCredentials(
			req.body.email,
			req.body.password
		);
		const token = await user.generateAuthToken();
		res.send({ user, token });
	} catch (e) {
		res.status(400).send();
	}
});

router.post('/users/logout', auth, async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((token) => {
			return token.token !== req.token;
		});
		await req.user.save();

		res.send();
	} catch (e) {
		res.status(500).send();
	}
});

router.post('/users/logoutAll', auth, async (req, res) => {
	try {
		req.user.tokens = [];
		await req.user.save();
		res.send();
	} catch (e) {
		res.status(500).send();
	}
});

router.get('/users/me', auth, async (req, res) => {
	res.send(req.user);

	// try {
	// 	const users = await User.find({});
	// 	res.send(users);
	// } catch (e) {
	// 	res.status(500).send();
	// }

	// User.find({})
	// 	.then((users) => {
	// 		res.send(users);
	// 	})
	// 	.catch((error) => {
	// 		res.status(500).send();
	// 	});
});

router.patch('/users/me', auth, async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ['name', 'email', 'password', 'age'];
	const isValidOperation = updates.every((update) =>
		allowedUpdates.includes(update)
	);

	if (!isValidOperation) {
		return res.status(404).send({ error: 'unable to update invalid property' });
	}

	try {
		updates.forEach((update) => {
			req.user[update] = req.body[update];
		});
		await req.user.save();

		// const user = await User.findById(req.params.id);

		// updates.forEach((update) => {
		// 	user[update] = req.body[update];
		// });
		// await user.save();

		// if (!user) {
		// 	return res.status(404).send();
		// }

		res.send(req.user);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.delete('/users/me', auth, async (req, res) => {
	try {
		// const user = await User.findByIdAndDelete(req.user._id);

		// if (!user) {
		// 	return res.status(404).send();
		// }

		await req.user.remove();

		res.send(req.user);
	} catch (e) {
		res.status(500).send();
	}
});

module.exports = router;
