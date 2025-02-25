import express from "express";

import { regrister } from "../controller/auth.js";
import { Login } from "../controller/auth.js";

const route = express.Router();

// Register Route
route.post("/auth",regrister);
route.post("/login",Login);

export default route;
