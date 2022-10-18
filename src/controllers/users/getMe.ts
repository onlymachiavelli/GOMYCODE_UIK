import express, { RequestHandler } from "express"

import Users from "./../../models/users"

import * as userServ from "./../../services/user.services"

const getMe: RequestHandler = async (req, res) => {
  const datas: any = req.query

  console.log(datas.username)
  if (!datas.username) {
    res.status(400).send("Invalid Given Datas ! ")
    return
  }

  const user: any = await userServ.getUser(datas.username)

  if (user) {
    res.status(200).send(user)
    return
  }
  res.status(404).send("User doesnt't exist ! ")
}

export default getMe

/*

my end points 

////users ! 
get : user/ -> Get one user 
get : user/all -> get all users 
post : user/ -> post the user 

delete : user/ -> delete the user 

patch : user -> update the user



post: auth/ -> authenticate 


post authToken -> verify the user Token ! 


//// tokens ! 


post : kill/ post the dead token 
get : kill/ get a dead token 


 
*/
