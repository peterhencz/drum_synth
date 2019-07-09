import React, { Component } from "react";
import Pad from "../Pad/Pad";

const Board = props => (
  <div className="board">
    <Pad label="13" {...props} />
    <Pad label="14" {...props} />
    <Pad label="15" {...props} />
    <Pad label="16" {...props} />
    <Pad label="9" {...props} />
    <Pad label="10" {...props} />
    <Pad label="11" {...props} />
    <Pad label="12" {...props} />
    <Pad label="5" {...props} />
    <Pad label="6" {...props} />
    <Pad label="7" {...props} />
    <Pad label="8" {...props} />
    <Pad label="1" {...props} />
    <Pad label="2" {...props} />
    <Pad label="3" {...props} />
    <Pad label="4" {...props} />
  </div>
);

export default Board;
