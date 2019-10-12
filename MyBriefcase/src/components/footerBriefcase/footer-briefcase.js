import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FlexGrid from "../../pages/globalStyle/flexboxgrid.min.module.css"
import FooterStyle from "./footer.module.css"

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
      <div className={`${FlexGrid.col} ${FlexGrid.colXs}`}>
        <div className={` ${FlexGrid.row} ${FlexGrid.colXs} 
        ${FlexGrid.aroundXs} ${FlexGrid.middleXs}`}>
          <p className={`${FooterStyle.footerText}`}>
            {data.site.siteMetadata.phoneNumber}
          </p>
          <div className={` ${FlexGrid.row} ${FlexGrid.aroundXs} ${FlexGrid.middleXs}`}>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
          <p className={`${FooterStyle.footerText}`}>
            {data.site.siteMetadata.personalEmail}
          </p>
        </div>
        <div className={`${FlexGrid.colXs12} ${FlexGrid.centerXs} ${FooterStyle.copyRight}`}>
          <p>
            {data.site.siteMetadata.copyRight}
          </p>
        </div>
      </div>
    </footer>
  )
}