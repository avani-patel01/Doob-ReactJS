import React, { useEffect } from 'react'
import { $ } from 'react-jquery-plugin'
import { Link } from 'react-router-dom'


function Blog(props) {

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

  return (
    <div>
      <section className={`${props.isDarkMode ? 'light_mode' : 'dark_mode'} mt-100`}>
        <hr className='m-0' />
        <div className='text-center py-lg-5 py-4'>
          <div className='py-lg-5 py-4'>
            <h1 className='text-clr display-5'>Blog Grid Style.</h1>
            <Link rel="stylesheet" to="/" className={`text-decoration-none ${props.isDarkMode?'text-black':'text-white'} title-text`} >Home</Link> 
            <span className='mx-2'>  | </span>
            <span> Blog Grid</span>
          </div>
        </div>
        <hr className='m-0' />

        {/* news div start */}
        <div className='px-3 px-md-5'>
          <div className='px-3 px-lg-5 overflow-hidden'>
            <div className='py-lg-5 py-4'>
              <div className='py-lg-5 py-4'>
                <div className="pb-5">
                  <div className="row g-4 overflow-hidden">
                    <div className="col-lg-4 col-md-6 col-12 overflow-hidden">
                      <div className={`card ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100  overflow-hidden`}>
                        <div>
                          <div className='banner overflow-hidden'>
                            <img src="assert/image/blog-01.jpg" alt="blog-01" className='w-100' style={{ borderRadius: "12px 12px 0px 0px" }} />
                          </div>
                        </div>
                        <div className='p-4'>
                          <p className=' title-text'>Irin Pervin / 10 Dec 2021</p>
                          <h5 className={` title-text ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Best Corporate Tips You Will Read This Year.</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 overflow-hidden">
                      <div className={`card ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100 overflow-hidden`}>
                        <div>
                          <div className='banner overflow-hidden'>
                            <img src="assert/image/blog-02.jpg" alt="blog-02" className='w-100' style={{ borderRadius: "12px 12px 0px 0px" }} />
                          </div>
                        </div>
                        <div className='p-4'>
                          <p className=' title-text'>Fatima Asrafy / 30 Nov 2021</p>
                          <h5 className={` title-text ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Should Fixing Corporate Take 100 Steps.</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 overflow-hidden">
                      <div className={`card ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100 overflow-hidden`}>
                        <div>
                          <div className='banner overflow-hidden'>
                            <img src="assert/image/blog-03.jpg" alt="blog-03" className='w-100' style={{ borderRadius: "12px 12px 0px 0px" }} />
                          </div>
                        </div>
                        <div className='p-4'>
                          <p className='title-text'>John Dou / 12 Oct 2021</p>
                          <h5 className={` title-text ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>The Next 100 Things To Immed Iately Do About.</h5>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 fadein-1-1 overflow-hidden">
                      <div className={`card ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100  overflow-hidden`}>
                        <div>
                          <div className='banner overflow-hidden'>
                            <img src="assert/image/blog-05.jpg" alt="blog-03" className='w-100' style={{ borderRadius: "12px 12px 0px 0px" }} />
                          </div>
                        </div>
                        <div className='p-4'>
                          <p className=' title-text'>Jannin / 25 Aug 2021</p>
                          <h5 className={` title-text ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Top 5 Lessons About Corporate To Learn Before.</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 fadein-1-2 overflow-hidden">
                      <div className={`card ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100 overflow-hidden`}>
                        <div>
                          <div className='banner overflow-hidden'>
                            <img src="assert/image/blog-04.jpg" alt="blog-04" className='w-100' style={{ borderRadius: "12px 12px 0px 0px" }} />
                          </div>
                        </div>
                        <div className='p-4'>
                          <p className=' title-text'>Jannin / 23 Jul 2021</p>
                          <h5 className={` title-text ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Master The Art Of Corporate With These 5 Tips.</h5>
                        </div>
                      </div>
                    </div> 

                    <div className="col-lg-4 col-md-6 col-12 fadein-1-3 overflow-hidden">
                      <div className={`card ${props.isDarkMode ? 'card_light' : 'card_dark'} h-100 overflow-hidden`}>
                        <div>
                          <div className='banner overflow-hidden'>
                            <img src="assert/image/blog-06.jpg" alt="blog-04" className='w-100' style={{ borderRadius: "12px 12px 0px 0px" }} />
                          </div>
                        </div>
                        <div className='p-4'>
                          <p className='title-text'>John Dou / 30 Jun 2021</p>
                          <h5 className={` title-text ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>Corporate Is Your Worst Enemy. 5 Ways To Defeat It.</h5>
                        </div>
                      </div>
                    </div>


                </div>
              </div>
              <div className="text-center"><button className="btn-clr">View More Post </button></div>
            </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Blog