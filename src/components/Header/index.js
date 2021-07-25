import * as React from "react"
import { Link } from "gatsby"

import DueDillyLogo from "../../images/svgs/DueDillyLogo.svg"

import "./styles.css"

const headerLinks = [
  { key: "marketplace", label: "MARKETPLACE", path: "/" },
  { key: "mobile", label: "MOBILE", path: "/" },
  { key: "extention", label: "EXTENSION", path: "/" },
  { key: "card_fac", label: "CARD FAC", path: "/" },
  { key: "login", label: "LOGIN", path: "/" },
  { key: "sign_up", label: "SIGN UP", path: "/" },
]

const Header = () => {
  const [activeLint, setActiveLink] = React.useState("marketplace")
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-md py-3">
          <a className="navbar-brand" href="#">
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
                  onClick={() => setActiveLink(item.key)}
                  className="nav-item mx-1 px-1"
                >
                  <Link
                    to={item.path}
                    className={`nav-link px-3${
                      activeLint === item.key ? " active" : ""
                    }`}
                    aria-current="page"
                    href="#"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
