import React from 'react'
import "./priceTag.scss"

const PriceTag = ({price}) => {
  return (
    <>
    <div className="price-tag-container">
         <span className="price-tag">{price}</span>
    </div>
     
    </>
  )
}

export default PriceTag
