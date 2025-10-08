var mysql2 = require('mysql2/promise');
var { connectionDetails } = require('./util')

async function listEmployees() {
    const query = `
SELECT fullname, dept_name fROM employees JOIN departments USING (dept_id)`;

    try {
        const conn = await mysql2.createConnection(connectionDetails);
        const [queryResult] = await conn.query(query);
        //console.log(queryResult);
        for (let emp of queryResult) {
            console.log(`${emp.fullname}  - ${emp.dept_name}`)
        }
        
        await conn.end();
    }
    catch (error) {
        console.log("Error occurred: ", error.message);
    }
}

listEmployees()