import express from 'npm:express@4.21.1';

import bodyParser from 'npm:body-parser@1.20.3';
import cors from 'npm:cors@2.8.5';

const app = express();

app.use(cors());
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
app.get('/tosti', (req, res) => {
	setTimeout(() => {
		res.json([
			{
				description: 'Ham, kaas en DENO',
				price: 4.5,
				photoUrl:
					'https://www.leukerecepten.nl/app/uploads/2020/07/klassieke-tosti.jpg',
			},
			{
				description: 'Oude kaas, kipfilet, sambal',
				price: 5.9,
				photoUrl:
					'https://leuklekkerenliefdevolkoken.nl/wp-content/uploads/2017/04/psa3244.jpg',
			},
		]);
	}, 2000);
});

app.listen(1337);
