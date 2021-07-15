import { useState } from "react";
import { useTransition, useTrail, animated, config } from "react-spring";
import { signIn } from "next-auth/client";
import { useClickAway } from "react-use";

import Loading from "../components/common/Loading";

const LogIn = () => {
  const items = [
    "to-do",
    "bucketList",
    "songs",
    "travel-list",
    "movie-watchlist",
    "save",
  ];
  const [toggle, setToggle] = useState(true);
  const trail = useTrail(items.length, {
    from: { marginLeft: -5, opacity: 0, transform: "translate3d(0,-40px,0)" },
    to: { marginLeft: 0, opacity: 1, transform: "translate3d(0,0px,0)" },
    config: { mass: 1, tension: 160, friction: 14 },
  });

  const listTransitions = useTransition(toggle, {
    from: { opacity: 0, transform: "translateX(-50%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(50%)" },
    config: {
      mass: 1,
      tension: 160,
      friction: 15,
    },
  });

  return (
    <div className="login-container">
      <div className="items-container">
        <ul>
          {trail.map((props, index) => {
            return (
              <animated.li key={items[index]} style={props} className="card">
                {items[index]}
              </animated.li>
            );
          })}
        </ul>
        <div style={{ height: "50px" }}>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => setToggle(!toggle)}
          >
            Click
          </button>
          {listTransitions(
            (styles, item) =>
              item && <animated.div style={styles}> Hi there </animated.div>
          )}
        </div>
        {/* <Loading /> */}
      </div>
      <div>
        <button
          className="login-btn"
          style={{ cursor: "pointer" }}
          onClick={() =>
            signIn("github", { callbackUrl: "http://localhost:3000/" })
          }
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default LogIn;
