import React, { Component } from "react";
import kick from "../../assets/drum_sounds/dm_kick.mp3";
import hihat from "../../assets/drum_sounds/dm_closed_hh.mp3";
import * as Tone from "tone";

class Pad extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      label: this.props.label,
    };
  }

  sound = new Tone.Player({
    url: kick,
  }).toMaster();

  playSound = () => {
    console.log("CCCCCCC: ", this.state.instrument);
    console.log("sound: ", this.sound);
    this.sound.autostart = true;
    this.sound.start();
  };

  render() {
    console.log("instru: ", this.props.instrument);
    return (
      <div className="pad" onMouseDown={() => this.playSound()}>
        <p className="pad-label">{this.state.label}</p>
      </div>
    );
  }
}

export default Pad;
