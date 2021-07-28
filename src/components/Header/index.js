import * as React from "react"
import { Link } from "gatsby"

import DueDillyLogo from "../../images/svgs/DueDillyLogo.svg"

import "./styles.css"

const headerLinks = [
  { key: "marketplace", label: "MARKETPLACE", path: "/" },
  { key: "mobile", label: "MOBILE", path: "/#mobile" },
  { key: "extention", label: "EXTENSION", path: "/#extention" },
  { key: "card-fac", label: "CARD FAC", path: "/#card-fac" },
]

const Header = ({ setModal }) => {
  const [activeLint, setActiveLink] = React.useState()

  const closeNavLink = () => {
    document.getElementById("navbarSupportedContent").classList.remove("show")
  }
  React.useEffect(() => {
    if (window.location.hash) setActiveLink(window.location.hash.slice(1))
    else if (window.location.pathname != "/")
      setActiveLink(window.location.pathname.slice(1))
    else setActiveLink("marketplace")
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
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
