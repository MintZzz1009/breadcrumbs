const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

// connection.connect();

// connection.query(
//     'select gc.id as gc_id, gc.name as gc_name, gc.p_of_grandchild as p_of_gc, c.id as c_id, c.name as c_name, gc.pp_of_grandchild as gc_pp_of_gc, p.id as p_id, p.name as p_name, gc.ppp_of_grandchild as gc_ppp_of_gc, gp.id as gp_id, gp.name as gp_name from grandchilds as gc join childs as c on gc.p_of_grandchild = c.id join parents as p on gc.pp_of_grandchild = p.id join grandparents as gp on gc.ppp_of_grandchild = gp.id where gc.id = 6',
//     (error, rows, fields) => {
//         if (error) throw error;
//         console.log(rows);
//         // console.log(fields);
//     }
// );

// connection.end();

module.exports = connection;
