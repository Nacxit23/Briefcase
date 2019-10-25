import React from "react"
import Layout from "../components/layout/layout"
import flexGrid from "./globalStyle/flexboxgrid.min.module.css"
import firstPage from "./firstPage.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FaChevronCircleDown } from "react-icons/fa"

const IndexPage = props => (
  <Layout>
    <div>
      <div className={`${flexGrid.row} ${flexGrid.colMd} ${flexGrid.middleMd}
       ${firstPage.firstPageStyle} ${flexGrid.colXs}`}>
        <div className={`${flexGrid.colMd6} ${firstPage.hvrBubbleRight}`}>
          <p className={`${firstPage.paragraphOne}`}> Hi, I am</p>
          <p className={`${firstPage.personName}`}>Nacxit Mayorga</p>
          <p className={`${firstPage.datePerson}`}>Freelance Backend/Frondend Developer </p>
        </div>
        <div className={`${firstPage.rightContainer} ${flexGrid.row} ${flexGrid.colMd}
        ${flexGrid.centerMd} ${flexGrid.middleMd} ${flexGrid.colXs} ${flexGrid.centerXs} ${flexGrid.middleXs}`}>
          <Img className={`${firstPage.profile} `} fluid={props.data.imageOne.childImageSharp.fluid}/>
        </div>
      </div>
      <div className={`${flexGrid.row} ${flexGrid.colMd} ${flexGrid.middleMd} 
        ${flexGrid.colXs} ${firstPage.informationFromMe}`}>
        <div className={`${firstPage.MyBiography} ${flexGrid.colMd6} ${flexGrid.centerMd} ${flexGrid.middleMd}
         ${flexGrid.colXs} ${flexGrid.centerXs}`}>
          <p className={`${firstPage.biographyText}`}>My Biography</p>
          <button className={`${firstPage.cvButton} ${firstPage.hvrShutterInHorizontal}`} type="button">
            <i><FaChevronCircleDown/></i> DOWNLOAD CV
          </button>
        </div>
        <div className={`${firstPage.presetation} ${flexGrid.colMd6} ${flexGrid.centerMd} ${flexGrid.middleMd}
         ${flexGrid.colXs}`}>
          <p className={`${firstPage.presetation}`}>
            I am a newly graduated student of the system engineering career in search of new work
            experience and new opportunities that help me develop
            in the working world <br/>
            <p className={`${firstPage.cite}`}>"¡Work hard dream big!"</p>
          </p>
        </div>
      </div>
        <div className={`${flexGrid.row} ${flexGrid.colMd} ${flexGrid.colXs} ${flexGrid.centerMd}
        ${flexGrid.centerXs}`}>
          <div className={`${firstPage.myWork}`}>
              <p>What can I do ?</p>
          </div>
        </div>
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
}
`