import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenAlt, faCode, faBullhorn } from '@fortawesome/free-solid-svg-icons'

export const Servicios = () => {

    return (
        <>
            <div className="container_3">
                <Link
                    to='/redes-sociales'
                    className="card"
                >
                    <div className="face face1">
                        <div className="content">

                            <h2 className="responsive">Redes Sociales</h2>
                            <p>
                                Nuestro objetivo es ayudarte a crear estrategias de marketing que conecten con tus clientes a
                                través de diferentes contenidos que los fidelicen a tu marca.
                            </p>
                            <button className='btn_servicios' >VER MÁS</button>
                        </div>
                    </div>
                    <div className="face face2">
                        <FontAwesomeIcon className='i' icon={faPenAlt} />
                        <h2>Redes Sociales</h2>
                    </div>
                </Link>

                <Link
                    to='/desarrollo-web'
                    className="card"
                >
                    <div className="face face1">
                        <div className="content">

                            <h2 className="responsive">Desarrollo Web</h2>
                            <p>
                                Queremos hacer crecer tu negocio en línea, por eso, ponemos a tu disposición todo nuestro equipo
                                para ayudarte a
                                crear tu web a medida y que cumpla con tus necesidades.
                            </p>
                            <button className='btn_servicios' >VER MÁS</button>
                        </div>
                    </div>
                    <div className="face face2">
                        <FontAwesomeIcon className='i' icon={faCode} />
                        <h2>Desarrollo Web</h2>
                    </div>
                </Link>

                <Link
                    to='/pauta-digital'
                    className="card"
                >
                    <div className="face face1">
                        <div className="content">

                            <h2 className="responsive">Pauta  Digital</h2>
                            <p>
                                Queremos mostrarte que atraer más clientes a través de la publicidad es una de las formas más
                                convenientes para darle una mejor presencia digital a tu marca.
                            </p>
                            <button className='btn_servicios' >VER MÁS</button>
                        </div>
                    </div>
                    <div className="face face2">
                        <FontAwesomeIcon className='i' icon={faBullhorn} />
                        <h2>Pauta Digital</h2>
                    </div>
                </Link>
            </div>

            <div className="btn-servicios-inicio">
                <Link to='/servicios'>VER MÁS</Link>
            </div>

        </>
    )
}
