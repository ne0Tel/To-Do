import React, { Component, useState } from 'react'
import Class from './Slider.module.css'
import arrowLeft from '../../../assets/icons/svg/reshot-icon-left-arrow-button-RF5DMQX396-95d98.svg'
import arrowRight from '../../../assets/icons/svg/reshot-icon-right-arrow-button-YAB8GEM7SD-c5f61.svg'

function Slider({items}) {

  const [slideIndex, setSlideIndex] = useState(0);
  let contentText;

  const btnNext = () => {
    if (slideIndex < items.length - 1) {
      setSlideIndex(slideIndex + 1)
    }
    else {
      setSlideIndex(0)
    }
  }
  
  const btnPrev = () => {
    if(slideIndex > 0) {
      setSlideIndex(slideIndex - 1)
    }
    else {
      setSlideIndex(items.length - 1)
    }
  }

  return (
    <div className={Class.commonStyleSlider}>
      
      <button className={Class.btnArrow} onClick={btnPrev}>
        <img src={arrowLeft}/>
      </button>

      {
        items.map((Component, index) => {
          switch (slideIndex) {
            case 0:
              contentText = '1 Слайд 1';
              break;

            case 1:
              contentText = '2 Слайд 2';
              break;

            default: 
              contentText = 'Что-то';
              break;
          }

          if(slideIndex === index) {
            return(
              <Component className={Class.btnSlide} children={contentText}/>
            )
          }
          // else {
          //   return(
          //     <Component className={Class.btnSlide}>Пусто</Component>
          //   )
          // }
        })
      }

      <button className={Class.btnArrow} onClick={btnNext}>
        <img src={arrowRight}/>
      </button>
    </div>
  )
}

export {Slider}
