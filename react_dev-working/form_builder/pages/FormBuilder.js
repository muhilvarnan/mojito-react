import React from "react";
import ToolBox from "../components/builder/ToolBox";
import AddSection from "../components/builder/AddSection";
import DropSection from "../components/builder/DropSection";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CustomDragLayer from "../components/builder/CustomDragLayer";

@DragDropContext(HTML5Backend)
class FormBuilder extends React.Component {

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-1">
          <ToolBox />
          <CustomDragLayer />

          </div>
        <div class="col-sm-8">
          Drag Section
          <div class="row">
            <DropSection />
            <AddSection />
          </div>
        </div>
        <div class="col-sm-3">
          <div class="row">
            <div class="col-sm-12">
              <h2>Properities</h2>
              <input type="checkbox" name="is_required" /> Is Required
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default FormBuilder;
