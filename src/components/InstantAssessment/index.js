import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import MobileAppBcg from "../../images/svgs/MobileAppBcg.svg"
import LowerArrow from "../../images/svgs/LowerArrow.svg"
import GooglePlayLogo from "../../images/svgs/GooglePlayLogo.svg"
import AppStoreLogo from "../../images/svgs/AppStoreLogo.svg"

import "./styles.css"
import { Link } from "gatsby"

const InstantAssessment = () => (
  <div id="mobile" className="inst-asst-container py-5 position-relative">
    <div className="container-md">
      <div className="row g-0 d-flex align-items-center">
        <div className="col-12 col-md-6 inst-asst-img-container">
          <MobileAppBcg className="mobile-app-bcg" />
          <StaticImage
            src="../../images/mobile-app.png"
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            imgStyle={{
              padding: "3rem",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="col-12 col-md-6 inst-asst-text-container position-relative">
          <LowerArrow className="upper-arrow" />
          <div className="position-relative d-inline-block">
            <h2 className="pti-font text-white">GET A PRE-GRADE</h2>
          </div>
          <p className="text-white font-shapiro">
            Use our advanced tech to assess the quality of edges, corners,
            centering and surface. We’ll then share a grading comp that shows
            what your raw card could be graded for if sent to PSA, BGS or SGC.
          </p>
          <div className="d-flex pb-5 pb-sm-0">
            <Link
              target="_blank"
              to="https://apps.apple.com/us/app/due-dilly/id1568882229"
            >
              <AppStoreLogo className="app-store" />
            </Link>
            <Link
              target="_blank"
              to="https://play.google.com/store/apps/details?id=com.duedilly.cardassessor&hl=en_US&gl=US"
            >
              <GooglePlayLogo className="play-store" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    <StaticImage
      src="../../images/globe-bg.png"
      quality={50}
      formats={["AUTO", "WEBP", "AVIF"]}
      style={{
        width: 100,
        height: 100,
        position: "absolute",
        right: -50,
        bottom: "5rem",
        opacity: 0.2,
      }}
      imgStyle={{
        height: "100%",
        objectFit: "100%",
      }}
    />
  </div>
)

export default InstantAssessment
