import express from "express"
import userController from "../controllers/userController.js"

const router = express.Router()

router.get('/', userController.getUsers)
router.get('/:role', userController.getUsersByRole)
export default router