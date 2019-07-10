import React, { Component } from "react";

import Board from "../Board/Board";
import InstrumentSelect from "../InstrumentSelect/InstrumentSelect";
import FXPanel from "../FXPanel/FXPanel";

class Maschine extends Component {
  render() {
    return (
      <div className="maschine c">
        <div className="left">
          <InstrumentSelect />
          <FXPanel />
        </div>
        <div className="right" />
        <Board />
      </div>
    );
  }
}

export default Maschine;
