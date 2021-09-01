import * as React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"

import Seo from "../components/seo"
import LandingPageBanner from "../components/LandingPageBanner"
import GradientLine from "../components/GradientLine"

const Home = () => {
  return (
    <>
      <Seo title="Due Dilly Landing Page" />
      <LandingPageBanner />
      <GradientLine />
    </>
  )
}

export default Home
