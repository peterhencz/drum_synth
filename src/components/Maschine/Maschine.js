import React, { Component } from "react";

import Board from "../Board/Board";
import InstrumentSelect from "../InstrumentSelect/InstrumentSelect";
import FXPanel from "../FXPanel/FXPanel";

class Maschine extends Component {
  render() {
    return (
      <div>
        <p>MASCHINE</p>
        <div className="maschine c">
          <div className="left">
            <InstrumentSelect />
            <FXPanel />
          </div>
          <div className="right" />
          <Board />
        </div>
      </div>
    );
  }
}

export default Maschine;
