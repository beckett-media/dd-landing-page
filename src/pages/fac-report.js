import React from "react"
import { Router } from "@reach/router"
import FacReport from "../components/FacReport"
import Seo from "../components/seo"
const App = () => {
  return (
    <>
      <Seo
        title="Due Dilly | Sports Card FAC"
        description="Factual Assessment of Card for Quality and Market Trends"
      />
      <Router>
        <FacReport path="/fac-report/:id" />
      </Router>
    </>
  )
}
export default App
