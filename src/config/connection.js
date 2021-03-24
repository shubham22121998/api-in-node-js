const {createPool} = require('mysql')


var conn = createPool({
    port:3306,
    host:'localhost',
    user:'root',
    password:'root',
    database:'js_db',
    connectionLimit:10

});

// conn.connect(function(err){
//     if (err) throw err;
//     console.log("connected");
// });

module.exports = conn;