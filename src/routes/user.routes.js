import { Router } from "express";
import {
  getAllUsersController,
  createUserController,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/users", getAllUsersController);
router.post("/users", createUserController);

export default router;
