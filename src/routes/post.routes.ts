import express from "express"

const postRoute = express.Router()

import addPost from "./../controllers/posts/create.post"
import getPosts from "./../controllers/posts/get.posts"
postRoute.post("/", addPost)
postRoute.get("/", getPosts)

export default postRoute
