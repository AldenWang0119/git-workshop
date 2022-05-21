// read stock no from mysql database

// mysql2 是一個第三方套件
// npm i mysql2
// 引用進來
const { createConnection } = require('mysql2');
const mysql = require('mysql2/promise');

(async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'admin',
    password: '12345',
    database: 'node.js',
  });

  let [data, fields] = await connection.execute('SELECT * FROM stocks');
  console.log(data);

  // results [
  //     [],
  //     []
  // ]
  //let data = results[0];
  //let fields = results[1];

  connection.end();
})();

wrong code = 'this is test for delete wrong git commite'

