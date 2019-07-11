import React, { Component } from "react";
import { connect } from "react-redux";

import { setSound } from "../../actions";

class InstrumentSelect extends Component {
  state = {
    buttonClass: "instrument-button",
  };

  handleSetSound = sound => {
    this.props.setSound(sound);
  };

  render() {
    return (
      <div className="instrument-select">
        <p>INSTRU</p>
        <button
          className={this.state.buttonClass}
          onClick={() => this.handleSetSound("kick")}>
          kick
        </button>
        <button
          className={this.state.buttonClass}
          onClick={() => this.handleSetSound("hihat")}>
          hi-hat
        </button>
        <button
          className={this.state.buttonClass}
          onClick={() => this.handleSetSound("snare")}>
          snare
        </button>
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
