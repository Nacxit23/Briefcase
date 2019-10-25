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
        <div className={`${flexGrid.row} ${flexGrid.colXs} ${flexGrid.middleXs} `}>
          <div className={`${headerStyle.logo} ${flexGrid.colXs6}`}>
            <Img fluid={data.file.childImageSharp.fluid} className={`${headerStyle.ImgPretty}`}/>
          </div>
          <div className={`${flexGrid.centerXs} ${flexGrid.colXs} ${headerStyle.navConteiner} `}>
            <nav className={`${headerStyle.menu}`}>
              <a href="#" className={`${headerStyle.item} ${headerStyle.hvrUnderlineReveal}`}> ABOUT</a>
              <a href="#" className={`${headerStyle.item} ${headerStyle.hvrUnderlineReveal}`}>WORK</a>
              <a href="#" className={`${headerStyle.item} ${headerStyle.hvrUnderlineReveal}`}>PORTAFOLIO</a>
              <a href="#" className={`${headerStyle.lastItem} ${headerStyle.hvrGlow}`}>HIRE ME</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}