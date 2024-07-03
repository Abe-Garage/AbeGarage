import React from "react";
import About24 from "./About24";
import ServicesSec from "./ServicesSec";
import FeaturesSec from "./FeaturesSec";
import WhyChooseUs from "./WhyChooseUs";
import CtaSec from "./CtaSec";
import BottomBanner from "./BottomBanner";
import TopBanner from "./TopBanner";

const Home = () => {
  return (
    <div className="page-wrapper">
      {/* Preloader */}
      <div className="loader-wrap">
        <div className="preloader">
          <div className="preloader-close">Preloader Close</div>
        </div>
        <div className="layer layer-one">
          <span className="overlay"></span>
        </div>
        <div className="layer layer-two">
          <span className="overlay"></span>
        </div>
        <div className="layer layer-three">
          <span className="overlay"></span>
        </div>
      </div>
      {/* Video Section */}
      <TopBanner />
      {/* About Us Section */}
      <About24 />
      {/* Services Section */}
      <ServicesSec />
      {/* Services Section */}
      <FeaturesSec />
      {/* Why Choose US Sestion */}
      <WhyChooseUs />
      {/* Video Section */}
      <BottomBanner />
      {/* CTA Section */}
      <CtaSec />
    </div>
  );
};

export default Home;
