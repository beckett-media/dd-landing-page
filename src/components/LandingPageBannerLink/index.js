import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import LowerArrow from "../../images/svgs/LowerArrow.svg"

import "./styles.css"
import { Link } from "gatsby"

const InstantAssessment = () => (
  <div id="mobile" className="inst-asst-container py-5 position-relative">
    <div className="container-md">
      <div className="row g-0 d-flex align-items-center">
        <div className="col-12 col-md-8 inst-asst-img-container">
          <LowerArrow className="upper-arrow" />
          <div className="position-relative d-inline-block">
            <h2 className="pti-font text-white">
              JOIN OUR FIRST SERIES NFT DROP!
            </h2>
          </div>
          <p className="text-white font-shapiro">
            Use your physical cards for assest-backed NFTs
          </p>
        </div>
        <div className="col-12 col-md-4 inst-asst-text-container position-relative p-0 pb-4">
          <div className="d-flex pb-5 pb-sm-0">
            <div
              class="gradient-link px-3 py-4 nav-link text-center"
              style={{ width: "100%" }}
            >
              <Link
                to="/gameover"
                style={{
                  color: "#fff",
                  fontSize: "1.1rem",
                }}
              >
                CLICK TO GET DROP INFO
              </Link>
            </div>
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
