import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import MobileAppBcg from "../../images/svgs/MobileAppBcg.svg"
import LowerArrow from "../../images/svgs/LowerArrow.svg"
import GooglePlayLogo from "../../images/svgs/GooglePlayLogo.svg"
import AppStoreLogo from "../../images/svgs/AppStoreLogo.svg"

import "./styles.css"

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
            <h1>INSTANT ASSESSMENT</h1>
          </div>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
            libero feugiat, placerat metus sit amet, laoreet nibh. Vivamus a
            arcu non mauris blandit lobortis. Duis vitae mattis lectus.
          </p>
          <div className="d-flex">
            <AppStoreLogo className="app-store" />
            <GooglePlayLogo className="play-store" />
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
