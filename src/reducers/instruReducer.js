import { SET_SOUND, GET_SOUND, SET_FX, GET_FX } from "../actions/types";

const intitialState = {};

export default (state = intitialState, { type, payload }) => {
  switch (type) {
    case SET_SOUND:
      return {
        ...state,
        sound: payload,
      };
    case GET_SOUND:
      return {
        ...state,
      };
    case SET_FX:
      return {
        ...state,
        fx: payload,
      };
    case GET_FX:
      return {
        ...state,
      };
    default:
      return state;
  }
};
