import React, { useState, useEffect } from "react"
import Layout from "../../components/Layout"
import PostDetailBackground from "../../components/post/PostDetailBackground"
import PostRepository from "../../repositories/PostRepository"

const Post = props => {
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      try {
        const post = await PostRepository.getPostDetail(
          props.location.href.substring(
            props.location.href.indexOf("/press/") + "/press/".length
          )
        )
        setPost(post)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    if (props.pid) {
      fetchPost()
    }
  }, [props.pid])
  return (
    <Layout>
      <PostDetailBackground post={post} isLoading={isLoading} />
      {/* <PostComments/> */}
    </Layout>
  )
}
export default Post
