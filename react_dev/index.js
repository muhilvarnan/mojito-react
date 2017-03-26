/** Node Modules **/
import React from "react";
import ReactDom from "react-dom";
import { Provider} from "react-redux";

/** Custom Modules **/
import PatientAddForm from "./patient/pages/PatientAddForm";
import PatientEditForm from "./patient/pages/PatientEditForm";
import PatientPreview from "./patient/pages/PatientPreview";
import FormBuilder from "./form_builder/pages/FormBuilder";

import store from "./store";

var patientAddDocument = document.getElementById('react_patient_add');
if (patientAddDocument) {
  ReactDom.render(<Provider store={store}>
      <PatientAddForm />
      </Provider>, patientAddDocument);
}

var patientEditDocument = document.getElementById('react_patient_edit');
if (patientEditDocument) {
  ReactDom.render(<PatientEditForm />, patientEditDocument);
}

var PatientPreviewDocument = document.getElementById('react_patient_preview');
if (PatientPreviewDocument) {
  ReactDom.render(<PatientPreview />, PatientPreviewDocument);
}

var FormBuilderDocument = document.getElementById('react_form_builder');
if (FormBuilderDocument) {
  ReactDom.render(<Provider store={store}>
        <FormBuilder />
      </Provider>, FormBuilderDocument);
}
