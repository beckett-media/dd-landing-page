import React, { useState } from "react"
import MarkeetingSubRepo from "../blog/MarkeetingSubRepo"

const EmailForm = () => {
  const [data, setData] = useState({
    email: "",
  })
  const [mainMessage, setMessageMain] = useState(null)
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    setMessageMain(null)
    try {
      const mainMessage = await MarkeetingSubRepo.submitMainFooterContact(data)
      console.log(mainMessage)
      setMessageMain(mainMessage)
    } catch (error) {
      setMessageMain("Some error")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-group form-style-form2">
        <fieldset>
          <div className="form-group">
            <div className="form-group d-block d-md-flex text-center text-md-left">
              <ul className="formkit-alert formkit-alert-error">
                {mainMessage}
              </ul>
              {!mainMessage && (
                <>
                  <input
                    className="form-control light"
                    name="email"
                    placeholder="Your email address"
                    required="true"
                    type="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="upper-footer-button px-5 mx-0 mx-md-2"
                  >
                    <div className="formkit-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span className="">Submit</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default EmailForm
