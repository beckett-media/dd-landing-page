import React, { useEffect, useState } from "react"
import useFetch from "use-http"
import Link from "../Common/Link"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { login } from "../../actions/auth"
import Input from "../Common/Input"
import getOS from "../../utils/getOS"
import Notify from "../Notify"

const Signup = ({ switchMode }) => {
  const { loading, response, post } = useFetch(
    "https://api.duedilly.co/user/register-user"
  )
  const dispatch = useDispatch()
  const [user, setUser] = useState()
  const [notify, setNotify] = useState()
  const os = getOS()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async formData => {
    let {
      message,
      data: { user },
    } = await post("", { ...formData })
    if (user) setUser(user)
    if (message) {
      setNotify({
        success: user ? true : false,
        message,
      })
      setTimeout(() => {
        setNotify()
      }, 3000)
    }
  }

  useEffect(() => {
    let data = {}
    if (user && response.headers) {
      data["x-auth-token"] = response.headers.get("x-auth-token")
      data["x-refresh-token"] = response.headers.get("x-refresh-token")
      data = { ...data, firstTime: true, ...user }
      dispatch(login(data))
    }
  }, [user, response.headers])

  return (
    <div>
      <div>
        <Notify message={notify?.message} status={notify?.success} />
        <h4 className={"text-center mb-3 font-weight-bold"}>Create Account</h4>
        <p className={"text-center mb-3 text-secondary"}>
          New user? Create an account
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={errors["fullName"]}
            disabled={loading}
            {...register("fullName", {
              required: "Your full name is required.",
            })}
            label="Full Name"
            placeholder="Eg. John Doe"
          />
          <Input
            error={errors["email"]}
            disabled={loading}
            {...register("email", { required: "Email address is required." })}
            label="Email"
            placeholder="eg. john@doe.com"
          />
          <Input
            error={errors["password"]}
            disabled={loading}
            {...register("password", {
              required: "Please enter a secure password.",
            })}
            type="password"
            label="Password"
            placeholder="Enter a secure password"
          />
          <input {...register("osType")} type="hidden" value={os} />
          <input {...register("deviceToken")} type="hidden" value="12345" />
          <button disabled={loading} type="submit" className={"button"}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
      <div>
        <p className="mt-5 text-center">
          Already have an account?{" "}
          <Link onClick={() => switchMode(0)}>Sign In</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
