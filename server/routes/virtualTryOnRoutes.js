import express from "express"
import protect from "../middleware/authMiddleware.js"
import { virtualTryOn } from "../controllers/virtualTryOnController.js"

const router = express.Router()

router.get("/", protect.forAuthUsers, virtualTryOn)

export default router