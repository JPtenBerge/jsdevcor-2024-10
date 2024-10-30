import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
	res.send(`Hello World!!!
        <form action="/process" method="post">
            <input name="username">
            <button>Submit</button>
        </form>
        `);
});
app.post('/process', (req, res) => {
	res.send('Jij heet blijkbaar ' + req.body.username);
});

app.listen(1337);
