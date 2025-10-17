import {
  LANGUAGE,
} from "../types";
export const setLanguage = (payload) => {
  return {
    type: LANGUAGE,
    payload: payload,
  };
};
