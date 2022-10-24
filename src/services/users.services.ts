import Users from "./../models/users"
import { userRepo } from "./../utils/postgre.repos"
const selectDatas: any = [
  "username",
  "email",
  "phone",
  "createdat",
  "type",
  "createdat",
  "updatedat",
  "profpic",
  "birthdate",
  "gender",
  "fullname",
]

const getMe = async (_target: any) => {
  return await Users.findOne({
    select: selectDatas,
    where: {
      username: _target,
    },
  })
}
const getPass = async (_target: any) => {
  return await Users.findOne({
    select: ["password"],
    where: {
      username: _target,
    },
  })
}
const getAll = async () => {
  return await Users.find({
    select: selectDatas,
  })
}

const createMe = async (datas: any) => {
  await Users.save(datas)
}

const getByEmail = async (_email: any) => {
  return await Users.findOne({
    select: selectDatas,
    where: {
      email: _email,
    },
  })
}

const getByPhone = async (_phone: any) => {
  return await Users.findOne({
    select: selectDatas,
    where: {
      phone: _phone,
    },
  })
}

const deleteMe = async (_target: any) => {
  userRepo
    .createQueryBuilder()
    .delete()
    .from(Users)
    .where({ username: _target })
    .execute()
}
export { getMe, getAll, deleteMe, createMe, getByEmail, getByPhone, getPass }
