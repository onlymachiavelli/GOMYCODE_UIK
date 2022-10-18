import express from "express"

const classRoute = express.Router()
import createClass from "./../controllers/class/post.class"
import getClass , {getClassBy} from './../controllers/class/get.classes'

classRoute.post("/", createClass)
classRoute.get("/" ,getClass )
classRoute.get("/by", getClassBy)

export default classRoute
