import React from 'react'

export const Planes = () => {
    return (
        <div className="dev__container-5">
            <h2>Planes</h2>
            <div className="dev__boxes">
                <div className="box-all-service">
                    <div className="plan">
                        <h3>
                            Todos nuestros <br /> planes incluyen
                        </h3>
                    </div>
                    <div className="info">
                        <img 
                            src={'../assets/desarrollo/logo-planes-03.png'}
                            alt = 'planes'
                        />
                        {/* <img src="../img/servicios/pauta/logo-planes-03.png" alt=""> */}
                        <li>
                            Hosting y dominio
                            (por un año).
                        </li>
                        <li>
                            Cuentas de correo personalizadas<br />
                            (Por un año).
                        </li>
                        <li>
                            Certificado de seguridad SSL. <br />
                            (Por un año)
                        </li>
                        <li>
                            Bases de datos.
                        </li>
                        <li>
                            Sitio adaptado a Tablet y Celular

                        </li>
                        <li>
                            Optimización de anuncios publicitarios.
                        </li>
                        <li>
                            Informes mensuales detallados de <br /> los resultados por campaña.
                        </li>
                        <li>
                            Integración de Facebook pixel.
                        </li>
                        <li className="bold">
                            1 semana de publicidad totalmente gratis en FB ADS (Tráfico).
                        </li>
                    </div>
                </div>

                <div className="boxes-service-cost">
                    <div className="plan">
                        <div className="info-plan">
                            <h3>PLAN EMPRENDEDOR</h3>
                            <p> Landing page vinculos Whatsapp y redes sociales. </p>
                            <div className="btn">
                                <a href="https://wa.me/573242711886">Contactar</a>
                            </div>
                        </div>
                        <div className="precio-plan">
                            <div className="precio">
                                <p>$799.000</p>
                            </div>
                        </div>
                    </div>

                    <div className="plan">
                        <div className="info-plan">
                            <h3>PLAN PREMIUM</h3>
                            <p> 7 Links / Vinculos a Whatsapp y redes sociales.  </p>
                            <div className="btn">
                                <a href="https://wa.me/573242711886">Contactar</a>
                            </div>
                        </div>
                        <div className="precio-plan color">
                            <div className="precio">
                                <p>$1.499.000</p>
                            </div>
                        </div>
                    </div>

                    <div className="plan">
                        <div className="info-plan">
                            <h3>PLAN ECOMMERCE</h3>
                            <p> 7 links / Carrito de compras / Pasarela de pago. </p>
                            <div className="btn">
                                <a href="https://wa.me/573242711886">Contactar</a>
                            </div>
                        </div>
                        <div className="precio-plan">
                            <div className="precio">
                                <p>$1.999.000</p>
                            </div>
                        </div>
                    </div>

                    <div className="plan">
                        <div className="info-plan">
                            <h3>PLAN PRO</h3>
                            <p> 7 links  / Ecommerce + Fotografía profesional.  </p>
                            <div className="btn">
                                <a href="https://wa.me/573242711886">Contactar</a>
                            </div>
                        </div>
                        <div className="precio-plan color">
                            <div className="precio">
                                <p>$2.490.000</p>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}
