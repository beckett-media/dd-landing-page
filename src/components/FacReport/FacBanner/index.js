import * as React from "react"
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share"
import ReactModal from "react-modal"

import Share from "../../../images/svgs/Share.svg"
import Download from "../../../images/svgs/Download.svg"
import Copy from "../../../images/svgs/Copy.svg"
import TwitterBlue from "../../../images/svgs/TwitterBlue.svg"
import FacebookBlue from "../../../images/svgs/FacebookBlue.svg"
import Email from "../../../images/svgs/Email.svg"
import Pdf from "../../../images/svgs/Pdf.svg"
import Camera from "../../../images/svgs/Camera.svg"
// import Instagram from "../../images/svgs/Instagram.svg"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"

import "./styles.css"
import { CONFIG } from "../../../constants/Config"

ReactModal.setAppElement("#___gatsby")

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: { zIndex: 999999 },
}

const ShareContainer = ({ getImage, getPDF, cardId }) => {
  const [modal, setModal] = React.useState(false)

  const copyToClipboard = () => {
    const el = document.createElement("textarea")
    el.value = "https://epic-villani-e0510b.netlify.app/"
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
  }

  return (
    <div className="d-flex">
      <ReactModal
        isOpen={Boolean(modal)}
        onRequestClose={() => {
          setModal(false)
        }}
        style={customStyles}
      >
        <p>Choose download option</p>
        <button
          type="button"
          onClick={() => {
            setModal(false)
            getPDF()
          }}
          className="btn btn-primary mx-2"
        >
          <Pdf width="30px" height="30px" fill="#FFF" /> PDF
        </button>
        <button
          type="button"
          className="btn btn-info text-white mx-2"
          onClick={() => {
            setModal(false)
            getImage()
          }}
        >
          <Camera width="30px" height="30px" fill="#FFF" /> Image
        </button>
      </ReactModal>
      <div
        className="mx-2 d-flex align-items-center justify-content-center"
        style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          background: "#0092C7",
        }}
      >
        <Download
          width="30px"
          height="30px"
          style={{ cursor: "pointer" }}
          onClick={() => setModal(true)}
          fill="#fff"
        />
      </div>
      <div className="mx-2">
        <Copy style={{ cursor: "pointer" }} onClick={() => copyToClipboard()} />
      </div>
      <div className="mx-2">
        <TwitterShareButton
          url={"https://epic-villani-e0510b.netlify.app/"}
          quote={
            "Due Dilly - Revolutionizing how the world buys and sells sports cards."
          }
          hashtag="#duedilly"
        >
          <TwitterBlue />
        </TwitterShareButton>
      </div>
      <div className="mx-2">
        <FacebookShareButton
          url={"https://epic-villani-e0510b.netlify.app/"}
          quote={
            "Due Dilly - Revolutionizing how the world buys and sells sports cards."
          }
          hashtag="#duedilly"
        >
          <FacebookBlue />
        </FacebookShareButton>
      </div>
      <div className="mx-2">
        <EmailShareButton
          url={"https://epic-villani-e0510b.netlify.app/"}
          quote={
            "Due Dilly - Revolutionizing how the world buys and sells sports cards."
          }
          hashtag="#duedilly"
        >
          <Email />
        </EmailShareButton>
      </div>
      {/* <div
        className="mx-2"
        style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          background: "#00C4FF",
          padding: 7.5,
        }}
      >
        <Instagram fill="#fff" />
      </div> */}
    </div>
  )
}

