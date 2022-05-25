import React from 'react'
import { prevArrow, nextArrow} from '../assets/icons/Arrow'

const SlideBtn = ({moveSlide, direction}) => {
  return (
    <button onClick={moveSlide} className={`btn-slide ${direction === 'prev' ? 'prev' : 'next'}`}>
        <img src={direction === 'prev' ? prevArrow : nextArrow} alt={direction} />
    </button>
  )
}

export default SlideBtn