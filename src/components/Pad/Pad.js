import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSound } from "../../actions/instruAction";
import kick from "../../assets/drum_sounds/dm_kick.mp3";
import hihat from "../../assets/drum_sounds/dm_closed_hh.mp3";
import snare from "../../assets/drum_sounds/dm_snare_clap.mp3";
import * as Tone from "tone";

class Pad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label,
    };
  }

  componentDidMount() {
    this.props.getSound();
    console.log("na: ", this.props.sound);
  }

  componentDidUpdate(prevProps) {
    console.log("update: ", this.props.sound.sound);
    console.log("prevP: ", prevProps.sound.sound);
    if (this.props.sound.sound !== prevProps.sound.sound) {
      this.handleSwitch(this.props.sound.sound);
    }
  }

  handleSwitch(param) {
    switch (param) {
      case "kick":
        return kick;

      case "hihat":
        return hihat;

      default:
        return snare;
    }
  }

  bing = new Tone.Player({
    url: this.handleSwitch(this.props.sound.sound),
  }).toMaster();

  playSound = () => {
    console.log("CCCCCCC: ", this.props.sound.sound);
    this.bing.autostart = true;
    this.bing.start();
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
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSound,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pad);
