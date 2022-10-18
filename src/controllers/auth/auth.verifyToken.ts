import { getToken } from "../../services/token.services"
import express, { RequestHandler } from "express"
import Jwt from "jsonwebtoken"
const verifyToken: RequestHandler = async (req, res) => {
  //console.log("hit here " + req.headers.authorization)

  if (req.body.token) {
    const token: any = req.body.token

    const check: any = await getToken(token)
    console.log(check)
    if (check) {
      res.status(401).send("Token is invalid !")
      return
    }

    let payload: any
    try {
      payload = Jwt.verify(token, String(process.env.PRV))
    } catch (e) {
      console.log(e)
      res.status(401).send("Token is invalid !")
      return
    }

    res.status(201).send(payload)
    return
  } else {
    res.status(409).send("Invalid Token !")
    return
  }
}

export default verifyToken
