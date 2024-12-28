import Lottie from "react-lottie";
import animationData from "../../../public/lottie/circlelottie.json";

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const CircleLottie: React.FC = () => <Lottie options={lottieOptions} />;

export default CircleLottie;
