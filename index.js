import express from "express";

const app = express();
const port = 5000;

app.listen(port, (err) => {
    if (err) {
        console.error("Error starting the server:", err);
    } else {
        console.log(`Server is running on port ${port}`);
    }
});
