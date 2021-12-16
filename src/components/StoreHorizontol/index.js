import * as React from "react"
import { Link } from "gatsby"
import { CONFIG } from "../../constants/Config"
const StoreHorizontal = ({ store, grade, packaging, authKey }) => {
  return (
    <Link
      target="_blank"
      href={
        CONFIG.marketplace_url +
        "/store/" +
        store._id +
        `${authKey ? `?auth=${encodeURIComponent(authKey)}` : ""}`
      }
    >
      <div className="ps-product--horizontal">
        <div className="ps-product__thumbnail">
          {(store?.images.length && store?.images[0] && (
            <img
              width="100%"
              alt={store.title}
              src={CONFIG.base_url + "/" + store?.images[0]}
            />
          )) || <></>}
        </div>
        <div className="m-3 ps-product__player">
          <>
            <span>{store.title.toUpperCase()}</span>
          </>
          <hr />
          <div
            className="ps-product__meta-wrapper"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div className="ps-product__meta">
              <div>
                {/* <span>Packaging</span> */}
                <p>
                  {/* <strong className="text-secondary">{packaging.name}</strong> */}
                </p>
              </div>
              <div>
                {/* <span>Grade</span> */}
                <p>
                  {/* <strong className="text-secondary">{grade.name}</strong> */}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="ps-product__price">${product.price.toFixed()}</div> */}
        </div>
      </div>
    </Link>
  )
}

export default StoreHorizontal
