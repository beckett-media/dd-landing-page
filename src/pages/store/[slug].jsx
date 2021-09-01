import React from "react"

import Layout from "../../components/Layout"
import StoreDetail from "../../components/Stores/StoreDetail"

const StoreDetailPage = ({ slug }) => {
  return (
    <Layout title="Store" boxed={true}>
      <StoreDetail storeName={slug} />
    </Layout>
  )
}

export default StoreDetailPage
