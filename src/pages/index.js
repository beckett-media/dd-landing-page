import * as React from "react"
import { useSelector } from "react-redux"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import useFetch from "use-http"

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
import { CONFIG } from "../constants/Config"
import MarketPlaceStores from "../components/MarketPlaceStores"

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

  const [marketCards, setMarketCards] = React.useState([])
  const [marketStores, setMarketStores] = React.useState([])
  const [metaData, setMetaData] = React.useState({})
  const { get: getListings, loading } = useFetch(
    CONFIG.base_url + "/marketplace",
    {
      cachePolicy: "no-cache",
      headers: { "x-app-token": CONFIG["x-app-token"] },
    }
  )
  const _getListings = async () => {
    let { data } = await getListings()
    let { newArrival, products, grades, newStores } = data
    setMetaData({ products, grades })
    setMarketCards(newArrival)
    setMarketStores(newStores)
  }

  React.useEffect(() => {
    _getListings()
  }, [])

  return (
    <Layout authKey={authKey}>
      <Seo
        title="Due Dilly&trade; | Revolutionizing How The World Buys and Sells Sports Cards"
        description="We have created a disruptive tool to help you sell your raw cards faster. Using Vision Ai, we are able to pre grade your cards in seconds! Click HERE for more Info!"
      />
      {/* <HeroBanner /> */}
      <InstantAssessment />

      <GradientLine />
      <LandingPageBannerLink />
      <MarketPlace
        authKey={authKey}
        marketCards={marketCards}
        metaData={metaData}
      />
      <MarketPlaceStores authKey={authKey} marketStores={marketStores} />
      <RealTimeEval />
      <GradientLine />
      <CardFAC />
      <UpperFooter />
    </Layout>
  )
}

export default Home
