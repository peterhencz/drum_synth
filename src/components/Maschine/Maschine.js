import React, { Component } from "react";

import Board from "../Board/Board";
import InstrumentSelect from "../InstrumentSelect/InstrumentSelect";

class Maschine extends Component {
  render() {
    return (
      <div className="maschine">
        <InstrumentSelect />
        <Board />
      </div>
    );
  }
}

export default Maschine;
