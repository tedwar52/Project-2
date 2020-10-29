const mysql = require('mysql');

const log = (msg) => console.log(msg)

const connection = mysql.createConnection({
    host: 'localhost',
    PORT: 3306,
    user: 'root',
    password: process.env.PASSWORD,
    database: 'passportdb'
});

connection.connect((err, res) => {
    if (err) throw err;
})

log('Its working')