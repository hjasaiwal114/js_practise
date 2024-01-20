const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const { tryCatch } = require('./utils/trycatch');

const app = express();

const getUser  = () => undefined;
const getSubscription = () => undefined;

app.get(
    "/test",
    tryCatch(async (req, res) => {
        const user = getuser();
        if (!user) {
            throw new Error("User not found");
        }
        return res.status(200).json({ success: true });
    })
);

const schema = Joi.object({
    userId: Joi.number().required(),
});

app.post(
    "/login", 
    tryCatch(async (req, res) => {
        const { error, value } = schema.validate({});

        const subscription = getSubscription();
        if (!subscription) {
            throw AppError(INVALID_SUBSCRIPTION, 'SUnscription not found', 400);
        }
 }))

app.use(errorHandler)

app.listen(4000, () => {
    console.log("Server listening on port 4000");
});