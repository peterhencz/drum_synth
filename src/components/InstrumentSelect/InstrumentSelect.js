import React, { Component } from "react";
import { connect } from "react-redux";
import kick from "../../assets/drum_sounds/dm_kick.mp3";
import hihat from "../../assets/drum_sounds/dm_closed_hh.mp3";
import { setSound } from "../../actions";

import * as Tone from "tone";

class InstrumentSelect extends Component {
  state = {
    sound: "",
  };

  handleSetSound = sound => {
    this.props.setSound(sound);
  };

  render() {
    console.log("url: ", this.state.instrument);
    return (
      <div className="instrument-select">
        <button onClick={() => this.handleSetSound("kick")}>kick</button>
        <button onClick={() => this.handleSetSound("hi-hat")}>hi-hat</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setSound,
};

export default connect(
  null,
  mapDispatchToProps
)(InstrumentSelect);
