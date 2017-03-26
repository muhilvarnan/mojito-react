import { ADD_FORM_RENDER_JSON } from "../config/ActionTypes";

export default (state = [], action= {}) => {
  switch(action.type) {
    case ADD_FORM_RENDER_JSON:
      state = action.data
      return [...state];
    default: return state;
  }
}
