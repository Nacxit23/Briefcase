import React from "react"
import infoUni from "./infoUniversity.module.css"
import flex from "../../pages/globalStyle/flexboxgrid.min.module.css"
import { FaBookOpen } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const {
    uniLogo: { childImageSharp: logoImg },
  } = useStaticQuery(logo)

  console.log(logoImg)
  return (
    <div className={`${flex.containerfluid}`}>
      <div
        className={`${flex.row} ${flex.colMd13} ${flex.colXs} ${infoUni.uniStyle}`}
      >
        <div className={`${flex.colMd6} ${flex.centerMd} ${infoUni.myLife}`}>
          <i className={`${infoUni.iconSize}`}>
            <FaBookOpen />
          </i>
          <p className={infoUni.sentence}>
            I studied at the Universidad nacional de Ingenieria my cereer is
            System Engineering gradueted in 2018 I like what I do and I always
            try to do my best.
          </p>
        </div>
        <div
          className={`${flex.colMd6} ${flex.centerMd} ${infoUni.logoConteiner}`}
        >
          <Img className={`${infoUni.logo}`} fluid={logoImg.fluid} />
        </div>
      </div>
    </div>
  )
}

export const logo = graphql`
  {
    uniLogo: file(relativePath: { eq: "uniLogo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
