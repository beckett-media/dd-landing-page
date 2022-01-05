import React, { useState, useEffect } from "react"
// import a from 'next/a';
import PostRepository from "./PostRepository"
import PostGrid from "./PostGrid"
import CustomPagination from "./CustomPagination"
import "./index.css"

const BlogItemsGridView = ({ columns, pageName }) => {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState(null)

  async function getPosts() {
    let APIPosts = await PostRepository.getPosts(pageName)
    if (APIPosts) {
      setTimeout(function () {
        setLoading(false)
      }, 200)
      setPosts(APIPosts)
      return APIPosts
    } else {
      setPosts(null)
      return null
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  console.log(posts)
  let postItemsView
  if (!loading && posts) {
    postItemsView = posts.map(item => {
      if (columns === 4) {
        return (
          <div className=" col-md-4 col-sm-6" key={item._id}>
            <PostGrid post={item} pageName={pageName} />
          </div>
        )
      } else if (columns === 4) {
        return (
          <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
            <PostGrid post={item} pageName={pageName} />
          </div>
        )
      } else {
        return (
          <div className="col-md-6" key={item.id}>
            <PostGrid post={item} pageName={pageName} />
          </div>
        )
      }
    })
  }

  return (
    <div className="ps-blog">
      <div className="ps-blog__content">
        <div className="row">
          {postItemsView}
        </div>
        <CustomPagination />
      </div>
    </div>
  )
}

export default BlogItemsGridView
