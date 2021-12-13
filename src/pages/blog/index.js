import React from "react"
import BreadCrumb2 from "../../components/blog/BreadCrumb2"
import BlogItemsGridView from "../../components/blog/BlogItemsGridView"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import "../../components/blog/index.css"

const BlogGridPage = () => {
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Blog",
      url: "/blog",
    },
  ]
  return (
    <>
      <Layout>
        <div className="container">
          <h1 className="ourPress">Our Blog</h1>
          <BreadCrumb2 breacrumb={breadCrumb} />

          <BlogItemsGridView columns={4} pageName="blog" />
        </div>
      </Layout>
    </>
  )
}

export default BlogGridPage
