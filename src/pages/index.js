import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import UpperFooter from "../components/UpperFooter"
import CardFAC from "../components/CardFAC"
import GradientLine from "../components/GradientLine"
import RealTimeEval from "../components/RealTimeEval"
import InstantAssessment from "../components/InstantAssessment"
import MarketPlace from "../components/MarketPlace"

const Home = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <HeroBanner />
      <GradientLine />
      <MarketPlace />
      <InstantAssessment />
      <RealTimeEval />
      <GradientLine />
      <CardFAC />
      <UpperFooter />
    </Layout>
  )
}

export default Home
