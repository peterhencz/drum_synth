import { SET_SOUND } from "../actions/types";

const intitialState = { sound: "kick" };

export default (state = intitialState, { type, payload }) => {
  switch (type) {
    case SET_SOUND:
      console.log("Your choice is Angular!", payload);
      return {
        ...state,
        sound: payload,
      };
    default:
      return state;
  }
};
