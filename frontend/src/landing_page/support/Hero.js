import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-lg-6 col-md-12 p-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className="mb-3" />
          <div className="d-flex flex-wrap gap-3">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 p-3">
          <h1 className="fs-3 mb-4">Featured</h1>
          <ol className="list-unstyled">
            <li className="mb-2">
              <a href="#">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li className="mb-2">
              <a href="#">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;