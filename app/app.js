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

const sql = `INSERT INTO people(name) values('Guilherme')`
const sql_two = `INSERT INTO people(name) values('Wesley')`

connection.query(sql)
connection.query(sql_two)

const select = `SELECT name FROM people`

//Define request response in root URL (/)
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

//Launch listening server on port 8080
app.listen(port, function () {
  console.log(`app listening on port ${port}!`)
})