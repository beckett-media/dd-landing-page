import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Share from "../../images/svgs/Share.svg"
import MarketValueBox from "../../images/svgs/MarketValueBox.svg"

import "./styles.css"


const ImageGallery = () => (
  <div className="">
    <StaticImage
      src="../../images/fac-hero.png"
      quality={90}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
    />
    <div className="d-flex my-4">
      <div className="mr-4">
        <StaticImage
          src="../../images/fac-hero.png"
          quality={90}
          style={{
            width: "100px",
            height: "100px",
          }}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
        />
        <div className="selected-image-mark"></div>
      </div>
      <div className="mr-4">
        <StaticImage
          src="../../images/fac-hero.png"
          quality={90}
          style={{
            width: "100px",
            height: "100px",
          }}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
        />
      </div>
    </div>
  </div>
)

const FacBanner = () => (
  <div className="fac-container py-5">
    <div className="due-dilly-clockwise-wrapper">
      <span className="due-dilly-clockwise">DUE DILLY</span>
    </div>
    <div className="container-md">
      <div className="d-flex w-100 justify-content-between">
        <div className="">
          <p className="h1 m-0 text-white font-weight-bolder">
            DUE DILLY CARD FAC
          </p>
          <p className="text-white m-0">FACTUAL ASSESSMENT OF CARD</p>
        </div>
        <Share fill="#fff" width="40" />
      </div>
      <div className="row g-0 py-5 d-flex">
        <div className="col-12 col-md-7 fac-banner-img-container position-relative">
          <ImageGallery />
        </div>
        <div className="col-12 col-md-5">
          <p className="h1 m-0 text-uppercase font-weight-bolder text-white">
            Derek Jeter
          </p>
          <p className="text-white h4 my-3">
            Career Retrospective Topps NOW® Chrome Card 15B
          </p>
          <p className="text-white h4">2021</p>
          <p className="text-white">Autographed Card</p>
          <MarketValueBox width="100%" />
        </div>
      </div>
    </div>
  </div>
)

export default FacBanner
