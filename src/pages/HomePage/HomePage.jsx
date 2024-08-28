

import FirstBanner from "../../components/FirstBanner/FirstBanner";
import PromoSection from "../../components/PromoSection/PromoSection";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";
import SecondBanner from "../../components/SecondBanner/SecondBanner";

const HomePage = () => {
  return (
    <div>
      <FirstBanner />
      <SecondBanner />
      <PromoSection/>
      <ReviewsSection/>
    </div>
  );
};

export default HomePage;
