import express from "express"

const userRoute = express.Router()

import getMe from "./../controllers/users/getMe"
import postMe from "./../controllers/users/postMe"

userRoute.get("/", getMe)

userRoute.post("/", postMe)

export default userRoute
