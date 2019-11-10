import React from "react"
import WodSty from "./listMyWork.module.css"
import flex from "../../pages/globalStyle/flexboxgrid.min.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
query {
 vueProject: file(relativePath: {eq: "workOne.jpg" }) {
     childImageSharp {
      fluid(maxWidth:400){
         ...GatsbyImageSharpFluid
      }
    }
 }
  laravelProject: file(relativePath: {eq: "autorecue.jpg"}) {
    childImageSharp {
      fluid(maxWidth:800) {
         ...GatsbyImageSharpFluid
      }
    }
  }
}
  `)
  return (
    <div className={`${flex.containerFluid}`}>
      <div className={`${WodSty.circle}`}/>
      <div className={`${flex.colMd} ${flex.colXs} ${WodSty.conteinerWord}`}>
        <p>My Latest Work</p>
        <div className={`${WodSty.lastWork} ${flex.colMd} ${flex.row}`}>
          <a className={`${flex.hvrPulse}`}>
            <Img className={`${WodSty.img}`} fluid={data.vueProject.childImageSharp.fluid}/>
          </a>
          <a className={`${flex.hvrPulse}`}>
            <Img className={`${WodSty.img}`} fluid={data.laravelProject.childImageSharp.fluid}/>
          </a>
        </div>
      </div>
    </div>
  )
}
