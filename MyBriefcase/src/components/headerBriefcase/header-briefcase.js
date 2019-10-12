import React from "react"
import headerStyle from "./header.module.css"
import flexGrid from "../../pages/globalStyle/flexboxgrid.min.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
  query MyQuery2 {
  __typename
  file(relativePath: {eq: "nacxitDevelop.jpg"}) {
    childImageSharp {
      fluid {
        aspectRatio
        base64
        sizes
        src
        srcSet
      }
    }
  }
}
  `)
  return (
    <header>
      <div className={`${headerStyle.header}`}>
        <div className={`${flexGrid.row} ${flexGrid.colXs} 
      ${flexGrid.betweenXs} ${flexGrid.middleXs} `}>
          <div className={`${headerStyle.logo} ${flexGrid.colXs6}`}>
            <Img fluid={data.file.childImageSharp.fluid} className={`${headerStyle.ImgPretty}`}/>
          </div>
          <div className={`${flexGrid.centerXs} ${flexGrid.colXs}`}>
            <nav className={`${headerStyle.menu}`}>
              <a href="#" className={`${headerStyle.item}`}> ABOUT</a>
              <a href="#" className={headerStyle.item}>WORK</a>
              <a href="#" className={headerStyle.item}>PORTAFOLIO</a>
              <a href="#" className={`${headerStyle.lastItem}`}>HIRE ME</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}