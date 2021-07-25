import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactModal from "react-modal"

import Layout from "../components/Layout"
import Header from "../components/Header"
import Seo from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import UpperFooter from "../components/UpperFooter"
import CardFAC from "../components/CardFAC"
import GradientLine from "../components/GradientLine"
import RealTimeEval from "../components/RealTimeEval"
import InstantAssessment from "../components/InstantAssessment"
import Auth from "../components/Auth"

ReactModal.setAppElement("#___gatsby")

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {zIndex: 999999}
}

const Home = () => {
  const [modal, setModal] = React.useState("")
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Home" />
      <Header
        setModal={(val) => setModal(val)}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <HeroBanner />
      <GradientLine />
      <InstantAssessment />
      <RealTimeEval />
      <GradientLine />
      <CardFAC />
      <UpperFooter />
      <ReactModal
        isOpen={modal}
        onRequestClose={() => {
          setModal("")
        }}
        style={customStyles}
      >
        <Auth type={modal} />
      </ReactModal>
    </Layout>
  )
}

export default Home
