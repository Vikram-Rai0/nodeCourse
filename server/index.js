import express from "express";
import { db } from "./controller/database/db.js";
import routes from "./router/userRouter.js";
import route from "./router/authRoute.js";
import cors from "cors";

const app = express();
const port = 5555
app.use(cors());
app.use(express.json());

app.use("/api",routes);
app.use("/api",route);

app.listen(port, (err) => {
    if (err) {
        console.error("Error starting the server:", err);
    } else {
        console.log(`Server is running on port ${port}`);
    }
});