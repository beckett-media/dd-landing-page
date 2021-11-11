import * as React from "react"
import { Link } from "gatsby"
import { CONFIG } from "../../constants/Config"
const ProductHorizontal = ({ product, grade, packaging, authKey }) => {
  return (
    <Link
      target="_blank"
      href={
        CONFIG.marketplace_url +
        "/product/" +
        product._id +
        `?auth=${encodeURIComponent(authKey)}`
      }
    >
      <div className="ps-product--horizontal">
        <div className="ps-product__thumbnail">
          {(product?.images.length && product?.images[0] && (
            <img
              width="100%"
              alt={product.title}
              src={CONFIG.base_url + "/" + product?.images[0]}
            />
          )) || <></>}
        </div>
        <div className="ps-product__content">
          <>
            <span>{product.title}</span>
            <p className={"my-3 ps-product__player"}>
              {product.playerNames.join(",")}
            </p>
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
                <span>Packaging</span>
                <p>
                  <strong className="text-secondary">{packaging.name}</strong>
                </p>
              </div>
              <div>
                <span>Grade</span>
                <p>
                  <strong className="text-secondary">{grade.name}</strong>
                </p>
              </div>
              {product.card && (
                <div>
                  <a
                    target="_blank"
                    style={{ fontSize: 12, lineHeight: 1, display: "block" }}
                    href={`/fac-report/${product.card._id}`}
                  >
                    Snapscore&trade; Report
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="ps-product__price">${product.price.toFixed()}</div>
        </div>
      </div>
    </Link>
  )
}

export default ProductHorizontal
