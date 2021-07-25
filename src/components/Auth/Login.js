import React, { useEffect, useState } from "react";
import useFetch from "use-http";
import Link from "../Common/Link";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";
import { notify } from "react-notify-toast";
import Input from "../Common/Input";
import getOS from "../../utils/getOS";

const Login = ({ switchMode }) => {
  const { loading, response, post } = useFetch("/authenticate/sign-in-user");
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const os = getOS();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    let {
      message,
      data: { user },
    } = await post("", { ...formData });
    if (user) setUser(user);
    if (message) {
      notify.show(message, user ? "success" : "error", 3000);
    }
  };

  useEffect(() => {
    let data = {};
    if (user && response.headers) {
      data["x-auth-token"] = response.headers.get("x-auth-token");
      data["x-refresh-token"] = response.headers.get("x-refresh-token");
      data = { ...data, ...user };
      dispatch(login(data));
    }
  }, [user, response.headers]);

  return (
    <div>
      <div>
        <h4 className={"text-center mb-3 font-weight-bold"}>Welcome</h4>
        <p className={"text-center mb-3 text-secondary"}>Sign-in to your account</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input error={errors["email"]} disabled={loading} {...register("email", { required: "Email address is required." })} type="email" label="Email" placeholder="eg. john@doe.com" />
          <Input error={errors["password"]} disabled={loading} {...register("password", { required: "Please enter your secure password." })} type="password" label="Password" placeholder="Enter your secure password" />
          <div style={{ textAlign: "right", marginBottom: 10 }}>
            <Link onClick={() => switchMode(2)}>Forgot Password?</Link>
          </div>
          <input {...register("osType")} type="hidden" value={os} />
          <input {...register("deviceToken")} type="hidden" value="12345" />
          <button disabled={loading} type="submit" className={"button"}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
      <div>
        <p className="mt-5 text-center">
          Don’t have an account? <Link onClick={() => switchMode(1)}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
