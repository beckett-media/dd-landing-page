import * as React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import ContactUsForm from "../components/ContactUsForm"
import GradientLine from "../components/GradientLine"

const Home = () => {
  return (
    <Layout>
      <Seo title="Due Dilly Contact Us" />
      <ContactUsForm />
      <GradientLine />
    </Layout>
  )
}

export default Home
