import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight, faCheckCircle, faBriefcase, faMobileAlt, faAddressBook, faStream } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export const Navbar = () => {

    const [active, setActive] = useState(true);
    
    const handleToggle = () => {
        setActive(!active)
    }




    return (
        <nav className='nav__menu'>
            <Link
                className="nav__navbar-brand"
                to="/inicio"
            >
                <img src={'../assets/inicio/logo-banner-principal.png'} alt='logo prospecta'></img>
            </Link>
            <ul
                className='nav__menu-items'
                className={`nav__menu-items ${active ? '' : 'show nav__menu-items'}`}
            >
                <div className='nav__navbar-menu-items'>

                    <NavLink
                        activeClassName="active"
                        activeStyle={{
                            color: "#E7425E"
                        }}
                        className='a'
                        onClick={handleToggle}
                        exact
                        to="/inicio"
                    >
                        <FontAwesomeIcon className='i' icon={faHome} />
                        Inicio
                        <FontAwesomeIcon className='i' icon={faChevronRight} />
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        activeStyle={{
                            color: "#E7425E"
                        }}
                        className='a'
                        onClick={handleToggle}
                        exact
                        to="/nosotros"
                    >
                        <FontAwesomeIcon className='i' icon={faCheckCircle} />
                        Nosotros
                        <FontAwesomeIcon className='i' icon={faChevronRight} />
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        activeStyle={{
                            color: "#E7425E"
                        }}
                        className='a'
                        onClick={handleToggle}
                        exact
                        to="/servicios"
                    >
                        <FontAwesomeIcon className='i' icon={faBriefcase} />
                        Servicios
                        <FontAwesomeIcon className='i' icon={faChevronRight} />
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        activeStyle={{
                            color: "#E7425E"
                        }}
                        className="porta"
                        className='a'
                        onClick={handleToggle}
                        exact
                        to="/portafolio"
                    >
                        <FontAwesomeIcon className='i' icon={faMobileAlt} />
                        Portafolio
                        <FontAwesomeIcon className='i' icon={faChevronRight} />
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        activeStyle={{
                            color: "#E7425E"
                        }}
                        className="contact"
                        className='a'
                        onClick={handleToggle}
                        exact
                        to="/contacto"
                    >
                        <FontAwesomeIcon className='i' icon={faAddressBook} />
                        Contacto
                        <FontAwesomeIcon className='i' icon={faChevronRight} />
                    </NavLink>
                </div>

                <div className="img-footer">
                    <img src={'../assets/inicio/menu-mobile-03.png'} alt='caricatura menu responsive' />
                    <h2>Conócenos</h2>
                    <h3>info@prospectamas.co</h3>
                </div>

                <div className="footer-menu">
                    <a href="https://www.facebook.com/Prospecta-M%C3%A1s-111264740294479">
                        <FontAwesomeIcon className='i' icon={faFacebook} />
                    </a>
                    <a href="https://instagram.com/prospectamas?igshid=lluryp3hmqer">
                        <FontAwesomeIcon className='i' icon={faInstagram} />
                    </a>
                    <a href="https://wa.me/573242711886">
                        <FontAwesomeIcon className='i' icon={faWhatsapp} />
                    </a>
                </div>
            </ul>
            <div className="btn-menu"
                onClick={handleToggle}
            >
                <FontAwesomeIcon className='i' icon={faStream} />
            </div>
        </nav>
    )
}
