import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'


export const SliderWrapPauta= () => {

    let settings = {
        dots: true,
        infinity: true,
        speed: 500,
        slidesToShow: 3,
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
                slidesToShow: 2,
                slidesToScroll: 2,
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

            

            <div className='pauta__card-wrapper'>
                <div className='pauta__card'>
                    <div className='pauta__card-image'>
                        <img
                            src={'assets/inicio/portafolio-alternativa.png'}
                            alt='alternativa'
                        />
                    </div>
                </div>
            </div>

            <div className='pauta__card-wrapper'>
                <div className='pauta__card'>
                    <div className='pauta__card-image'>
                        <img
                            src={'assets/inicio/portafolio-corev.png'}
                            alt='alternativa'
                        />
                    </div>
                </div>
            </div>

            <div className='pauta__card-wrapper'>
                <div className='pauta__card'>
                    <div className='pauta__card-image'>
                        <img
                            src={'assets/inicio/portafolio-hipermaquinas.png'}
                            alt='alternativa'
                        />
                    </div>
                </div>
            </div>

            <div className='pauta__card-wrapper'>
                <div className='pauta__card'>
                    <div className='pauta__card-image'>
                        <img
                            src={'assets/inicio/portafolio-phoneGo.png'}
                            alt='alternativa'
                        />
                    </div>
                </div>
            </div>

            <div className='pauta__card-wrapper'>
                <div className='pauta__card'>
                    <div className='pauta__card-image'>
                        <img
                            src={'assets/inicio/portafolio-rellenitos.png'}
                            alt='alternativa'
                        />
                    </div>
                </div>
            </div>

        </Slider>
    )
}

