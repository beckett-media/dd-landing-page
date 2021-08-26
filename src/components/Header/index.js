import * as React from "react"
import { Link } from "gatsby"

import DueDillyLogo from "../../images/svgs/DueDillyLogo.svg"

import "./styles.css"
import { CONFIG } from "../../constants/Config"
import useFetch from "use-http"
import { useDispatch, useSelector } from "react-redux"
import { login, updateUser } from "../../actions/auth"

const headerLinks = [
  { key: "marketplace", label: "MARKETPLACE", path: "/#market-place" },
  { key: "mobile", label: "MOBILE", path: "/#mobile" },
  { key: "extension", label: "EXTENSION", path: "/#extension" },
  { key: "card-fac", label: "CARD FAC", path: "/#card-fac" },
]

const Header = ({ setModal, authKey }) => {
  const user = useSelector(({ auth }) => auth)
  const dispatch = useDispatch()
  const [activeLint, setActiveLink] = React.useState()

  const closeNavLink = () => {
    document.getElementById("navbarSupportedContent").classList.remove("show")
  }

  const _getUserInfo = async () => {
    let response = await fetch(`${CONFIG.base_url}/user/user-details`, {
      headers: {
        "x-app-token": CONFIG["x-app-token"],
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    })
    let {
      data: { user },
      success,
    } = await response.json()
    if (success && user) dispatch(updateUser(user))
  }

  React.useEffect(() => {
    if (window.location.hash) setActiveLink(window.location.hash.slice(1))
    else if (window.location.pathname != "/")
      setActiveLink(window.location.pathname.slice(1))
    // else setActiveLink("marketplace")

    if (localStorage.getItem("x-auth-token")) {
      _getUserInfo()
    }
  }, [])

  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-md py-2">
          <a className="navbar-brand" href="/">
            <DueDillyLogo />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              {headerLinks.map(item => (
                <li
                  key={item.key}
                  onClick={() => {
                    closeNavLink()
                    setActiveLink(item.key)
                  }}
                  className="nav-item mx-1 px-1"
                >
                  <Link
                    to={item.path}
                    className={`nav-link px-3${
                      activeLint === item.key ? " active" : ""
                    }`}
                    aria-current="page"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {(!user.id && (
                <>
                  <li
                    onClick={() => {
                      setActiveLink("login")
                      setModal("login")
                      closeNavLink()
                    }}
                    className="nav-item mx-1 px-1"
                  >
                    <div
                      className={`nav-link px-3${
                        activeLint === "login" ? " active" : ""
                      }`}
                      aria-current="page"
                    >
                      LOGIN
                    </div>
                  </li>

                  <li
                    onClick={() => {
                      setActiveLink("sign_up")
                      setModal("sign_up")
                      closeNavLink()
                    }}
                    className="nav-item mx-1 px-1"
                  >
                    <div
                      className={`nav-link gradient-link px-3${
                        activeLint === "sign_up" ? " active" : ""
                      }`}
                      aria-current="page"
                    >
                      SIGN UP
                    </div>
                  </li>
                </>
              )) || (
                <Link
                  to={`${CONFIG.marketplace_url}/account/user-information?auth=${authKey}`}
                >
                  <li className="nav-item mx-1 px-1 text-light">
                    {(user.profilePicture && (
                      <img
                        style={{ width: 30, height: 30 }}
                        className="rounded-circle"
                        src={`${CONFIG.base_url}/${user.profilePicture}`}
                      />
                    )) || (
                      <div
                        style={{
                          width: 30,
                          height: 30,
                          display: "inline-block",
                          verticalAlign: "middle",
                          marginRight: 5,
                          fontSize: "0.75rem",
                          lineHeight: "1.25rem",
                          textAlign: "center",
                          background: "#ccc",
                        }}
                        className="img-thumbnail rounded-circle"
                      >
                        <p>{user.fullName[0]}</p>
                      </div>
                    )}
                    <span
                      className="text-light"
                      style={{ fontSize: "0.75rem", marginLeft: 5 }}
                    >
                      {"  "}
                      {user.fullName}
                    </span>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
