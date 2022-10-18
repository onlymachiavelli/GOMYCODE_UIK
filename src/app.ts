import express from "express"
import "dotenv/config"
import { json } from "body-parser"

import appDataSource from "./utils/POSTGRES"

const cors = require("cors")

const app = express()

import userRoute from "./routes/user.route"
import authRoute from "./routes/auth.route"
import classRoute from "./routes/class.route"
import postRoute from "./routes/post.routes"

app.use(json())
app.use(cors())
const PORT: any = process.env.PORT || 3000

app
  .listen(PORT, () => {
    console.log(`Listening on ${PORT}`)

    appDataSource
      .initialize()
      .then((res: any) => {
        console.log("Connected to the database ! ")

        app.use("/me", userRoute)
        app.use("/auth", authRoute)
        app.use("/class", classRoute)
        app.use("posts" , postRoute)
      })
      .catch((e: any) => {
        console.log(e)
      })
  })
  .on("error", () => {
    console.log("There's an error ! ")
  })
