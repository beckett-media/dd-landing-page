import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ReactModal from "react-modal"
import Auth from "../Auth"

import Header from "../Header"
import Footer from "../Footer"

import "./styles.css"

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
  overlay: { zIndex: 999999 },
}

const Layout = ({ children, authKey }) => {
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
    <>
      <Header
        authKey={authKey}
        setModal={val => setModal(val)}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <main className="layout-body">{children}</main>
      <Footer />
      <ReactModal
        isOpen={Boolean(modal)}
        onRequestClose={() => {
          setModal("")
        }}
        style={customStyles}
      >
        <Auth close={() => setModal("")} type={modal} />
      </ReactModal>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
