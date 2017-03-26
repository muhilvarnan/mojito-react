import React from "react";
import classnames from "classnames";
import {connect} from "react-redux";
import { updateFormData } from "../../actions/formData";

class TextFieldGroup extends React.Component {

  constructor() {
    super();
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentWillMount() {
    this.props.updateFormData({
      name:this.props.name,
      value:'',
      error:null
    });
  }

  handleOnChange(e) {
    this.props.updateFormData({
      name:e.target.name,
      value:e.target.value
    })
  }

  render() {
    const { formData, name } = this.props;
    return (
      <div class={classnames("form-group",  {
        'col-sm-6':this.props.colSm==6,
        'col-sm-12':this.props.colSm==12,
      })}>
        <label>{this.props.label}</label>
        <input type={this.props.fieldType} onChange={this.handleOnChange} name={this.props.name} id={this.props.name} placeholder={this.props.placeholder} class="form-control" />
        { formData[name].error ? <span class="help-text">{formData[name].error}</span> : null }
      </div>
    )
  }
}

TextFieldGroup.propTypes = {
  label: React.PropTypes.string.isRequired,
  colSm: React.PropTypes.number.isRequired,
  fieldType: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string
}

function mapStateToProps(state) {
  return {
    formData: state.formData
  }
}

export default connect(mapStateToProps, { updateFormData })(TextFieldGroup);
