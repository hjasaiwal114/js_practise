import { Express, Request, Response, NextFunction } from "express";

function routes(app: Express) {
    app.get(
        "/api/books/:bookId/:authorId",
        (req: Request, res: Response, next: NextFunction) => {
            console.log(req.name);
            res.send(req.name);
        }
    );
}

export defualt routes;