import React from "react"
import flex from "../../pages/globalStyle/flexboxgrid.min.module.css"
import { FaQuoteLeft } from "react-icons/fa"
import sentBrief from "./SentenceBriefcase.module.css"

const SentenceBriefcase = props => {
  return (
    <div className={`${flex.containerFluid}`}>
      <div
        className={`${flex.main} ${flex.colMd} ${flex.colXs} ${flex.centerXs} ${flex.centerMd}`}
      >
        <i className={`${sentBrief.mark}`}>
          <FaQuoteLeft />
        </i>
        <p className={`${sentBrief.sentence}`}>
          "Dreams without goals are just dreams; and they will lead you to
          disappointments. The goals are the path to your dreams; but they
          cannot be achieved without discipline and consistence"
        </p>
        <h4 className={`${sentBrief.author}`}>Denzel Washintong</h4>
      </div>
    </div>
  )
}

export default SentenceBriefcase
