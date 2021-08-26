import React from "react"

const EmailForm = () => {
  const myHtml = `<div class="engage-bay-source-form engagebay-forms" data-id="5835633539940352">
  <form
    class="form-group form-style-form2"
    onsubmit="window.EhForm.submit_form(event,this)"
    data-id="5835633539940352"
  >
  <div class="error-success-container" style="text-align: center; position: inherit !important;"></div>

    <fieldset>
      <div class="form-group">
      <div class="form-group d-block d-md-flex text-center text-md-left">
            <input
              data-ebay_field="email"
              data-ebay_add_as=""
              id="email"
              title=""
              name="email"
              type="email"
              placeholder="Your email address"
              class="form-control light"
              required="true"
            />
            <button type="submit" class="upper-footer-button px-5 mx-0 mx-md-2">
              Submit
            </button>
          </div>
      <div/>
      <div class="form-group">
        <div>
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

export default EmailForm
