const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "fullstore"
});

app.get('/:EmailAddress', (req, res) => {
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM Orders WHERE CustomerEmail = '"+req.params.EmailAddress +"'", function (err, result, fields) {
          if (err) throw err;
          res.send(result)
        });
      });
      if (con.state !== 'disconnected') {
        con.end(function(err) {
          if (err) throw err;
          console.log('Connection closed');
        });
      }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


