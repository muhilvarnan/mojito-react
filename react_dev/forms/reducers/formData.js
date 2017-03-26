import { UPDATE_FORM_DATA } from "../config/ActionTypes";

export default (state = {}, action= {}) => {
  switch(action.type) {
    case UPDATE_FORM_DATA:
      state[action.data.name] = action.data
      return Object.assign({},state);
    default: return state;
  }
}
