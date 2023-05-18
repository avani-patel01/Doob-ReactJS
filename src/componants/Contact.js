import React, { useState, useEffect } from 'react'
import ContactForm from './ContactForm';

function Contact(props) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div>
            <section className={`${props.isDarkMode ? 'light_mode' : 'dark_mode'} mt-100`}>
                <div className=' overflow-hidden'>
                    <div className='py-lg-5 py-4'>
                        <div className='py-lg-5 py-4'>
                            <div className={`${props.isDarkMode ? 'text-black' : 'text-white'} text-center pt-5`}>
                                <div className={`d-inline-block mb-3 p-2 ${props.isDarkMode ? 'card_light' : 'card_dark'}`}>
                                    <div className="overflow-hidden">
                                        <p className={`fadein ${show ? 'visible' : ''}`} style={{ marginBottom: "0" }}>
                                            <h5 className="text-clr mb-0 overflow-hidden">
                                                Contact Form</h5>
                                        </p>
                                    </div>
                                </div>
                                <h2 className={`display-5 pb-2 ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Our Contact Address Here.</h2>
                            </div>

                            <div className='px-3 px-md-5'>
                                <div className='px-3 px-lg-5'>
                                    <div className="py-5">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 col-12 pt-lg-0 pt-4 fade-animation">
                                                <div className={`card p-3  ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100`}>
                                                    <div className="card-body">
                                                        <div>
                                                            <span className="material-symbols-outlined display-5" style={{
                                                                color:
                                                                    "#059dff"
                                                            }}>headphones</span>
                                                        </div>
                                                        <h5 className={`${props.isDarkMode ? 'text-dark' : 'text-white'} py-3`}>Contact Phone Number</h5>
                                                        <p className='title-text mb-0'>+444 555 666 777</p>
                                                        <p className='title-text'>+222 222 222 333</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12 pt-lg-0 pt-4 fade-animation ">
                                                <div className={`card p-3  ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100`}>
                                                    <div className="card-body">
                                                        <div>
                                                            <span className="material-symbols-outlined display-5" style={{
                                                                color:
                                                                    "#059dff"
                                                            }}>mail</span>
                                                        </div>
                                                        <h5 className={`${props.isDarkMode ? 'text-dark' : 'text-white'} py-3 `}>Our Email Address</h5>
                                                        <p className='title-text mb-0'>admin@gmail.com</p>
                                                        <p className='title-text '>example@gmail.com</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12 pt-lg-0 pt-4 fade-animation ">
                                                <div className={`card p-3 ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100`} >
                                                    <div className="card-body">
                                                        <div>
                                                            <span className="material-symbols-outlined display-5" style={{
                                                                color:
                                                                    "#059dff"
                                                            }}>home_pin</span>
                                                        </div>
                                                        <h5 className={`${props.isDarkMode ? 'text-dark' : 'text-white'} py-3`}>Our Location</h5>
                                                        <p className='title-text mb-0'>5678 Bangla Main Road, cities 580</p>
                                                        <p className='title-text'>GBnagla, example 54786</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='py-lg-5 py-4'>
                                            <div className="row">
                                                <div className="col-lg-7 col-12 my-3">
                                                    <ContactForm isDarkMode={props.isDarkMode}/>
                                                </div>
                                                <div className="col-lg-5 col-12 my-3">
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26547304.1819595!2d-117.01734646830674!3d35.68592150149809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1683460287205!5m2!1sen!2sin" width="100%" height="100%" style={{ border: "0", borderRadius: "10px" }} allowfullscreen="" loading="lazy" title='1' referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact