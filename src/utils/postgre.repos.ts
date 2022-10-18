import appDataSource from "./POSTGRES"
import Users from "../models/users"

const userRepo = appDataSource.getRepository(Users)
