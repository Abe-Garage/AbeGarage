import React from "react";
import About24 from "../../components/About24/About24";
import ServicesSec from "../../components/ServiceSec/ServicesSec";
import FeaturesSec from "../../components/FuaturesSec/FeaturesSec";
import WhyChooseUs from "../../components/WyChoosUS/WhyChooseUs";
import CtaSec from "../../components/CtaSec/CtaSec";
import BottomBanner from "../../components/Banner/BottomBanner";
import TopBannerHome from "../../components/Banner/TopBannerHome";

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
      <TopBannerHome />
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
