import React, { useState } from "react";
import Slider from "react-input-slider";

function FxSlider() {
  console.log("cica");
  const [state, setState] = useState({ x: Math.random() / 3 + 0.1 });

  return (
    <div className="costum-input-range-slider">
      <div className="costum-input-range-text">
        {/* {parseFloat(state.x).toFixed(2)} */}
      </div>
      <Slider
        axis="x"
        xstep={0.01}
        xmin={0}
        xmax={1}
        x={state.x}
        onChange={({ x }) => setState({ x: parseFloat(x) })}
        styles={{
          track: {
            width: "80%",
            height: 3,
            backgroundColor: "#FbFbFb",
            margin: "1em",
            borderRadius: 0,
          },
          active: {
            background:
              "linear-gradient(-108deg, rgb(254, 74, 74), rgb(239, 165, 57))",
            borderRadius: 0,
          },
          thumb: {
            backgroundColor: "#FE4A4A",
            width: 10,
            height: 3,
            borderRadius: 0,
            boxShadow: "none",
          },
        }}
      />
    </div>
  );
}

export default FxSlider;
