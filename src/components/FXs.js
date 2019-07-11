import * as Tone from "tone";

export const delay = new Tone.PingPongDelay({
  delayTime: 0.25,
  feedback: 0.8,
  wet: 0.9,
}).toMaster();

export const reverb = new Tone.Freeverb({
  roomSize: 0.9,
  dampeding: 9000,
  wet: 0.9,
}).toMaster();

export const zero = new Tone.Freeverb({
  roomSize: 0,
  dampeding: 0,
  wet: 0,
}).toMaster();
