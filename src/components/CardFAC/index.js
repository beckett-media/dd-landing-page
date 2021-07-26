import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import RibbonTitle from "../../images/svgs/RibbonTitle.svg"
import StarDotted from "../../images/svgs/StarDotted.svg"

import "./styles.css"

const CardFAC = () => (
  <div id="card-fac" className="card-fac-container py-5  position-relative">
    <StaticImage
      src="../../images/globe-bg.png"
      quality={50}
      formats={["AUTO", "WEBP", "AVIF"]}
      style={{
        width: 200,
        height: 200,
        position: "absolute",
        right: -50,
        bottom: "10rem",
        transform: "rotateY(180deg)",
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
        bottom: "5rem",
      }}
      imgStyle={{
        height: "100%",
        objectFit: "100%",
      }}
    />
    <div className="container-md">
      <div className="row g-0 d-flex align-items-center">
        <div className="col-12 col-md-6">
          <StaticImage
            src="../../images/card-fac.png"
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ height: 650 }}
            imgStyle={{
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="col-12 col-md-6 fac-text-container position-relative">
          <div className="position-relative d-inline-block">
            <RibbonTitle className="ribbon-title" />
            <h2>CARD FAC</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
            libero feugiat, placerat metus sit amet, laoreet nibh. Vivamus a
            arcu non mauris blandit lobortis. Duis vitae mattis lectus.
          </p>
          <StarDotted className="star-dotted" />
        </div>
      </div>
    </div>
  </div>
)

export default CardFAC
