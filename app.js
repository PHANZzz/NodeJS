const express = require('express');
const mysql = require('mysql');
const path=require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'person'
});

con.connect((err) => {
  if (err) throw err;
  console.log('connected!');
});

app.get('/', (req, res) => {
  con.query('SELECT * FROM persons', (err, result) => {
    if (err) throw err;
    res.render('table', {data: result});
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
