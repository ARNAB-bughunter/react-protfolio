import React from 'react'
import {Link} from 'react-scroll'


const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-dark  navbar-expand-lg ">
            <div className="container">
                <Link className="text-white text-3xl font-bold px-4" to="home">ARNAB</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white text-xl">
                            <li className="nav-item ">
                                <Link className="px-2 font-bold  hover:text-green-500"  aria-current="page" spy={true} smooth={true} to="home">Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="px-2 font-bold hover:text-green-500"  aria-current="page" spy={true} smooth={true} offset={50} duration={500} delay={100} to="about">About</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="px-2 font-bold hover:text-green-500"  aria-current="page" spy={true} smooth={true} offset={50} duration={500} delay={100} to="skill">Skills</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="px-2 font-bold hover:text-green-500" aria-current="page" spy={true} smooth={true}  offset={50} duration={500} delay={100}to="education">Education</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="px-2 font-bold hover:text-green-500" aria-current="page" spy={true} smooth={true} offset={50} duration={500} delay={100} to="work">Work</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="px-2 font-bold hover:text-green-500" aria-current="page" spy={true} smooth={true} offset={50} duration={500} delay={100} to="contact">Contact</Link>
                            </li>

                        </ul>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar