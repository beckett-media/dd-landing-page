import React from "react"
import { Link } from "gatsby"
import LazyLoad from "react-lazyload"
import moment from "moment"
import { Buffer } from "buffer"
import DefaultBannerPhoto from "../../images/blog-press.png"

const getImg = imageBlob => {
  if (!imageBlob) return
  return Buffer.from(imageBlob.data, "base64")
}

const PostGrid = ({ post, pageName }) => {
  let imageThumbnailView, categoriesView
  let baseUrlPressOrBlog = pageName === "blog" ? "/blog" : "/press"
  if (post) {
    if (post.thumbnail !== null) {
      imageThumbnailView = (
        <LazyLoad>
          <Link to={`${baseUrlPressOrBlog}/${post.id}`}>
            <div className="ps-product--horizontal">
              <div className="ps-product__thumbnail">
                <img
                  src={
                    post.bannerImage
                      ? getImg(post.bannerImage)
                      : DefaultBannerPhoto
                  }
                  alt="img"
                />
              </div>
            </div>
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
            <a>{item.title}</a>
          </a>
        ))
      } else {
        categoriesView = (
          <a href={pageName === "blog" ? "/blog" : "/press"}>
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
        <Link to={`${baseUrlPressOrBlog}/${post.id}`}>
          <p className=""></p>
        </Link>
        {imageThumbnailView}
      </div>
      <div className="">
        {/* <div className="">{categoriesView}</div> */}
        <Link to={`${baseUrlPressOrBlog}/${post.id}`}>
          <p className="mt-2">
            {post.title.length > 60
              ? post.title.slice(0, 60) + "..."
              : post.title}
          </p>
        </Link>
        <p>
          {moment(post.created_at).format("ll")} by
          <a href={pageName === "blog" ? "/blog" : "/press"}>
            <a href="https://duedilly.co"> duedilly</a>
          </a>
        </p>
      </div>
    </article>
  )
}

export default PostGrid
