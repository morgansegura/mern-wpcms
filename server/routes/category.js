import express from "express";
import { isAdmin, requireSignin } from "../middlewares";

const router = express.Router();

// controllers
const { create, categories } = require("../controllers/category");

router.post("/category", requireSignin, isAdmin, create);
router.get("/categories", categories);

export default router;
