var mysql2 = require('mysql2/promise');
var { connectionDetails } = require('./util')


async function list() {
  try {
    const con = await mysql2.createConnection(connectionDetails);
    const [depts, fields] = await con.query('SELECT * FROM departments');
    console.log(depts)
    console.log(fields)
    await con.end();

    for(let dept of depts) {
      console.log(dept.dept_name)
    }
  }
  catch (ex) {
    console.log(ex)
  }
}


list()


    
 