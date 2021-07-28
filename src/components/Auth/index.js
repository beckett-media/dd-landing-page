import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import ForgotPassword from "./ForgotPassword"
import Login from "./Login"
import Signup from "./Signup"

import "../../styles/Common.css"
import "../../styles/Form.css"
import "../../styles/Header.css"
import "../../styles/MainSection.css"

const Auth = ({ login, close, type }) => {
  const [mode, switchMode] = useState(0)
  const meta = useSelector(({ common }) => common) || {}

  useEffect(() => {
    if (type === "login") switchMode(0)
    if (type === "sign_up") switchMode(1)
    if (meta.forgotPassword && meta.forgotPassword.email) {
      switchMode(2)
    }
  }, [meta])

  return (
    <div className={"form"}>
      {mode === 0 && (
        <Login close={close} login={login} switchMode={switchMode} />
      )}
      {mode === 1 && <Signup close={close} switchMode={switchMode} />}
      {mode === 2 && <ForgotPassword close={close} switchMode={switchMode} />}
    </div>
  )
}

export default Auth
