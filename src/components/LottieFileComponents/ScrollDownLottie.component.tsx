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

const ScrollDownLottie: React.FC = () => (
  <div style={{ pointerEvents: "none",
    height: "100px",
    width: "100px"
   }}>
    <Lottie options={lottieOptions} />
  </div>
);

export default ScrollDownLottie;
