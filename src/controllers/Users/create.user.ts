import Users from "./../../models/users"
import express, { RequestHandler } from "express"
import dateFormat from "date-and-time"
import * as userServ from "./../../services/users.services"
import bcrypt from "bcrypt"
const CreateUser: RequestHandler = async (req, res) => {
  if (req.body) {
    const targetByUser: any = await userServ.getMe(req.body.username)

    const targetByPhone: any = await userServ.getByPhone(req.body.phone)

    const targetByEmail: any = await userServ.getByEmail(req.body.email)
    let problem: any = ""
    if (targetByEmail || targetByPhone || targetByUser) {
      problem += targetByEmail ? "Email, " : ""

      problem += targetByPhone ? "Phone, " : ""
      problem += targetByUser ? "UserName, " : ""
      if (problem.length > 0) problem = problem.substr(0, problem.length - 2)
      res.status(409).send(`${problem} Already exists ! `)
    } else {
      const user = new Users()
      const currentDate = new Date()
      const date: any = dateFormat.format(currentDate, "YYYY-MM-DD HH:mm:ss")
      user.username = req.body.username
      //user.password = req.body.password
      user.birthday = req.body.birthdate
      user.email = req.body.email
      user.phone = req.body.phone
      user.fullname = req.body.fullname
      user.profpic = req.body.profpic ? req.body.profpic : ""
      user.type = req.body.type
      user.createdat = date
      const saltRounds: number = Number(process.env.SALT)
      user.password = await bcrypt
        .genSalt(saltRounds)
        .then((s) => bcrypt.hash(req.body.password, s))

      await userServ
        .createMe(user)
        .then((resp) => {
          res.status(201).send("Done creating the user ")
        })
        .catch((e) => {
          res.status(422).send(e)
        })
    }
  } else {
    res.status(409).send("Invalid datas! ")
  }
}

export default CreateUser
