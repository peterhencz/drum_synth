export const setSound = sound => {
  return { type: "SET_SOUND", payload: sound };
};

export const getSound = (sound) => {
  return { type: "GET_SOUND", payload: sound };
};
