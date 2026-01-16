import React from 'react'


function Hero() {
  return (
    <div className="container m-5 p-5">
      <div className="row p-5 ">
        <h2 className="py-3 fs-2 text-center ">
          Zerodha Products
        </h2>
        
        <p className='fs-5 text-center'>Sleek, modern, and intuitive trading platforms<i class="fa fa-long-arrow-right" aria-hidden="true"></i></p>
        <p className='text-center'>  Check out our {""}
          <a href="" style={{ textDecoration: "none" }}>
              investment offerings {""}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
        </p>
      </div>
    </div>
  )
}

export default Hero