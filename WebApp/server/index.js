const express = require('express')
const app = express()
const port = 3001
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "fullstore"
});

app.get('/customer/:EmailAddress', (req, res) => {
  if(con.state === 'disconnected') {
    con.connect(function(err) {
      if (err) throw err;
    });
  }
  con.query("SELECT * FROM Orders WHERE CustomerEmail = '"+req.params.EmailAddress +"'", function (err, result, fields) {
    if (err) throw err;
    res.send(result)
  });
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


