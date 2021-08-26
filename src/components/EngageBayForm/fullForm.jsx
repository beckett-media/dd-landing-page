import React from "react"

const FullForm = () => {
  const myHtml = `<div class="engage-bay-source-form engagebay-forms" data-id="5835633539940352">
  <form
    class="form-group form-style-form2"
    onsubmit="window.EhForm.submit_form(event,this)"
    data-id="5835633539940352"
  >
    <div class="error-success-container"></div>
    <fieldset>
      <!-- Form Name -->
      <div class="form-group">
      <div className="row">
        <div class="controls col-12 col-sm-6 col-md-12 col-lg-12">
          <input
            data-ebay_field="name"
            data-ebay_add_as=""
            id="name"
            title=""
            name="name"
            type="text"
            placeholder="First Name"
            class="form-control light"
            required="true"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="controls col-12 col-sm-6 col-md-12 col-lg-12">
          <input
            data-ebay_field="last_name"
            data-ebay_add_as=""
            id="last_name"
            title=""
            name="last_name"
            type="text"
            placeholder="Last Name"
            required="true"
            class="form-control light"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="controls col-12 col-sm-6 col-md-12 col-lg-12">
          <input
            data-ebay_field="email"
            data-ebay_add_as=""
            id="email"
            title=""
            name="email"
            type="email"
            placeholder="Enter your email address"
            class="form-control light"
            required="true"
          />
        </div>
      </div>
      <div/>
      <div class="form-group">
        <div>
          <button type="submit" style="width: 100%" class="submit-btn gradient-link px-3 py-3 nav-link text-center"">
          MINT THE FIRST SERIES
          </button>
          <br />
          <span id="error-msg"></span>
        </div>
      </div>
    </fieldset>
  </form>
  
  <script>
    var EhAPI = EhAPI || {}
    EhAPI.after_load = function () {
      EhAPI.set_account("s2q2h14jacgkkhmvvuip3s9hk2", "duedilly")
      EhAPI.execute("rules")
    }
    ;(function (d, s, f) {
      var sc = document.createElement(s)
      sc.type = "text/javascript"
      sc.async = true
      sc.src = f
      var m = document.getElementsByTagName(s)[0]
      m.parentNode.insertBefore(sc, m)
    })(document, "script", "//d2p078bqz5urf7.cloudfront.net/jsapi/ehform.js")
  </script>
</div>
  `
  return <div dangerouslySetInnerHTML={{ __html: myHtml }} />
}

export default FullForm
