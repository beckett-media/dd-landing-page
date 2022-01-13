import React, { useState } from "react"
import MarketingSubRepo from "../../repositories/MarketingSubRepo"

const FullForm = () => {
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
  })
  const [message, setMessage] = useState(null)
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    setMessage(null)
    try {
      const message = await MarketingSubRepo.submitGameOverContact(data)
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
                  aria-label="First Name"
                  name="firstName"
                  required="true"
                  placeholder="First Name"
                  type="text"
                  value={data.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="formkit-field">
                <input
                  className="form-control light"
                  name="lastName"
                  required="true"
                  placeholder="Last Name"
                  type="text"
                  value={data.lastName}
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
                <span>MINT THE FIRST SERIES</span>
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default FullForm
