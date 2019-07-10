import React, { Component } from "react";
import { connect } from "react-redux";

import { setFx } from "../../actions";
import FxSlider from "../Slider/Slider";
import * as Tone from "tone";

class FXPanel extends Component {
  handleSetFx = fx => {
    this.props.setFx(fx);
  };

  render() {
    return (
      <div className="fx_panel">
        <p>FX</p>
        <button className="fx_button" onClick={() => this.handleSetFx("delay")}>
          delay
        </button>
        <FxSlider />
        <p className="fx_title">delayTime</p>
        <FxSlider />
        <p className="fx_title">feedback</p>
        <FxSlider />
        <p className="fx_title">wet</p>
        <button
          className="fx_button"
          onClick={() => this.handleSetFx("reverb")}>
          reverb
        </button>
        <FxSlider />
        <p className="fx_title">roomSize</p>
        <FxSlider />
        <p className="fx_title">dampeding</p>
        <FxSlider />
        <p className="fx_title">wet</p>
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
