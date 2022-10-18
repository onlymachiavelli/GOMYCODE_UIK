import appDataSource from "./POSTGRES"
import Users from "../models/users"

export const userRepo = appDataSource.getRepository(Users)
