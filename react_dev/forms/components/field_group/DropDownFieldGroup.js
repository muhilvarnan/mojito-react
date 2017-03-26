import React from "react";
import classnames from "classnames";
import {connect} from "react-redux";
import { updateFormData } from "../../actions/formData";

class DropDownFieldGroup extends React.Component {

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
    const options = this.props.options.map((item, i) => <option key={i} value={item.id}>{item.value}</option>)
    return (
      <div class={classnames("form-group",  {
        'col-sm-6':this.props.colSm==6,
        'col-sm-12':this.props.colSm==12,
      })}>
        <label>{this.props.label}</label>
        <select  onChange={this.handleOnChange} value={this.props.defaultValue} name={this.props.name} id={this.props.name} class="form-control">
          {this.props.selectText ? <option defaultValue="">{this.props.selectText}</option> : null }
          {options}
        </select>
        { formData[name].error ? <span class="help-text">{formData[name].error}</span> : null }
      </div>
    )
  }
}

DropDownFieldGroup.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  colSm: React.PropTypes.number.isRequired,
  options: React.PropTypes.array,
  selectText: React.PropTypes.string
}

function mapStateToProps(state) {
  return {
    formData: state.formData
  }
}


export default connect(mapStateToProps, { updateFormData })(DropDownFieldGroup);
