import React, { useState, useEffect } from 'react'
import { $ } from 'react-jquery-plugin'
import New from './New';

function Portofolio(props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);


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

  return (
    <div>
      <section className={`${props.isDarkMode ? 'light_mode' : 'dark_mode'} mt-100`}>
        <div className='px-3 px-md-5'>
          <div className='px-3 px-lg-5'>
            <div className='py-lg-5 py-4'>
              <div className='py-lg-5 py-4'>
                <div className={`${props.isDarkMode ? 'text-black' : 'text-white'} text-center`}>
                  <div className={`d-inline-block mb-3 p-2 ${props.isDarkMode ? 'card_light' : 'card_dark'}`}>
                    <div className="overflow-hidden">
                      <p className={`fadein ${show ? 'visible' : ''}`} style={{ marginBottom: "0" }}>
                        <h5 className="text-clr mb-0 overflow-hidden">
                          Portfolio Default</h5>
                      </p>
                    </div>
                  </div>
                  <h2 className={`display-5  ${props.isDarkMode ? 'text-dark' : 'text-white'}`}>You can customize everything!</h2>
                </div>

                <div className='py-lg-5 py-4'>
                  <New/>
                </div>
                <div className="text-center"><button className="btn-clr">View More Post <i className="fa-duotone fa-loader text-dark"></i></button></div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portofolio