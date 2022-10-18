import Users from "./../models/users"

const targetDatas: any = [
  "username",
  "email",
  "fullname",
  "phone",
  "type",
  "gender",
  "createdat",
  "updatedat",
  "isverified",
]
const getUser = async (_target: any) => {
  return await Users.findOne({
    select: targetDatas,
    where: {
      username: _target,
    },
  })
}

const deleteUser = async (_target: any) => {}

const getUsers = async (_target: any) => {
  return await Users.find()
}
const postUser = async (datas: any) => {
  await Users.save(datas)
}

const getByEmail = async (_target: any) => {
  return await Users.findOne({
    select: targetDatas,
    where: {
      email: _target,
    },
  })
}

const getByPhone = async (_target: any) => {
  return await Users.findOne({
    select: targetDatas,
    where: {
      email: _target,
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
export {
  getUser,
  getUsers,
  deleteUser,
  postUser,
  getByEmail,
  getByPhone,
  getPass,
}
