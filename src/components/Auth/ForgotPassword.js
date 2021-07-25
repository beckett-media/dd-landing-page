import React, { useEffect, useRef } from "react"
import { notify } from "react-notify-toast"
import { useDispatch, useSelector } from "react-redux"
import useFetch from "use-http"
import { setMeta } from "../../actions/common"
import Button from "../Common/Button"
import Input from "../Common/Input"
import Link from "../Common/Link"

const ForgotPassword = ({ switchMode }) => {
  const { post: generateOtp, loading: loadingGenerateOtp } = useFetch(
    "/user/generate-otp",
    { cachePolicy: "no-cache" }
  )
  const { post: verifyOtp, loading: loadingVerifyOtp } = useFetch(
    "/user/verify-otp",
    { cachePolicy: "no-cache" }
  )
  const { post: setNewPassword, loading: loadingNewPassword } = useFetch(
    "/user/new-password",
    { cachePolicy: "no-cache" }
  )
  const dispatch = useDispatch()
  // const [step, setStep] = useState(0);
  const meta = useSelector(({ common }) => common) || {}
  const forgotPasswordDataRef = useRef()

  const setForgotPasswordData = data => {
    forgotPasswordDataRef.current = {
      ...forgotPasswordDataRef.current,
      ...data,
    }
  }

  useEffect(() => {
    if (meta.forgotPassword) {
      forgotPasswordDataRef.current = meta.forgotPassword
    }
  }, [meta.forgotPassword])

  const _switchMode = mode => {
    dispatch(setMeta({ forgotPassword: null }))
    switchMode(mode)
  }

  const handleResponse = (data, message, step, done) => {
    if (data.success) {
      notify.show(message, "success", 3000)
      // setStep(step);
      dispatch(setMeta({ forgotPassword: forgotPasswordDataRef.current }))
      if (done) _switchMode(0)
    } else if (data.error) {
      notify.show(data.error.errorMessage, "error", 3000)
    }
  }

  const nextStep = async step => {
    try {
      const { email, otp, newPassword } = forgotPasswordDataRef.current
      switch (step) {
        case 1:
          let responseGeneratedOTP = await generateOtp({ email })
          handleResponse(
            responseGeneratedOTP,
            "Please check your email for the OTP",
            step
          )
          break
        case 2:
          let responseVerifyOTP = await verifyOtp({ email, otp })
          handleResponse(responseVerifyOTP, "OTP has been verified!", step)
          break
        case 3:
          let responseSetNewPassword = await setNewPassword({
            email,
            newPassword,
          })
          handleResponse(
            responseSetNewPassword,
            "Your password has been reset!",
            step,
            true
          )
          break
      }
    } catch (e) {
      notify.show("Something went wrong!", "error", 3000)
    }
  }

  const { email, otp } = meta.forgotPassword || {}

  return (
    <div>
      {!email && (
        <div>
          <h4 className={"text-center mb-3 font-weight-bold"}>
            Forgot Password
          </h4>
          <p className={"text-center mb-3 text-secondary"}>
            Enter the email associated with your account and we’ll send an email
            with instructions to reset your password.{" "}
          </p>

          <Input
            onChange={e => setForgotPasswordData({ email: e.target.value })}
            label="Email"
            placeholder="eg. john@doe.com"
          />
          <Button
            disabled={loadingGenerateOtp}
            className={"Button"}
            onClick={() => nextStep(1)}
          >
            {loadingGenerateOtp ? "Processing..." : "Send Instructions"}
          </Button>
        </div>
      )}
      {email && !otp && (
        <div>
          <h4 className={"text-center mb-3 font-weight-bold"}>Enter OTP</h4>

          <p className={"text-center mb-3 text-secondary"}>
            Enter the OTP you received on your email for verification.{" "}
          </p>

          <Input
            otp
            onChange={otp => setForgotPasswordData({ otp })}
            label="OTP"
            placeholder="Enter OTP"
          />
          <Button
            disabled={loadingVerifyOtp}
            className={"Button"}
            onClick={() => nextStep(2)}
          >
            {loadingVerifyOtp ? "Processing..." : "Verify OTP"}
          </Button>
        </div>
      )}
      {email && otp && (
        <div>
          <h4 className={"text-center mb-3 font-weight-bold"}>
            Enter New Password
          </h4>
          <p className={"text-center mb-3 text-secondary"}>
            Set a new secure password.
          </p>
          <Input
            type="password"
            onChange={e =>
              setForgotPasswordData({ newPassword: e.target.value })
            }
            label="New Password"
            placeholder="Enter New Password"
          />
          <Button
            disabled={loadingNewPassword}
            className={"Button"}
            onClick={() => nextStep(3)}
          >
            {loadingNewPassword ? "Processing..." : "Set New Password"}
          </Button>
        </div>
      )}

      <div>
        <p className="mt-5 text-center">
          Already have an account?{" "}
          <Link onClick={() => _switchMode(0)}>Sign In</Link>
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword
