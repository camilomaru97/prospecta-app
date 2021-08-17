import React from 'react'

export const HowTo = () => {
    return (
        <div className="redes__container-3">
            <h1>¿COMO LO HACEMOS?</h1>
            <div className="contenedor">

                <div className="img">
                    <img
                        className='desktop'
                        src={'assets/redes/img-comoFunciona-01.png'}
                        alt='how to desktop'
                    />
                    <img
                        className='responsive'
                        src={'assets/redes/responsive-comoFunciona-01.png'}
                        alt='how to desktop'
                    />
                </div>
                <div className="items">
                    <div className="item">
                        <p className="uno">
                            1. Se hará una reunión en la cual conoceremos un poco mas a detalle tu marca y el estado en el cual se encuentra.
                        </p>
                    </div>
                    <div className="item">
                        <p className="dos">
                            2. Crearemos una estrategia totalmente personalizada para ti y que responda a tus objetivos.
                        </p>
                    </div>
                    <div className="item">
                        <p className="tres">
                            3. Empezamos a diseñar las piezas graficas y las descripciones que se utilizaran para tu estrategia digital.
                        </p>
                    </div>
                    <div className="item">
                        <p className="cuatro">
                            4. Publicamos tus contenidos en los horarios más acordes para tu público y con una frecuencia.
                        </p>
                    </div>
                    <div className="item">
                        <p className="cinco">
                            5. Al final de cada mes se te entregaran estadísticas sobre el crecimiento de tu marca.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
