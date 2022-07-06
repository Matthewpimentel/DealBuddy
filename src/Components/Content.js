import { useEffect, useRef } from "react";
import lottie from "lottie-web";
const Content = () => {
  const container = useRef(null);
  useEffect(() => {
    console.log("ran");
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
        <h1>Welcome to GradeBuddy!</h1>
      </div>
      <div className="animation" ref={container}></div>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
    </div>
  );
};

export default Content;
