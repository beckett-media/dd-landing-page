import React, { useState } from "react"
import MarketingSubRepo from "../../repositories/MarketingSubRepo"

const ContactUsInputForm = () => {
  const [data, setData] = useState({
    email: "",
    fullName: "",
    fullMessage: "",
  })
  const [message, setMessage] = useState(null)
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    setMessage(null)
    try {
      const message = await MarketingSubRepo.submitContactUs(data)
      setMessage(message)
    } catch (error) {
      setMessage("Some error")
    }
  }
  return (
    <div className="engage-bay-source-form engagebay-forms">
      <form onSubmit={handleSubmit}>
        <div>
          <ul className="formkit-alert formkit-alert-error">{message}</ul>
          {!message && (
            <div className="seva-fields formkit-fields">
              <div className="formkit-field">
                <input
                  className="form-control light"
                  aria-label="You Name"
                  name="fullName"
                  required="true"
                  placeholder="You Name"
                  type="text"
                  value={data.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="formkit-field">
                <input
                  className="form-control light"
                  name="email"
                  placeholder="Enter your email address"
                  required="true"
                  type="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div className="formkit-field">
                <textarea
                  rows="4"
                  className="form-control light"
                  name="fullMessage"
                  required="true"
                  placeholder="Your message"
                  type="text"
                  value={data.fullMessage}
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
                <span>SEND!</span>
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default ContactUsInputForm
