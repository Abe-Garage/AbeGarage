import React from "react";

function Footer() {
  return (
    <div>
      <footer className="main-footer">
        <div className="upper-box">
          <div className="auto-container">
            <div className="row no-gutters">
              <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
                <div className="info-inner">
                  <div className="content">
                    <div className="icon">
                      <span className="flaticon-pin"></span>
                    </div>
                    <div className="text">
                      123 Main St, <br /> Evangadi City, MD 20601
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
                <div className="info-inner">
                  <div className="content">
                    <div className="icon">
                      <span className="flaticon-email"></span>
                    </div>
                    <div className="text">
                      Email us : <br />{" "}
                      <a href="mailto:contact.contact@autorex.com">
                        contact@abegarage.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
                <div className="info-inner">
                  <div className="content">
                    <div className="icon">
                      <span className="flaticon-phone"></span>
                    </div>
                    <div className="text">
                      Call us on : <br />
                      <strong>+ 1800 456 7890</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="widgets-section">
          <div className="auto-container">
            <div className="widgets-inner-container">
              <div className="row clearfix">
                <div className="footer-column col-lg-6">
                  <div className="widget widget_about">
                    <div className="logo">
                      <a href="index.html">
                        <img src="assets/images/logo-two.png" alt="" />
                      </a>
                    </div>
                    <div className="text">
                      At Abe Garage, we’ve been delivering top-notch automotive
                      care for over 24 years. From routine maintenance to
                      complex repairs, trust our expert team to keep your
                      vehicle running smoothly.
                    </div>
                  </div>
                </div>

                <div className="footer-column col-lg-6">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="widget widget_links">
                        <h4 className="widget_title">Useful Links</h4>
                        <div className="widget-content">
                          <ul className="list">
                            <li>
                              <a href="/">Home</a>
                            </li>
                            <li>
                              <a href="/about">About Us</a>
                            </li>
                            <li>
                              <a href="/contact">Contact Us</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="widget widget_links">
                        <h4 className="widget_title">Our Services</h4>
                        <div className="widget-content">
                          <ul className="list">
                            <li>
                              <a href="#">Performance Upgrade</a>
                            </li>
                            <li>
                              <a href="#">Transmission Service</a>
                            </li>
                            <li>
                              <a href="#">Break Repair & Service</a>
                            </li>
                            <li>
                              <a href="#">Engine Service & Repair</a>
                            </li>
                            <li>
                              <a href="#">Tyre & Wheels</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="auto-container">
          <div className="footer-bottom">
            <div className="copyright-text">
              © 2024 <a href="#">AbeGarage</a>. Quality Service, Customer
              Satisfaction, Every Time.
            </div>
            <div className="text">
              Created by <a href="#">ThemeArc</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
