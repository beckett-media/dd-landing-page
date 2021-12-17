import * as React from "react"
import { Link } from "gatsby"
import { CONFIG } from "../../constants/Config"
import { Avatar } from "antd"
import "./style.css"
import { capitalizeFirstEach, capitalizeFirstLetter } from "../../utils/string"

const StoreHorizontal = ({ store, authKey }) => {
  return (
    <article className="ps-block--store-2">
      <div className="ps-block__content ">
        <figure>
          <h4>
            <Link
              href={
                CONFIG.base_url +
                "/store/" +
                store._id +
                `${authKey ? `?auth=${encodeURIComponent(authKey)}` : ""}`
              }
              target="_blank"
            >
              <a>{capitalizeFirstEach(store.title)}</a>
            </Link>
          </h4>

          <div className="ps-block__rating mb-4"></div>
          <p>{capitalizeFirstLetter(store.desc)}</p>
          {store.phone && (
            <p>
              <i className="icon-telephone"></i> {store.phone}
            </p>
          )}
        </figure>
      </div>

      <div className="ps-block__author mt-4">
        <a
          className="ps-block__user"
          target="_blank"
          href={
            CONFIG.marketplace_url +
            "/store/" +
            store._id +
            `${authKey ? `?auth=${encodeURIComponent(authKey)}` : ""}`
          }
          // style={{
          //   backgroundImage: `url('${`${
          //     store.images.length > 0
          //       ? `${CONFIG.base_url}/${store.images[0]}`
          //       : "/static/img/vendor/store/vendor-150x150.jpg"
          //   }`}')`,
          //   backgroundRepeat: "no-repeat",
          //   // backgroundPosition: "20% 50%",
          // }}
        >
          {/* <img
                        src="/static/img/vendor/store/vendor-150x150.jpg"
                        alt="Due Dilly"
                    /> */}

          <Avatar
            size="large"
            src={
              store.images.length > 0
                ? `${CONFIG.base_url}/${store.images[0]}`
                : "/static/img/vendor-150x150.jpg"
            }
            alt="store image"
          ></Avatar>
        </a>
        <Link
          href={
            CONFIG.marketplace_url +
            "/store/" +
            store._id +
            `${authKey ? `?auth=${encodeURIComponent(authKey)}` : ""}`
          }
          target="_blank"
        >
          <a
            className="ps-btn"
            style={{
              textDecoration: "none",
            }}
          >
            Visit Store
          </a>
        </Link>
      </div>
    </article>
  )
}

export default StoreHorizontal
