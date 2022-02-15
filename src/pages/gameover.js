import * as React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"

import Seo from "../components/seo"
import LandingPageBanner from "../components/LandingPageBanner"
import GradientLine from "../components/GradientLine"

const Home = () => {
  return (
    <>
      <Seo
        title="Get Paid to Build Your Personal Collection | Due Dilly&trade;"
        description=" Turn your sports cards into NFT's with our revolutionary process. Vault and Collateralize your best cards! Click HERE to Learn More!"
      />
      <LandingPageBanner />
      <GradientLine />
    </>
  )
}

export default Home
