import {React, useRef} from 'react'
import './Slider.css'
import bg1 from '../Media/1.jpg'
import bg3 from '../Media/3.jpg'
import bg4 from '../Media/4.jpg'
import bg5 from '../Media/5.jpg'
import bg6 from '../Media/6.jpg'
import bg7 from '../Media/7.jpg'
import bg8 from '../Media/8.jpg'
import bg9 from '../Media/9.jpg'
import bg10 from '../Media/10.jpg'
import bg11 from '../Media/11.jpg'
import bg12 from '../Media/12.jpg'
import bg13 from '../Media/13.jpg'
import bg14 from '../Media/14.jpg'

const Slider = () => {

    let imageContainerRef = useRef(null)
    const image = [bg1, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13, bg14]

    const prev = () => imageContainerRef.current.scrollLeft -=350
    const next = () => imageContainerRef.current.scrollLeft +=350


  return (
    <div className='page-container'>
      <div className="slider-container">
        <div className="written-content">
          <h2>Get your attire</h2> <h2 className='red'> and makeup in one roof !</h2>
        </div>
        <div className="content">
            <div className="prev" onClick={prev}></div>
            <div className="slide-panel" ref={imageContainerRef}>
                {image.map(image => { return (<img src={image} alt='' />)})}
            </div>
            <div className="next" onClick={next}></div>
        </div>
        </div>
    </div>
  )
}

export default Slider