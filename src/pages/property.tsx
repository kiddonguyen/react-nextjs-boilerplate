import { LayoutMain } from "@/components/layout";
import PropertyItem from "@/modules/property/PropertyItem";
import React from "react";

const PropertyPage = () => {
  return (
    <LayoutMain>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-[25px] text-primaryText">
          Property List
        </h1>
        <button className="leading-[22px] rounded-[10px] flex items-center justify-center py-3 px-5 bg-primary text-grayfc text-sm font-medium">
          + Add property
        </button>
      </div>
      <div className="bg-grayfc flex-shrink-0 rounded-2xl p-5">
        <div aria-label="filter"></div>
        <div aria-label="list" className="grid grid-cols-2 gap-x-16 gap-y-6">
          {Array(10)
            .fill(0)
            .map((item, index) => (
              <PropertyItem key={index}></PropertyItem>
            ))}
        </div>
        <div aria-label="pagination"></div>
      </div>
    </LayoutMain>
  );
};

export default PropertyPage;
