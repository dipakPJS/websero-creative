import Lottie from "react-lottie";
import animationData from "../../../public/lottie/wavy.json";

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const WavyLottie: React.FC = () => <Lottie options={lottieOptions} />;

export default WavyLottie;