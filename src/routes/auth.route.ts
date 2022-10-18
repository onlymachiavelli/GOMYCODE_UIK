import express from "express"

const authRoute = express.Router()
import makeAuth from "../controllers/auth/auth.auth"
import verifyToken from "./../controllers/auth/auth.verifyToken"
import killToken from "./../controllers/auth/kill.token"
authRoute.post("/", makeAuth)
authRoute.post("/verify", verifyToken)
authRoute.delete("/", killToken)

export default authRoute
