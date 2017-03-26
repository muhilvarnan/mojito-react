import React from "react";
import { sortable } from 'react-sortable';
import DropSectionItem from "./DropSectionItem";
import { SortableElement, SortableContainer } from 'react-sortable-hoc';

export const SortableItem = SortableElement(({deleteSectionAction, editSectionAction, data, showEditModal}) =>
  <DropSectionItem deleteSectionAction={deleteSectionAction} data={data} showEditModal={showEditModal} />
);


export const SortableList = SortableContainer(({items, deleteSectionAction, showEditModal}) => {
  console.log("update");
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} deleteSectionAction={deleteSectionAction} showEditModal={showEditModal} data={value} />
      ))}
    </ul>
  );
});
