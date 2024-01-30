import express, {Request, Response} from 'express'

const app = express();

app.use(express.json());

app.get('/health', (req, res) => res.sendStatus(200));
app.get("/ab*cd", (req, res) => res.send("/ab*cd"));
app.get(/abc/, (req, res) => res.send("abc"));

app.listen(3000, () => {
    console.log(`Application listening at http://localhost:3000`)
})