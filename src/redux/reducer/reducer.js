import {
  LANGUAGE,
} from "../types";
const initialValue = {
  language: {},
};
const reducerData = (state = initialValue, action) => {
  switch (action.type) {
    case LANGUAGE: {
      return {
        ...state,
        language: action.payload,
      };
    }
    default:
      return state;
  }
};
export default reducerData;
