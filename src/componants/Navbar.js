import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <div>

            {/* <!-- navbar start --> */}
            <nav className={`navbar navbar-expand-lg ps-5 sticky-nav ${props.isDarkMode ? 'card_light' : 'footer-dark'} `}>
                <div className="container-fluid">
                    <Link className="navbar-brand col-lg-2" to="/">
                        {props.isDarkMode === false ?
                            <img src="./assert/image/logo.png" alt="dark-logo" className="w-75" /> :
                            <img src="./assert/image/logo-dark.png" alt="logo" className="w-75" />
                        }

                    </Link>
                    <button className={`navbar-toggler ${props.isDarkMode ? 'text-dark' : 'text-white'}`} type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span id='collapse' className={`material-symbols-outlined ${props.isDarkMode ? 'text-dark' : 'text-light'} fs-1`}>menu</span>
                    </button>
                    <div className="col-lg-7 collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto  text-lg-end mb-2 mb-lg-0">
                            <li className="nav-item px-1">
                                <Link className={`nav-link  ${props.isDarkMode ? 'text-dark' : 'text-light'}`} aria-current="page" to="/" >Home</Link>
                            </li>
                            <li className="nav-item dropdown px-1">
                                <Link className={`nav-link  ${props.isDarkMode ? 'text-dark' : 'text-light'}`} to="/About">About</Link>
                                <ul className={`dropdown-menu mega-menu ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} aria-labelledby="navbarDropdown">
                                    <div className="row p-3">
                                        <div className="col-lg-3" style={{borderRight:"1px solid rgba(255,255,255,0.3)"}}>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/Portofolio">Team</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Portfolio</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Testimonial</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Timeline</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Tab</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Pricing</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Split Section</Link></li>
                                           
                                        </div>
                                        
                                        <div className="col-lg-3" style={{borderRight:"1px solid rgba(255,255,255,0.3)"}}>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/Portofolio">Call To Action</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Video</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Gallery</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Contact</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Brand</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Portfolio</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">404</Link></li>
                                        </div>
                                        <div className="col-lg-3" style={{borderRight:"1px solid rgba(255,255,255,0.3)"}}>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/Portofolio">Advance Tab</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Brand Carousel</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Advance Pricing</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Portfolio Details</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Blog Details</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Privacy Policy</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Profile</Link></li>
                                        </div>
                                        <div className="col-lg-3">
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/Portofolio">Button</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Service</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Counter</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Progressbar</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Accordion</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Social Share</Link></li>
                                            <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Blog Grid</Link></li>
                                        </div>
                                    </div>

                                </ul>
                            </li>
                            <li className="nav-item px-1">
                                <Link className={`nav-link  ${props.isDarkMode ? 'text-dark' : 'text-light'}`} to="/Element">Elements</Link>
                            </li>
                            <li className="nav-item dropdown px-1">
                                <Link className={`nav-link  ${props.isDarkMode ? 'text-dark' : 'text-light'}`} to="/Blog" id="navbarDropdown" role="button" aria-expanded="false">
                                    Blog
                                </Link>
                                <ul className={`dropdown-menu ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} aria-labelledby="navbarDropdown">
                                    <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/Blog">Blog Grid</Link></li>
                                    <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/BlogGridSidebar">Blog Grid Sidebar</Link></li>
                                    <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/BlogGridSidebar">Blog List View</Link></li>
                                    <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/BlogGridSidebar">Blog List View Sidebar</Link></li>
                                    <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/BlogGridSidebar">Blog Details</Link></li>

                                </ul>
                            </li>
                            <li className="nav-item dropdown px-1">
                                <Link className={`nav-link  ${props.isDarkMode ? 'text-dark' : 'text-light'}`} to="/Portofolio">Portfolio</Link>
                                <ul className={`dropdown-menu ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} aria-labelledby="navbarDropdown">
                                    <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/Portofolio">Portfolio Default</Link></li>
                                    <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Portfolio Three Column</Link></li>
                                    <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Portfolio Full Width</Link></li>
                                    <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Portfolio Grid Layout</Link></li>
                                    <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Portfolio Box Layout</Link></li>
                                    <li><Link className={`dropdown-item  ${props.isDarkMode ? 'light_mode' : 'dark_mode'}`} to="/PortofolioDefault">Portfolio Details</Link></li>

                                </ul>
                            </li>
                            <li className="nav-item px-1">
                                <Link className={`nav-link  ${props.isDarkMode ? 'text-dark' : 'text-light'}`} to="/Contact">Contact</Link>
                            </li>
                        </ul>
                        <form className="col-lg-3 d-flex align-items-center ms-5">
                            <button className="btn-clr text-white">BUY NOW</button>
                            <div>
                                <button onClick={props.toggleMode} className="ms-3 bg-btn">
                                    {props.isDarkMode ?
                                        <span className="material-symbols-outlined text-white">dark_mode</span> :
                                        <span className="material-symbols-outlined text-white">light_mode</span>}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar