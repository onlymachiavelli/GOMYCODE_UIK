import Posts from "../models/post"

const addPost = async (datas: any) => {
  await Posts.save(datas)
}

const getPosts = async (_id: any) => {
  return await Posts.find({
    where: {
      postedby: _id,
    },
  })
}

const getPost = async (_id: any) => {
  return await Posts.findOne({
    where: {
      id: _id,
    },
  })
}

const byClass = async (target: any) => {
  return await Posts.find({
    where: {
      from: target,
    },
  })
}
export { addPost, getPost, getPosts, byClass }
