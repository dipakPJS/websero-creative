import Lottie from "react-lottie";
import animationData from "../../../public/lottie/scrollDown.json";

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const ScrollDownLottie: React.FC = () => <Lottie options={lottieOptions} />;

export default ScrollDownLottie;
