import React from "react";
import TextFieldGroup from "../../forms/components/field_group/TextFieldGroup";
import SectionRender from "../../forms/components/section/SectionRender";

class StandardSection extends React.Component {

  render() {
    return (
      <div>
        <SectionRender label="Basic Info">
          <TextFieldGroup
            name="first_name"
            label="First Name"
            fieldType="text"
            colSm={6} />
          <div>
            <TextFieldGroup
              name="last_name"
              label="Last Name"
              fieldType="text"
              colSm={12} />
          </div>
        </SectionRender>

        <SectionRender label="Contact Info">
          <TextFieldGroup
            name="first_name"
            fieldType="text"
            colSm={6}
            label="First Name" />
          <TextFieldGroup
            name="last_name"
            fieldType="text"
            colSm={6}
            label="Last Name" />
        </SectionRender>
      </div>
    )
  }
}

export default StandardSection;
