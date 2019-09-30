import React, { Component } from "react";
import { connect } from "react-redux";

import { setFx } from "../../actions";
import FxSlider from "../Slider/Slider";

class FXPanel extends Component {
  state = { delayFxStatus: false, reverbFxStatus: false };

  handleSetFx = fx => {
    console.log("fx select", fx);
    this.props.setFx(fx);
  };

  // handleSetFx = fx => {
  //   console.log("fx: ", fx);
  //   if (this.state.delayFxStatus === false) {
  //     this.props.setFx(fx);
  //     console.log(fx, this.state.fxStatus);
  //     this.setState({
  //       [fx + "FxStatus"]: true,
  //       [fx + "ButtonClass"]: "fx_button-on",
  //     });
  //   } else {
  //     this.props.setFx("zero");
  //     console.log(fx, this.state.fxStatus);
  //     this.setState({
  //       [fx + "FxStatus"]: false,
  //       [fx + "ButtonClass"]: "fx_button",
  //     });
  //   }
  // };

  render() {
    console.log("fxstate: ", this.state);
    const delayButtonClass = this.state.delayFxStatus
      ? "fx_button-on"
      : "fx_button";
    const reverbButtonClass = this.state.reverbFxStatus
      ? "fx_button-on"
      : "fx_button";
    return (
      <div className="fx_panel">
        <p>FX</p>
        <button
          className={delayButtonClass}
          onClick={() => this.handleSetFx("delay")}>
          delay
        </button>
        <FxSlider />
        <p className="fx_title">delayTime</p>
        <FxSlider />
        <p className="fx_title">feedback</p>
        <FxSlider />
        <p className="fx_title">wet</p>
        <button
          className={reverbButtonClass}
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
