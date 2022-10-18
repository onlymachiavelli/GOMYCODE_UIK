import Users from "./../models/users"

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

const getAll = async () => {
  return await Users.find({
    select: selectDatas,
  })
}

const createMe = async (datas: any) => {
  await Users.save(datas)
}

const deleteMe = async (_target: any) => {}
export { getMe, getAll, deleteMe, createMe }
