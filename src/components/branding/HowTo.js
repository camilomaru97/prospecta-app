import React from 'react'

export const HowTo = () => {
    return (
        <div className="branding__container-3">
            <h1>¿COMO LO HACEMOS?</h1>
            <div className="contenedor">

                <div className="img">
                    <img
                        className='desktop'
                        src={'../assets/branding/img-comoFunciona-01.png'}
                        alt='como funciona 1'
                    />
                    <img
                        className='responsive'
                        src={'../assets/branding/responsive-comoFunciona-01.png'}
                        alt='como funciona 1'
                    />
                </div>
                <div className="items">
                    <div className="item">
                        <p className="uno">
                            1. Se te asignara una persona <br /> para asesorarte a la hora de <br /> realizar un brief de tu
                            marca.
                        </p>
                    </div>
                    <div className="item">
                        <p className="dos">
                            2. Determinaremos todos los <br /> objetivos de tu marca para <br /> que esta transmita lo que <br />
                            estás buscando.
                        </p>
                    </div>
                    <div className="item">
                        <p className="tres">
                            3. Nuestro equipo de diseño te <br /> entregará dos propuesta de <br /> diseño.
                        </p>
                    </div>
                    <div className="item">
                        <p className="cuatro">
                            4. Podrás hacer una revisión y <br /> solicitar correcciones para <br /> que juntos determinemos el
                            <br /> concepto
                            gráfico final de tu <br /> marca.
                        </p>
                    </div>
                    <div className="item">
                        <p className="cinco">
                            5. Te entregaremos tu marca <br /> lista para salir al mercado.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
