import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSound, getFx } from "../../actions/instruAction";
import { delay, reverb, zero } from "../FXs";
import kick from "../../assets/drum_sounds/dm_kick.mp3";
import hihat from "../../assets/drum_sounds/dm_closed_hh.mp3";
import snare from "../../assets/drum_sounds/dm_snare_clap.mp3";

import * as Tone from "tone";

class Pad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label,
      soundstate: props.sound.sound,
    };
  }

  componentDidMount() {
    this.props.getFx();
  }

  componentDidUpdate(prevProps) {
    const { sound, fx } = this.props.sound;
    if (sound !== prevProps.sound) {
      this.handleSwitchSound(sound);
    }
    if (fx !== prevProps.fx.fx) {
      this.handleSwitchFx(fx);
    }
  }

  handleSwitchFx(fx) {
    switch (fx) {
      case "delay":
        return delay;
      case "reverb":
        return reverb;
      default:
        return zero;
    }
  }

  handleSwitchSound(sound) {
    switch (sound) {
      case "kick":
        return kick;
      case "hihat":
        return hihat;
      case "snare":
        return snare;
      default:
        return kick;
    }
  }

  playSound = () => {
    const url = this.handleSwitchSound(this.props.sound.sound);
    const fx = this.handleSwitchFx(this.props.fx.fx);

    new Tone.Player({
      url,
      autostart: true,
    })
      .connect(fx)
      .toMaster();
  };

  render() {
    return (
      <div className="pad" onMouseDown={() => this.playSound()}>
        <p className="pad-label">{this.state.label}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sound: state.sound,
    fx: state.fx,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSound,
      getFx,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pad);
