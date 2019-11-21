import React from "react"
import headStyle from "./header.module.css"
import flex from "../../pages/globalStyle/flexboxgrid.min.module.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery2 {
      __typename
      file(relativePath: { eq: "nacxitDevelop.jpg" }) {
        childImageSharp {
           fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
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
            <AniLink fade to={"/"}>
              <Img
                fluid={data.file.childImageSharp.fluid}
                className={`${headStyle.imgPretty}`}
              />
            </AniLink>
          </div>
          <div
            className={`${flex.centerXs} ${flex.colXs} ${headStyle.navConteiner} `}
          >
            <nav className={`${headStyle.menu}`}>
              <AniLink
                fade
                to="/onMe/"
                className={`${headStyle.item} ${headStyle.hvrUnderlineReveal}`}
              >
                ABOUT
              </AniLink>
              <Link
                to="/#seccion1"
                className={`${headStyle.item} ${headStyle.hvrUnderlineReveal}`}
              >
                WORK
              </Link>
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
