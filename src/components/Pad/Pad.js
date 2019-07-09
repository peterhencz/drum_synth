import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSound } from "../../actions/instruAction";
import kick from "../../assets/drum_sounds/dm_kick.mp3";
import hihat from "../../assets/drum_sounds/dm_closed_hh.mp3";
import * as Tone from "tone";

class Pad extends Component {
  constructor(props) {
    super(props);
    console.log("padprops: ", this.props);
    this.state = {
      label: this.props.label,
    };
  }

  componentDidMount() {
    this.props.getSound();
    console.log("na: ", this.props.sound.sound);
  }

  bing = new Tone.Player({
    url: kick,
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
