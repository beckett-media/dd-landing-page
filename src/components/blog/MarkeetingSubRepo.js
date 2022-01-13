import Repository, { basePostUrl } from "./Repository"

class PostRepository {
  constructor(callback) {
    this.callback = callback
  }

  async submitGameOverContact(data) {
    const endPoint = `/marketing/game-over`
    const reponse = await Repository.post(`${basePostUrl}${endPoint}`, data)
      .then(response => {
        if (response.data?.success) {
          return response.data?.data?.message
        } else {
          return response.data?.data?.errorMessage
        }
      })
      .catch(error => ({ error: JSON.stringify(error) }))
    return reponse
  }

  async submitMainHeroBannerContact(data) {
    const endPoint = `/marketing/main-hero-banner`
    const reponse = await Repository.post(`${basePostUrl}${endPoint}`, data)
      .then(response => {
        if (response.data?.success) {
          return response.data?.data?.message
        } else {
          return response.data?.data?.errorMessage
        }
      })
      .catch(error => ({ error: JSON.stringify(error) }))
    return reponse
  }

  async submitMainFooterContact(data) {
    const endPoint = `/marketing/main-footer`
    const reponse = await Repository.post(`${basePostUrl}${endPoint}`, data)
      .then(response => {
        if (response.data?.success) {
          return response.data?.data?.message
        } else {
          return false
        }
      })
      .catch(error => ({ error: JSON.stringify(error) }))
    return reponse
  }
}

export default new PostRepository()
