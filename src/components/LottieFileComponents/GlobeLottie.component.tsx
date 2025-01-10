import Lottie from "react-lottie";
import animationData from "../../../public/lottie/checkk.json";

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const GlobeLottie: React.FC = () => (
    <div className="h-full w-full">
        <Lottie options={lottieOptions} />
    </div>
);

export default GlobeLottie;
