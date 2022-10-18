import * as userServ from "../../services/user.services"
import Users from "../../models/users"
import express, { RequestHandler } from "express"
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"
const makeAuth: RequestHandler = async (req, res) => {
  if (req.body.username && req.body.password) {
    const datas: any = req.body
    const user: any = await userServ.getUser(datas.username)
    console.log(user)
    if (user) {
      const pass: any = await userServ.getPass(datas.username)
      console.log(pass.password)
      bcrypt.compare(
        String(datas.password),
        String(pass.password),
        (err, result) => {
          if (err) {
            console.log(err)
            res
              .status(409)
              .send(
                "There's an error ! , you can report that error if you can please "
              )
          }
          if (result) {
            const token: any = Jwt.sign(
              {
                userDatas: user,
                isAuthed: true,
                x: 0,
                y: 0,
              },
              String(process.env.PRV),
              {
                expiresIn: "10h",
              }
            )
            res.status(200).send(token)
          } else {
            res.status(401).send("Cannot authenticate ! ")
          }
        }
      )
    } else {
      res.status(404).send("User doesn't exist ! ")
    }
  } else {
    res.status(409).send("Invalid Datas")
  }
}

export default makeAuth
