/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { EntriesPage } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Entry from "./Entry";
import { Collection } from "@aws-amplify/ui-react";
export default function EntriesPreview(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: EntriesPage,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "EntriesPreview")}
    >
      {(item, index) => (
        <Entry
          entriespage={item}
          height="auto"
          width="auto"
          margin="1px 1px 1px 1px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Entry>
      )}
    </Collection>
  );
}
