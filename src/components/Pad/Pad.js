import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSound, getFx } from "../../actions/instruAction";
import { delay, reverb } from "../FXs";
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

  // bing = new Tone.Player({
  //   url: this.handleSwitchSound(this.props.sound.sound),
  // }).connect(this.handleSwitchFx(this.props.fx.fx));

  handleSwitchFx(param) {
    console.log("param", param);
    switch (param) {
      case "delay":
        return delay;
      case "reverb":
        console.log("param:", param);
        console.log(reverb);
        return reverb;
      default:
        return delay;
    }
  }

  handleSwitchSound(param) {
    console.log("param: ", param);
    switch (param) {
      case "kick":
        return kick;
      case "hihat":
        return hihat;
      default:
        return snare;
    }
  }

  playSound = () => {
    console.log("prop: ", this.props.fx.fx);
    console.log("kisfaszom :", this.props);
    const url = this.handleSwitchSound(this.props.sound.sound);
    const fx = this.handleSwitchFx(this.props.fx.fx);
    console.log("fx", fx);
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