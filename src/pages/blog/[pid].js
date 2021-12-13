import React from "react"
import Layout from "../../components/Layout"
import PostComments from "../../components/post/PostComments"
import PostDetailBackground from "../../components/post/PostDetailBackground"

const Post = () => {
  return (
    <Layout>
      <PostDetailBackground />
      <PostComments/>
    </Layout>
  )
}
export default Post
