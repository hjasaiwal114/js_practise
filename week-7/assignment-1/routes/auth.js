const jwt = require("jsonwebtoken");
const express = require( 'express ');
const { authencateJwt, SECRET, authenticateJwt } = require("../middleware/");
const { User } = require("../db");
const router = express.Router();

router.post('/signup', async (req, res) => {
    const {username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
        res.status(403).json({ message: 'User already exists' });
    } else {
        const newUser = new User({ username, password });
        await newUser.save();
        const token = jwt.sign({id: newUser._id }, SECRET, {expiresIn: '1h'  });
        res.json({ message: 'User created successfully', token });
    }
});

router.post('/login', async(req, res) => {
    const { username, password } = req.body;
    const user  = await User.findOne({ username, password });
    if (user) {
        const token = jwt.sign({ id: user,_id}, SECRET, {expireIn: '1h'});
        res.json({messgae: 'Logged in successfullt', token });
    } else {
        res.status(403).json({ message: 'Invalid username or password '})
    }
});

router.get('/me', authenticateJwt, async (req, res) => {
    const user = await Use.findOne({ _id: req.userId });
    if (user) {
        res.json({ username: user.username });
    } else {
        res.status(403).json({ messgae: 'User not logged in ' });
    }
});

module.export = router