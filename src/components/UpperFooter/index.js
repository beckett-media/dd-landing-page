import * as React from "react"


import "./styles.css"
 

const UpperFooter = () => (
  <div className="py-5 upper-footer">
    <div className="container-md">
      <div className="row g-0 d-flex align-items-center justify-content-between">
        <div className="col-12 col-md-6 col-lg-8 text-white py-1">
          Want to get the hottest drops, new releases, and free swag? Signup for
          our mailing list!
        </div>
        <div className="col-12 col-md-6 col-lg-4 py-1">
          <button type="button" class="upper-footer-button px-5 mx-0 mx-md-2">
            Enter Email Address
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default UpperFooter
