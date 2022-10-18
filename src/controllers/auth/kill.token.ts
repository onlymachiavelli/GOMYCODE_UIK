import DeadTokens from "./../../models/deadtokens"
import express, { RequestHandler } from "express"

import * as tokenServ from "./../../services/token.services"
import dateFormat from "date-and-time"
const killToken: RequestHandler = async (req, res) => {
  const target = req.body.token

  if (!target) {
    res.status(409).send("Invalid Datas !")

    return
  }

  const getToken = await tokenServ.getToken(target)
  if (getToken) {
    res.status(201).send("Token is already dead ! ")

    return
  }

  const currentDate: any = new Date()

  const date: any = dateFormat.format(currentDate, "YYYY-MM-DD HH:mm:ss")

  const token: any = new DeadTokens()
  token.token = target
  token.addedat = date
  tokenServ
    .postToken(token)
    .then((resp) => {
      res.status(201).send("Done killing the token ")
    })
    .catch((e) => {
      res.status(409).send("There's an error !")
    })
}

export default killToken
