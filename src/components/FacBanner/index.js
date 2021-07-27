import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Share from "../../images/svgs/Share.svg"
// import MarketValueBox from "../../images/svgs/MarketValueBox.svg"

import "./styles.css"

const MarketValueBox = () => {
  return (
    <div className="max-val-box">
      <p className="text-white text-center text-lg-start small">
        Market Value as of the date of the CardFacs was generated with a
        statement that this estimate will be valued for 3 days of date it was
        generated.
      </p>
      <p className="text-white text-center font-weight-bold py-3">
        Place in the top 5 grading prices:
      </p>
      <div className="d-flex flex-wrap justify-content-around justify-content-xl-between">
        <div className="col-4 col-xl-2 py-4 py-xl-2">
          <p className="text-white  text-nowrap text-center">GRD - 10</p>
          <p className="text-cyan font-weight-bolder m-0 text-nowrap text-center">
            $6082
          </p>
        </div>
        <div className="col-4 col-xl-2 py-4 py-xl-2">
          <p className="text-white  text-nowrap text-center">GRD - 9</p>
          <p className="text-cyan font-weight-bolder m-0 text-nowrap text-center">
            $1298
          </p>
        </div>
        <div className="col-4 col-xl-2 py-4 py-xl-2">
          <p className="text-white  text-nowrap text-center">GRD - 8</p>
          <p className="text-cyan font-weight-bolder m-0 text-nowrap text-center">
            $400
          </p>
        </div>
        <div className="col-4 col-xl-2 py-4 py-xl-2">
          <p className="text-white  text-nowrap text-center">GRD - 7</p>
          <p className="text-cyan font-weight-bolder m-0 text-nowrap text-center">
            $167
          </p>
        </div>
        <div className="col-4 col-xl-2 py-4 py-xl-2">
          <p className="text-white  text-nowrap text-center">GRD - 6</p>
          <p className="text-cyan font-weight-bolder m-0 text-nowrap text-center">
            $60
          </p>
        </div>
      </div>
    </div>
  )
}

const ImageGallery = ({ gallery, initialImg }) => {
  const [selectedImage, setSelectedImage] = React.useState(initialImg)
  return (
    <div className="">
      <img src={selectedImage.url} className="gallery-big-wrapper" />
      <div className="d-flex my-4">
        {gallery.map(item => (
          <div
            onClick={() => setSelectedImage(item)}
            key={item.key}
            className="mr-4"
          >
            <img src={item.url} className="gallery-small-wrapper" />
            {selectedImage?.key === item.key ? (
              <div className="selected-image-mark"></div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

const galleryImages = [
  {
    key: "image_1",
    url: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=140&w=400",
  },
  {
    key: "image_2",
    url: "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=140&w=400",
  },
  {
    key: "image_3",
    url: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=140&w=400",
  },
]

const FacBanner = () => (
  <div className="fac-container py-5">
    <div className="due-dilly-clockwise-wrapper">
      <span className="due-dilly-clockwise">DUE DILLY</span>
    </div>
    <div className="container-md">
      <div className="d-flex w-100 justify-content-between">
        <div className="">
          <p className="h2 m-0 text-white font-weight-bolder font-pti">
            DUE DILLY CARD FAC
          </p>
          <p className="text-white m-0">FACTUAL ASSESSMENT OF CARD</p>
        </div>
        <div className="d-none d-lg-flex">
        <Share fill="#fff" width="40" />
        </div>
      </div>
      <div className="row g-0 py-5 d-flex">
        <div className="col-12 col-lg-7 fac-banner-img-container position-relative">
          <ImageGallery gallery={galleryImages} initialImg={galleryImages[0]} />
        </div>
        <div className="col-12 col-lg-5">
          <p className="h1 m-0 text-uppercase font-weight-bolder text-white font-pti">
            Derek Jeter
          </p>
          <p className="text-white h5 my-3">
            Career Retrospective Topps NOW® Chrome Card 15B
          </p>
          <p className="text-white h5">2021</p>
          <p className="text-white py-2 small">Autographed Card</p>
          <p className="text-white h3 fond-weight-bolder font-poppins">
            <strong>MARKET</strong> VALUE
          </p>
          <div className="white-underline"></div>
          <MarketValueBox />
        </div>
      </div>
    </div>
  </div>
)

export default FacBanner
