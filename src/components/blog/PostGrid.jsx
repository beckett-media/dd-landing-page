import React from "react"
// import a from 'next/a';
import { basePostUrl } from "./Repository"
import LazyLoad from "react-lazyload"
import moment from "moment"


const PostGrid = ({ post }) => {
  let imageThumbnailView, categoriesView
  if (post) {
    if (post.thumbnail !== null) {
      imageThumbnailView = (
        <LazyLoad>
          <img src={`${basePostUrl}${post.thumbnail.url}`} alt="img" />
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
          <a href="/blog">
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
        <a href="/post/[pid]" as={`/post/${post.id}`}>
          <a className=""></a>
        </a>
        {imageThumbnailView}
      </div>
      <div className="">
        <div className="">{categoriesView}</div>
        <a href="/post/[pid]" as={`/post/${post.id}`}>
          <a className="">{post.name}</a>
        </a>
        <p>
          {moment(post.created_at).format("ll")} by
          <a href="/blog">
            <a href="#"> drfurion</a>
          </a>
        </p>
      </div>
    </article>
  )
}

export default PostGrid
