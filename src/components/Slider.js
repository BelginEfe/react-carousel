import { imageData } from '../assets/data'
import SlideBtn from './SlideBtn'
import './Slider.css'
import { useState } from 'react'
const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1);

    const moveLeft = () => {
        slideIndex === 1 ? setSlideIndex(5) : setSlideIndex((slideIndex - 1));
    }
    const moveRight = () => {
        slideIndex === 5 ? setSlideIndex(1) : setSlideIndex((slideIndex + 1));
    }

    const moveDot = (index) => setSlideIndex(index)

  return (
    <div className='container'>

    {
        imageData.map((item ,index) => (

            <div key={index} className={slideIndex === (index + 1) ? 'slide full-opacity' : 'slide'}>
                <img src={item.src} alt={item.title}  />
            </div>
        ))
    }

    <SlideBtn moveSlide={moveLeft} direction={'prev'} />
    <SlideBtn moveSlide={moveRight} direction={'next'} />

    <div className='dots-container'>
    {
        Array.from({ length : 5}).map((item, index) => (
           <div
           key={index}
           onClick={() => moveDot(index + 1)}
           className={`dot ${slideIndex === (index + 1) ? 'chosen' : ''}`}
           >
           </div> 
        ))
    }
    </div>
        
    </div>
  )
}

export default Slider