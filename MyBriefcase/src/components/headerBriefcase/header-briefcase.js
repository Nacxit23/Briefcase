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
            <AniLink cover to={"/"} duration={1}>
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
                cover
                to="/onMe/"
                duration={1}
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
              <Link
                to="/modalForm/"
                state={{
                  modal: true,
                }}
                className={`${headStyle.lastItem} ${headStyle.hvrGlow}`}
              >
                HIRE ME
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
