import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routs starts from here
import healthCheck from "./routes/healthcheck.route.js";
app.use(healthCheck);

export default app;
