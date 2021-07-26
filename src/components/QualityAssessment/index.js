import * as React from "react"
import Centering from "../../images/svgs/Centering.svg"
import Corners from "../../images/svgs/Corners.svg"
import Edges from "../../images/svgs/Edges.svg"
import Surface from "../../images/svgs/Surface.svg"
import HeroBg from "../../images/svgs/HeroBg.svg"

import "./styles.css"

const QualityAssessment = () => (
  <div style={{ background: "#0E1024",position:"relative",overflow:"hidden" }}>
    <HeroBg className="qa-bcg-left" />
    <HeroBg className="qa-bcg-right" />
    <div className="container-md py-5">
      <p className="text-white h2 fond-weight-bolder">
        <strong>CARD</strong> QUALITY ASSESSMENT
      </p>
      <div className="white-underline"></div>
      <div className="d-flex justify-content-between">
        <Corners width="250px" height="300px" />
        <Centering width="250px" height="300px" />
        <Surface width="250px" height="300px" />
        <Edges width="250px" height="300px" />
      </div>
      <p className="text-white">Overall Grade: A</p>
    </div>
  </div>
)

export default QualityAssessment
