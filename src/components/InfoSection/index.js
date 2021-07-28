import * as React from "react"
// import Chart from ""
import loadable from "@loadable/component"
import Instagram from "../../images/svgs/Instagram.svg"
import Facebook from "../../images/svgs/Facebook.svg"
import Youtube from "../../images/svgs/Youtube.svg"
import Twitter from "../../images/svgs/Twitter.svg"
import GraphIcon from "../../images/svgs/Graph.svg"
import "./styles.css"

const Chart = loadable(() => import("react-apexcharts"))


const ChartSection = () => {
  const series = [
    {
      data: [10, 9, 6, 12, 13, 6],
    },
  ]

  const options = {
    chart: {
      id: "apexchart-example",
      foreColor: "#ffffff",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      lineCap: "butt",
      colors: "#30BACC",
    },
    xaxis: {
      categories: ["28 Dec", "29 Dec", "30 Dec", "1 Jan", "2 Jan"],
    },

    tooltip: {
      custom: ({ dataPointIndex, w }) => {
        return (
          '<div class="graph-tooltip">' +
          "<span>" +
          "$" +
          w.globals.labels[dataPointIndex] +
          "m" +
          "</span>" +
          "</div>"
        )
      },
    },
  }

  return (
    <div className="max-val-box w-100 position-relative py-3">
      <div
        className="green font-weight-bold"
        style={{
          position: "absolute",
          top: 20,
          left: 20,
        }}
      >
        <GraphIcon width="30px" height="30px" fill="#9ADBA4" /> Positive
      </div>
      <div
        className="text-white h4 font-weight-bolder"
        style={{
          position: "absolute",
          top: 20,
          right: 20,
        }}
      >
        $4083
      </div>
      <Chart
        style={{ paddingTop: 20 }}
        options={options}
        series={series}
        type="line"
        width={"100%"}
        height={320}
      />
    </div>
  )
}

const InfoSection = ({ image }) => (
  <div style={{ background: "#121634" }}>
    <div className="container-md ">
      <div className="row  align-items-stretch">
        <div className="col-12 col-md-6 h-100 py-5">
          <p className="text-white h3 fond-weight-bolder">
            <strong>SELLER</strong> INFO
          </p>
          <div className="white-underline"></div>
          <div
            className="d-flex row m-0 p-3 justify-content-between max-val-box"
            style={{ minHeight: 375 }}
          >
            <div className="col-12 align-items-center justify-content-center d-flex py-2">
              <div className="d-bolck d-md-flex">
                <img src={image} className="info-avatar-image"></img>
              </div>
              <div className="px-2">
                <p className="text-white m-0 h4 font-weight-bold">John</p>
                <p className="text-white m-0 font-weight-bold">@johndoe110</p>
                <div className="d-flex py-2">
                  <div className="social-media-wrapper">
                    <Instagram width="24px" height="24px" fill="#fff" />
                  </div>
                  <div className="social-media-wrapper">
                    <Facebook width="24px" height="24px" />
                  </div>
                  <div className="social-media-wrapper">
                    <Youtube width="24px" height="24px" />
                  </div>
                  <div className="social-media-wrapper">
                    <Twitter width="24px" height="24px" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 align-items-center">
              <p className="text-white text-center m-0 py-2">
                ADDITIONAL CARD NOTES:
              </p>
              <p className="text-white text-center m-0">
                Card seller is <span className="text-cyan">OPEN</span> to all
                offers.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 py-5">
          <p className="text-white h3 fond-weight-bolder">
            <strong>PRICING</strong> TREND
          </p>
          <div className="white-underline"></div>
          <div className="d-flex justify-content-between">
            <ChartSection />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default InfoSection
