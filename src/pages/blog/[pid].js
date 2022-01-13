import React, { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import PostComments from "../../components/post/PostComments"
import PostDetailBackground from "../../components/post/PostDetailBackground"
import PostRepository from "../../repositories/PostRepository"

const Post = props => {
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      try {
        const post = await PostRepository.getPostDetail(props.pid)
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
