import { LayoutMain } from "@/components/layout";
import PropertyItem from "@/modules/property/PropertyItem";
import React from "react";
import { v4 as uuidv4 } from "uuid";
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
        <div
          aria-label="list"
          className="grid grid-cols-2 gap-x-16 gap-y-6 mb-9"
        >
          {Array(10)
            .fill(0)
            .map((item, index) => (
              <PropertyItem key={uuidv4()}></PropertyItem>
            ))}
        </div>
        <div
          aria-label="pagination"
          className="flex items-center justify-between"
        >
          <p className="text-gray80">Showing 1 to 10 Properties</p>
          <div className="flex items-center gap-[10px]">
            <button className="w-9 h-9 rounded-lg flex items-center justify-center bg-primary text-white">
              1
            </button>
            <button className="w-9 h-9 rounded-lg flex items-center justify-center text-gray80">
              2
            </button>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default PropertyPage;
