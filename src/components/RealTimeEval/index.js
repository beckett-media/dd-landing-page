import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SideRibbon from "../../images/svgs/SideRibbon.svg"
import LowerArrow from "../../images/svgs/LowerArrow.svg"
import RibbonBg from "../../images/svgs/RibbonBg.svg"
import Chrome from "../../images/svgs/Chrome.svg"

import "./styles.css"
import { Link } from "gatsby"

const RealTimeEval = () => (
  <div id="extension" className="real-time-container py-5 position-relative">
    <RibbonBg className="ribbon-bg" />
    <div className="container-md">
      <div className="row g-0 d-flex align-items-center">
        <div className="col-12 col-md-6 real-eval-container position-relative">
          <SideRibbon className="side-ribbon" />
          <div className="position-relative d-inline-block">
            <h2 className="text-white pti-font">
              REAL-TIME
              <br />
              EVALUATION
            </h2>
          </div>
          <p className="text-white font-shapiro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
            libero feugiat, placerat metus sit amet, laoreet nibh. Vivamus a
            arcu non mauris blandit lobortis. Duis vitae mattis lectus.
          </p>
          <Link
            target="_blank"
            to="https://chrome.google.com/webstore/detail/due-dilly/abbkdcinklakngmpghnhjkdjgnabbgek"
          >
            <div className="chrome-button">
              download chrome extension
              <Chrome height="30" />
            </div>
          </Link>

          <LowerArrow className="lower-arrow" />
        </div>
        <div className="col-12 col-md-6">
          <StaticImage
            src="../../images/chrome-ext.png"
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            imgStyle={{
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  </div>
)

export default RealTimeEval
