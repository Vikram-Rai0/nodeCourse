import express from "express";
import { insertUserData } from "../controller/user.js";
import { getUserData } from "../controller/getUserData.js"
import { login } from "../controller/loginUser.js";

const routes = express.Router();

routes.post("/insertUserData", insertUserData);
routes.get("/getUserData", getUserData);
routes.post("/login",login);

export default routes;