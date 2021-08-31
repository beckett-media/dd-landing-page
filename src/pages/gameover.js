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
      <Helmet>
        {/* <script src={withPrefix("adroll.js")} type="text/javascript" /> */}
        {/* <script src={withPrefix("form.js")} type="text/javascript" /> */}
      </Helmet>
      <LandingPageBanner />
      <GradientLine />
    </>
  )
}

export default Home
