import React from "react"
import HeaderBriefcase from "../headerBriefcase/header-briefcase"
import FooterBriefcase from "../footerBriefcase/footer-briefcase"

export default ({ children }) => (
  <>
    <HeaderBriefcase/>
    <main>{children}</main>
    <FooterBriefcase/>
  </>
)
