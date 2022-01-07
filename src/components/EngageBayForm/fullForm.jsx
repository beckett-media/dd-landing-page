import React from "react"

const FullForm = () => {
  const myHtml = `<div class="engage-bay-source-form engagebay-forms" data-id="5835633539940352">
  <form
  action="https://app.convertkit.com/forms/2897985/subscriptions"
  class="seva-form formkit-form"
  method="post"
  data-sv-form="2897985"
  data-uid="ae3b0ad726"
  data-format="inline"
  data-version="5"
  data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"DOPE YOU'RE ON THE LIST !!!","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
  min-width="400 500 600 700 800"
>
  <div data-style="clean">
    <ul
      class="formkit-alert formkit-alert-error"
      data-element="errors"
      data-group="alert"
    ></ul>
    <div
      data-element="fields"
      data-stacked="true"
      class="seva-fields formkit-fields"
    >
      <div class="formkit-field">
        <input
          class="form-control light"
          aria-label="First Name"
          name="fields[first_name]"
          required="true"
          placeholder="First Name"
          type="text"
        />
      </div>
      <div class="formkit-field">
        <input
          class="form-control light"
          aria-label="Last Name"
          name="fields[last_name]"
          required="true"
          placeholder="Last Name"
          type="text"
        />
      </div>
      <div class="formkit-field">
        <input
          class="form-control light"
          name="email_address"
          aria-label="Enter your email address"
          placeholder="Enter your email address"
          required="true"
          type="email"
        />
      </div>
      <button
        data-element="submit"
        style="width: 100%" class="submit-btn gradient-link px-3 py-3 nav-link text-center"
      >
        <div class="formkit-spinner">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span class="">MINT THE FIRST SERIES</span>
      </button>
    </div>
  </div>
</form>
  
  <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
</div>
  `
  return <div dangerouslySetInnerHTML={{ __html: myHtml }} />
}

export default FullForm
