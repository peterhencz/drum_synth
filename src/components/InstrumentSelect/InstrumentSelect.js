import React, { Component } from "react";
import { connect } from "react-redux";
import kick from "../../assets/drum_sounds/dm_kick.mp3";
import hihat from "../../assets/drum_sounds/dm_closed_hh.mp3";
import { setSound } from "../../actions";

import * as Tone from "tone";

class InstrumentSelect extends Component {
  handleSetSound = sound => {
    this.props.setSound(sound);
  };

  render() {
    return (
      <div className="instrument-select">
        <button onClick={() => this.handleSetSound('kick')}>kick</button>
        <button onClick={() => this.handleSetSound('hihat')}>hi-hat</button>
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
