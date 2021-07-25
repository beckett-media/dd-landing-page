import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import UpperFooter from "../components/UpperFooter"
import CardFAC from "../components/CardFAC"
import GradientLine from "../components/GradientLine"
import RealTimeEval from "../components/RealTimeEval"
import InstantAssessment from "../components/InstantAssessment"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroBanner />
    <GradientLine />
    {/* 
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
    <InstantAssessment />
    <RealTimeEval />
    <GradientLine />
    <CardFAC />
    <UpperFooter />
  </Layout>
)

export default IndexPage
