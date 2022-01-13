import React, { useState } from "react"
import MarkeetingSubRepo from "../blog/MarkeetingSubRepo"

const EmailNameForm = () => {
  const [data, setData] = useState({
    email: "",
    name: "",
  })
  const [mainMessage, setMessageMain] = useState(null)
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    setMessageMain(null)
    try {
      const mainMessage = await MarkeetingSubRepo.submitMainHeroBannerContact(data)
      console.log(mainMessage)
      setMessageMain(mainMessage)
    } catch (error) {
      setMessageMain("Some error")
    }
  }
  return (
    <div className="engage-bay-source-form engagebay-forms">
      <form onSubmit={handleSubmit}>
        <div>
          <ul className="formkit-alert formkit-alert-error">{mainMessage}</ul>
          {!mainMessage && (
            <div className="seva-fields formkit-fields">
              <div className="formkit-field">
                <input
                  className="form-control light"
                  name="name"
                  required="true"
                  placeholder="Your Name"
                  type="text"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
              <div className="formkit-field">
                <input
                  className="form-control light"
                  name="email"
                  placeholder="Your email address"
                  required="true"
                  type="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                }}
                className="submit-btn gradient-link px-3 py-3 nav-link text-center"
              >
                <div className="formkit-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span>SIGNUP FOR EARLY ACCESS</span>
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default EmailNameForm
