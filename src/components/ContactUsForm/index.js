import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import HeroBg from "../../images/svgs/HeroBg.svg"
import LowerArrow from "../../images/svgs/LowerArrow.svg"
import { Link } from "gatsby"
import "./styles.css"
import ContactUsInputForm from "./form"

const linkSection2 = [
  {
    key: "linkSection2_1",
    label: "Home",
    path: "/",
  },
  {
    key: "linkSection2_2",
    label: "Privacy",
    path: "/privacy-policy",
  },
]

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
          </div>
        </div>

        <div className="row g-0 py-5 d-flex align-items-center justify-content-center">
          <div className="col-12 col-md-7">
            <div
              className="position-relative d-inline-block justify-content-center"
              style={{
                width: "100%",
              }}
            >
              <h2
                className="pti-font text-white"
                style={{
                  textAlign: "center",
                }}
              >
                GET IN TOUCH WITH US
              </h2>
            </div>
            <p
              className="text-white shapiro-font"
              style={{
                textAlign: "center",
              }}
            >
              Got any question or feedback in mind?
              <br />
              Write to us in below form and we will get back to you!
            </p>

            <p
              className="text-white shapiro-font"
              style={{
                textAlign: "center",
              }}
            >
              Email:{" "}
              <a href="mailto:support@duedilly.co">
                Send us email at support@duedilly.co
              </a>
              <br />
              Visit us at: Houston, Texas 77070
            </p>
            <ContactUsInputForm />
            <ul className="nav justify-content-between justify-content-sm-center">
              {linkSection2.map(link => {
                return (
                  <li key={link.key} className="nav-item mb-0">
                    <Link
                      to={link.path}
                      className="nav-link px-2 py-2"
                      aria-current="page"
                      href="/"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <StaticImage
        src="../../images/globe-bg.png"
        quality={50}
        formats={["AUTO", "WEBP", "AVIF"]}
        style={{
          width: 150,
          height: 150,
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
