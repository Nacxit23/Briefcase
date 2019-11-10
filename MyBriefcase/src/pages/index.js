import React from "react"
import flex from "./globalStyle/flexboxgrid.min.module.css"
import firge from "./firstPage.module.css"
import pdFile from "../../assets/Nacxit_Armando_Mayorga_cv.pdf"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FaFilePdf } from "react-icons/fa"

import ListMyWork from "../components/listMyWork/listMyWork"
import Layout from "../components/layout/layout"

const IndexPage = props => (
  <Layout>
    <div>
      <div className={`${flex.row} ${flex.colMd} ${flex.middleMd}
       ${firge.firstPageStyle} ${flex.colXs}`}>
        <div className={`${flex.colMd6} ${firge.hvrBubbleRight}`}>
          <p className={`${firge.paragraphOne}`}> Hi, I am</p>
          <p className={`${firge.personName}`}>Nacxit Mayorga</p>
          <p className={`${firge.datePerson}`}>Freelance Backend/Frondend Developer </p>
        </div>
        <div className={`${firge.rightContainer} ${flex.row} ${flex.colMd}
        ${flex.centerMd} ${flex.middleMd} ${flex.colXs} ${flex.centerXs} ${flex.middleXs}`}>
          <Img className={`${firge.profile} `} fluid={props.data.imageOne.childImageSharp.fluid}/>
        </div>
      </div>
      <div className={`${flex.row} ${flex.colMd} ${flex.middleMd} ${flex.colXs} ${firge.informationFromMe}`}>
        <div className={`${firge.myBiography} ${flex.colMd6} ${flex.centerMd} ${flex.middleMd}
         ${flex.colXs} ${flex.centerXs}`}>
          <p className={`${firge.biographyText}`}>My Biography</p>
          <a href={pdFile} className={`${firge.cvButton} ${firge.hvrShutterInHorizontal}`}>
            <i><FaFilePdf/></i> View CV
          </a>
        </div>
        <div className={`${firge.presetation} ${flex.colMd6} ${flex.centerMd} ${flex.middleMd}
         ${flex.colXs}`}>
          <p className={`${firge.presetation}`}>
            I am a newly graduated student of the system engineering career in search of new work
            experience and new opportunities that help me develop
            in the working world <br/>
            <strong className={`${firge.cite}`}>"¡Work hard dream big!"</strong>
          </p>
        </div>
      </div>
      <div className={`${flex.col} ${flex.colMd} ${flex.colXs} ${flex.centerMd}
        ${flex.centerXs}`}>
        <div className={`${firge.myWork}`}>
          <p>What can I do ?</p>
        </div>
        <div className={`${firge.canInbox} ${flex.row} ${flex.colMd} ${flex.colXs} 
        ${flex.aroundMd} ${flex.centerXs}`}>
          <div className={`${flex.col}`}>
            <Img className={`${firge.icon}`} fluid={props.data.imageIconInterface.childImageSharp.fluid}/>
            <p className={`${firge.tittle}`}> Development</p>
            <p>Angular JS, Vue.js, Laravel,..</p>
          </div>
          <div className={`${flex.col}`}>
            <Img className={`${firge.icon2}`} fluid={props.data.imageIconDesign.childImageSharp.fluid}/>
            <p className={`${firge.tittle}`}> Disign</p>
            <p>Photoshop, Illustrator, ..</p>
          </div>
          <div className={`${flex.col}`}>
            <Img className={`${firge.icon3}`} fluid={props.data.imageIconWireframe.childImageSharp.fluid}/>
            <p className={`${firge.tittle}`}> Wireframe</p>
            <p>Wireframe.cc, UxPin, Adobe Xd, ..</p>
          </div>
        </div>
      </div>
      <ListMyWork/>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query {
  imageOne: file(relativePath: {eq: "nacxitMayorga.jpg"}) {
    childImageSharp {
      fluid(maxWidth:400){
         ...GatsbyImageSharpFluid
      }
    }
  }
  imageIconInterface: file(relativePath: {eq: "incon-interface.png"}){
    childImageSharp {
      fluid(maxWidth:400){
          ...GatsbyImageSharpFluid
      }
    }
  }
   imageIconDesign: file(relativePath: {eq: "disign-icon.png"}){
    childImageSharp {
      fluid(maxWidth:400){
          ...GatsbyImageSharpFluid
      }
    }
  }
  imageIconWireframe: file(relativePath: {eq: "wireframe-icon.png"}){
    childImageSharp {
      fluid(maxWidth:400){
          ...GatsbyImageSharpFluid
      }
    }
  }
}
`