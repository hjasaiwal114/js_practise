import express, {NextFunction,Request, Response} from 'express'

const app = express();

app.use(express.json());

const middleware = 
    {{name}: {name: string}} => 
    (req: Request, res: Response, next: NextFunction) => {
        req.name = name;
        next();
    };

app.use(middleware({name: "himanshu"}));

app.listen(3000, () => {
    console.log(`Application listening at http://localhost:3000`)
})