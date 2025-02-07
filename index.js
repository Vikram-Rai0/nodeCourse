import express from "express";
import {db} from "./database/db.js"
import routes from "./router/userRouter.js";

const app = express();
const port = 5000;

app.use(express.json());

app.use("/api",routes);

app.listen(port, (err) => {
    if (err) {
        console.error("Error starting the server:", err);
    } else {
        console.log(`Server is running on port ${port}`);
    }
});