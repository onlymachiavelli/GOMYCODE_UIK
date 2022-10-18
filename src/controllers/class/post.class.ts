import TClass from "../../models/classes"
import * as userServ from "./../../services/user.services"
import * as clServ from "./../../services/class.Services"
import express, { RequestHandler } from "express"

const createClass: RequestHandler = async (req, res) => {
  if (
    req.body.owner &&
    req.body.title &&
    req.body.about &&
    req.body.description &&
    req.body.codeauth
  ) {
    const user: any = await userServ.getUser(req.body.owner)

    if (user.type === "pro") {
      const cl = new TClass()
      cl.about = req.body.about
      cl.codeauth = req.body.codeauth
      cl.description = req.body.description
      cl.title = req.body.title
      cl.owner = user

      clServ
        .createClass(cl)
        .then((resp) => {
          res.status(201).send("Done creating the class ! ")
        })
        .catch((e) => {
          res.status(409).send("Cannot create the class ! ")
        })
    } else {
      res.status(409).send("User is not allowed to create Classes ! ")
    }
  } else {
    res.status(409).send("Invalid given datas! ")
  }
}

export default createClass
