import React from "react";
import "./Address.css"
function Address() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7 pl-lg-5">
          <section className="map-section">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3071.2910802067827!2d90.45905169331171!3d23.691532202989123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1577214205224!5m2!1sen!2sbd"
                width="600"
                height="470"
                style={{ border: 0, width: "%" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </section>
        </div>

        <div className="info-column col-lg-5">
          <div className="inner-column">
            <h4>Our Address</h4>
            <div className="text">
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service.
            </div>
            <ul>
              <li>
                <div className="d-flex">
                    <div>
                <i className="flaticon-pin"></i>
                </div>
                <div>
                <h5>Address:</h5> 54B, Tailstoi Town 5238 MT, La city, IA
                5224
                </div>
                </div>
              </li>

              <li>
                <div className="d-flex">
                  <div>
                    <i className="flaticon-email"></i>
                  </div>
                  <div>
                  <h5>email:</h5> contact@buildtruck.com
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                    <div>
                <i className="flaticon-phone"></i>
                </div>
                <div>
                <h5>phone:</h5> 1800 456 7890 / 1254 897 3654
                </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
