import React from "react"
import FacReport from "../components/FacReport"
import Seo from "../components/seo"
import { Router } from "@reach/router"

const App = () => {
  return (
    <>
      <Seo
        title={`Due Dilly | Sports Card Snapscore ${(<span>&trade;</span>)}`}
        description={`Snapscore ${(
          <span>&trade;</span>
        )} Assessment of Card for Quality and Market Trends`}
      />
      <Router>
        <FacReport path="/fac-report/:id" />
      </Router>
    </>
  )
}
export default App
