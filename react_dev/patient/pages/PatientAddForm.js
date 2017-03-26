import React from "react";
import StandardSection from "../components/StandardSection";
import FormRender from "../../forms/components/render/FormRender";
import { getPatientFormRenderJson } from "../actions/form_render";
import {connect} from "react-redux";

class PatientAddForm extends React.Component {

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.props.formData);
    console.log(this.props.formRenderJson);
  }

  render() {
    const { getPatientFormRenderJson } = this.props;
    return (
      <div class="container">
        <form onSubmit={this.onSubmit}>
          <StandardSection />
          <FormRender getJsonFunc={getPatientFormRenderJson} />
          <button type="submit">Add Patient</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    formData: state.formData,
    formRenderJson: state.formRenderJson
  }
}

export default connect(mapStateToProps,{getPatientFormRenderJson})(PatientAddForm);
