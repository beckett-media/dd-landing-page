import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SideRibbon from "../../images/svgs/SideRibbon.svg"
import LowerArrow from "../../images/svgs/LowerArrow.svg"

import "./styles.css"

const RealTimeEval = () => (
  <div className="real-time-container py-5">
    <div className="container-md">
      <div className="row g-0 d-flex align-items-center">
        <div className="col-12 col-md-6 real-eval-container position-relative">
          <div className="position-relative d-inline-block">
            <SideRibbon className="side-ribbon" />
            <h1>REAL-TIME EVALUATION</h1>
          </div>
          <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac libero feugiat, placerat metus sit amet, laoreet nibh. Vivamus a arcu non mauris blandit lobortis. Duis vitae mattis lectus.
          </p>
          <LowerArrow   />
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
