import { db } from "./database/db.js";
export const getUserData =  (req, res) => {
    try {
        const query = "SELECT id,name,email,phone FROM user";
        db.execute(query, (error, result)=>{
            if (error) {
                console.log(error);
                return res.status(500).json({ message: "Error fetching user data" });
                }
            res.status(200).json(result)
        });

        // res.status(200).json({ users: rows });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

