import React from "react"

const EmailForm = () => {
  const myHtml = `<div>
  <form
  action="https://app.convertkit.com/forms/2897840/subscriptions"
  method="post"
  data-sv-form="2897840"
  data-uid="4fc80563a7"
  data-format="inline"
  class="form-group form-style-form2"
  data-version="5"
  data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"You're all set. We'll hit you up soon.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
>
<fieldset>

<div class="form-group">
  <div class="form-group d-block d-md-flex text-center text-md-left">
    <ul
      class="formkit-alert formkit-alert-error"
      data-element="errors"
      data-group="alert"
    ></ul>
        <input
          class="form-control light"
          name="email_address"
          aria-label="Your email address"
          placeholder="Your email address"
          required="true"
          type="email"
        />
      <button
        data-element="submit"
        class="upper-footer-button px-5 mx-0 mx-md-2"
      >
        <div class="formkit-spinner">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span class="">Submit</span>
      </button>
  </div>
  </div>
  </fieldset>

</form>
  
  <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
</div>
  `
  return <div dangerouslySetInnerHTML={{ __html: myHtml }} />
}

export default EmailForm
