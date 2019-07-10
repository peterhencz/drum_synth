import React, { Component } from "react";
import { connect } from "react-redux";

import { setFx } from "../../actions";
import FxSlider from "../Slider/Slider";
import * as Tone from "tone";

class FXPanel extends Component {
  handleSetFx = fx => {
    this.props.setFx(fx);
  };

  delay = new Tone.PingPongDelay({
    delayTime: 0.25,
    maxDelayTime: 0.9,
    feedback: 0.8,
    wet: 0.9,
  }).toMaster();

  reverb = new Tone.Freeverb({
    roomSize: 0.9,
    dampeding: 9000,
    wet: 0.9,
  }).toMaster();

  render() {
    return (
      <div className="fx_panel">
        FX
        <button
          className="fx_button"
          onClick={() => this.handleSetFx(this.delay)}>
          delay
        </button>
        <FxSlider />
        <FxSlider />
        <FxSlider />
        <button
          className="fx_button"
          onClick={() => this.handleSetFx(this.reverb)}>
          reverb
        </button>
        <FxSlider />
        <FxSlider />
        <FxSlider />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setFx,
};

export default connect(
  null,
  mapDispatchToProps
)(FXPanel);
