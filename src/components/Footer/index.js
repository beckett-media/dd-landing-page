import * as React from "react"
import { Link } from "gatsby"

import DueDillyLogo from "../../images/due_dilly_logo.png"

import "./styles.css"

const linkSection1 = [
  {
    key: "linkSection1_3",
    label: "Press",
    path: "/press",
  },
  {
    key: "linkSection1_4",
    label: "Blog",
    path: "/blog",
  },
]

const linkSection2 = [
  {
    key: "linkSection2_1",
    label: "Twitter",
    path: "https://twitter.com/getduedilly",
  },
  {
    key: "linkSection2_2",
    label: "Instagram",
    path: "https://www.instagram.com/GETDUEDILLY",
  },
  {
    key: "linkSection2_3",
    label: "Facebook",
    path: "https://www.facebook.com/DueDilly.co/",
  },
  {
    key: "linkSection2_4",
    label: "TikTok",
    path: "https://www.tiktok.com/@getduedilly",
  },
  {
    key: "linkSection2_5",
    label: "Terms",
    path: "/terms-and-conditions",
  },
  {
    key: "linkSection2_6",
    label: "Privacy",
    path: "/privacy-policy",
  },
]

const Footer = () => (
  <footer className="py-4">
    <div className="container-md">
      <div className="row g-0 d-flex align-items-center justify-content-between">
        <div className="col-12 col-sm-4 col-md-2 text-center text-sm-start">
          <Link to="/">
            <img src={DueDillyLogo} alt="Due Dilly Logo" />
          </Link>
        </div>
        <div className="col-12 col-sm-8 col-md-10">
          <div>
            <ul className="nav justify-content-between justify-content-sm-end">
              {linkSection1.map(link => {
                return (
                  <li key={link.key} className="nav-item mb-0">
                    <Link
                      to={link.path}
                      className="nav-link px-2 py-2"
                      aria-current={link.label}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <ul className="nav justify-content-between justify-content-sm-end">
              {linkSection2.map(link => {
                return (
                  <li key={link.key} className="nav-item mb-0">
                    <Link
                      to={link.path}
                      className="nav-link px-2 py-2"
                      aria-current="page"
                      href="/"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
