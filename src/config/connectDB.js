const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '154.49.247.11',
    user: 'u902679059_op',
    password: '@OPlottery008',
    database: 'u902679059_op'
});

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'admin',
//     password: 'Dph51mO5qkS8U1k',
//     database: '92lottery'
// });

export default connection;