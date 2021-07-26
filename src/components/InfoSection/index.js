import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const InfoSection = () => (
  <div style={{ background: "#121634" }}>
    <div className="container-md py-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <p className="text-white h3 fond-weight-bolder"><strong>SELLER</strong> INFO</p>
          <div className="white-underline"></div>
          <div className="d-flex justify-content-between">
            <StaticImage
              src="../../images/seller-info.png"
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              imgStyle={{
                width: 479,
                height: 350,
              }}
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <p className="text-white h3 fond-weight-bolder"><strong>PRICING</strong> TREND</p>
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
