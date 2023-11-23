import { PropertyItemData } from "@/types/property.types";
import React from "react";
import PropertyItem from "../PropertyItem";

export function ListProperty({
  data,
}: {
  data: {
    pages: {
      properties: PropertyItemData[];
    }[];
  };
}): JSX.Element {
  if (!data) {
    return <></>;
  }
  return (
    <div aria-label="list" className="grid grid-cols-2 gap-x-16 gap-y-6 mb-9">
      {data.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page?.properties &&
            page?.properties.length > 0 &&
            page?.properties.map((property: PropertyItemData) => (
              <PropertyItem key={property.id} data={property} />
            ))}
        </React.Fragment>
      ))}
    </div>
  );
}
