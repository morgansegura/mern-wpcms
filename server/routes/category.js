import express from "express";
import { requireAuth } from "../middlewares";

const router = express.Router();

// controllers
const { create } = require("../controllers/category");

router.post("/category", requireAuth, create);

export default router;
