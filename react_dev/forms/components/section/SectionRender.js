import React from "react";

class SectionRender extends React.Component {

  render() {
    return (
      <div class="panel panel-default">
        <div class="panel-heading">{this.props.label}</div>
        <div class="panel-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}

SectionRender.propTypes = {
  label: React.PropTypes.string.isRequired
}
export default SectionRender;
