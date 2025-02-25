import { db } from "./database/db.js";

import express from 'express';
const app = express();


export const login = app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const checkUserQuery = "SELECT * FROM user WHERE email=? AND password=?";


    db.query(checkUserQuery, [email, password], (err, result) => {
        if (err) return res.status(500).json({ message: "Database error", err });
        if (result.length === 0) {
            return res.status(400).json({ message: "Invalid email/password " })
        }
        res.json({ message: "Login successfull", user: [result[0]] });
    })
});
