
import React from "react";

export default function Nav () {
    return ( 

        <nav id='centered'className="nav">
            <div>
                <a className="nav-logo"> Ellefson.Dev </a>
            </div>

            <ul className="nav-child">
                <li><a className="nav-link-home" href="#tiles"></a> // home  </li>
                <li><a className="nav-link-experience" href="#tiles"></a> // work </li>
                <li><a className="nav-link-about" href="#tiles"></a> // about </li>
                <li><a className="nav-link-contact" href="#tiles"></a> // contact </li>
            </ul>
        </nav>

    )
}