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
import SimpleCrypto from "simple-crypto-js"
var simpleCrypto = new SimpleCrypto("myTotalySecretKey")

const Home = () => {
  const [authKey, setAuthKey] = React.useState()

  React.useEffect(() => {
    let data = JSON.stringify({
      xAuthToken: localStorage.getItem(`x-auth-token`),
      refreshToken: localStorage.getItem(`x-refresh-token`),
    })
    var encryptedData = simpleCrypto.encrypt(data)
    setAuthKey(encryptedData)
  }, [])

  return (
    <Layout authKey={authKey}>
      <Seo title="Due Dilly" />
      <HeroBanner />
      <GradientLine />
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
