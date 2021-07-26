import React from "react"

const Notify = ({ message, status }) => {
  return (
    <div className="position-relative">
      {message ? (
        <div className="d-flex justify-content-center position-absolute w-100">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "100%",
              padding: 10,
              minHeight: 40,
              background: status ? "limegreen" : "tomato",
              color: "#fff",
            }}
          >
            {message}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Notify
