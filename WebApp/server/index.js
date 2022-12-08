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
  app.get('/updateorder/:OrderNo/:CompanyName', (req, res) => {
      checkConnection();
      con.query("UPDATE Orders SET CompanyName ='"+req.params.CompanyName +"' WHERE OrderNo = "+req.params.OrderNo, function (err, result, fields) {
        if (err) throw err;
        res.send(result)
      });
    })
    app.get('/updateorderstatus/:OrderNo/:Status', (req, res) => {
      checkConnection();
      con.query("UPDATE Orders SET Status ='"+req.params.Status +"' WHERE OrderNo = "+req.params.OrderNo, function (err, result, fields) {
        if (err) throw err;
        res.send(result)
      });
    })
  app.get('/customerordersall/:EmailAddress', (req, res) => {
    checkConnection();
    con.query("SELECT * FROM Orders WHERE StaffEmail = '"+req.params.EmailAddress +"'", function (err, result, fields) {
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

app.get('/selectpickuppharmacy/:CustomerEmail', (req, res) => {
  checkConnection();
  con.query("SELECT PickupPharmacy FROM Customer WHERE EmailAddress = '"+req.params.CustomerEmail +"'", function (err, res1, fields) {
    console.log(res1[0].PickupPharmacy);
    if (err) throw err;
    res.send(res1[0].PickupPharmacy)
  });
})

app.get('/selectstaffemail/:PickupResult', (req, res) => {
  checkConnection();
  con.query("SELECT EmailAddress FROM PharmacyStaff WHERE EmployerCompany = '"+req.params.PickupResult+"'", function (err, res2, fields){
    console.log(res2[0].EmailAddress);
    if (err) throw err;
    res.send(res2[0].EmailAddress)
  });
})

app.get('/createordersubmit/:MedName/:Quantity/:CustomerEmail/:StaffEmail/:OPharmacyName', (req, res) => {
  checkConnection();
  var now = new Date();
  now.setDate(now.getDate() + 7);
  var dd = String(now.getDate()).padStart(2, '0');
  var mm = String(now.getMonth() + 1).padStart(2, '0');
  var yyyy = now.getFullYear();
  now = mm + '-' + dd + '-' + yyyy;
  console.log(isNaN(req.params.Quantity));
  con.query("INSERT INTO Orders (MedName, EstArrival, Quantity, Status, CustomerEmail, StaffEmail, CompanyName, OPharmacyName) VALUES ('"+req.params.MedName+"', '"+now.toString()+"', '"+req.params.Quantity+"', '"+'Processing'+"', '"+req.params.CustomerEmail+"', '"+req.params.StaffEmail+"', '"+'NULL'+"', '"+req.params.OPharmacyName+"')", function (err, res3, fields) {
    if (err) throw err;
    res.send(true)
  });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