const MarketValueBox = ({ gradeData }) => {
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
        {gradeData
          ?.filter(item => item._id.grade >= 6 && item.grader == "PSA")
          .map(({ _id: { gradeData }, avgValue }) => (
            <div className="col-4 col-xl-2 py-4 py-xl-2">
              <p className="text-white  text-nowrap text-center">
                GRD - {gradeData}
              </p>
              <p className="text-cyan font-weight-bolder m-0 text-nowrap text-center">
                ${avgValue.toFixed()}
              </p>
            </div>
          ))}
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

const FacBanner = ({
  card,
  gradeData,
  loadingGradeData,
  currentPageRef,
  cardId,
}) => {
  const [shareModal, setShareModal] = React.useState(false)
  const [gallery, setGallery] = React.useState([])

  React.useEffect(() => {
    if (card)
      setGallery([
        { url: CONFIG.base_url + "/" + card.front },
        { url: CONFIG.base_url + "/" + card.back },
      ])
  }, [card])

  const getPDF = () => {
    var HTML_Width = currentPageRef.current.clientWidth
    var HTML_Height = currentPageRef.current.clientHeight
    var top_left_margin = 15
    var PDF_Width = HTML_Width + top_left_margin * 2
    var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2
    var canvas_image_width = HTML_Width
    var canvas_image_height = HTML_Height

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1

    html2canvas(currentPageRef.current, { allowTaint: true }).then(function (
      canvas
    ) {
      canvas.getContext("2d")

      var imgData = canvas.toDataURL("image/jpeg", 1.0)
      var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height])
      pdf.addImage(
        imgData,
        "JPG",
        top_left_margin,
        top_left_margin,
        canvas_image_width,
        canvas_image_height
      )

      for (var i = 1; i <= totalPDFPages; i++) {
        pdf.addPage(PDF_Width, PDF_Height)
        pdf.addImage(
          imgData,
          "JPG",
          top_left_margin,
          -(PDF_Height * i) + top_left_margin * 4,
          canvas_image_width,
          canvas_image_height
        )
      }

      pdf.save(`${cardId}-report.pdf`)
    })
  }

  const getImage = () => {
    html2canvas(currentPageRef.current).then(canvas => {
      var image = canvas.toDataURL()

      // create temporary link
      var tmpLink = document.createElement("a")
      tmpLink.download = `${cardId}-report.png` // set the name of the download file
      tmpLink.href = image

      // temporarily add link to body and initiate the download
      document.body.appendChild(tmpLink)
      tmpLink.click()
      document.body.removeChild(tmpLink)
    })
  }

  return (
    <>
      <div className="fac-container py-5">
        <div className="due-dilly-clockwise-wrapper">
          <span className="due-dilly-clockwise">DUE DILLY</span>
        </div>
        <div className="container-md">
          <div className="d-flex w-100 justify-content-between">
            <div className="">
              <p className="h2 m-0 text-white font-weight-bolder pti-font">
                DUE DILLY CARD FAC
              </p>
              <p className="text-white m-0">FACTUAL ASSESSMENT OF CARD</p>
            </div>
            <div className="d-none d-lg-flex">
              <ShareContainer
                cardId={cardId}
                getPDF={getPDF}
                getImage={getImage}
              />
            </div>
            <div
              className="d-flex d-lg-none"
              onClick={() => setShareModal(true)}
            >
              <Share fill="#fff" width="40" />
            </div>
            <ReactModal
              isOpen={Boolean(shareModal)}
              onRequestClose={() => {
                setShareModal(false)
              }}
              style={customStyles}
            >
              <div className="d-flex">
                <ShareContainer />
              </div>
            </ReactModal>
          </div>
          <div className="row g-0 py-5 d-flex">
            <div className="col-12 col-lg-7 fac-banner-img-container position-relative">
              {gallery.length && (
                <ImageGallery gallery={gallery} initialImg={gallery[0]} />
              )}
            </div>
            <div className="col-12 col-lg-5">
              <p className="h1 m-0 text-uppercase font-weight-bolder text-white pti-font">
                {card?.playerNames.join(" ")}
              </p>
              <p className="text-white h5 my-3">
                {card?.type} {card?.brand} {card?.modelNo} {card?.serialNo}
              </p>
              <p className="text-white h5">{card?.year}</p>
              {/* <p className="text-white py-2 small">Autographed Card</p> */}
              <p className="text-white h3 fond-weight-bolder font-poppins mt-5">
                <strong>MARKET</strong> VALUE
              </p>
              <div className="white-underline"></div>
              <MarketValueBox gradeData={gradeData} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FacBanner
