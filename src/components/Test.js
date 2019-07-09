import React, { Component } from "react";
import Cica from "./Cica";
import kick from "../assets/drum_sounds/dm_kick.mp3";
import * as Tone from "tone";

class Test extends Component {
  sound = new Tone.Player({
    url: kick,
  }).toMaster();

  bing = () => {
    console.log("cica");
    console.log(this.sound);

    this.sound.autostart = true;
    this.sound.start();
  };

  render() {
    return (
      <div className="nav-container">
        <div className="board c">
          board
          <button onClick={() => this.bing()}>cica</button>
          <Cica />
        </div>
      </div>
    );
  }
}

export default Test;
