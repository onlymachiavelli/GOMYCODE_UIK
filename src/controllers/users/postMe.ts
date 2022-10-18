import Users from "./../../models/users"

import * as userServ from "./../../services/user.services"

import express, { RequestHandler } from "express"
import dateFormat from "date-and-time"
import bcrypt from "bcrypt"
const postMe: RequestHandler = async (req, res) => {
  console.log("Hello world this is a shit ")

  const datas: any = req.body
  console.log(datas)

  if (
    datas.username &&
    datas.password &&
    datas.fullname &&
    datas.type &&
    datas.phone &&
    datas.email &&
    datas.gender &&
    datas.birthdate
  ) {
    const targetByUser: any = await userServ.getUser(datas.username)

    const targetByPhone: any = await userServ.getByPhone(datas.phone)

    const targetByEmail: any = await userServ.getByEmail(datas.email)
    let problem: any = ""
    if (targetByEmail || targetByPhone || targetByUser) {
      problem += targetByEmail ? "Email, " : ""

      problem += targetByPhone ? "Phone, " : ""
      problem += targetByUser ? "UserName, " : ""
      if (problem.length > 0) problem = problem.substr(0, problem.length - 2)
      res.status(409).send(`${problem} Already exists ! `)
    } else {
      console.log("Stuck Here ! ")
      const currentDate = new Date()
      const date: any = dateFormat.format(currentDate, "YYYY-MM-DD HH:mm:ss")
      const user = new Users()
      user.username = datas.username
      user.birthdate = datas.birthdate
      user.type = datas.type || "beg"
      user.email = datas.email
      user.fullname = datas.fullname
      user.createdat = datas.createdat
      user.phone = datas.phone
      user.isverified = false
      user.gender = datas.gender
      user.createdat = date
      user.updatedat = date
      user.propic = ""

      const saltRounds: number = Number(process.env.SALT)
      user.password = await bcrypt
        .genSalt(saltRounds)
        .then((s) => bcrypt.hash(datas.password, s))
      console.log(user)
      await userServ
        .postUser(user)
        .then((resp) => {
          console.log(resp)

          res.status(201).send("User is created ! ")
        })
        .catch((e) => {
          res.status(422).send(e)
        })
    }
  } else {
    res.status(409).send("Invalid Given Datas ! ")
  }
}
export default postMe
