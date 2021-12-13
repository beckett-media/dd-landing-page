import React from "react"
import { Link } from "gatsby"
import { basePostUrl } from "./Repository"
import LazyLoad from "react-lazyload"
import moment from "moment"

const PostGrid = ({ post }) => {
  let imageThumbnailView, categoriesView
  if (post) {
    if (post.thumbnail !== null) {
      imageThumbnailView = (
        <LazyLoad>
          <Link to={`/blogs/${post.id}`}>
            <img src={`${basePostUrl}${post.thumbnail.url}`} alt="img" />
          </Link>
        </LazyLoad>
      )
    }

    if (post.post_categories) {
      if (post.post_categories.length > 0) {
        categoriesView = post.post_categories.map(item => (
          <a
            href="/category/[slug]"
            as={`/categories/${item.slug}`}
            key={item.id}
          >
            <a>{item.name}</a>
          </a>
        ))
      } else {
        categoriesView = (
          <a href="/blogs">
            <a>Others</a>
          </a>
        )
      }
    }
  }
  return (
    <article className="">
      {" "}
      <div className="">
        <Link to={`/blogs/${post.id}`}>
          <p className=""></p>
        </Link>
        {imageThumbnailView}
      </div>
      <div className="">
        {/* <div className="">{categoriesView}</div> */}
        <Link to={`/blogs/${post.id}`}>
          <p className="mt-2">
            {post.name.length > 50
              ? post.name.slice(0, 50) + "........"
              : post.name}
          </p>
        </Link>
        <p>
          {moment(post.created_at).format("ll")} by
          <a href="/blog">
            <a href="#"> andrew</a>
          </a>
        </p>
      </div>
    </article>
  )
}

export default PostGrid
