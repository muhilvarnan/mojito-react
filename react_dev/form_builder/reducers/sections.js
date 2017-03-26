import { ADD_SECTION, DELETE_SECTION, EDIT_SECTION, SORT_SECTION } from "../actions/types";
import shortid from 'shortid';
import findIndex from "lodash/findIndex";
import {arrayMove} from 'react-sortable-hoc';

export default (state =[], action= {}) => {
  let index=null;

  switch(action.type) {
    case ADD_SECTION:
      const { section_title } = action.data;
      return [
        ...state,
        {
          id: shortid.generate(),
          section_title
        }
      ];
    case DELETE_SECTION:
      index = findIndex(state,  {
        id: action.id
      })
      if(index>=0) {
         return [
           ...state.slice(0, index),
           ...state.slice(index+1)
         ]
       }
      return state;
    case EDIT_SECTION:
        index = findIndex(state,  {
          id: action.data.id
        });
        if(index>=0) {
          state[index] = action.data
        }
        return [...state];
    case SORT_SECTION:
        const { oldIndex, newIndex } = action.data;
        state = arrayMove(state, oldIndex, newIndex);
        console.log(state);
        return state
    default: return state;
  }

}
