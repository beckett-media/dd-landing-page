import React from "react"
import { Spin } from "antd"
import { Buffer } from "buffer"
import moment from "moment"
import "./index.css"
import DefaultBannerPhoto from "../../images/blog-press.png"

const getImg = imageBlob => {
  if (!imageBlob) return
  return Buffer.from(imageBlob.data, "base64")
}

const PostDetailBackground = ({ post, isLoading }) => {
  if (isLoading)
    return (
      <>
        <Spin
          size="large"
          style={{
            marginTop: "200px",
          }}
        />
        Loading
      </>
    )
  return (
    <div className="ps-post--detail ps-post--parallax">
      <div
        className="ps-post__header bg--parallax"
        style={{
          backgroundImage: `url(${
            post.bannerImage ? getImg(post.bannerImage) : DefaultBannerPhoto
          })`,
          // filter: "blur(8px)",
          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h1
            style={{
              backgroundColor: "#70E7D7",
            }}
          >
            {post.title}
          </h1>
          <p>
            <span
              style={{
                backgroundColor: "#70E7D7",
                padding: "2px 5px",
              }}
            >
              {moment(post.created_at).format("ll")} by
              <a href="https://duedilly.co"> duedilly</a>
            </span>
          </p>
        </div>
      </div>
      <div className="container">
        <div
          className="ps-post__content"
          dangerouslySetInnerHTML={{ __html: post.data }}
        ></div>
        <div className="ps-post__footer">
          <div className="ps-post__social">
            <a className="facebook" href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a className="twitter" href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a className="google" href="#">
              <i className="fa fa-google-plus"></i>
            </a>
            <a className="linkedin" href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a className="pinterest" href="#">
              <i className="fa fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetailBackground
