import React from "react";

function Team() {
  return (
    <div className="container">
      <h2 className="py-5 mx-5 px-5 text-center">People</h2>
      <div className="row">
        <div className="col-5 text-center">
          <img
            src="media/images/nithin-kamath.jpg"
            alt="owner-img"
            className="rounded-circle w-50 mx-auto d-block"
          />
          <h3 className="fs-5 " style={{paddingTop:"5%"}}>Nithin Kamath</h3>
          <p>Founder, CEO</p>
        </div>
        <div className="col-7 text-muted">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
