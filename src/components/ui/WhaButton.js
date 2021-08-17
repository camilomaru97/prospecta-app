import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export const WhaButton = () => {
    return (

        <a href="https://wa.me/573242711886"
            target = '_blank'
            className = 'btn-wsp'
            rel='noreferrer'

        >
            <FontAwesomeIcon icon={faWhatsapp} />
        </a>
    )
}
