const express = require('express');
const bodyParser = require('body-parser');

const spa = express();

let myGoal = 'Learn Docker!';

spa.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

spa.use(express.static('css'));

spa.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Моя цель</title>
      </head>
      <body>
        <section>
          <h2>Моя главная цель</h2>
          <h3>${myGoal}</h3>
        </section>
        <form action="/save-goal" method="POST">
          <div class="form">
            <label>Определить новую цель</label>
            <input type="text" name="goal">
          </div>
          <button>Подтвердить</button>
        </form>
      </body>
    </html>
  `);
});

spa.post('/save-goal', (req, res) => {
    const newGoal = req.body.goal;
    myGoal = newGoal;
    res.redirect('/');
});

spa.listen(80);