import React, { useState, useEffect } from 'react'
import { $ } from 'react-jquery-plugin'
import VideoPlayer from './VideoPlayer';
function About(props) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    useEffect(() => {
        var counted = 0;
        $(window).on("scroll", function () {

            var oTop = $('#counter').offset().top - window.innerHeight;
            if (counted === 0 && $(window).scrollTop() > oTop) {
                $('.count').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    },
                        {
                            duration: 1000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                            }
                        });
                });
                counted = 1;
            }

        });
    }, []);

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

    useEffect(() => {
        return () => {
            $(document).on("scroll", function () {
                var pageTop = $(document).scrollTop()
                var pageBottom = pageTop + $(window).height()
                var tags = $(".fadein-1-1")

                for (var i = 0; i < tags.length; i++) {
                    var tag = tags[i]

                    if ($(tag).offset().top < pageBottom) {
                        $(tag).addClass("visible-3")
                    } else {
                        $(tag).removeClass("visible-3")
                    }
                }
            })
        }
    }, [])
    useEffect(() => {
        return () => {
            $(document).on("scroll", function () {
                var pageTop = $(document).scrollTop()
                var pageBottom = pageTop + $(window).height()
                var tags = $(".fadein-1-2")

                for (var i = 0; i < tags.length; i++) {
                    var tag = tags[i]

                    if ($(tag).offset().top < pageBottom) {
                        $(tag).addClass("visible-3")
                    } else {
                        $(tag).removeClass("visible-3")
                    }
                }
            })
        }
    }, [])
    useEffect(() => {
        return () => {
            $(document).on("scroll", function () {
                var pageTop = $(document).scrollTop()
                var pageBottom = pageTop + $(window).height()
                var tags = $(".fadein-1-3")

                for (var i = 0; i < tags.length; i++) {
                    var tag = tags[i]

                    if ($(tag).offset().top < pageBottom) {
                        $(tag).addClass("visible-3")
                    } else {
                        $(tag).removeClass("visible-3")
                    }
                }
            })
        }
    }, [])
    useEffect(() => {
        return () => {
            $(document).on("scroll", function () {
                var pageTop = $(document).scrollTop()
                var pageBottom = pageTop + $(window).height()
                var tags = $(".fadeLeft")

                for (var i = 0; i < tags.length; i++) {
                    var tag = tags[i]

                    if ($(tag).offset().top < pageBottom) {
                        $(tag).addClass("visible-1")
                    } else {
                        $(tag).removeClass("visible-1")
                    }
                }
            })
        }
    }, [])
    useEffect(() => {
        return () => {
            $(document).on("scroll", function () {
                var pageTop = $(document).scrollTop()
                var pageBottom = pageTop + $(window).height()
                var tags = $(".fadeRight")

                for (var i = 0; i < tags.length; i++) {
                    var tag = tags[i]

                    if ($(tag).offset().top < pageBottom) {
                        $(tag).addClass("visible-2")
                    } else {
                        $(tag).removeClass("visible-2")
                    }
                }
            })
        }
    }, [])


    return (
        <div className={`${props.isDarkMode ? 'light_mode' : 'dark_mode'} mt-100`}>
            <div className="bg-img-about ">
                <div className="d-flex justify-content-center align-items-center h-100 w-100 p-sm-5 p-3">
                    <div className={`text-white text-center`}>
                        <div className={`d-inline-block mb-3 p-2 ${props.isDarkMode ? 'card_light' : 'card_dark'}`}>
                            <div className="overflow-hidden">
                                <p className={`fadein ${show ? 'visible' : ''}`} style={{ marginBottom: "0" }}>
                                    <h5 className="text-clr mb-0 overflow-hidden">
                                        Our Company's About Details.
                                    </h5>
                                </p>
                            </div>
                        </div>
                        <h1 className="display-4 fw-bold">We are a Corporate
                            <br /> Business Agency.</h1>
                    </div>
                </div>
            </div>

            <div className='px-3 px-md-5'>
                <div className='px-3 px-lg-5'>
                    <div className='py-lg-5 py-4'>
                        <div className='py-lg-5 py-4'>
                            <div className='row'>
                                <div className={`col-lg-6 ${props.isDarkMode ? 'text-black' : 'text-white'}`}>
                                    <h4 className='display-6'>We are creative digital agency working for our company brands.</h4>
                                </div>
                                <div className="col-lg-6 pt-lg-0 pt-5">
                                    <p className={`pb-3 ${props.isDarkMode ? 'text-black' : 'text-white'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quis. Ullam accusantium dignissimos repellendus nemo fugiat numquam, nisi odio adipisci. Veniam neque itaque expedita officiis rem ipsa! Ratione, rem reiciendis?</p>
                                </div>
                            </div>
                        </div>

                        <div className='fadein py-lg-5 py-4'>
                            <div className='row g-0 justify-content-center'>
                                <div className='col-md-2 col-6'><img src="assert/image/brand-01.png" alt="brand-01" className='w-100' /></div>
                                <div className='col-md-2 col-6'><img src="assert/image/brand-02.png" alt="brand-02" className='w-100' /></div>
                                <div className='col-md-2 col-6'><img src="assert/image/brand-03.png" alt="brand-03" className='w-100' /></div>
                                <div className='col-md-2 col-6'><img src="assert/image/brand-04.png" alt="brand-04" className='w-100' /></div>
                                <div className='col-md-2 col-6'><img src="assert/image/brand-05.png" alt="brand-05" className='w-100' /></div>
                                <div className='col-md-2 col-6'><img src="assert/image/brand-06.png" alt="brand-06" className='w-100' /></div>
                                <div className='col-md-2 col-6'><img src="assert/image/brand-07.png" alt="brand-07" className='w-100' /></div>
                                <div className='col-md-2 col-6'><img src="assert/image/brand-08.png" alt="brand-08" className='w-100' /></div>
                                <div className='col-md-2 col-6'><img src="assert/image/brand-01.png" alt="brand-01" className='w-100' /></div>
                            </div>
                        </div>

                    </div>
                    <hr className='m-0' />
                    {/* about div end */}

                    {/* service div start */}
                    <div>
                        <div className='py-lg-5 py-4'>
                            <div className={`${props.isDarkMode ? 'text-black' : 'text-white'} text-center pt-5`}>
                                <div className={`d-inline-block mb-3 p-2 ${props.isDarkMode ? 'card_light' : 'card_dark'}`}>
                                    <div className="overflow-hidden">
                                        <p className={`fadein ${show ? 'visible' : ''}`} style={{ marginBottom: "0" }}>
                                            <h5 className="text-clr mb-0 overflow-hidden">
                                                what we can do for you</h5></p>
                                    </div>
                                </div>
                                <h2 className={`display-5 pb-2 ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Services provide for you.</h2>
                                <p className='text-light'>There are many variations of passages of Lorem Ipsum available,<br />
                                    but the majority have suffered alteration.</p>
                            </div>
                            <div className="py-4">
                                <div className="row pb-5">
                                    <div className="col-lg-4 col-md-6 col-12 pt-lg-0 pt-4 text-center fadein-1-1">
                                        <div className={`card p-2  ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100`}>
                                            <div className="card-body">
                                                <div>
                                                    <span className="material-symbols-outlined display-5" style={{
                                                        color:
                                                            "#059dff"
                                                    }}>show_chart</span>
                                                </div>
                                                <p className={`title-text ${props.isDarkMode ? 'text-dark' : 'text-white'} py-3`}>Awarded Design</p>
                                                <p className='text-light'>There are many variations variations of passages of Lorem Ipsum
                                                    available, but the majority have suffered.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 fadein-1-2 pt-lg-0 pt-4 text-center">
                                        <div className={`card p-2  ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100`}>
                                            <div className="card-body">
                                                <div>
                                                    <span className="material-symbols-outlined display-5" style={{
                                                        color:
                                                            "#fb5343"
                                                    }}>cast_connected</span>
                                                </div>
                                                <p className={`title-text ${props.isDarkMode ? 'text-dark' : 'text-white'} py-3 `}>Design & Creative</p>
                                                <p className='text-light'>Passages there are many variations variations of of Lorem Ipsum available, but the majority have suffered.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 fadein-1-3 pt-lg-0 pt-4 text-center">
                                        <div className={`card p-2 ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100`}>
                                            <div className="card-body">
                                                <div>
                                                    <span className="material-symbols-outlined display-5" style={{
                                                        color:
                                                            "#6045c9"
                                                    }}>dataset</span>
                                                </div>
                                                <p className={`title-text ${props.isDarkMode ? 'text-dark' : 'text-white'} py-3`}>App Development</p>
                                                <p className='text-light'>Variations There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className='fadein py-lg-5 py-4'>
                                <div className={`p-5 rounded-3 ${props.isDarkMode ? 'card_light' : 'card_dark'}`}>
                                    <div className='row p-3'>

                                        <div class="col-lg-3 col-sm-6 col-12">
                                            <div class="text-center">
                                                <h5 class={`${props.isDarkMode ? 'text-dark' : 'text-white'} pb-2`}>Knowledge</h5>

                                                <div className="position-relative d-lg-block d-none">
                                                    <div class="progress-line w-100">
                                                        <div class="line-inner"></div>
                                                    </div>
                                                    <div class="progress-dot">
                                                        <div class="dot-level">
                                                            <div class="dot-inner"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="pt-3">Present all available features in Essentials.</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-sm-6 col-12">
                                            <div class="text-center">
                                                <h5 class={`${props.isDarkMode ? 'text-dark' : 'text-white'} pb-2`}>Working</h5>
                                                <div className="position-relative d-lg-block d-none">
                                                    <div class="progress-line w-100">
                                                        <div class="line-inner"></div>
                                                    </div>
                                                    <div class="progress-dot">
                                                        <div class="dot-level">
                                                            <div class="dot-inner"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="pt-3">Present all available features in Essentials.</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-4">
                                            <div class="text-center">
                                                <h5 class={`${props.isDarkMode ? 'text-dark' : 'text-white'} pb-2`}>Solution</h5>
                                                <div className="position-relative d-lg-block d-none">
                                                    <div class="progress-line w-100">
                                                        <div class="line-inner"></div>
                                                    </div>

                                                    <div class="progress-dot">
                                                        <div class="dot-level">
                                                            <div class="dot-inner"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="pt-3">Present all available features in Essentials.</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-4">
                                            <div class="text-center">
                                                <h5 class={`${props.isDarkMode ? 'text-dark' : 'text-white'} pb-2`}>Process</h5>

                                                <div className="position-relative d-lg-block d-none">
                                                    <div class="progress-line start-0 ">
                                                        <div class="line-inner"></div>
                                                    </div>
                                                    <div class="progress-dot">
                                                        <div class="dot-level">
                                                            <div class="dot-inner"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="pt-3">Present all available features in Essentials.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <hr className='m-0' />
                    </div>
                    {/* service div end */}

                    {/* business div start */}
                    <div className='py-lg-5 py-4 '>
                        <div className='py-lg-5 py-4'>
                            <div className='row overflow-hidden'>
                                <div className='col-lg-6 fadeLeft position-relative'>
                                    <img src="assert/image/contact-image.jpg" alt="contact" className='w-100' />
                                    <div className='absolute-2'>
                                        {/* <a href="https://www.youtube.com/watch?v=tj9-MGHCs38" target='blank'> */}
                                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/tj9-MGHCs38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

                                        <div className='d-inline-block p-3 rounded-circle text-white' style={{ background: "linear-gradient(95deg, #059dff 15%, #6549d5 45%, #e33fa1 75%, #fb5343) 95%/200% 100%" }}>
                                            <span className="material-symbols-outlined display-4">play_arrow
                                            </span>
                                        </div>
                                        {/* </a> */}
                                    </div>
                                </div>
                                <div className="col-lg-6 pt-lg-3 pt-5 p-3 fadeRight">

                                    <h2 className={`fs-1 pb-3 ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Doob specializes in <br /> small
                                        <span style={{ color: "#059dff " }}> Corporate Business.</span></h2>
                                    <ul className='list-unstyled py-2'>

                                        <li className={`py-1 ${props.isDarkMode ? 'text-dark' : 'text-white'}`}><span className={`material-symbols-outlined tick-clr rounded-circle float-start p-1 mb-3 me-3`}>done</span> Track your teams progress with mobile app.
                                            <p className={`py-2 ps-5 ${props.isDarkMode ? 'text-black' : 'text-light'}`}>Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore.</p>
                                        </li>
                                        <li className={`py-1 ${props.isDarkMode ? 'text-dark' : 'text-white'}`}><span className={`material-symbols-outlined tick-clr rounded-circle float-start p-1 mb-3 me-3`}>done</span> A good traveler has no fixed plans
                                            <p className={`py-2 ps-5 ${props.isDarkMode ? 'text-black' : 'text-light'}`}>Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore.</p>
                                        </li>
                                    </ul>
                                    <button className='btn-clr text-white'>About Our Doob</button>
                                </div>
                            </div>
                        </div>

                        <div className='py-lg-5 py-4'>
                            <div className="row py-3 g-0 text-center">
                                <div className='col-md-3 col-sm-6 col-12 pt-sm-0 pt-3'>
                                    <h2 style={{ color: "#059dff" }}>
                                        <p id="counter" className='d-inline-block'>
                                            <span className="count percent" data-count="199">
                                                0
                                            </span>
                                        </p>
                                        <span className="material-symbols-outlined">add</span></h2>
                                    <h4 className={`${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Happy Clients.</h4>
                                </div>
                                <div className='col-md-3 col-sm-6 col-12 pt-sm-0 pt-3'>
                                    <h2 style={{ color: "#059dff" }}>
                                        <p id="counter" className='d-inline-block'>
                                            <span className="count percent" data-count="575">
                                                0
                                            </span>
                                        </p>
                                        <span className="material-symbols-outlined">add</span></h2>
                                    <h4 className={`${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Employees</h4>
                                </div>
                                <div className='col-md-3 col-sm-6 col-12  pt-sm-0 pt-3'>
                                    <h2 style={{ color: "#059dff" }}>
                                        <p id="counter" className='d-inline-block'>
                                            <span className="count percent" data-count="69">
                                                0
                                            </span>
                                        </p>
                                        <span className="material-symbols-outlined">add</span></h2>
                                    <h4 className={`${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Useful Programs</h4>
                                </div>
                                <div className='col-md-3 col-sm-6 col-12 pt-sm-0 pt-3'>
                                    <h2 style={{ color: "#059dff" }}>
                                        <p id="counter" className='d-inline-block'>
                                            <span className="count percent" data-count="500">
                                                0
                                            </span>
                                        </p>
                                        <span className="material-symbols-outlined">add</span></h2>
                                    <h4 className={`${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Useful Programs</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr className='m-0' />
                    {/* business div end */}

                    {/* team div start */}

                    <div>
                        <div className='py-lg-5 py-4'>
                            <div className={`${props.isDarkMode ? 'text-black' : 'text-white'} text-center pt-5`}>
                                <div className={`d-inline-block mb-3 p-2 ${props.isDarkMode ? 'card_light' : 'card_dark'}`}>
                                    <div className="overflow-hidden">
                                        <p className={`fadein ${show ? 'visible' : ''}`} style={{ marginBottom: "0" }}>
                                            <h5 className="text-clr mb-0 overflow-hidden">
                                                Our Corporate Team.</h5></p>
                                    </div>
                                </div>
                                <h2 className={`display-5 pb-2 ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Corporate Team Member.</h2>
                            </div>

                            <div className="py-5">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-4 text-center fadein-1-1 ">
                                        <div className='team-detail'>
                                            <div className="rounded-3 ">
                                                <img src="assert/image/team-dark-01.jpg" alt="team-dark" className='w-100 rounded-3 h-100' />
                                            </div>
                                            <div className='absolute-1'>
                                                <div className='rounded-3' style={{ backgroundColor: "rgba(58, 58, 58, 0.85)", padding: "15px", margin: "15px" }}>
                                                    <h6 className='text-white fs-6'>Sr Janen Sara</h6>
                                                    <h6 className='text-clr'>Sr Product Designer</h6>
                                                    <p className='fs-6'><small><i>CO Miego, AD, USA</i></small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-4 text-center fadein-1-1 ">
                                        <div className='team-detail'>
                                            <div className="rounded-3 ">
                                                <img src="assert/image/team-dark-02.jpg" alt="team-dark" className='w-100 rounded-3 h-100' />
                                            </div>
                                            <div className='absolute-1'>
                                                <div className='rounded-3' style={{ backgroundColor: "rgba(58, 58, 58, 0.85)", padding: "15px", margin: "15px" }}>
                                                    <h6 className='text-white fs-6'>Corporate Jane</h6>
                                                    <h6 className='text-clr'>Manager</h6>
                                                    <p className='fs-6'><small><i>Bangladesh</i></small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-4 text-center fadein-1-1 ">
                                        <div className='team-detail'>
                                            <div className="rounded-3 ">
                                                <img src="assert/image/team-dark-03.jpg" alt="team-dark" className='w-100 rounded-3 h-100' />
                                            </div>
                                            <div className='absolute-1'>
                                                <div className='rounded-3' style={{ backgroundColor: "rgba(58, 58, 58, 0.85)", padding: "15px", margin: "15px" }}>
                                                    <h6 className='text-white fs-6'>Jara Saraif</h6>
                                                    <h6 className='text-clr'>Software Developer</h6>
                                                    <p className='fs-6'><small><i>Poland</i></small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-4 text-center fadein-1-1 ">
                                        <div className='team-detail'>
                                            <div className="rounded-3 ">
                                                <img src="assert/image/team-dark-04.jpg" alt="team-dark" className='w-100 rounded-3 h-100' />
                                            </div>
                                            <div className='absolute-1'>
                                                <div className='rounded-3' style={{ backgroundColor: "rgba(58, 58, 58, 0.85)", padding: "15px", margin: "15px" }}>
                                                    <h6 className='text-white fs-6'>Afanan Sifa</h6>
                                                    <h6 className='text-clr'>Accounts Manager</h6>
                                                    <p className='fs-6'><small><i>Poland</i></small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <hr className='m-0' />
                    </div>
                    {/* team div end */}


                </div>

            </div>
        </div>
        // </div >
    )
}

export default About