import React, { useState } from "react"
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share"
import ReactModal from "react-modal"

import { notification, Button } from "antd"
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
import Loader from "../../Loader"
import Payment from "../../Account/Payment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

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

const customStylesPayment = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#121634",
  },
  overlay: { zIndex: 999999 },
}

const ShareContainer = ({ getImage, getPDF }) => {
  const [modal, setModal] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = () => {
    const el = document.createElement("textarea")
    el.value = window.location.href
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
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
          // onClick={() => setModal(true)}
          onClick={() => getImage()}
          fill="#fff"
        />
      </div>
      <div className="mx-2" style={{ position: "relative" }}>
        <div
          class={`alert alert-primary p-2 text-center alert-dismissible fade ${
            copied ? "show" : ""
          }`}
          style={{
            position: "absolute",
            width: 150,
            left: "50%",
            bottom: -80,
            transform: "translateX(-50%)",
          }}
          role="alert"
        >
          <small className="text-center">URL copied to clipboard!</small>
        </div>
        <Copy style={{ cursor: "pointer" }} onClick={() => copyToClipboard()} />
      </div>

      <div className="mx-2">
        <TwitterShareButton
          url={window.location.href}
          quote={`Checkout this Card Snapscore ${(
            <span>&trade;</span>
          )} Report from Due Dilly`}
          hashtag="#duedilly"
        >
          <TwitterBlue />
        </TwitterShareButton>
      </div>
      <div className="mx-2">
        <FacebookShareButton
          url={window.location.href}
          quote={`Checkout this Card Snapscore ${(
            <span>&trade;</span>
          )} Report from Due Dilly`}
          hashtag="#duedilly"
        >
          <FacebookBlue />
        </FacebookShareButton>
      </div>
      <div className="mx-2">
        <EmailShareButton
          onClick={() => {}}
          url={window.location.href}
          subject={`Card Snapscore ${(
            <span>&trade;</span>
          )} Report | Due Dilly`}
          body={`Checkout this Card Snapscore ${(
            <span>&trade;</span>
          )} Report from Due Dilly ${window.location.href}`}
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

const MarketValueBox = ({ gradeData = [], loading }) => {
  return (
    <div className="max-val-box">
      <p className="text-white text-center text-lg-start small">
        Market Value as of the date of the CardFacs was generated with a
        statement that this estimate will be valued for 3 days of date it was
        generated.
      </p>

      {loading ? (
        <div className="d-flex justify-content-center p-5 align-items-center h-100">
          <Loader />
        </div>
      ) : !gradeData.length ? (
        <p className="text-white mt-3 text-center font-weight-bold py-3">
          No grading data available
        </p>
      ) : (
        <>
          <p className="text-white text-center font-weight-bold py-3">
            Place in the top 5 grading prices:
          </p>
          <div className="d-flex flex-wrap ">
            {gradeData
              .filter(item => item._id.grade >= 6 && item._id.grader == "PSA")
              .map(({ _id: { grade }, avgValue }) => (
                <div className="col-4 col-xl-2 py-4 py-xl-2">
                  <p className="text-white  text-nowrap text-center">
                    GRD - {grade}
                  </p>
                  <p className="text-cyan font-weight-bolder m-0 text-nowrap text-center">
                    ${avgValue.toFixed()}
                  </p>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  )
}

const ImageGallery = ({ gallery, initialImg, setOrientation }) => {
  const [selectedImage, setSelectedImage] = React.useState(initialImg)
  const setLayoutOrientation = source => {
    let image = new Image()
    image.src = source
    if (image.width > image.height) {
      setOrientation("landscape")
    } else {
      setOrientation("portrait")
    }
  }

  React.useEffect(() => {
    if (selectedImage.url) {
      setLayoutOrientation(selectedImage.url)
    }
  }, [selectedImage])

  return (
    <div className="">
      <img src={selectedImage.url} className="gallery-big-image" />
      <div className="d-flex my-4 flex-wrap">
        {gallery.map(item => (
          <div
            onClick={() => setSelectedImage(item)}
            key={item.key}
            className="mr-4"
          >
            <img src={item.url} className="gallery-thumbnail" />
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
  loading,
  currentPageRef,
  cardId,
  price,
  quantity,
}) => {
  const [shareModal, setShareModal] = React.useState(false)
  const [gallery, setGallery] = React.useState([])
  const [orientation, setOrientation] = React.useState("portrait")

  React.useEffect(() => {
    if (card)
      setGallery([
        { url: CONFIG.base_url + "/" + card.front, key: "front" },
        { url: CONFIG.base_url + "/" + card.back, key: "back" },
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
    html2canvas(currentPageRef.current, {
      allowTaint: true,
      useCORS: true,
      scale: 1,
      scrollY: -window.scrollY,
    }).then(function (canvas) {
      canvas.getContext("2d")

      var imgData = canvas.toDataURL("image/jpeg", 1.0)
      var imgWidth = 210
      var pageHeight = 290
      var imgHeight = (canvas.height * imgWidth) / canvas.width
      var heightLeft = imgHeight

      var doc = new jsPDF("p", "mm", "a4")
      var position = 0
      var pageData = canvas.toDataURL("image/jpeg", 1.0)
      var imgData = encodeURIComponent(pageData)

      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
      doc.setLineWidth(5)
      doc.setDrawColor(255, 255, 255)
      doc.rect(0, 0, 210, 295)
      heightLeft -= pageHeight

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        doc.addPage()
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
        doc.setLineWidth(5)
        doc.setDrawColor(255, 255, 255)
        doc.rect(0, 0, 210, 295)
        heightLeft -= pageHeight
      }
      doc.save(`${cardId}-report.pdf`)

      // var imgData = canvas.toDataURL("image/png")
      // var imgWidth = 210
      // var pageHeight = 295
      // var imgHeight = (canvas.height * imgWidth) / canvas.width
      // var heightLeft = imgHeight
      // var doc = new jsPDF("p", "mm", "a4")
      // var position = 0

      // doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
      // heightLeft -= pageHeight

      // while (heightLeft >= 0) {
      //   doc.addPage(PDF_Width, PDF_Height)

      //   position = heightLeft - imgHeight
      //   doc.addPage()
      //   doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
      //   heightLeft -= pageHeight
      // }
      // doc.save(`${cardId}-report.pdf`)

      // var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height])
      // pdf.addImage(
      //   imgData,
      //   "JPG",
      //   top_left_margin,
      //   top_left_margin,
      //   canvas_image_width,
      //   canvas_image_height
      // )

      // for (var i = 1; i <= totalPDFPages; i++) {
      //   pdf.addPage(PDF_Width, PDF_Height)
      //   pdf.addImage(
      //     imgData,
      //     "JPG",
      //     top_left_margin,
      //     top_left_margin,
      //     canvas_image_width,
      //     canvas_image_height
      //   )
      // }

      // pdf.save(`${cardId}-report.pdf`)
    })
  }

  const getImage = () => {
    html2canvas(currentPageRef.current, {
      allowTaint: true,
      useCORS: true,
      scrollY: -window.scrollY,
    }).then(canvas => {
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

  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const openNotification = () => {
    notification.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      onClick: () => {
        console.log("Notification Clicked!")
      },
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
                DUE DILLY CARD SNAPSCORE&trade;
              </p>
              <p className="text-white m-0">
                SNAPSCORE&trade; ASSESSMENT OF CARD
              </p>
            </div>
            <div className="d-none d-lg-flex">
              <ShareContainer getPDF={getPDF} getImage={getImage} />
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
                <ShareContainer getPDF={getPDF} getImage={getImage} />
              </div>
            </ReactModal>
          </div>

          <div className="row g-0 py-5 d-flex">
            <div
              className={`col-12 col-lg-${
                orientation === "portrait" ? "4" : "7"
              } fac-banner-img-container position-relative`}
            >
              {gallery.length > 0 && (
                <ImageGallery
                  gallery={gallery}
                  setOrientation={setOrientation}
                  initialImg={gallery[0]}
                />
              )}
            </div>
            <div
              className={`col-12 col-lg-${
                orientation === "portrait" ? "8" : "5"
              }`}
            >
              <p className="h1 m-0 text-uppercase font-weight-bolder text-white pti-font">
                {card?.playerNames.join(" ")}
              </p>
              <p className="text-white h5 my-3">
                {card?.type} {card?.brand} {card?.modelNo} {card?.serialNo}
              </p>
              <p className="text-white h5">{card?.year}</p>
              <ReactModal
                isOpen={isModalVisible}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => {
                  handleCancel()
                }}
                style={customStylesPayment}
              >
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  color="#fff"
                  style={{
                    float: "right",
                    cursor: "pointer",
                  }}
                  onClick={handleCancel}
                />
                <Payment
                  cardId={cardId}
                  price={price}
                  handleClose={handleCancel}
                />
              </ReactModal>
              {price && (
                <Button
                  type="primary"
                  style={{
                    marginTop: "10px",
                  }}
                  style={{ width: "50%", fontSize: "1.2rem", marginTop: "9px" }}
                  className="submit-btn gradient-link px-3 py-3 nav-link text-center"
                  onClick={quantity ? showModal : null}
                >
                  {quantity ? "Buy This Card" : "Sold"}
                </Button>
              )}
              <p className="text-white h3 fond-weight-bolder font-poppins mt-5">
                <strong>MARKET</strong> VALUE 🔥
              </p>
              <div className="white-underline"></div>
              <MarketValueBox
                gradeData={gradeData}
                loading={loading}
                cardId={cardId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FacBanner
