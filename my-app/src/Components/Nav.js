
import React from "react";

import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Nav (props) {
    return ( 
        <div>
            <Container>
                <div className="socials">
                    <a href="https://github.com/Caleb-Ellefson">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/caleb-ellefson/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <button href="">
                        <FontAwesomeIcon icon={faEnvelope } onClick={props.toggle}/>
                        
                    </button>
                </div>
            </Container>
        </div>


    )
}