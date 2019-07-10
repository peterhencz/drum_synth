import React, { useState } from "react";
import Slider from "react-input-slider";

function FxSlider() {
  console.log("cica");
  const [state, setState] = useState({ x: 0.3 });

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
            height: 2,
            backgroundColor: "#CBDCED",
            margin: "1em",
          },
          active: {
            backgroundColor: "#5487B4",
          },
          thumb: {
            backgroundColor: "#527DA3",
            width: 12,
            height: 12,
          },
        }}
      />
    </div>
  );
}

export default FxSlider;
