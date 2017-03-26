import axios from "axios";

export function getPatientFormRenderJson() {
    return dispatch => {
      return axios.get("/api/patient/formRender")
    }
}
