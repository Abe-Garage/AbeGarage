import TopBannerAbout from "../../../components/Banner/TopBannerHome";

import Description from '../../../components/Description/Description'
import About24 from '../../../components/About24/About24'
import WhyChoosus from "../../../components/WyChoosUS/WhyChooseUs";
import BottomBanner from '../../../components/Banner/BottomBanner'
import CtaSec from "../../../components/CtaSec/CtaSec"
function About() {
  return (
    <div>
<TopBannerAbout />
      <Description  />
      <About24 />
      <WhyChoosus />
      <BottomBanner />
      <CtaSec />
    </div>
  )
}

export default About