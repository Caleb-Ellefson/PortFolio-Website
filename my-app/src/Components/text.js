import React from "react";

export default function Text () {
    return (
        <div>
            <h1 className='title'> Welcome. </h1>
            <p className="about">
            Hello, I'm Caleb Ellefson, a full stack developer skilled in creating full stack applications with proficiency in both front-end and back-end development.
             I continuously strive to improve my skills and stay up-to-date with the latest technologies.
             I'm dedicated to delivering high-quality full stack applications to my clients.
             Thank you for visiting my website. 
             I hope you find the information here useful.
            </p>

            <h4 className="projects"> Projects </h4>
            <ul className="projects-links">
                <ol>
                    <a className='link' href="https://github.com/code50/69178718/tree/main/finance"> Stock Trader </a>
                </ol>
                <ol>
                    <a href="https://github.com/Caleb-Ellefson/MemeGenerator"> MemeGenerator </a>
                </ol>
                <ol>
                    <a href="https://github.com/Caleb-Ellefson/Sorting-Visualizer"> Sorting Visualizer </a>
                </ol>
                <ol>
                    <a href="https://github.com/Caleb-Ellefson/PortFolio-Website"> This Website </a>
                </ol>
            </ul>
        </div>
    )
}