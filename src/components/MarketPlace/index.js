import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import StarDotted from "../../images/svgs/StarDotted.svg"
import ProtectionIcon from "../../images/svgs/ProtectionIcon.svg"

import "./styles.css"
import { CONFIG } from "../../constants/Config"
import useFetch from "use-http"
import ProductHorizontal from "../ProductHorizontal"

const MarketCard = ({ images, avatar, seller, title, price, _id }) => {
  return (
    <div className="col-12 col-md-6 col-xl-4 py-2">
      <div className="p-3 card">
        <Link target="_blank" to={`${CONFIG.marketplace_url}/product/${_id}`}>
          <div className="d-flex">
            <img
              src={CONFIG.base_url + "/" + images[0]}
              className="card-image-wrapper"
            ></img>
            <div className="px-3">
              <div className={`d-flex align-items-center`}>
                <img
                  src={seller.avatar}
                  className={`avatar-image ${
                    !seller.avatar ? "bg-secondary" : ""
                  }`}
                ></img>

                <p className="card-text text-nowrap font-weight-bold">
                  {seller.fullName}
                </p>
              </div>
              <p className="small py-2 shapiro-font">{title}</p>
            </div>
          </div>
        </Link>
        <div className="row py-2">
          <div className="col-12 col-sm-6 col-md-7 col-lg-6 col-xl-5 d-flex align-items-center">
            <Link
              className="card-text text-nowrap small font-weight-bold text-dark"
              to="fac-report"
            >
              <ProtectionIcon style={{ marginRight: 5 }} />
              View Card FAC
            </Link>
          </div>
          <div className="col" style={{ textAlign: "right" }}>
            ${price.toFixed()}
          </div>
          {/* <div className="col">
            <p
              className="m-0 shapiro-font"
              style={{
                fontSize: "0.875em",
              }}
            >
              {status}
            </p>
            <p className="small shapiro-font">{time}</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

const MarketPlace = () => {
  const [marketCards, setMarketCards] = React.useState([])
  const [metaData, setMetaData] = React.useState({})
  const { get: getListings, loading } = useFetch(
    CONFIG.base_url + "/marketplace",
    {
      cachePolicy: "no-cache",
      headers: { "x-app-token": CONFIG["x-app-token"] },
    }
  )
  const _getListings = async () => {
    let { data } = await getListings()
    let { newArrival, products, grades } = data
    setMetaData({ products, grades })
    setMarketCards(newArrival)
  }
  React.useEffect(() => {
    _getListings()
  }, [])
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
          right: -50,
          top: "7rem",
          transform: "rotate(180deg)",
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
          bottom: "10rem",
        }}
        imgStyle={{
          height: "100%",
          objectFit: "100%",
        }}
      />
      <div className="container-lg position-relative py-5">
        <StarDotted className="star-dotted-top" />
        <h1 className="market-place-title text-center pti-font">
          EXPLORE THE MARKETPLACE
        </h1>
      </div>
      <div className="market-place-gray-container py-5">
        <div className="container-lg ">
          <div className="row g-0 d-flex align-items-center">
            <div className="col-12 position-relative py-5">
              <h3 className="market-place-list-title pti-font">
                LATEST LISTINGS
              </h3>
              <div className="market-place-list-title-underline"></div>
              <div className="row pt-5">
                {marketCards.map(item => (
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <ProductHorizontal
                      packaging={metaData.products.find(
                        ({ _id }) => _id === item.product
                      )}
                      grade={metaData.grades.find(
                        ({ _id }) => _id == item.grade
                      )}
                      product={item}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketPlace
