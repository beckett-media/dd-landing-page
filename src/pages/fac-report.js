import * as React from "react"

import FacBanner from "../components/FacBanner"
import GradientLine from "../components/GradientLine"
import InfoSection from "../components/InfoSection"
import QualityAssessment from "../components/QualityAssessment"

const FacReport = () => (
  <div>
    <FacBanner />
    <GradientLine />
    <QualityAssessment/>
    <InfoSection image="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=140&w=400" />
  </div>
)

export default FacReport
