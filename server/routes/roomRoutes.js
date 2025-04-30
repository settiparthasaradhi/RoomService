import express from "express";
import { getOrInitializeRooms, updateRoomService } from "../controllers/roomController.js";

const router = express.Router();

router.get("/", getOrInitializeRooms);
router.put("/:roomId", updateRoomService);

export default router;