import { useEffect, useRef } from "react";
import lottie from "lottie-web";
const Content = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../animation.json"),
    });
  }, []);
  return (
    <div className="content">
      <div className="welcome-title">
        <h1>Welcome to DealBuddy!</h1>
      </div>
      <div className="animation" ref={container}></div>
      <p>
        DealBuddy is here to help you find the best deals on games, so you can spend less time bargain hunting and more time levelling up!
        You can search games by Steam App Id or by name (Steam App Id is more accurate). Happy shopping!
      </p>
    </div>
  );
};

export default Content;
