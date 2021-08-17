import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="logo">
                    {/* <img src="../img/logo-footer-08.png" alt="prospecta más"> */}
                    <img
                        src={'../assets/footer/logo-footer-08.png'}
                        alt='logo prospecta footer'
                    />
                </div>
                <div className="contacto">
                    <img
                        src={'../assets/footer/footer-msn.png'}
                        alt='mensaje prospecta'
                    />
                    <p>
                        info@prospectamas.co
                    </p>
                </div>
                <div className="contacto_2">
                    <img
                        src={'../assets/footer/footer-phone.png'}
                        alt='numero prospecta'
                    />
                    <p>
                        +57 324 271 1886
                    </p>
                </div>


            </footer>

            <div className="redes-sociales">
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
        </>
    )
}
