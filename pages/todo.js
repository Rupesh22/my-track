import { useTransition, animated, config } from "react-spring";

const Todo = () => {
  const listTransitions = useTransition(true, {
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
    config: config.stiff,
  });
  return (
    <>
      {listTransitions(
        (styles, item) =>
          item && (
            <animated.div style={styles}>
              <div
                style={{
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                to do page
              </div>
            </animated.div>
          )
      )}
    </>
  );
};

export default Todo;
