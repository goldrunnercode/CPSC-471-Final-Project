var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "fullstore"
});

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT EmailAddress FROM Customer", function (err, result, fields) {
      if (err) throw err;
      console.log(result[0].EmailAddress);
    });
  });
  con.end();


