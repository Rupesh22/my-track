import {
  useChain,
  useSpringRef,
  useSpring,
  animated,
  config,
} from "react-spring";

const Loading = () => {
  return (
    <div className="load_container">
      <div
        style={{ backgroundColor: "rgba(40, 167, 69, 0.5)" }}
        className="load_style load_box"
      ></div>
      <div
        style={{ backgroundColor: "rgb(238 68 68 / 70%)" }}
        className="load_style load_box"
      ></div>
      <div
        style={{ backgroundColor: "rgba(68, 102, 238, 0.6)" }}
        className="load_style load_box"
      ></div>
      <div
        style={{ backgroundColor: "rgba(255, 193, 7, 0.6)" }}
        className="load_style load_box"
      ></div>
    </div>
  );
};

export default Loading;
