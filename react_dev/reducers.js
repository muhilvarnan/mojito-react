import { combineReducers } from "redux";

import formBuilderSections from "./form_builder/reducers/sections";
import formData from "./forms/reducers/formData";
import formRenderJson from "./forms/reducers/formRenderJson";

export default combineReducers({
  formBuilderSections,
  formData,
  formRenderJson
});
