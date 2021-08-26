import React, { useState } from "react"

import { StaticImage } from "gatsby-plugin-image"
import HeroBg from "../../images/svgs/HeroBg.svg"
import LowerArrow from "../../images/svgs/LowerArrow.svg"

import "./styles.css"
import Form from "../EngageBayForm/fullForm"

const LandingPageBanner = () => {
  return (
    <div className="hero-container py-2">
      <HeroBg className="hero-bcg-top" />
      <div className="due-dilly-clockwise-wrapper">
        <span className="due-dilly-clockwise pti-font">DUE DILLY</span>
      </div>
      <div className="container-md">
        <div className="row g-0 pt-5 d-flex align-items-center justify-content-center">
          <div className="col-12 col-md-7 pt-3 pt-md-0 hero-banner-img-container position-relative">
            <LowerArrow className="hero-banner-arrow" />
            <div style={{ padding: "65% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/591753392?h=a6b9f2d511&autoplay=1&loop=1&autopause=0&muted=1"
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

        <div className="row g-0 py-5 d-flex align-items-center justify-content-center">
          <div className="col-12 col-md-7">
            <div className="position-relative d-inline-block">
              <h2
                className="pti-font text-white"
                style={{
                  textAlign: "center",
                }}
              >
                TURN YOUR SPORTS CARDS INTO NFTs
              </h2>
            </div>
            <p
              className="text-white shapiro-font"
              style={{
                textAlign: "center",
              }}
            >
              The first 333 drop announcement date coming soon...be first to
              mint.
            </p>
            {/* <form className="form-group" onSubmit={onSubmit}>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                  <input
                    data-ebay_field="last_name"
                    data-ebay_add_as=""
                    id="last_name"
                    title=""
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                    class="form-control light"
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                  <input
                    data-ebay_field="last_name"
                    data-ebay_add_as=""
                    id="last_name"
                    title=""
                    name="last_name"
                    type="text"
                    required="true"
                    placeholder="Last Name"
                    class="form-control light"
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <input
                    data-ebay_field="email"
                    data-ebay_add_as=""
                    id="email"
                    title=""
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    class="form-control light"
                    required="true"
                  />
                </div>
              </div>
              <button
                class="gradient-link px-3 py-3 nav-link text-center"
                style={{ width: "100%" }}
                type="submit"
              >
                MINT THE FIRST SERIES
              </button>
            </form> */}
            <Form />
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
}

export default LandingPageBanner
