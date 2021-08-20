import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import HeroBg from "../../images/svgs/HeroBg.svg"
import LowerArrow from "../../images/svgs/LowerArrow.svg"
import GradientLine from "../GradientLine"

import "./styles.css"

const HeroBanner = () => (
  <div className="hero-container py-2">
    <HeroBg className="hero-bcg-top" />
    <HeroBg className="hero-bcg" />
    <div className="due-dilly-clockwise-wrapper">
      <span className="due-dilly-clockwise pti-font">DUE DILLY</span>
    </div>
    <div className="container-md">
      <div className="row g-0 py-5 d-flex align-items-center">
        <div className="col-12 col-md-5">
          <div className="position-relative d-inline-block">
            <h2 className="pti-font text-white">INSTANT CARD ASSESSMENT</h2>
          </div>
          <p className="text-white shapiro-font">
            Buy, sell, and collect Due Dilly assessed cards.
          </p>
          <div className="form-group">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                <input
                  type="text"
                  className="form-control light"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                <input
                  className="form-control light"
                  placeholder="Your email address"
                  type="email"
                />
              </div>
            </div>
          </div>
          <div
            class="gradient-link px-3 py-3 nav-link text-center"
            style={{ width: "auto" }}
          >
            SIGN UP FOR EARLY ACCESS
          </div>
        </div>
        <div className="col-12 col-md-7 pt-3 pt-md-0 hero-banner-img-container position-relative">
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
