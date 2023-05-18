import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { $ } from 'react-jquery-plugin'

function Footer(props) {
    const ScrollToTop = (e) => {
        e.preventDefault()
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    useEffect(() => {
        return () => {
            $(document).on("scroll", function () {
                var pageTop = $(document).scrollTop()
                var pageBottom = pageTop + $(window).height()
                var tags = $(".fadein")

                for (var i = 0; i < tags.length; i++) {
                    var tag = tags[i]

                    if ($(tag).offset().top < pageBottom) {
                        $(tag).addClass("visible")
                    } else {
                        $(tag).removeClass("visible")
                    }
                }
            })
        }
    }, [])

    return (
        <div>
            <footer className={props.isDarkMode ? 'card_light' : 'footer-dark'}>
                <div className='px-3 px-md-5'>
                    <div className='px-3 px-md-5'>
                        <div className='py-5 fadein'>
                            <div className="d-inline-block py-4">
                                <Link className="navbar-brand" href="./index.html" aria-label="Space">
                                    <Link className="navbar-brand" href="/">
                                        {props.isDarkMode === false ?
                                            <img src="./assert/image/logo.png" alt="dark-logo" className="w-75" /> :
                                            <img src="./assert/image/logo-dark.png" alt="logo" className="w-100" />
                                        }
                                    </Link>
                                </Link>
                            </div>
                            <div className="row justify-content-between">
                                <p className={`col-lg-5 col-md-5 col-12 ${props.isDarkMode ? 'text-dark' : 'text-white'} fs-5`}>If you want to create a corporate template you can purshace now our doob template. </p>
                                <div className="col-lg-3 col-md-4 col-12"><button className="btn-clr ">Purchase Doob <span className="material-symbols-outlined">arrow_forward</span></button></div>
                            </div>

                        </div>
                        <hr />
                    </div>
                    <div className="row py-5">
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="mt-lg-0 mt-2">
                                <h5 className={props.isDarkMode ? 'text-dark' : 'text-white'}>  <h5 className='mb-3'>Services</h5>
                                </h5>

                                {/* <!-- List --> */}
                                <ul className="list-unstyled list-py-1">
                                    <li><a className={`link-sm ${props.isDarkMode ? 'text-dark' : 'text-light'} text-decoration-none`} href="/">About</a></li>
                                    <li><a className={`link-sm ${props.isDarkMode ? 'text-dark' : 'text-light'} text-decoration-none`} href="/">Portfolio</a></li>
                                    <li><a className={`link-sm ${props.isDarkMode ? 'text-dark' : 'text-light'} text-decoration-none`} href="/">Contact</a></li>
                                    <li><a className={`link-sm ${props.isDarkMode ? 'text-dark' : 'text-light'} text-decoration-none`} href="/">Services</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="mt-lg-0 mt-2">
                                <h5 className={props.isDarkMode ? 'text-dark' : 'text-white'}>
                                    <h5>Solutions
                                    </h5>
                                </h5>

                                {/* <!-- List --> */}
                                <ul className="list-unstyled list-py-1">
                                    <li><a className={`link-sm ${props.isDarkMode ? 'text-dark' : 'text-light'} text-decoration-none`} href="/">Pricing</a></li>
                                    <li><a className={`link-sm ${props.isDarkMode ? 'text-dark' : 'text-light'} text-decoration-none`} href="/">Team</a></li>
                                    <li><a className={`link-sm ${props.isDarkMode ? 'text-dark' : 'text-light'} text-decoration-none`} href="/">Advance Tab</a></li>
                                    <li><a className={`link-sm ${props.isDarkMode ? 'text-dark' : 'text-light'} text-decoration-none`} href="/">Service</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="mt-lg-0 mt-2">
                                <h5 className={props.isDarkMode ? 'text-dark' : 'text-white'}>
                                    <h5 className="mb-3">Company</h5>
                                </h5>

                                {/* <!-- List --> */}
                                <ul className="list-unstyled list-py-1">
                                    <li><a className={`link-sm ${props.isDarkMode ? 'text-dark' : 'text-light'} text-decoration-none`} href="/">Gallery</a></li>
                                    <li><a className={`link-sm ${props.isDarkMode ? 'text-dark' : 'text-light'} text-decoration-none`} href="/">About Us
                                    </a></li>
                                    <li><a className={`link-sm ${props.isDarkMode ? 'text-dark' : 'text-light'} text-decoration-none`} href="/">Testimonial</a></li>
                                    <li><a className={`link-sm ${props.isDarkMode ? 'text-dark' : 'text-light'} text-decoration-none`} href="/">Timeline</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="mt-lg-0 mt-2">
                                <h5 className={props.isDarkMode ? 'text-dark' : 'text-white'}>
                                    <h5>Resources</h5>
                                </h5>

                                {/* <!-- List --> */}
                                <ul className="list-unstyled list-py-1">
                                    <li><a className={`link-sm ${props.isDarkMode ? 'text-dark' : 'text-light'} text-decoration-none`} href="/">Gallery</a></li>
                                    <li><a className={`link-sm ${props.isDarkMode ? 'text-dark' : 'text-light'} text-decoration-none`} href="/">About Us
                                    </a></li>
                                    <li><a className={`link-sm ${props.isDarkMode ? 'text-dark' : 'text-light'} text-decoration-none`} href="/">Testimonial</a></li>
                                    <li><a className={`link-sm ${props.isDarkMode ? 'text-dark' : 'text-light'} text-decoration-none`} href="/">Timeline</a></li>
                                </ul>
                                {/* <!-- End List --> */}
                            </div>
                        </div>
                        {/* <!-- End Col --> */}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="mt-lg-0 mt-3">
                                <h5 className={props.isDarkMode ? 'text-dark' : 'text-white'}>
                                    <h5 className="mb-3">Stay With Us.</h5>
                                </h5>
                                <p>2000+ Our clients are subscribe Around the World</p>
                            
                            <form action="">
                                <input type="email" name="email" className={`form-control text-light shadow-none ${props.isDarkMode ? 'card_light' : 'card_dark'} outline-0`} id="email" value="Enter Your Email Here" required />
                                <input type="submit" className="btn-clr mt-3" value="submit" />
                            </form>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}


                    </div>
                    {/* <!-- End Row --> */}
                </div>
            </footer>
            <div>
                <button id="scroll-to-top" className={`btn scrollTop`} onClick={(e) => { ScrollToTop(e) }}><span className={`material-symbols-outlined  fs-1 rounded-circle ${props.isDarkMode ? 'card_light' : 'card_dark'} ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>expand_less</span></button>
            </div>
        </div>
    )
}

export default Footer