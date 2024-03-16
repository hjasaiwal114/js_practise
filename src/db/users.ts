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
    username: { type: String, required: true },
    email: { type: String, required: true},
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
    },
});

export const UserModel: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

export const getUsers = () => UserModel.find().exec();
export const getUserByEmail = (email: string) => UserModel.findOne({email}).exec();
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({
    'authentication.sessionToken': sessionToken,
}).exec();
export const getUserById = (id: string) => UserModel.findById(id).exec();
export const createUser = (value: Record<string, any>) => UserModel.create(values);
export const deleteUserById = (id: string) => UserModel.findByIdAndDelete(id).exec();
export const updateUserById = (id: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(id, values, {new: true}).exec();