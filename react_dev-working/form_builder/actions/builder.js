import { ADD_SECTION, DELETE_SECTION, EDIT_SECTION, SORT_SECTION } from "./types";

export function addSectionAction(data) {
  return {
    type: ADD_SECTION,
    data
  }
}

export function deleteSectionAction(id) {
  return {
    type: DELETE_SECTION,
    id
  }
}

export function editSectionAction(data) {
  return {
    type: EDIT_SECTION,
    data
  }
}


export function sortSection(oldIndex, newIndex) {
  return {
    type: SORT_SECTION,
    data:{
      oldIndex,
      newIndex
    }
  }
}
