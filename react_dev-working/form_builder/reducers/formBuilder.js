import { ADD_SECTION } from "../actions/types";
import shortid from 'shortid';

export default (state =[], action= {}) => {
  switch(action.type) {
    case ADD_SECTION:
      return [
        ...state,
        {
          id: shortid.generate(),
          title: action.data.title
        }
      ];
    default: return state;
  }

}
