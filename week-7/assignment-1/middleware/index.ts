import  jwt from 'jsonwebtoken';
export const SECRET = 'SECr3t';
import {Request, Response, NextFunction } from 'express';

interface updatedTodo extends Request {
    userId: string;
}

export const authenticateJwt = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split('')[1];
        jwt.verify(token, SECRET, (err, payload) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.headers["userid"] = payload.id;
            next();
        });
    } else {
        res.sendSttaus(401);
    }
};
module.exports = {
    authenticateJwt,
    SECRET
}
