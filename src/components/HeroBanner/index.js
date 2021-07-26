import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import HeroBg from "../../images/svgs/HeroBg.svg"
import LowerArrow from "../../images/svgs/LowerArrow.svg"
import GradientLine from "../GradientLine"

import "./styles.css"

const HeroBanner = () => (
  <div className="hero-container py-5">
    <HeroBg className="hero-bcg-top" />
    <HeroBg className="hero-bcg" />
    <div className="due-dilly-clockwise-wrapper">
      <span className="due-dilly-clockwise">DUE DILLY</span>
    </div>
    <div className="container-md">
      <div className="row g-0 py-5 d-flex align-items-center">
        <div className="col-12 col-md-5">
          <div className="position-relative d-inline-block">
            <h1>INSTANT CARD ASSESSMENT</h1>
          </div>
          <p className="text-white">
            Buy, sell, and collect Due Dilly assessed cards.
          </p>
          <GradientLine className="gradient-line hero-gradient-line" />
        </div>
        <div className="col-12 col-md-7 hero-banner-img-container position-relative">
          <LowerArrow className="hero-banner-arrow" />
          <StaticImage
            src="../../images/hero.png"
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
    <StaticImage
      src="../../images/globe-bg.png"
      quality={50}
      formats={["AUTO", "WEBP", "AVIF"]}
      style={{
        width: 200,
        height: 200,
        position: "absolute",
        bottom: -50,
        left: "5rem",
        opacity: 0.2,
      }}
      imgStyle={{
        height: "100%",
        objectFit: "100%",
      }}
    />
  </div>
)

export default HeroBanner
