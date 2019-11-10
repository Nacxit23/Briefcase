import React from "react"
import WodSty from "./listMyWork.module.css"
import flex from "../../pages/globalStyle/flexboxgrid.min.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import ReactTooltip from "react-tooltip"


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
   developer: file(relativePath: {eq: "developer.jpg"}) {
    childImageSharp {
      fluid(maxWidth:800) {
         ...GatsbyImageSharpFluid
      }
    }
  }
   developerLara: file(relativePath: {eq: "developer2.jpg"}) {
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
      <div className={`${flex.colMd} ${flex.colXs} ${flex.centerXs} ${WodSty.conteinerWord}`}>
        <p className={`${WodSty.tittle}`}>My Latest Work</p>
        <div className={`${WodSty.lastWork} ${flex.colMd} ${flex.centerXs} ${flex.row}`}>
          <a data-tip data-for='developer'>
            <Img className={`${WodSty.img} ${flex.hvrShrink}`} fluid={data.vueProject.childImageSharp.fluid}/>
            <ReactTooltip className={`${WodSty.toolTip}`} id='developer'>
              <p>
                This programas was developer in Vue.js and Laravel 8.7
              </p>
              <Img className={`${WodSty.developer}`} fluid={data.developer.childImageSharp.fluid}/>
            </ReactTooltip>
          </a>
          <a data-tip data-for='developer2' className={`${flex.hvrShrink}`}>
            <Img className={`${WodSty.img}`} fluid={data.laravelProject.childImageSharp.fluid}/>
            <ReactTooltip className={`${WodSty.toolTip}`} id='developer2'>
              <p>
                This programas was developer in laravel
              </p>
              <Img className={`${WodSty.developer}`} fluid={data.developerLara.childImageSharp.fluid}/>
            </ReactTooltip>
          </a>
        </div>
      </div>
    </div>
  )
}
