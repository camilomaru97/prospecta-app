import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'


export const SliderWrapDev= () => {

    let settings = {
        dots: true,
        infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                autoplaySpeed: 2500,
                arrows: false,
                dots: true
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 2500,
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 2500,
                arrows: false,
                dots: true
              }
            }
        ]

    }

    return (
        <Slider {...settings}>

            

            <div className='dev__card-wrapper'>
                <div className='dev__card'>
                    <div className='dev__card-image'>
                        <img
                            src={'assets/desarrollo/portafolio-ameliza.png'}
                            alt='ameliza'
                        />
                    </div>
                </div>
            </div>

            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img
                            src={'assets/desarrollo/portafolio-marplan.png'}
                            alt='brave'
                        />
                    </div>
                </div>
            </div>

            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img
                            src={'assets/desarrollo/portafolio-nexore.png'}
                            alt='cuberos'
                        />
                    </div>
                </div>
            </div>

            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img
                            src={'assets/desarrollo/portafolio-phonego.png'}
                            alt='jugos'
                        />
                    </div>
                </div>
            </div>
        </Slider>
    )
}