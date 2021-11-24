import * as React from "react"
import Seo from "../components/seo"

const Home = () => {
  React.useEffect(() => {
    window.location.replace("https://duedilly.eb-sites.com/getpaid")
  })
  return (
    <>
      <Seo title="Due Dilly Landing Page" />
    </>
  )
}

export default Home
