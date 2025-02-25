import { db } from "./database/db.js";
import bcrypt from "bcrypt";

export const regrister = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const query = `SELECT * FROM user where email =?`;
    const [existsUser] = await db.execute(query, [email]);
    console.log("Query result for checking user existence: ", existsUser);
    s;
    if (existsUser.length > 0) {
      return res.send({ message: "User already exists" });
    }

    const salt = bcrypt.genSaltSync(10);

    const hashedPassword = await bcrypt.hash(password, salt); // Use await to ensure the password is hashed before continuing
    console.log("hashedPassword: ", hashedPassword);

    // -------------------------------------------
    const insertQuery = `INSERT INTO user(name,email,Password,phone)  VALUES (?,?,?,?)`;
    const [result] = await db.execute(insertQuery, [
      name,
      email,
      hashedPassword,
      phone,
    ]);
    console.log("Inserted Data:", result);
    res.status(201).json({
      message: "User registered successfully",
      userId: result.insertId,
    });
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ message: "Database error", error: error.message });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);

    const check = `SELECT * FROM user WHERE email = ?`;

    const [rows] = await db.execute(check, [email]);

    if (rows.length === 0) {
      return res.status(404).send({ message: "User not found" });
    }

    // Compare the entered password with the hashed password in the database
    const checkPassword = bcrypt.compareSync(password, rows[0].password);

    if (!checkPassword) {
      return res.status(401).send({ message: "Password is incorrect" });
    }
    const token = jwt.sign({ id: rows[0].id }, "secretkey");

    return res.status(200).send({ message: "Login successful" });
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ message: "Database error", error: error.message });
  }
};
