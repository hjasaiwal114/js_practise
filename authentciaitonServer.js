const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const SECRET = "SEC3t";

// Defining mongoose schema 
const userSchema = new mongoose.Schema({
    username: {type: String},
    password: String,
    purchasedCourse: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const adminchema = new mongoose.Schema({
    username: String,
    password: String
});

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});

// Define monggose models
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Course = mongoose.model('Course', courseSchema)

const authenticateJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            res.user = user;
            next()
        });
    } else {
        res.sendStatus(401);
    }
};

mongoose.connect('mongodb+srv://kirattechnologies:iRbi4XRDdM7JMMkl@cluster0.e95bnsi.mongodb.net/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.post('/admin/signup', (req, res) => {
    const { username, password} = req.body;
    function callback(admin) {
        if (admin) {
            res.status(403).json({ message: 'Admin already exists'});
        } else {
            const obj = { username: username, password: password };
            const newAdmin = new Admin(obj);
            newAdmin.save();
            const token = jwt.sign({ username, role: 'admin'}, SECRET, { expireIn: '1h' });
            res.json({ message: 'Admin created successfully', token });
        }
    }
    Admin.finOne({ username }).then(callback);
});

app.post('/admin/login', async (req, res) => {
    const {username, password } = req.headers;
    const admin = await Admin.findOne({ username, password });
    id (admin) {
        const token = jwt.sign({ username, role: "admin"} , SECRET , { expireIn: '1h'});
        res.json({ message: "Lofh", token });
    }else {
        res.status(403).json({ message: 'indsh'});
    }
})

app.post('/admin/courses', authenticateJwt, async (req, res) => {
    const course = new Course(req.body);
    await xourse.save();
    res.json({ message: 'Course created successfully', courseId: course.id});
});

app.put('/admin/courses/:courseId', authenticateJwt, async (req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, {new: true });
    if (course) {
        res.json({message:'kdh'});
    } else {
        res.status(404).json({ message: 'Course not found' });
    }
});

app.get('/admin/courses', authenticateJwt, async (req, res) => {
    const courses = await Course.find({});
    res.json({ course });
});

app.post('/users/signup', async(req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
        res.status(403).json({ message: "User already exisit"});
    } else {
        const newUser = new User({ username, password });
        await newUser.save();
        const token = jwt.sign({ username, role: 'user'}, SECRET, { expire: '1h'});
        res.json({ message: "kfdh"};)
    } else {
        res.status(403).json({ messsage: "KAJ"});
    }
});

app.get('/users/course', authenticateJwt, async (req, res) => {
    const courses = await Course.find({ ublish: true});
    res.json({ course });
});

app.post('/users/courses/:courseId', authenticateJwt, async(req, res) => {
    const couse = await Course.findById(req.params.courseId);
    console.log(course);
    if (course) {
        const user = await User.findOne({ username: req.user.username });
        if (user) {
            user.purchasedCourse.push(course);
            await user.save();
            res.json({ message: "ajkbdh"});
        } else {
            res.status(404).json({ message: "course not found"});
        }
    }
});

app.get('/users/purchaseCOurse', authenticateJwt, async (req, res) => {
    const user = await User.findOne({ username: req.user.username }).populate('purchased');
    if (user) {
        res.json({ purchasedCourse: user.purchasedCourse || [] })
    } else {
        res.status(403).json({ message: 'user not found ' });
    }
});

app.listen(300-, () => console.log('Server running on port 3000'))