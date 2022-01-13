import React, { useState, useEffect } from "react"
import ReactPaginate from "react-paginate"
// import a from 'next/a';
import PostRepository from "../../repositories/PostRepository"
import PostGrid from "./PostGrid"
import "./index.css"

const BlogItemsGridView = ({ columns, pageName }) => {
  const [posts, setPosts] = useState([])
  const [totalPosts, setTotalPosts] = useState(0)

  async function getPosts(page = 1, perPage = 9) {
    let { APIPosts, totalDocs } = await PostRepository.getPosts({
      pageName,
      page,
      perPage,
    })
    if (APIPosts) {
      setPosts(APIPosts)
      setTotalPosts(totalDocs)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  function returnItems(currentItems) {
    return currentItems.map(item => {
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

  const handlePageClick = res => {
    getPosts(res.selected + 1)
  }

  return (
    <div className="ps-blog">
      <div className="ps-blog__content">
        <div className="row">{returnItems(posts)}</div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalPosts / 9}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          breakClassName={"break-me"}
        />
      </div>
    </div>
  )
}

export default BlogItemsGridView
