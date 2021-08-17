import React from 'react'

export const Planes = () => {
    return (
        <div className="branding__container-5">
        <h2>Planes</h2>
        <div className="boxes">
            <div className="box">
                <div className="plan">
                    <h3>
                        Emprendedor
                    </h3>
                </div>
                <div className="info responsive">
                    <h5>Desarrollo de logo <br/>
                        profesional.
                    </h5>
                    <h6>Entregables:</h6>
                    <li>
                        Logo en formato <br/>
                        vector (ai).
                    </li>
                    <li>
                        Logo en formato <br/>
                        png y jpg de alta resolución.
                    </li>
                    <li>
                        Tipografía.
                    </li>
                </div>
                <div className="precio">
                    <p>$100.000</p>
                    <div className="btn">
                        <a href="https://wa.me/573242711886">¡EMPECEMOS YA!</a>
                    </div>
                </div>
            </div>

            <div className="box">
                <div className="plan premium">
                    <h3>
                        Premium
                    </h3>
                </div>
                <div className="info">
                    <h5>Desarrollo de logo <br/>
                        profesional y manual de marca
                    </h5>
                    <h6>Entregables:</h6>
                    <li>
                        Manual de marca (Versiones de <br/> color del logo, identidad gráfica, <br/> gama cromática, usos
                        inadecuados <br/> y Aplicación de la marca en tres <br/> objetos).
                    </li>
                    <li>
                        Logo en formato vector (ai).
                    </li>
                    <li>
                        Logo en formato png y jpg de <br/> alta resolución.
                    </li>
                    <li>
                        Tipografia.
                    </li>
                </div>
                <div className="precio premium">
                    <p>$399.000</p>
                    <div className="btn">
                        <a href="https://wa.me/573242711886">¡EMPECEMOS YA!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
