import TClass from "../../models/classes"

import * as clServ from "./../../services/class.Services"
import express, { RequestHandler } from "express"

const getClass: RequestHandler = async (req, res) => {
  const datas = req.body
  const target: any = await clServ.getClass(datas.clId)
  if (target) {
    res.status(200).send(target)
  } else {
    res.status(404).send("Class doesn't exist ! ")
  }
}

export const getClassBy: RequestHandler = (req, res) => {
  const datas = req.body

  const target: any = clServ.getClassByOwner(datas.username)

  if (target.length > 0) {
    res.status(200).send(target)
  } else {
    res.status(404).send("No classes by this teacher")
  }
}
export default getClass
