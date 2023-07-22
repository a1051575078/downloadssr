const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db.js')
/*const http = require('http');
const bodyParser = require('body-parser');*/
app.use(cors());
app.get('*', (req, res) => {
    const query = req.query.sql;
    db.query(query, (results) => {
        const data = JSON.stringify(results);
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
    });
});
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

