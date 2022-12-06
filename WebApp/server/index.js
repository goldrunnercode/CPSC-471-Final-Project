const express = require('express') 
const app = express();
const pool = require('./db.js')

app.get('/api', (res, req) =>{
    req.send('hello world from express!')
});

app.listen(1234);

