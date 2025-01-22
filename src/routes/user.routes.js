import { Router } from "express";
import {
  getAllUsersController,
  createUserController,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/api/v1/users", getAllUsersController);
router.post("/api/v1/users", createUserController);

export default router;
