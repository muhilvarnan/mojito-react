import { UPDATE_FORM_DATA } from "../config/ActionTypes";

export function updateFormData(data) {

  return {
    type: UPDATE_FORM_DATA,
    data
  }
}
