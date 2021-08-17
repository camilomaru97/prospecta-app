import React from 'react'
import { SliderWrap } from './SliderWrap'


export const Carousel = () => {
    return (

        <div className='inicio__carousel-container'>
            <div className='inicio-container'>
                <div  className='inicio__slider__title'>
                    <h2>
                        ¿Qué esperas para ver un
                        <br />
                        cambio en tu negocio?
                    </h2>
                </div>

                <SliderWrap />
            </div>
        </div>
    )
}
