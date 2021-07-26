import * as React from "react"

import "./styles.css"

const UpperFooter = () => (
  <div className="py-5 upper-footer">
    <div className="container-md">
      <div className="row g-0 d-flex align-items-center justify-content-between">
        <div className="col-12 text-white py-3 text-center">
          Want to get the hottest drops, new releases, and free swag? Signup for
          our mailing list!
        </div>
        <div className="col-12 py-1">
          <form>
            <div class="form-group d-block d-md-flex text-center text-md-left">
              <input
                type="email"
                class="form-control"
                id="UpperFooteremailInput"
                aria-describedby="emailHelp"
                placeholder="Enter Email Address"
              />
              <button
                type="button"
                className="upper-footer-button px-5 mx-0 mx-md-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default UpperFooter
