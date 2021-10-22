import * as React from "react"
import loadable from "@loadable/component"

// import FacBanner from "./FacBanner"
import GradientLine from "../GradientLine"
import InfoSection from "./InfoSection"
import QualityAssessment from "./QualityAssessment"
import useFetch from "use-http"
import { CONFIG } from "../../constants/Config"

const FacBanner = loadable(() => import("./FacBanner"))

const FacReport = ({ id }) => {
  const [reportData, setData] = React.useState({})
  const currentPage = React.useRef()
  const url = typeof window !== "undefined" ? window.location.href : ""

  const reportDataRef = React.useRef()

  const { get: getReport, loading } = useFetch(
    CONFIG.base_url + "/sports-card/card-fac",
    {
      cachePolicy: "no-cache",
    }
  )

  const { post: createJob, error: errorCreateJob } = useFetch(
    CONFIG.base_url + "/api/v1/public/job/create",
    { cachePolicy: "no-cache" }
  )

  const {
    post: fetchPricing,
    loading: loadingPricingData,
    error: errorPricingData,
  } = useFetch(CONFIG.base_url + "/api/v1/public/cards/get-price-analytics", {
    cachePolicy: "no-cache",
  })

  const {
    post: fetchGrading,
    loading: loadingGradingData,
    error: errorGradingData,
  } = useFetch(CONFIG.base_url + "/api/v1/public/cards/get-grade-analytics", {
    cachePolicy: "no-cache",
  })

  const {
    post: getJobStatus,
    loading: loadingJobStatus,
    error: errorGetJobStatus,
  } = useFetch(CONFIG.base_url + "/api/v1/public/job/status", {
    cachePolicy: "no-cache",
  })

  const initGradeAndPricingFetch = async jobId => {
    const { priceFetchComplete, gradingFetchComplete } = reportDataRef.current

    const {
      data: { statusPriceDataFetch, statusGradingDataFetch },
    } = await getJobStatus({ jobId })

    if (!gradingFetchComplete) {
      let { data: gradeData = [] } = await fetchGrading("", {
        jobId,
      })

      reportDataRef.current = { ...reportDataRef.current, gradeData }
    }

    if (!priceFetchComplete) {
      let { data: priceData } = await fetchPricing("", {
        jobId,
        period: "monthly",
      })
      reportDataRef.current = { ...reportDataRef.current, priceData }
    }

    reportDataRef.current = {
      ...reportDataRef.current,
      statusGradingDataFetch,
      statusPriceDataFetch,
    }

    setData({
      ...reportDataRef.current,
    })

    if (!statusGradingDataFetch || !statusGradingDataFetch) {
      setTimeout(() => {
        initGradeAndPricingFetch(jobId)
      }, 10 * 1000)
    }
  }

  const initFetch = async () => {
    let { data: fac } = await getReport(`/${id}`)

    setData({ fac })
    reportDataRef.current = { fac }

    let {
      card: {
        year,
        brand,
        cardNumber,
        playerNames,
        modelNo,
        serialNo,
        cardType,
      },
    } = fac

    let {
      data: { _id },
    } = await createJob({
      year,
      brand,
      cardNumber,
      playerNames,
      modelNo,
      serialNo,
      cardType,
    })

    initGradeAndPricingFetch(_id)
  }

  React.useEffect(() => {
    initFetch()
  }, [])

  return (
    <div ref={currentPage}>
      <FacBanner
        currentPageRef={currentPage}
        card={reportData?.fac?.card}
        gradeData={reportData?.gradeData}
        loading={loadingGradingData || loading || loadingJobStatus}
        cardId={id}
      />
      <GradientLine />
      <QualityAssessment card={reportData?.fac?.card} />
      <InfoSection
        user={reportData?.fac?.user}
        priceData={reportData?.priceData}
        loading={
          loading ||
          ((loadingJobStatus || loadingPricingData) && !reportData?.priceData)
        }
      />
    </div>
  )
}

export default FacReport
