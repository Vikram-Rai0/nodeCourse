import { db } from "./database/db.js";

export const insertUserData = (req, res) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password || !phone) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  // Check if user exists with email or phone number and password matches

  // const checkUserQuery = "select * from user WHERE email = ? OR phone =?";
  // db.query(checkUserQuery, [email, phone], (err, result) => {
  //     if (err) return res.status(500).json({ message: "database error ", err });
  //     if (result.length > 0) {
  //         return res.status(400).json({ message: "User already exists" });
  //     }
  // });

  const query =
    "INSERT INTO user (`name`,`email`,`password`,`phone`) VALUES (?,?,?,?)";

  db.query(query, [name, email, password, phone], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "User added successfully", data: result });
  });
};
