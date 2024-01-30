import express, {Request, Response} from 'express'

const app = express();

app.use(express.json());

app
    .route("/api/books")
    .get((req: Request, res: Response) => {
        return res.send("You make Get reequest");
    })
    .post((req: Request, res: Response) => {
        return res.send("You make a POST request");
    })
    .put((req:Request, res: Response) => {
        return res.send("You make a PUT request");
    })
    .all((req: Request, res: Response) => {
        return res.send("You make an x request");
    });

app.listen(3000, () => {
    console.log(`Application listening at http://localhost:3000`)
})