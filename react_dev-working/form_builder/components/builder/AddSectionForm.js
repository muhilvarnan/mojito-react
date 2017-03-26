import React from "react";
import Validator from "validator";
import isEmpty from 'lodash/isEmpty';

class AddSectionForm extends React.Component {

  constructor() {
    super();
    this.state = {
      section_title:'',
      errors:{}
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const {errors, isValid} = this.isValid(this.state);
    if(isValid) {
      this.props.addSectionAction(this.state);
      this.props.hideModal();
    } else {
      this.setState({
        errors
      });
    }
  }

  isValid(data) {
    let errors = {};
    if(Validator.isEmpty(data.section_title)) {
       errors.section_title = "This field is required";
    }
    return {
      errors,
      isValid:isEmpty(errors)
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div class="form-group">
          <label for="section_title"></label>
          <input type="text" name="section_title" value={this.state.section_title} onChange={this.onChange} />
          {this.state.errors.section_title && <span className="help-block">{this.state.errors.section_title}</span>}
        </div>  
        <button type="submit">Button</button>
      </form>
    )
  }
}

AddSectionForm.propTypes = {
  addSectionAction: React.PropTypes.func.isRequired,
  hideModal: React.PropTypes.func.isRequired
}

export default AddSectionForm;
