import { ADD_FORM_RENDER_JSON } from "../config/ActionTypes";

export function addFormRenderJson(data) {

  return {
    type: ADD_FORM_RENDER_JSON,
    data
  }
}
