require("dotenv").config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/auth";

const morgan = require("morgan");

const app = express();

const corsOptions = {
  origin: `${process.env.FRONTEND_PATH}`,
  credentials: true,
  optionSuccessStatus: 200,
};

// db connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));

// middlewares
app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(morgan("dev"));

// route middlewares
app.use("/api", authRoutes);

app.listen(8000, () => console.log("Server running on port 8000"));
