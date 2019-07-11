import React, { Component } from "react";
import { connect } from "react-redux";

import { setFx } from "../../actions";
import FxSlider from "../Slider/Slider";

class FXPanel extends Component {
  state = { fxStatus: false };

  handleSetFx = fx => {
    if (this.state.fxStatus !== false) {
      this.props.setFx(fx);
      this.setState({ fxStatus: false });
      console.log("on––", this.state);
    } else {
      this.props.setFx("zero");
      this.setState({ fxStatus: true });
      console.log("off––", this.state);
    }
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
