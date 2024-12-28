import Lottie from "react-lottie";
import animationData from "../../../public/lottie/marketing.json";

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const MarketingLottie: React.FC = () => <Lottie options={lottieOptions} />;

export default MarketingLottie;
