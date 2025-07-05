import e from "express";
import { Healthcheck } from "../controllers/healthCheck.controller.js";

const router = e.Router();

router.get("/", Healthcheck);

export default router;
