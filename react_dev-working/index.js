import React from "react";
import ReactDom from "react-dom";

import PatientAddForm from "./patient/pages/PatientAddForm";
import PatientEditForm from "./patient/pages/PatientEditForm";
import PatientPreview from "./patient/pages/PatientPreview";
import FormBuilder from "./form_builder/pages/FormBuilder";
import DragAroundCustomDragLayer from "./custom/index";
import { Provider} from "react-redux";
import store from "./store";

var patientAddDocument = document.getElementById('react_patient_add');
if (patientAddDocument) {
  ReactDom.render(<PatientAddForm />, patientAddDocument);
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

/*
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

class ViewCom extends React.Component {
  render() {
    return (
      <div class="col-sm-12">
      <h1>{this.props.data.text}</h1>
      <button >Delete</button>
      <button >Edit</button>
      </div>
    )
  }
}
const SortableItem = SortableElement(({value}) => <ViewCom data={value}/>);

const SortableList = SortableContainer(({items}) => {
	return (
		<ul>
			{items.map((value, index) =>
                <SortableItem key={`item-${index}`} index={index} value={value} />
            )}
		</ul>
	);
});

class SortableComponent extends React.Component {
    state = {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
    }
    state = {
        items: [{
          id:"Wrew",
          text:"adas"
        },
        {
          id:"Wrewsdes",
          text:"adsfras"
        }]
    }
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex)
        });
    };
    render() {
        return (
            <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
        )
    }
}

ReactDom.render(<SortableComponent/>, document.body);

/*
import { sortable } from 'react-sortable';

class ListItem extends React.Component {
  render()  {
    return (
      <div {...this.props} className="list-item">{this.props.children}</div>
    )
  }
}


var SortableListItem = sortable(ListItem);

var SortableList = React.createClass({

  getInitialState: function() {
    return {
      draggingIndex: null,
      data: this.props.data
    };
  },

  updateState: function(obj) {
    this.setState(obj);
  },

  customFunction: function() {
    console.log("called");
  },
  render: function() {
    var childProps = { className: 'myClass1' };
    var listItems = this.state.data.items.map(function(item, i) {
      return (
        <SortableListItem
          key={i}
          updateState={this.updateState}
          items={this.state.data.items}
          draggingIndex={this.state.draggingIndex}
          sortId={i}
          outline="list"
          childProps={childProps}
          >{item}</SortableListItem>
      );
    }, this);

    return (
          <div className="list">{listItems}</div>
    )
  }
});
var data = {
  items: [
    "Gold",
    "Crimson",
    "Hotpink",
    "Blueviolet",
    "Cornflowerblue"
  ]
};

ReactDom.render(
    <SortableList data={data} />,
    document.body
);*/
