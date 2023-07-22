var express = require('express')

const app = express()
const port = 3000

const config = {
  host:'db-node',
  user: 'root',
  password:'root',
  database: 'nodedb'
};

const mysql = require('mysql')

const connection = mysql.createConnection(config)

const select = `SELECT name FROM people`

app.get('/', function (req, res) {

  connection.query(select, (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      return res.status(500).send('Erro ao obter os nomes.');
    }

    res.render('index', { names: results });
  });
});

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.listen(port, function () {
  console.log(`app listening on port ${port}!`)
})
