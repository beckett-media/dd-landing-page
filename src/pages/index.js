import * as React from "react"
import { useSelector } from "react-redux"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import UpperFooter from "../components/UpperFooter"
import CardFAC from "../components/CardFAC"
import GradientLine from "../components/GradientLine"
import RealTimeEval from "../components/RealTimeEval"
import InstantAssessment from "../components/InstantAssessment"
import LandingPageBannerLink from "../components/LandingPageBannerLink"
import MarketPlace from "../components/MarketPlace"
import SimpleCrypto from "simple-crypto-js"
var simpleCrypto = new SimpleCrypto("myTotalySecretKey")

const Home = () => {
  const [authKey, setAuthKey] = React.useState()
  const user = useSelector(({ auth }) => auth)
  React.useEffect(() => {
    if (user?.id) {
      let data = JSON.stringify({
        xAuthToken: localStorage.getItem(`x-auth-token`),
        refreshToken: localStorage.getItem(`x-refresh-token`),
      })
      var encryptedData = simpleCrypto.encrypt(data)
      setAuthKey(encryptedData)
    }
  }, [user])

  return (
    <Layout authKey={authKey}>
      <Seo title="Due Dilly" />
      <HeroBanner />
      <GradientLine />
      <LandingPageBannerLink />
      <MarketPlace authKey={authKey} />
      <InstantAssessment />
      <RealTimeEval />
      <GradientLine />
      <CardFAC />
      <UpperFooter />
    </Layout>
  )
}

export default Home
