//app.js

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'company'
});
connection.connect((err) => {
  if (err){
    throw err;
    return;
  }
  console.log('Connected!');
  connection.query('SELECT * from admin', function(err, rows, fields) {
  connection.end();
    if (!err)
      console.log(rows);
    else
      console.log('Error while performing Query.');
    });
});
