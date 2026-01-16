import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row m-5 p-5 ">
        <h2 className="py-5 fs-2 text-center mx-5 px-5">
          We pioneered the discount broking model in India. Now, we are breaking
          ground with our technology.
        </h2>
      </div>
      <div className="row border-top border-bottom text-muted">
        <div className="col-6 p-5 ">
          <p className="p-2">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p className="p-2">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p className="p-2">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6 p-5 ">
          <p className="p-2">
            Over In addition, we run a number of popular open online educational
            and community initiatives to empower retail traders and investors.
          </p>

          <p className="p-2">
            Over <a href="https://rainmatter.com" style={{textDecoration:"none"}}>Rainmatter</a> , our fintech fund and incubator, has invested in
            several fintech startups with the goal of growing the Indian capital
            markets.
          </p>

          <p className="p-2">
            Over And yet, we are always up to something new every day. Catch up
            on the latest updates on our <a href="https://zerodha.com/z-connect/" style={{textDecoration:"none"}} >blog</a>  or see what the media is saying
            about us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
