import mongoose, { Document, Model } from 'mongoose';

interface IUser extends Document {
    username: string;
    email: string;
    authentication: {
        password: string;
        salt: string;
        sessionToekn: string;
    };
};

const UserSchema = new mongoose.Schema({
    
})