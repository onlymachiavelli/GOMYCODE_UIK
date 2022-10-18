import Posts from "./../../models/post"

import * as postServ from "./../../services/post.services"

import express, { RequestHandler } from "express"

const getbyClass: RequestHandler = async (req, res) => {
  const datas = req.body

  const target: any = postServ.byClass(datas.cls)

  if (target.length > 0) {
    res.status(201).send(target)
  } else {
    res.status(404).send("No posts from this class ! ")
  }
}

export default getbyClass
