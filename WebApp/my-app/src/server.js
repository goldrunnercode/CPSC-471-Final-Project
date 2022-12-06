var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client

// Connection string parameters.
var sqlConfig = {
    user: 'root',
    password: 'G@astra1',
    server: 'localhost',
    database: 'fullStore'
}

// Start server and listen on http://localhost:3060/
var server = app.listen(3060, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
});

