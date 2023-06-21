import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div>
      <Marquee
        speed={60}
        style={{ backgroundColor: "#94004F", color: "white", height: "4rem" }}
      >
        <h1>
          YOUR EVERYDAY, DELIVERED{" "}
          <span
            style={{
              backgroundColor: "#E07E10",
              borderRadius: "0 30px 0 0",
            }}
          >
            FOR FREE🛒
          </span>
        </h1>
      </Marquee>
    </div>
  );
};

export default Marque;
