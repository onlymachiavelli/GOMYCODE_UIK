import { DataSource } from "typeorm"

const appDataSource = new DataSource({
  type: "postgres",
  host: String(process.env.HOST),
  port: Number(process.env.DBPORT),
  username: String(process.env.USER) || "",
  password: String(process.env.PASSWORD) || "",
  database: String(process.env.DATABASE) || "",
  entities: [__dirname + "/../models/*.ts"],
  synchronize: true,
})

export default appDataSource
