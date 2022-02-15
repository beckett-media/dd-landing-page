import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import StarDotted from "../../images/svgs/StarDotted.svg"
import ProtectionIcon from "../../images/svgs/ProtectionIcon.svg"

import "./styles.css"
import { CONFIG } from "../../constants/Config"
import StoreHorizontal from "../StoreHorizontol"

const MarketPlaceStores = ({ authKey, marketStores }) => {
  return (
    <div
      id="market-place"
      className="market-place-container py-5 position-relative"
    >
      <StaticImage
        className="d-none d-sm-block"
        src="../../images/globe-bg.png"
        quality={50}
        formats={["AUTO", "WEBP", "AVIF"]}
        style={{
          width: 200,
          height: 200,
          position: "absolute",
          right: -50,
          top: "7rem",
          transform: "rotate(180deg)",
        }}
        imgStyle={{
          height: "100%",
          objectFit: "100%",
        }}
      />
      <StaticImage
        src="../../images/globe-bg.png"
        quality={50}
        formats={["AUTO", "WEBP", "AVIF"]}
        style={{
          width: 200,
          height: 200,
          position: "absolute",
          left: -50,
          bottom: "10rem",
        }}
        imgStyle={{
          height: "100%",
          objectFit: "100%",
        }}
      />

      <div className="market-place-gray-container py-5" id="market-store">
        <div className="container-lg ">
          <div className="row g-0 d-flex align-items-center">
            <div className="col-12 position-relative py-5">
              <h3 className="market-place-list-title pti-font">
                LATEST STORES
              </h3>
              <div className="market-place-list-title-underline"></div>
              <Link
                className="card-text text-nowrap small font-weight-bold text-dark"
                to="https://marketplace.duedilly.co"
                target="_blank"
                style={{
                  position: "relative",
                  float: "right",
                }}
              >
                View All
              </Link>
              <div className="row pt-5">
                {marketStores.map(item => (
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <StoreHorizontal authKey={authKey} store={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketPlaceStores
