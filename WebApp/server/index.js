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

app.get('/', (req, res) => {
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT EmailAddress FROM Customer", function (err, result, fields) {
          if (err) throw err;
          res.send(result)
        });
      });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


