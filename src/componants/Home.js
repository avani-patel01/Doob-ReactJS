import React, { useState, useEffect } from 'react';
import { $ } from 'react-jquery-plugin'

function Home(props) {
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
    <div>
      {/* <!-- Home section start --> */}
      <section className={`${props.isDarkMode ? 'light_mode' : 'dark_mode'} mt-100`}>

        {/* bg-img div start */}
        <div className="bg-img">
          <div className="d-flex justify-content-center align-items-center h-100 w-100 p-sm-5 p-3">
            <div className={`text-white w-75 me-auto ps-md-5 ps-0`}>
              <p className="after d-inline-block pe-4">MEET CONSULTING</p>
              <h1 className="font fw-bold">Financial Analysis Developing Meeting.</h1>
              <button className="btn-clr mt-4">BUY DOOB NOW</button>
            </div>
          </div>
        </div>

        <div className='px-3 px-md-5'>
          <div className='px-3 px-lg-5'>
            <div className='overflow-hidden'>
              <div className='py-lg-5 py-4'>
                <div className="row justify-content-between fadein">
                  <h2 className={`col-lg-8 col-md-8 col-12 ${props.isDarkMode ? 'text-dark' : 'text-white'} display-6`}>Ready to start creating a standard website? </h2>
                  <div className="col-lg-3 col-md-4 col-12"><button className="btn-clr ">Purchase Doob</button></div>
                </div>

              </div>
              <hr />
            </div>

            {/* bg-img div end */}


            {/* service div start */}
            <div className=' overflow-hidden'>
              <div className='fadein'>
                <div className='py-lg-5 py-4'>
                  <div className={`${props.isDarkMode ? 'text-black' : 'text-white'} text-center pt-5`}>
                    <div className={`d-inline-block p-2 ${props.isDarkMode ? 'card_light' : 'card_dark'}`}>
                      <div className="overflow-hidden">
                        <h5 className={`fadein ${show ? 'visible' : ''}`} style={{ marginBottom: "0" }}>
                          <h5 className="text-clr mb-0 overflow-hidden">
                            what we can do for you</h5></h5>
                      </div>
                    </div>
                    <h2 className={`display-5 pb-2 ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Services provide for you.</h2>
                    <p className='text-light'>There are many variations of passages of Lorem Ipsum available,<br />
                      but the majority have suffered alteration.</p>
                  </div>
                  <div className="py-4">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-12 pt-lg-0 pt-4 fade-animation fadein-1-1">
                        <div className={`card p-2  ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100`}>
                          <div className="card-body">
                            <div>
                              <span className="material-symbols-outlined display-5" style={{
                                color:
                                  "#059dff"
                              }}>show_chart</span>
                            </div>
                            <h5 className={`title-text ${props.isDarkMode ? 'text-dark' : 'text-white'} py-3`}>Awarded Design</h5>
                            <p className='text-light'>There are many variations variations of passages of Lorem Ipsum
                              available, but the majority have suffered.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12 pt-lg-0 pt-4 fade-animation fadein-1-2">
                        <div className={`card p-2  ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100`}>
                          <div className="card-body">
                            <div>
                              <span className="material-symbols-outlined display-5" style={{
                                color:
                                  "#fb5343"
                              }}>cast_connected</span>
                            </div>
                            <h5 className={`title-text ${props.isDarkMode ? 'text-dark' : 'text-white'} py-3 `}>Design & Creative</h5>
                            <p className='text-light'>Passages there are many variations variations of of Lorem Ipsum available, but the majority have suffered.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12 pt-lg-0 pt-4 fade-animation fadein-1-3">
                        <div className={`card p-2 ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100`}>
                          <div className="card-body">
                            <div>
                              <span className="material-symbols-outlined display-5" style={{
                                color:
                                  "#6045c9"
                              }}>dataset</span>
                            </div>
                            <h5 className={`title-text ${props.isDarkMode ? 'text-dark' : 'text-white'} py-3`}>App Development</h5>
                            <p className='text-light'>Variations There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <hr className='m-0' />
              </div>
            </div>
            {/* service div end */}



            {/* about div start */}
            <div className='py-lg-5 py-4  '>
              <div className='py-lg-5 py-4'>
                <div className='row overflow-hidden'>
                  <div className='col-lg-5 fadeLeft'>
                    <img src="assert/image/about-1.png" alt="about" className='w-100' />
                  </div>
                  <div className="col-lg-7 pt-lg-0 pt-5 fadeRight">
                    <div className={`d-inline-block p-2 ${props.isDarkMode ? 'card_light' : 'card_dark'}`}>
                      <div className="overflow-hidden">
                        <h5 className={`fadein ${show ? 'visible' : ''}`} style={{ marginBottom: "0" }}>
                          <h5 className="text-clr mb-0 overflow-hidden">
                            Corporate About.</h5></h5>
                      </div>
                    </div>
                    <h2 className={`display-5 pb-3 ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>About Our Business.</h2>
                    <p className={`pb-3 ${props.isDarkMode ? 'text-black' : 'text-white'}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quod autem sequi reprehenderit labore consequuntur excepturi voluptatibus omnis similique qui unde eligendi tempora, ea at, laudantium nostrum minus pariatur quasi!</p>
                    <ul className='list-unstyled'>
                      <li className={`pb-3 ${props.isDarkMode ? 'text-black' : 'text-white'}`}><span className={`material-symbols-outlined ${props.isDarkMode ? 'card_light' : 'card_dark'} rounded-circle p-1 me-2`}>done</span> Track your teams progress with mobile app.</li>
                      <li className={`pb-3 ${props.isDarkMode ? 'text-black' : 'text-white'}`}><span className={`material-symbols-outlined ${props.isDarkMode ? 'card_light' : 'card_dark'} rounded-circle p-1 me-2`}>done</span> Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                      <li className={`pb-3 ${props.isDarkMode ? 'text-black' : 'text-white'}`}><span className={`material-symbols-outlined ${props.isDarkMode ? 'card_light' : 'card_dark'} rounded-circle p-1 me-2`}>done</span> Ipsum dolor sit amet consectetur adipisicing.</li>
                      <li className={`pb-3 ${props.isDarkMode ? 'text-black' : 'text-white'}`}><span className={`material-symbols-outlined ${props.isDarkMode ? 'card_light' : 'card_dark'} rounded-circle p-1 me-2`}>done</span> Your teams progress with mobile app.</li>
                    </ul>
                    <button className='btn-clr text-white'>More About Us <span className="material-symbols-outlined">arrow_forward</span></button>
                  </div>
                </div>
              </div>

            </div>
            <hr className='m-0' />
            {/* about div end */}
          </div>

        </div>
        <div className=''>

          {/* business div start */}
          <div className={`py-lg-5 py-4 ${props.isDarkMode ? 'card_light' : 'card_dark'}  `}>
            <div className='py-lg-5 py-4'>
              <div className="row g-0" >
                <div className="col-lg-6">
                  <img src="assert/image/split-03.jpg" alt="splitImage" className='w-100' />
                </div>
                <div className="col-lg-6 px-5 pt-5 pt-lg-0">
                  <h2 className={`display-6 ${props.isDarkMode ? 'text-dark' : 'text-white'} py-2`}>Continue Your Business With Us.</h2>
                  <p className={`${props.isDarkMode ? 'text-black' : 'text-white'}`}>Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even .</p>
                  <div className="row py-3 g-0">
                    <div className='col-sm-6 col-12'>
                      <h2 style={{ color: "#059dff" }}>
                        <p id="counter" className='d-inline-block'>
                          <span className="count percent" data-count="199">
                            0
                          </span>
                        </p>
                        <span className="material-symbols-outlined">add</span></h2>
                      <h4 className={`${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Happy Clients.</h4>
                    </div>
                    <div className='col-sm-6 col-12'>
                      <h2 style={{ color: "#059dff" }}>
                        <p id="counter" className='d-inline-block'>
                          <span className="count percent" data-count="575">
                            0
                          </span>
                        </p>
                        <span className="material-symbols-outlined">add</span></h2>
                      <h4 className={`${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Employees</h4>
                    </div>
                  </div>
                  <div className="row py-3 g-0">
                    <div className='col-sm-6 col-12'>
                      <h2 style={{ color: "#059dff" }}>
                        <p id="counter" className='d-inline-block'>
                          <span className="count percent" data-count="69">
                            0
                          </span>
                        </p>

                        <span className="material-symbols-outlined">add</span></h2>
                      <h4 className={`${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Useful Programs</h4>
                    </div>
                    <div className='col-sm-6 col-12'>
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
            </div>

          </div>
          <hr className='m-0' />
          {/* business div end */}
        </div>
        {/* client div start */}

        <div className='px-3 px-md-5'>
          <div className='px-3 px-lg-5'>
            <div className='py-lg-5 py-4 overflow-hidden'>
              <div className="py-lg-5 py-4 fadein">
                <div className='text-center'>
                  <div className={`d-inline-block p-2 ${props.isDarkMode ? 'card_light' : 'card_dark'}`}>
                    <div className="overflow-hidden">
                      <h5 className={`fadein ${show ? 'visible' : ''}`} style={{ marginBottom: "0" }}>
                        <h5 className="text-clr mb-0 overflow-hidden">
                          Client Feedback</h5></h5>
                    </div>
                  </div>
                  <h2 className={`display-5 pb-2 ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>What People Say About Us.</h2>
                  <p className='text-light'>We provide company and finance service for <br />
                    startups and company business.</p>
                </div>
              </div>

              <div className="pb-5">
                <div className="row g-4 overflow-hidden">
                  <div className="col-lg-4 col-md-6 col-12 fadein-1-1">
                    <div className={`card p-3 ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100 border-0`}>
                      <div className="py-3">
                        <div className='rainbow'>
                          <img src="assert/image/testimonial-01.jpg" alt="testimonial-01" className='w-100 rounded-circle' />
                        </div>
                      </div>
                      <div className='text-center'>
                        <p>“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„</p>
                        <h5 className={`${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Sr Janen Sara</h5>
                        <div className="overflow-hidden d-inline-block">
                          <h5 className={`fadein ${show ? 'visible' : ''}`} style={{ marginBottom: "0" }}>
                            <h6 className="text-clr mb-0 overflow-hidden">
                              Sr Product Designer</h6>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 fadein-1-2 ">
                    <div className={`card p-3 ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100 border-0`}>
                      <div className="py-3">
                        <div className='rainbow'>
                          <img src="assert/image/testimonial-02.jpg" alt="testimonial-02" className='w-100 rounded-circle' />
                        </div>
                      </div>
                      <div className='text-center'>
                        <p>“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„</p>
                        <h5 className={`${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Afsana Nila</h5>
                        <div className="overflow-hidden d-inline-block">
                          <h5 className={`fadein ${show ? 'visible' : ''}`} style={{ marginBottom: "0" }}>
                            <h6 className="text-clr mb-0 overflow-hidden">
                              App Developer</h6>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 fadein-1-3">
                    <div className={`card p-3 ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100 border-0`}>
                      <div className="py-3">
                        <div className='rainbow'>
                          <img src="assert/image/testimonial-03.jpg" alt="testimonial-03" className='w-100 rounded-circle' />
                        </div>
                      </div>
                      <div className='text-center'>
                        <p>“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„</p>
                        <h5 className={`${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Afanan Sifa</h5>
                        <div className="overflow-hidden d-inline-block">
                          <h5 className={`fadein ${show ? 'visible' : ''}`} style={{ marginBottom: "0" }}>
                            <h6 className="text-clr mb-0 overflow-hidden">
                              Accounts Manager</h6>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>

            </div>
            {/* client div end */}
            <hr className='m-0' />
          </div>
        </div>

        {/* news div start */}
        <div className='px-3 px-md-5'>
          <div className='px-3 px-lg-5 overflow-hidden'>
            <div className='py-lg-5 py-4 fadein'>
              <div className="py-lg-5 py-4">
                <div className='text-center'>
                  <div className={`d-inline-block p-2 ${props.isDarkMode ? 'card_light' : 'card_dark'}`}>
                    <div className="overflow-hidden">
                      <h5 className={`fadein ${show ? 'visible' : ''}`} style={{ marginBottom: "0" }}>
                        <h5 className="text-clr mb-0 overflow-hidden">
                          Latests News</h5></h5>
                    </div>
                  </div>
                  <h2 className={`display-6 pb-3 ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Our Latest News.</h2>
                  <p className='mb-0 text-light'>We provide company and finance service for<br />
                    startups and company business.</p>
                </div>
              </div>

              <div className="pb-5">
                <div className="row g-4 overflow-hidden">
                  <div className="col-lg-4 col-md-6 col-12 fadein-1-1 overflow-hidden">
                    <div className={`banner card ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100`}>
                      <div>
                        <div className='overflow-hidden'>
                          <img src="assert/image/blog-01.jpg" alt="blog-01" className='w-100' style={{ borderRadius: "12px 12px 0px 0px" }} />
                        </div>
                      </div>
                      <div className='p-4'>
                        <p className=' title-text'>Irin Pervin / 10 Dec 2021</p>
                        <h5 className={` title-text ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Best Corporate Tips You Will Read This Year.</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 fadein-1-2 overflow-hidden">
                    <div className={`banner card ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100 overflow-hidden`}>
                      <div>
                        <div className='overflow-hidden'>
                          <img src="assert/image/blog-02.jpg" alt="blog-02" className='w-100' style={{ borderRadius: "12px 12px 0px 0px" }} />
                        </div>
                      </div>
                      <div className='p-4'>
                        <p className=' title-text'>Fatima Asrafy / 30 Nov 2021</p>
                        <h5 className={` title-text ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Should Fixing Corporate Take 100 Steps.</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 fadein-1-3 overflow-hidden">
                    <div className={`banner card ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100 overflow-hidden`}>
                      <div>
                        <div className='overflow-hidden'>
                          <img src="assert/image/blog-03.jpg" alt="blog-03" className='w-100' style={{ borderRadius: "12px 12px 0px 0px" }} />
                        </div>
                      </div>
                      <div className='p-4'>
                        <p className='title-text'>John Dou / 12 Oct 2021</p>
                        <h5 className={` title-text ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>The Next 100 Things To Immed Iately Do About.</h5>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            {/* news div end */}
          </div>
        </div>

      </section>
      {/* <!-- Home section end --> */}
    </div>
  )
}

export default Home