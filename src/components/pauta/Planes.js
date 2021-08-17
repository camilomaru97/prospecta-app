import React from 'react'

export const Planes = () => {
    return (
        <div className="pauta__container-5">
            <h2>Planes</h2>
            <div className="pauta__boxes">
                <div className="box-all-service">
                    <div className="plan">
                        <h3>
                            Todos nuestros <br /> planes incluyen
                        </h3>
                    </div>
                    <div className="info">
                        <img
                            src={"assets/pauta/logo-planes-03.png"}
                            alt="logo-pauta"
                        />
                        <li>
                            Un experto en ADS a cargo de tu marca.
                        </li>
                        <li>
                            Segmentación detallada a los <br />
                            públicos objetivos.
                        </li>
                        <li>
                            Optimización del presupuesto.
                        </li>
                        <li>
                            Asesoría y estrategia digital.
                        </li>
                        <li>
                            Creación de piezas publicitarias y <br /> copy´s
                        </li>
                        <li>
                            Optimización de anuncios publicitarios.
                        </li>
                        <li>
                            Informes mensuales detallados de <br /> los resultados por campaña.
                        </li>
                        <li>
                            Reunión mensual (análisis resultados).
                        </li>
                        <li className="bold">
                            El presupuesto de las campañas es asumido por el cliente.
                        </li>
                    </div>
                </div>

                <div className="boxes-service-cost">
                    <div className="plan">
                        <div className="info-plan">
                            <h3>PLAN EMPRENDEDOR</h3>
                            <p> 2 campañas FB e IG / 4 piezas graficas / 4 Copy’s </p>
                            <div className="btn">
                                <a href="https://wa.me/573242711886">Contactar</a>
                            </div>
                        </div>
                        <div className="precio-plan">
                            <div className="precio">
                                <p>$250.000</p>
                            </div>
                        </div>
                    </div>

                    <div className="plan">
                        <div className="info-plan">
                            <h3>PLAN PREMIUM</h3>
                            <p> 3 campañas FB e IG / 6 piezas graficas / 6 Copy’s </p>
                            <div className="btn">
                                <a href="https://wa.me/573242711886">Contactar</a>
                            </div>
                        </div>
                        <div className="precio-plan color">
                            <div className="precio">
                                <p>$450.000</p>
                            </div>
                        </div>
                    </div>

                    <div className="plan">
                        <div className="info-plan">
                            <h3>PLAN PRO</h3>
                            <p> 5 campañas FB e IG / 10 piezas graficas / 10 Copy’s </p>
                            <div className="btn">
                                <a href="https://wa.me/573242711886">Contactar</a>
                            </div>
                        </div>
                        <div className="precio-plan">
                            <div className="precio">
                                <p>$599.000</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
