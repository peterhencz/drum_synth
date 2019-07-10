export const setSound = sound => {
  return { type: "SET_SOUND", payload: sound };
};

export const getSound = sound => {
  return { type: "GET_SOUND", payload: sound };
};

export const setFx = fx => {
  return { type: "SET_FX", payload: fx };
};

export const getFx = fx => {
  return { type: "GET_FX", payload: fx };
};
