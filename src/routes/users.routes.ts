import express from "express"
import CreateUser from "../controllers/Users/create.user"
const userRouter = express.Router()

userRouter.post("/", CreateUser)

export default userRouter
