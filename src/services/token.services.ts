import DLT from "../models/deadtokens"

const postToken = async (_token: any) => {
  await DLT.save(_token)
}

const getToken = async (_token: any) => {
  return await DLT.findOne({
    where: {
      token: _token,
    },
  })
}

export { getToken, postToken }
