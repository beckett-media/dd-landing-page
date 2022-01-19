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
    <RibbonBg className="ribbon-bg d-sm-none d-md-block" />
    <div className="container-md">
      <div className="row g-0 d-flex align-items-center">
        <div className="col-12 col-md-6 real-eval-container position-relative">
          <SideRibbon className="side-ribbon" />
          <div className="position-relative d-inline-block">
            <h2 className="text-white pti-font">DISCOVERY TOOL</h2>
          </div>
          <p className="text-white font-shapiro">
            Use our chrome extension to find undervalued raw cards based on
            real-time pricing and quality assessments when buying on 3rd party
            marketplaces like eBay, StockX and FB marketplac
          </p>
          {/* just make div to Link when extension is back and add target="_blank" to="#" */}
          <div>
            <div className="chrome-button">
              coming soon
              <Chrome height="30" />
            </div>
          </div>

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
