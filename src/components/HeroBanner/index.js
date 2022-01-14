import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import HeroBg from "../../images/svgs/HeroBg.svg"
import LowerArrow from "../../images/svgs/LowerArrow.svg"
import GradientLine from "../GradientLine"

import "./styles.css"
import EmailNameForm from "../EngageBayForm/emailNameForm"

const HeroBanner = () => (
  <div className="hero-container py-2">
    <HeroBg className="hero-bcg-top" />
    <HeroBg className="hero-bcg" />
    <div className="due-dilly-clockwise-wrapper">
      <span className="due-dilly-clockwise pti-font">DUE DILLY</span>
    </div>
    <div className="container-md">
      <div className="row g-0 py-5 d-flex align-items-center">
        <div
          className="col-12 col-md-5"
          style={{
            zIndex: "999",
          }}
        >
          <div className="position-relative d-inline-block">
            <h2 className="pti-font text-white">TECH FOR THE HOBBY</h2>
          </div>
          <p className="text-white shapiro-font">
            We’ve created disruptive tools to help you find and sell raw cards
            faster.
          </p>
          <EmailNameForm />
        </div>
        <div className="col-12 col-md-7 pt-3 pt-md-0 hero-banner-img-container position-relative">
          <LowerArrow className="hero-banner-arrow" />
          {/* <StaticImage
            src="../../images/hero.png"
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            imgStyle={{
              height: "100%",
              objectFit: "contain",
            }}
          /> */}
          <div style={{ padding: "65% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/660405176?h=5cb120e354&autoplay=1&loop=1&autopause=0&muted=1"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              title="DUE DILLY NFTs"
            />
          </div>
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
