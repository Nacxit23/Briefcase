import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import flexGrid from "../../pages/globalStyle/flexboxgrid.min.module.css"
import footerStyle from "./footer.module.css"
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa"

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
  __typename
  site {
    siteMetadata {
      copyRight
      phoneNumber
      personalEmail
    }
  }
}
  `)
  return (
    <footer>
      <div className={`${flexGrid.col}`}>
        <div className={` ${flexGrid.row} ${flexGrid.aroundMd} ${flexGrid.colMd} ${footerStyle.boxInformation}
        ${flexGrid.middleMd}  ${flexGrid.colXs} ${flexGrid.centerXs} ${flexGrid.middleXs}`}>
          <p className={`${footerStyle.footerText}`}>
            {data.site.siteMetadata.phoneNumber}
          </p>
          <div className={`${flexGrid.row} ${footerStyle.iconBox}`}>
            <a className={`${footerStyle.iconFontAwesome} ${footerStyle.hvrFloatShadow}`}
               href=""><FaFacebookSquare/></a>
            <a className={`${footerStyle.iconFontAwesome} ${footerStyle.hvrFloatShadow}`} href=""><FaTwitterSquare/></a>
            <a className={`${footerStyle.iconFontAwesome} ${footerStyle.hvrFloatShadow}`} href=""><FaLinkedin/></a>
          </div>
          <p className={`${footerStyle.footerText}`}>
            {data.site.siteMetadata.personalEmail}
          </p>
        </div>
        <div className={`${flexGrid.centerXs} ${footerStyle.copyRight}`}>
          <p>
            {data.site.siteMetadata.copyRight}
          </p>
        </div>
      </div>
    </footer>
  )
}