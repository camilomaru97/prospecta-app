import React from 'react'

export const Planes = () => {
    return (
        <div className="diseno__container-5">
            <h2>Planes</h2>
            <div className="boxes">
                <div className="box uno">
                    <div className="img">
                        <img
                            src={'assets/diseño/planes-emoji-03.png'}
                            alt='emoji 3'
                        />
                        {/* <img src="../img/servicios/diseño-grafico/planes-emoji-03.png" alt="planes diseño grafico"> */}
                    </div>
                    <div className="info">
                        <p>
                            Nuestros presupuestos son personalizados <br /> y se ajustan a tus necesidades, contáctanos <br />
                            y juntos creemos soluciones.
                        </p>
                    </div>
                </div>
                <div className="box dos">
                    <div className="img ">
                        <img
                            src={'assets/diseño/img-planes-04.png'}
                            alt='planes'
                        />
                        {/* <img className="secundario" src="../img/servicios/diseño-grafico/img-planes-04.png" alt="planes diseño grafico"> */}
                    </div>
                    <div className="info ">
                        <p className="titulo">
                            NO PIERDAS MAS TIEMPO, <br />
                            TRANSFORMA TU MARCA
                        </p>
                    </div>
                    <div className="btn">
                        <a href="https://wa.me/573242711886">¡EMPECEMOS YA!</a>
                    </div>
                </div>
            </div>

            {/* <!--responsive--> */}
            <div className="boxes-responsive">
                <div className="box-responsive uno-responsive">
                    <div className="img-responsive">
                        <img
                            src={'assets/diseño/planes-emoji-03.png'}
                            alt='emoji'
                        />
                        {/* <img src="../img/servicios/diseño-grafico/planes-emoji-03.png" alt="planes diseño grafico"> */}
                    </div>
                    <div className="info-responsive">
                        <p>
                            Nuestros presupuestos son personalizados y se ajustan a tus necesidades, contáctanos
                            y juntos creemos soluciones.
                        </p>
                    </div>
                </div>
                <div className="box-responsive dos-responsive">
                    <div className="img ">
                        <img
                            src={'assets/diseño/img-planes-04.png'}
                            alt='plan responsive'
                        />
                        {/* <img className="secundario-responsive" src="../img/servicios/diseño-grafico/img-planes-04.png" alt="planes diseño grafico"> */}
                    </div>
                    <div className="info-responsive ">
                        <p className="titulo-responsive">
                            NO PIERDAS MAS TIEMPO, <br />
                            TRANSFORMA TU MARCA
                        </p>
                    </div>
                    <div className="btn-responsive">
                        <a href="https://wa.me/573242711886">¡EMPECEMOS YA!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
