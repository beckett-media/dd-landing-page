import React, { useState, useEffect } from "react"
// import a from 'next/a';
import PostRepository from "./PostRepository"
import PostGrid from "./PostGrid"
import CustomPagination from "./CustomPagination"

const BlogItemsGridView = ({ collectionSlug, columns }) => {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState(null)

  async function getPosts() {
    let queries, APIPosts
    if (collectionSlug !== undefined) {
      queries = {
        slug_eq: collectionSlug,
      }
      APIPosts = await PostRepository.getPostsByCollectionSlug(queries)
    } else {
      queries = {
        _limit: 6,
      }
      APIPosts = await PostRepository.getPosts(queries)
    }
    console.log(APIPosts)

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

  let postItemsView
  if (!loading && posts) {
    postItemsView = posts.map(item => {
      if (columns === 4) {
        return (
          <div className=" col-md-4 col-sm-6" key={item.id}>
            <PostGrid post={item} />
          </div>
        )
      } else if (columns === 4) {
        return (
          <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
            <PostGrid post={item} />
          </div>
        )
      } else {
        return (
          <div className="col-md-6" key={item.id}>
            <PostGrid post={item} />
          </div>
        )
      }
    })
  }

  return (
    <div className="ps-blog">
      <div className="ps-blog__header">
        <ul className="ps-list--blog-as">
          <li className="active">
            <a href="/blog">
              <a>All</a>
            </a>
          </li>
          <li>
            <a href="/blog">
              <a>Life Style</a>
            </a>
          </li>
          <li>
            <a href="/blog">
              <a>Technology</a>
            </a>
          </li>
          <li>
            <a href="/blog">
              <a>Entertaiment</a>
            </a>
          </li>
          <li>
            <a href="/blog">
              <a>Business</a>
            </a>
          </li>
          <li>
            <a href="/blog">
              <a>Others</a>
            </a>
          </li>
          <li>
            <a href="/blog">
              <a>Fashion</a>
            </a>
          </li>
        </ul>
      </div>
      <div className="ps-blog__content">
        <div className="row">
          {postItemsView}
          {/*  {posts.length > 0 &&
                        posts.map((post) => {
                            return (
                                <div
                                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
                                    key={post.id}>
                                    <PostGrid data={post} />
                                </div>
                            );
                        })}*/}
        </div>
        <CustomPagination />
      </div>
    </div>
  )
}

export default BlogItemsGridView
