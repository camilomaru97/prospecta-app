import React from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenAlt, faCode, faBullhorn, faLightbulb, faBookOpen } from '@fortawesome/free-solid-svg-icons'


export const Servicios = () => {

    

    return (
        <>
            <div className="servicios__container">
        
            
                <NavLink
                    to='/diseño-grafico'
                    className="card"
                >
                    <div className="face face1">
                        <div className="content">
                            <h2 className="responsive">Diseño Grafico</h2>
                            <p>
                                Somos apasionados por transformar tus ideas y estamos listos para hacer realidad tus proyectos,
                                cuéntanos, ¿cuál es tu objetivo?
                            </p>
                            <button className='btn_servicios' >VER MÁS</button>
                        </div>
                    </div>
                    <div className="face face2">
                        <FontAwesomeIcon className='i' icon={faLightbulb} />
                        <h2>Diseño Grafico</h2>
                    </div>
                </NavLink>

                <NavLink
                    to='/branding'
                    className="card"
                >
                    <div className="face face1">
                        <div className="content">
                            <h2 className="responsive">Branding</h2>
                            <p>
                                Tener éxito en el mercado no es cosa de suerte, por eso estamos listos para crear una marca que
                                represente tu escencia y darle una personalidad unica.
                            </p>
                            <button className='btn_servicios' >VER MÁS</button>
                        </div>
                    </div>
                    <div className="face face2">
                        <FontAwesomeIcon className='i' icon={faBookOpen} />
                        <h2>Branding</h2>
                    </div>
                </NavLink>

                <NavLink
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
                </NavLink>

                <NavLink
                    to='/desarrollo-web'
                    className="card"
                >
                    <div className="face face1">
                        <div className="content">

                            <h2 className="responsive"> Desarrollo Web </h2>
                            <p>
                                Queremos hacer crecer tu negocio en línea, por eso, ponemos a tu disposición todo nuestro equipo
                                para ayudarte a
                                crear tu web a medida.
                            </p>
                            <button className='btn_servicios' >VER MÁS</button>
                        </div>
                    </div>
                    <div className="face face2">
                        <FontAwesomeIcon className='i' icon={faCode} />
                        <h2>Desarrollo Web</h2>
                    </div>
                </NavLink>

                <NavLink
                    to='/pauta-digital'
                    className="card"
                >
                    <div className="face face1">
                        <div className="content">

                            <h2 className="responsive"> Pauta  Digital </h2>
                            <p>
                                Queremos mostrarte que atraer más clientes a través de la publicidad es una de las formas más
                                convenientes para darle una mejor presencia digital a tu marca.
                            </p>
                            <button className='btn_servicios' > VER MÁS </button>
                        </div>
                    </div>
                    <div className="face face2">
                        <FontAwesomeIcon className='i' icon={faBullhorn} />
                        <h2>Pauta Digital</h2>
                    </div>
                </NavLink>
            </div>

        </>
    )
}
