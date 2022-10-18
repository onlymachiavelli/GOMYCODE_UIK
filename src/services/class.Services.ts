import TClass from "../models/classes"

const createClass = async (datas: any) => {
  await TClass.save(datas)
}

const getClass = async (_id: any) => {
  return await TClass.findOne({
    where: {
      id: _id,
    },
  })
}

const getClassByOwner = async (_owner: any) => {
  return await TClass.find({
    where: {
      owner: _owner,
    },
  })
}

export { createClass, getClass, getClassByOwner }
