import React from 'react'

export const HowTo = () => {
    return (
        <div className="diseno__container-3">
            <div className="titulo">
                <h1>¿COMO LO HACEMOS?</h1>
            </div>
            <div className="contenedor">
                <div className="img">
                    <img
                        className='desktop'
                        src={'assets/diseño/img-comoFunciona-01.png'}
                        alt='how to desktop'
                    />
                    <img
                        className='responsive'
                        src={'assets/diseño/responsive-comoFunciona-01.png'}
                        alt='how to resp'
                    />
                </div>
                <div className="items">
                    <div className="item">
                        <p className="uno">
                            1. Se te asignara una persona para asesorarte a la hora de realizar un brief de diseño.
                        </p>
                    </div>
                    <div className="item">
                        <p className="dos">
                            2. Determinaremos todos los objetivos de tu marca para cumplir metas con la pieza grafíca.
                        </p>
                    </div>
                    <div className="item">
                        <p className="tres">
                            3. Nuestro equipo de diseño te entregará una propuesta de diseño.
                        </p>
                    </div>
                    <div className="item">
                        <p className="cuatro">
                            4. Podrás hacer una revisión y solicitar correcciones para que juntos determinemos el concepto gráfico final.
                        </p>
                    </div>
                    <div className="item">
                        <p className="cinco">
                            5. Te entregaremos la pieza lista para ayudarte a cumplir tus metas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
