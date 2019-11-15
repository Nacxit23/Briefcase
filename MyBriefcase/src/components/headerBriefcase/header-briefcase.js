import React from "react"
import headStyle from "./header.module.css"
import flex from "../../pages/globalStyle/flexboxgrid.min.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery2 {
      __typename
      file(relativePath: { eq: "nacxitDevelop.jpg" }) {
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
      <div className={`${headStyle.header}`}>
        <div className={`${flex.row} ${flex.colXs} ${flex.middleXs} `}>
          <div className={`${headStyle.logo} ${flex.colXs6}`}>
            <Img
              fluid={data.file.childImageSharp.fluid}
              className={`${headStyle.imgPretty}`}
            />
          </div>
          <div
            className={`${flex.centerXs} ${flex.colXs} ${headStyle.navConteiner} `}
          >
            <nav className={`${headStyle.menu}`}>
              <a
                href="#"
                className={`${headStyle.item} ${headStyle.hvrUnderlineReveal}`}
              >
                {" "}
                ABOUT
              </a>
              <a
                href="#seccion1"
                className={`${headStyle.item} ${headStyle.hvrUnderlineReveal}`}
              >
                WORK
              </a>
              <a
                href="#"
                className={`${headStyle.item} ${headStyle.hvrUnderlineReveal}`}
              >
                PORTAFOLIO
              </a>
              <a
                href="#"
                className={`${headStyle.lastItem} ${headStyle.hvrGlow}`}
              >
                HIRE ME
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
