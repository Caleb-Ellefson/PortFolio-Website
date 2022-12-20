
import React from "react";

import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons'

export default function Nav () {
    return ( 
        <div>
            <Container>
                <div>
                    <a href="https://github.com/Caleb-Ellefson">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/caleb-ellefson/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/Caleb-Ellefson">
                        <FontAwesomeIcon icon={faGithub } />
                    </a>
                </div>
            </Container>
        </div>


    )
}