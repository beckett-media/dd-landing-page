import React from "react"
import { Router } from "@reach/router"
import FacReport from "../components/FacReport"

const App = () => {
  return (
    <Router>
      <FacReport path="/fac-report/:id" />
    </Router>
  )
}
export default App
