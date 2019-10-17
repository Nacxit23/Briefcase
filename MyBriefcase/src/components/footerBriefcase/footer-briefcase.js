import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FlexGrid from "../../pages/globalStyle/flexboxgrid.min.module.css"
import FooterStyle from "./footer.module.css"
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
      <div className={`${FlexGrid.col}`}>
        <div className={` ${FlexGrid.row} ${FlexGrid.aroundXs} ${FooterStyle.boxInformation}
        ${FlexGrid.middleXs} ${FlexGrid.colLg} ${FlexGrid.colXs}`}>
          <p className={`${FooterStyle.footerText}`}>
            {data.site.siteMetadata.phoneNumber}
          </p>
          <div className={`${FlexGrid.row} ${FooterStyle.iconBox}`}>
            <a className={FooterStyle.iconFontAwesome} href=""><FaFacebookSquare/></a>
            <a className={FooterStyle.iconFontAwesome} href=""><FaTwitterSquare/></a>
            <a className={FooterStyle.iconFontAwesome} href=""><FaLinkedin/></a>
          </div>
          <p className={`${FooterStyle.footerText}`}>
            {data.site.siteMetadata.personalEmail}
          </p>
        </div>
        <div className={`${FlexGrid.centerXs} ${FooterStyle.copyRight}`}>
          <p>
            {data.site.siteMetadata.copyRight}
          </p>
        </div>
      </div>
    </footer>
  )
}