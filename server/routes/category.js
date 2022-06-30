import express from "express";
import { isAdmin, requireSignin } from "../middlewares";

const router = express.Router();

// controllers
const {
  create,
  categories,
  remove,
  update,
} = require("../controllers/category");

router.post("/category", requireSignin, isAdmin, create);

router.get("/categories", categories);

router.delete("/category/:slug", requireSignin, isAdmin, remove);

router.put("/category/:slug", requireSignin, isAdmin, update);

export default router;
