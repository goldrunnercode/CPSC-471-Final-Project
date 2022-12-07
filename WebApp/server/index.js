const express = require('express')
const app = express()
const port = 3001
var mysql = require('mysql');
var cors = require('cors')
app.use(cors())

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "fullstore"
});

function checkConnection() {
  if(con.state === 'disconnected') {
    con.connect(function(err) {
      if (err) throw err;
    });
  }
}

app.get('/customerorders/:EmailAddress', (req, res) => {
  checkConnection();
  con.query("SELECT * FROM Orders WHERE CustomerEmail = '"+req.params.EmailAddress +"'", function (err, result, fields) {
    if (err) throw err;
    res.send(result)
  });
})
app.get('/customerordersall/', (req, res) => {
    checkConnection();
    con.query("SELECT * FROM Orders", function (err, result, fields) {
      if (err) throw err;
      res.send(result)
    });
  })

app.get('/emailexists/:EmailAddress', (req, res) => {
  checkConnection();
  con.query("SELECT * FROM Customer WHERE EmailAddress = '"+req.params.EmailAddress +"'", function (err, result, fields) {
    if (err) throw err;
    res.send(result.length > 0)
  });
})

app.get('/staffemailexists/:EmailAddress', (req, res) => {
    checkConnection();
    con.query("SELECT * FROM PharmacyStaff WHERE EmailAddress = '"+req.params.EmailAddress +"'", function (err, result, fields) {
      if (err) throw err;
      res.send(result.length > 0)
    });
  })

app.get('/signupsubmit/:EmailAddress/:FirstName/:LastName/:PickupLocation', (req, res) => {
  checkConnection();
  con.query("INSERT INTO Customer (EmailAddress, Fname, LName, PickupPharmacy) VALUES ('"+req.params.EmailAddress+"', '"+req.params.FirstName+"', '"+req.params.LastName+"', '"+req.params.PickupLocation+"')", function (err, result, fields) {
    if (err) res.send(false);
    res.send(true)
  });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


