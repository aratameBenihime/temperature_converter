import Lottie from "lottie-react";

import animationData from "../../../public/lottie/skeleton.json"; // Replace with your animation JSON file

export default function SkeletonLoadingAnimation() {
  return (
    <div className="flex w-full justify-center items-center">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: "300px", height: "300px" }} // Customize the size
      />
    </div>
  );
}
