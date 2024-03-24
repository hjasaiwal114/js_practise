import { Request, Response } from "express";
import config from "config";
import {
    createSession,
    findSessions,
    updateSession,
} from "../service/session.service";
import { validatePassword } from "../service/user.service";
import { signJwt } from "../utils/jwt.utils";

export async function createUserSessinHandler(req: Request, res: Response){

    // Validate the user's password
const user = await validatePassword(req.body);

if (!user) {
    return res.status(401).send("Invalid email or password");
}

    // create a session

    // create an access token

    // create a refresh token
}