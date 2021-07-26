import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import "./styles.css"

const InfoSection = ({ image }) => (
  <div style={{ background: "#121634" }}>
    <div className="container-md py-5">
      <div className="row  align-items-stretch">
        <div className="col-12 col-md-6 h-100">
          <p className="text-white h3 fond-weight-bolder">
            <strong>SELLER</strong> INFO
          </p>
          <div className="white-underline"></div>
          <div className="d-flex row m-0 p-3 justify-content-between max-val-box">
            <div className="col-12 align-items-center justify-content-center d-flex py-2">
              <img src={image} className="info-avatar-image"></img>
              <div className="px-2">
                <p className="text-white m-0 h4 font-weight-bold">John</p>
                <p className="text-white m-0 font-weight-bold">@johndoe110</p>
              </div>
            </div>
            <div className="col-12 align-items-center">
              <p className="text-white text-center m-0 py-2">ADDITIONAL CARD NOTES:</p>
              <p className="text-white text-center m-0">Card seller is OPEN to all offers.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <p className="text-white h3 fond-weight-bolder">
            <strong>PRICING</strong> TREND
          </p>
          <div className="white-underline"></div>
          <div className="d-flex justify-content-between">
            <StaticImage
              src="../../images/pricing-trend.png"
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              imgStyle={{
                width: 549.5,
                height: 350,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default InfoSection
