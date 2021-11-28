import * as React from "react"
import HeroBg from "../../../images/svgs/HeroBg.svg"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css" // This only needs to be imported once in your app

import "./styles.css"

const QualityAssessmentCard = ({ title, child, grade }) => {
  return (
    <div className="max-val-box h-100 d-flex justify-content-between flex-column">
      <p className="text-white h5 font-weight-bold text-center">{title}</p>
      {child}
      <p className="text-white h5 text-center m-0">
        Overall Snapscore {<span>&trade;</span>} {grade}
      </p>
    </div>
  )
}

const QualityAssessment = ({ card }) => {
  const cornerText = {
    top_right: "Top Right Corner #1",
    top_left: "Top Left Corner #2",
    bottom_right: "Bottom Right Corner #3",
    bottom_left: "Bottom Left Corner #4",
  }

  const [isVisibleSurfaceMap, showSurfaceMap] = React.useState(false)

  return (
    <div
      style={{
        background: "#0E1024",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="container-md py-5"
        style={{ position: "relative", zIndex: 5 }}
      >
        <p className="text-white h2 fond-weight-bolder font-poppins">
          <strong>CARD</strong> QUALITY ASSESSMENT
        </p>
        <div className="white-underline"></div>
        <div className="d-flex row justify-content-between align-items-stretch">
          <div className="col-12 col-md-6 col-xl-3 my-2">
            <QualityAssessmentCard
              title="Corners"
              grade={<span className="green font-weight-bold">A+</span>}
              child={
                <div className="row ">
                  {Object.keys(card?.grading?.corners || {})
                    .reverse()
                    .map(key => (
                      <div className="col-6 py-2">
                        <p className="text-white  font-poppins">
                          {cornerText[key]}
                     
                        </p>
                        <p className="text-cyan  m-1 font-poppins">
                          {card?.grading?.corners[key]}
                        </p>
                        <br/>
                      </div>
         
                    ))}
                </div>
              }
            />
          </div>
          <div className="col-12 col-md-6 col-xl-3 my-2">
            <QualityAssessmentCard
              title="Centering"
              grade={
                <span className="text-cyan font-weight-bold font-poppins">
                  B
                </span>
              }
              child={
                <div className="text-center text-white px-2 py-5 font-poppins">
                  {card?.grading?.centering["left/right"] && (
                    <p className="text-white">
                      <strong>Left / Right</strong>{" "}
                      {card?.grading?.centering["left/right"]}
                    </p>
                  )}
                  {card?.grading?.centering["top/bottom"] && (
                    <p className="text-white">
                      <strong>Top / Bottom</strong>{" "}
                      {card?.grading?.centering["top/bottom"]}
                    </p>
                  )}
                  {card?.grading?.centering["letter_grade"] && (
                    <div
                      style={{
                        marginTop: 15,
                     
                    
                      
                      }}
                    >
                      <h6>
                        <strong>
                          {card?.grading?.centering["letter_grade"]}
                        </strong>
                      </h6>
                    </div>
                  )}
                </div>
              }
            />
          </div>
          <div className="col-12 col-md-6 col-xl-3 my-2">
            <QualityAssessmentCard
              title="Surface"
              grade={
                <span className="green font-weight-bold font-poppins">A+</span>
              }
              child={
                <div className="text-center text-white px-2 py-5 font-poppins">
                  Click{" "}
                  <a href="#" onClick={() => showSurfaceMap(true)}>
                    here
                  </a>{" "}
                  to see a surface defect map of the card.
                </div>
              }
            />
            {isVisibleSurfaceMap && (
              <Lightbox
                onCloseRequest={() => showSurfaceMap(false)}
                mainSrc={card?.grading?.surface?.surface_defect_img}
              />
            )}
          </div>
          <div className="col-12 col-md-6 col-xl-3 my-2">
            <QualityAssessmentCard
              title="Edges"
              grade={
                <span className="green font-weight-bold font-poppins">A+</span>
              }
              child={
                <div className="row">
                  <div className="col-6 py-2">
                    <p className="text-white  m-1 font-poppins">
                      Top Edge
                    </p>
                    <p className="text-cyan m-1 font-poppins">
                      Sharp
                    </p>
                  </div>
                  <div className="col-6 py-2">
                    <p className="text-white  m-1 font-poppins">
                      Bottom Edge
                    </p>
                    <p className="text-cyan  m-1 font-poppins">
                      Sharp
                    </p>
                  </div>
                  <div className="col-6 py-2">
                    <p className="text-white  m-1 font-poppins">
                      Left Edge
                    </p>
                    <p className="text-cyan  m-1 font-poppins">
                      Sharp
                    </p>
                  </div>
                  <div className="col-6 py-2">
                    <p className="text-white  m-1 font-poppins">
                      Right Edge
                    </p>
                    <p className="text-cyan  m-1 font-poppins">
                      Sharp
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        </div>
        <p className="text-white py-3 h2 font-weight-bold font-poppins">
          Overall SNAPSCORE <span className="green font-weight-bold">A</span>
        </p>
      </div>
      <HeroBg className="qa-bcg-left" />
      <HeroBg className="qa-bcg-right" />
    </div>
  )
}

export default QualityAssessment
