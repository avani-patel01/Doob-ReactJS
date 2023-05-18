import React from 'react'

function Items({ data }, props) {
  return (
    <div className="row ">
      {
        data.map((value) => {
          const { id, image, title, description } = value;
          return (
            <div className="col-md-6 col-12 fade-animation overflow-hidden" key={id}>

              <div className='mb-5 p-2'>
                <div className={`banner overflow-hidden card  card_dark h-100`}>
                  <div className=' overflow-hidden'>
                    <div className=' overflow-hidden'>
                      <img src={image} alt="portfolio-img" className='w-100' style={{ borderRadius: "12px 12px 0px 0px" }} />
                    </div>
                  </div>
                  <div className='p-4'>
                    <h5 className={` title-text`}>{title}</h5>
                    <p className={` title-text`}>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}
export default Items