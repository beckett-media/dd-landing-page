import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useSelector } from "react-redux"
import StarDotted from "../../images/svgs/StarDotted.svg"
import ProtectionIcon from "../../images/svgs/ProtectionIcon.svg"

import "./styles.css"

const MarketCard = ({
  // image,
  // avatar,
  link,
  description,
  price,
  status,
  time,
}) => {
  const avatarUrl =
    "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=140&w=400"
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="p-3 card">
        <div className="d-flex">
          <StaticImage
            className="card-image-wrapper"
            imgClassName="card-image"
            src={avatarUrl}
            alt={link}
          />
          <div className="px-3">
            <div className="d-flex align-items-center">
              <StaticImage
                className="avatar-image"
                src={avatarUrl}
                alt={link}
              />
              <p className="card-text text-nowrap font-weight-bold">{link}</p>
            </div>
            <p className="small py-2">{description}</p>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-12 col-sm-6 col-md-7 col-lg-6 col-xl-5 d-flex align-items-center">
            <Link className="card-text text-nowrap small text-dark">
              <ProtectionIcon style={{ marginRight: 5 }} />
              View Card FAC
            </Link>
          </div>
          <div className="col border-right ">{price}</div>
          <div className="col">
            <p
              className="m-0"
              style={{
                fontSize: "0.875em",
              }}
            >
              {status}
            </p>
            <p className="small">{time}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const MarketPlace = () => {
  const marketCards = useSelector(({ common }) => common?.marketCards)
  return (
    <div
      id="market-place"
      className="market-place-container py-5 position-relative"
    >
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
      <div className="container-md position-relative py-5">
        <StarDotted className="star-dotted-top" />
        <h1 className="market-place-title text-center">
          EXPLORE THE MARKETPLACE
        </h1>
      </div>
      <div className="market-place-gray-container py-5">
        <div className="container-md ">
          <div className="row g-0 d-flex align-items-center">
            <div className="col-12 position-relative py-5">
              <h3 className="market-place-list-title">LATEST LISTINGS</h3>
              <div className="market-place-list-title-underline"></div>
              <div className="row pt-5">
                {marketCards.map(item => (
                  <MarketCard {...item} />
                ))}
              </div>
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
          right: -50,
          top: "7rem",
          transform: "rotate(180deg)",
        }}
        imgStyle={{
          height: "100%",
          objectFit: "100%",
        }}
      />
    </div>
  )
}

export default MarketPlace
