import React from "react";
import SectionRender from "../section/SectionRender";
import FieldTypes  from "../../config/FieldTypes";
import TextFieldGroup from "../field_group/TextFieldGroup";
import DropDownFieldGroup from "../field_group/DropDownFieldGroup";
import { addFormRenderJson } from "../../actions/formRender";
import {connect} from "react-redux";

class FormRender extends React.Component {

  constructor() {
    super();

  }

  componentWillMount() {
    this.props.getJsonFunc().then(
      (response) => {
        this.props.addFormRenderJson(response.data);
      }
    )
  }


  renderFieldItem(fieldItem) {

    switch(fieldItem.type) {
        case FieldTypes.TextFieldGroup:
          return <TextFieldGroup key={fieldItem.name}
                      label={fieldItem.label}
                      colSm={fieldItem.colSm}
                      name={fieldItem.name}
                      placeholder={fieldItem.placeholder}
                      fieldType={fieldItem.fieldType}
                    />
        case FieldTypes.DropDownFieldGroup:
            return <DropDownFieldGroup key={fieldItem.name}
                      label={fieldItem.label}
                      colSm={fieldItem.colSm}
                      name={fieldItem.name}
                      selectText={fieldItem.selectText}
                      options={fieldItem.options}
                    />
    }
  }

  renderSection(sectionItem) {
    const fieldRenderItems = sectionItem.fields.map((item, i) => this.renderFieldItem(item));
    return (
      <SectionRender key={sectionItem.id} label={sectionItem.label}>
        {fieldRenderItems}
      </SectionRender>
    )
  }

  render() {
    const formRenderItems = this.props.formRenderJson.map((item, i)=>  this.renderSection(item) );
    return (
      <div>
        {formRenderItems}
      </div>
    )
  }
}

FormRender.propTypes = {
  getJsonFunc: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    formRenderJson: state.formRenderJson
  }
}


export default connect(mapStateToProps,{addFormRenderJson})(FormRender);
