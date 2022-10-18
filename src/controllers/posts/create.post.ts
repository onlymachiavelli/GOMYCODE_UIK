import Posts from "./../../models/post"
import TClass from "../../models/classes"
import express, { RequestHandler } from "express"
import * as clServ from "./../../services/class.Services"
import * as userServ from "./../../services/user.services"
import * as postServ from "./../../services/post.services"

const addPost: RequestHandler = async (req, res) => {
  const datas: any = req.body
  //find the class
  const theClass: any = await clServ.getClass(datas.classId)
  const user: any = await userServ.getUser(datas.by)

  const post = new Posts()
  post.file = ""
  post.from = theClass
  post.title = datas.id
  post.type = datas.type
  post.postedby = user

  postServ
    .addPost(post)
    .then((resp) => {
      res.status(201).send("Done creating the post")
      return
    })
    .catch((e) => {
      res.status(409).send(e)
    })
}

export default addPost
