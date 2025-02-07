import mysql from "mysql2";

export const db = mysql.createConnection({

    host: 'localhost',
    port:'3306',
    user: 'root',
    password: '1234567890',
    database: 'test_database',
});
db.connect((err) => {
    if (err) {
        console.error("connection failed", err);
    }
    else {
        console.log("connected to database");
    }
});


