import express from "express";
import { isAdmin, requireSignin } from "../middlewares";

const router = express.Router();

// controllers
const { create } = require("../controllers/category");

router.post("/category", requireSignin, isAdmin, create);

export default router;
