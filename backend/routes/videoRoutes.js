import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  createVideo,
  getAllVideos,
} from "../controllers/videoController.js";

const router = express.Router();

router.post("/", authMiddleware, createVideo);

router.get("/", getAllVideos);

export default router;