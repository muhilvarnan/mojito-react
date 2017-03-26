import React from "react";
import Validator from "validator";
import isEmpty from 'lodash/isEmpty';

class EditSectionForm extends React.Component {

  constructor() {
    super();
    this.state = {
      errors:{}
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    const {id, section_title} = this.props.data;
    this.setState({
      id,
      section_title
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const {errors, isValid} = this.isValid(this.state);
    if(isValid) {
      console.log(this.state);
      this.props.editSectionAction(this.state);
      this.props.hideEditModal();
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

EditSectionForm.propTypes = {
  editSectionAction: React.PropTypes.func.isRequired
}

export default EditSectionForm;
