import Repository, { basePostUrl, serializeQuery } from "./Repository"

class PostRepository {
  constructor(callback) {
    this.callback = callback
  }

  async getPosts({ pageName, perPage, page }) {
    const endPoint = `/blog-press/${perPage}/${page}/${pageName}`
    const reponse = await Repository.get(`${basePostUrl}${endPoint}`)
      .then(response => {
        if (response.data?.data?.blogsPress?.length > 0) {
          return {
            APIPosts: response.data.data.blogsPress,
            totalDocs: response.data.data.totalDocs,
          }
        } else {
          return []
        }
      })
      .catch(error => ({ error: JSON.stringify(error) }))
    return reponse
  }

  async getPostDetail(postId) {
    const endPoint = `/blog-press/${postId}`
    const reponse = await Repository.get(`${basePostUrl}${endPoint}`)
      .then(response => {
        if (response.data?.data?.blogPress) {
          return response.data.data.blogPress
        } else {
          return null
        }
      })
      .catch(error => ({ error: JSON.stringify(error) }))
    return reponse
  }
}

export default new PostRepository()
