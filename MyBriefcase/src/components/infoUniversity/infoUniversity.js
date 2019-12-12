import React from "react"
import infoUni from "./infoUniversity.module.css"
import flex from "../../pages/globalStyle/flexboxgrid.min.module.css"
import {
  FaBookOpen,
  FaAngular,
  FaVuejs,
  FaLaravel,
  FaCss3Alt,
  FaJava,
  FaPhp,
  FaJs,
  FaHtml5,

} from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const {
    uniLogo: { childImageSharp: logoImg },
    gatsbyLogo: { childImageSharp: logoGatsby },
    logoC: { childImageSharp: logoCPlus },
    graphqlIcon: { childImageSharp: graphqlIcon },
    photoshop: {childImageSharp: photoIcon},
    illustrator: {childImageSharp: illustratorIcon},
    animate: {childImageSharp: animatedIcon},
  } = useStaticQuery(logo)

  return (
    <div className={`${flex.containerfluid} ${infoUni.contener}`}>
      <div
        className={`${flex.row} ${flex.colMd13} ${flex.centerMd} ${flex.colXs} ${flex.centerXs} ${infoUni.uniStyle}`}
      >
        <div
          className={`${flex.colMd6} ${flex.centerMd} ${flex.centerXs} ${infoUni.myLife}`}
        >
          <i className={`${infoUni.iconSize}`}>
            <FaBookOpen />
          </i>
          <p className={infoUni.sentence}>
            I studied at the Universidad nacional de Ingenieria my career is
            System Engineering gradueted in 2018 I like what I do and I always
            try to do my best.
          </p>
        </div>
        <div
          className={`${flex.row} ${flex.middleMd} ${flex.middleMd} ${flex.centerMd} ${flex.colXs} ${flex.centerXs} ${flex.middleXs} ${flex.colMd6}`}
        >
          <Img className={`${infoUni.logo}`} fluid={logoImg.fluid} />
        </div>
      </div>
      <div
        className={`${flex.colMd} ${flex.centerMd} ${flex.colXs} ${flex.centerXs} `}
      >
        <h1 className={infoUni.titleKnowledge}>Knowledge that I handle</h1>
        <h2 className={infoUni.tittleTwo}>FrameWork</h2>
        <div
          className={`${flex.row} ${flex.colMd} ${flex.aroundMd} ${flex.centerXs} ${infoUni.iconConteiner}`}
        >
          <div>
            <h4 className={infoUni.nameWork}> ANGULAR</h4>
            <i className={`${flex.colMd4} ${infoUni.iconWorkAngular}`}>
              <FaAngular />
            </i>
            <p className={`${infoUni.nameFramework}`}>Basic</p>
          </div>
          <div>
            <h4 className={infoUni.nameWork}> VUE JS</h4>
            <i className={`${flex.colMd4} ${infoUni.iconWorkVue}`}>
              <FaVuejs />
            </i>
            <p className={`${infoUni.nameFramework}`}>Basic</p>
          </div>
          <div>
            <h4 className={infoUni.nameWork}> LARAVEL</h4>
            <i className={`${flex.colMd4} ${infoUni.iconLaravel}`}>
              <FaLaravel />
            </i>
            <p className={`${infoUni.nameFramework}`}>Basic</p>
          </div>
          <div>
            <h4 className={infoUni.nameWork}> GATSBY JS</h4>
            <Img className={`${infoUni.iconGatsby}`} fluid={logoGatsby.fluid} />
            <p className={`${infoUni.nameFramework}`}>Medium</p>
          </div>
        </div>
        <h2 className={infoUni.tittleTwo}>Programming language</h2>
        <div
          className={`${flex.row} ${flex.colMd} ${flex.aroundMd} ${flex.centerXs} ${infoUni.iconConteiner}`}
        >
          <div>
            <h4 className={infoUni.nameWork}> C++</h4>
            <Img className={`${infoUni.iconC}`} fluid={logoCPlus.fluid} />
            <p className={`${infoUni.nameFramework}`}>Medium</p>
          </div>
          <div>
            <h4 className={infoUni.nameWork}> JAVA</h4>
            <i className={`${flex.colMd4} ${infoUni.iconJava}`}>
              <FaJava />
            </i>
            <p className={`${infoUni.nameFramework}`}>Medium</p>
          </div>
          <div>
            <h4 className={infoUni.nameWork}> PHP</h4>
            <i className={`${flex.colMd4} ${infoUni.iconPhp}`}>
              <FaPhp />
            </i>
            <p className={`${infoUni.nameFramework}`}>Medium</p>
          </div>
          <div>
            <h4 className={infoUni.nameWork}> JAVASCRIPTS</h4>
            <i className={`${flex.colMd4} ${infoUni.iconJs}`}>
              <FaJs />
            </i>
            <p className={`${infoUni.nameFramework}`}>Medium</p>
          </div>
        </div>
        <h2 className={infoUni.tittleTwo}>Query language</h2>
        <div
          className={`${flex.row} ${flex.colMd} ${flex.aroundMd} ${flex.centerXs} ${infoUni.iconConteiner}`}
        >
          <div>
            <h4 className={infoUni.nameWork}> GraphQl</h4>
            <Img className={`${infoUni.iconGraphQl}`} fluid={graphqlIcon.fluid} />
            <p className={`${infoUni.nameFramework}`}>Medium</p>
          </div>

        </div>
        <h2 className={infoUni.tittleTwo}>Layout language and style</h2>
        <div
          className={`${flex.row} ${flex.colMd} ${flex.aroundMd} ${flex.centerXs} ${infoUni.iconConteiner}`}
        >
          <div>
            <h4 className={infoUni.nameWork}> CSS3</h4>
            <i className={`${flex.colMd4} ${infoUni.iconCss}`}>
              <FaCss3Alt />
            </i>
            <p className={`${infoUni.nameFramework}`}>Medium</p>
          </div>
          <div>
            <h4 className={infoUni.nameWork}> HTML</h4>
            <i className={`${flex.colMd4} ${infoUni.iconHtml}`}>
              <FaHtml5 />
            </i>
            <p className={`${infoUni.nameFramework}`}>Medium</p>
          </div>
        </div>
        <h2 className={infoUni.tittleTwo}>Design programs</h2>
        <div
          className={`${flex.row} ${flex.colMd} ${flex.aroundMd} ${flex.centerXs} ${infoUni.iconConteiner}`}
        >
          <div>
            <h4 className={infoUni.nameWork}> PhotoShop CC</h4>
            <Img className={`${infoUni.iconPhoto}`} fluid={photoIcon.fluid} />
            <p className={`${infoUni.nameFramework}`}>Medium</p>
          </div>
          <div>
            <h4 className={infoUni.nameWork}> Illustrator CC</h4>
            <Img className={`${infoUni.iconIllus}`} fluid={illustratorIcon.fluid} />
            <p className={`${infoUni.nameFramework}`}>Basic</p>
          </div>
          <div>
            <h4 className={infoUni.nameWork}> Animate CC</h4>
             <Img className={`${infoUni.iconAnima}`} fluid={animatedIcon.fluid} />
            <p className={`${infoUni.nameFramework}`}>Basic</p>
          </div>
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
    gatsbyLogo: file(relativePath: { eq: "gatsby.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logoC: file(relativePath: { eq: "c.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    graphqlIcon: file(relativePath: { eq: "graphql.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photoshop: file(relativePath: { eq: "photoshop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrator: file(relativePath: { eq: "Illustrator.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
      animate: file(relativePath: { eq: "animate.png" }) {
       childImageSharp {
         fluid(maxWidth: 400) {
           ...GatsbyImageSharpFluid
         }
       }
     }
  }
`
