import React from 'react'

export const InfoHeader = () => {
    return (
        <div className="diseno__container-1">
            <div className="diseno__info-banner">
                <div className="info">
                    <h1>DISEÑO GRÁFICO</h1>
                    <p>
                        Transformamos tus ideas en ventas con piezas gráficas que conecten con el publico y logren comunicar lo que tu marca desea.
                    </p>
                    <p>
                        Tenemos el equipo perfecto para transformar tus oportunidades en casos de éxito.
                    </p>
                    <div className="btn">
                        <a href="https://wa.me/573242711886">Contactar</a>
                    </div>
                </div>

                <div className="img-info">
                    <img 
                        src = {'assets/diseño/michael-vector-06.png'}
                        alt = 'digitalizacion'
                    />
                    {/* <img src="../img/servicios/diseño-grafico/michael-vector-06.png" alt="digitalizacion"> */}
                </div>

            </div>
        </div>
    )
}
