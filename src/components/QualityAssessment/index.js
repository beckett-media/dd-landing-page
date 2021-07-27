import * as React from "react"
import HeroBg from "../../images/svgs/HeroBg.svg"

import "./styles.css"
import { Link } from "gatsby"

const QualityAssessmentCard = ({ title, child, grade }) => {
  return (
    <div className="max-val-box h-100 d-flex justify-content-between flex-column">
      <p className="text-white h5 font-weight-bold text-center">{title}</p>
      {child}
      <p className="text-white h5 text-center m-0">Overall Grade: {grade}</p>
    </div>
  )
}

const QualityAssessment = () => (
  <div
    style={{ background: "#0E1024", position: "relative", overflow: "hidden" }}
  >
    <HeroBg className="qa-bcg-left" />
    <HeroBg className="qa-bcg-right" />
    <div className="container-md py-5">
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
              <div className="row">
                <div className="col-6 py-2">
                  <p className="text-white text-nowrap extra-small m-1 font-poppins">
                    Top Left Corner #1
                  </p>
                  <p className="text-cyan text-nowrap small m-1 font-poppins">Sharp</p>
                </div>
                <div className="col-6 py-2">
                  <p className="text-white text-nowrap extra-small m-1 font-poppins">
                    Top Right Corner #2
                  </p>
                  <p className="text-cyan text-nowrap small m-1 font-poppins">Sharp</p>
                </div>
                <div className="col-6 py-2">
                  <p className="text-white text-nowrap extra-small m-1 font-poppins">
                    Bottom Left Corner #3
                  </p>
                  <p className="text-cyan text-nowrap small m-1 font-poppins">Sharp</p>
                </div>
                <div className="col-6 py-2">
                  <p className="text-white text-nowrap extra-small m-1 font-poppins">
                    Bottom Right Corner #4
                  </p>
                  <p className="text-cyan text-nowrap small m-1 font-poppins">Sharp</p>
                </div>
              </div>
            }
          />
        </div>
        <div className="col-12 col-md-6 col-xl-3 my-2">
          <QualityAssessmentCard
            title="Centering"
            grade={<span className="text-cyan font-weight-bold font-poppins">B</span>}
            child={
              <div className="text-center text-white px-2 py-5 font-poppins">
                The centering is{" "}
                <span className="text-red font-weight-bold">off center</span>{" "}
                from left to right.
              </div>
            }
          />
        </div>
        <div className="col-12 col-md-6 col-xl-3 my-2">
          <QualityAssessmentCard
            title="Surface"
            grade={<span className="green font-weight-bold font-poppins">A+</span>}
            child={
              <div className="text-center text-white px-2 py-5 font-poppins">
                Click <Link to="#">here</Link> to see a surface defect map of
                the card.
              </div>
            }
          />
        </div>
        <div className="col-12 col-md-6 col-xl-3 my-2">
          <QualityAssessmentCard
            title="Edges"
            grade={<span className="green font-weight-bold font-poppins">A+</span>}
            child={
              <div className="row">
                <div className="col-6 py-2">
                  <p className="text-white text-nowrap extra-small m-1 font-poppins">
                    Top Edge
                  </p>
                  <p className="text-cyan text-nowrap small m-1 font-poppins">Sharp</p>
                </div>
                <div className="col-6 py-2">
                  <p className="text-white text-nowrap extra-small m-1 font-poppins">
                    Bottom Edge
                  </p>
                  <p className="text-cyan text-nowrap small m-1 font-poppins">Sharp</p>
                </div>
                <div className="col-6 py-2">
                  <p className="text-white text-nowrap extra-small m-1 font-poppins">
                    Left Edge
                  </p>
                  <p className="text-cyan text-nowrap small m-1 font-poppins">Sharp</p>
                </div>
                <div className="col-6 py-2">
                  <p className="text-white text-nowrap extra-small m-1 font-poppins">
                    Right Edge
                  </p>
                  <p className="text-cyan text-nowrap small m-1 font-poppins">Sharp</p>
                </div>
              </div>
            }
          />
        </div>
      </div>
      <p className="text-white py-3 h2 font-weight-bold font-poppins">
        Overall Grade: <span className="green font-weight-bold">A</span>
      </p>
    </div>
  </div>
)

export default QualityAssessment
