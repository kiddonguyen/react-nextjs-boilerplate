import { propertiesStatusData, propertiesTypeData } from "@/constants/general.const";
import { TFilter, TPropertyStatusData, TPropertyTypeData } from "@/types/general.types";
import { debounce } from "lodash";
import React, { useState } from "react";

const useFilterProperties = () => {
  const [selected, setSelected] = useState({
    statusText: "Any Status",
    typeText: "Any Type",
    countryText: "All Countries",
    stateText: "All States",
  });
  const [filter, setFilter]     = useState<TFilter>({
    text: "",
    status: "",
    country: "",
    type: "",
    state: "",
  });
  const handleFilterProperty    = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilter({
        ...filter,
        text: event.target.value,
      });
    },
    500
  );
  
  const handleFilterByStatus = (value: TPropertyStatusData["value"]): void => {
    setFilter({
      ...filter,
      status: value,
    });
    const foundStatus = propertiesStatusData.find(
      (status) => status.value === value
    );
    if (!foundStatus) return;
    setSelected({
      ...selected,
      statusText: value ? foundStatus?.label || "" : "Any Status",
    });
    console.log(filter);
  };
  const handleFilterByType = (value: TPropertyTypeData["value"]): void => {
    setFilter({
      ...filter,
      type: value,
    });
    const foundType = propertiesTypeData.find(
      (status) => status.value === value
    );
    if (!foundType) return;
    setSelected({
      ...selected,
      typeText: value ? foundType?.label || "" : "Any Type",
    });
  };
  
  return {
    filter,
    handleFilterProperty,
    handleFilterByStatus,
    handleFilterByType,
    selected,
  };
};

export default useFilterProperties;
