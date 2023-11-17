import { IconBed, IconLocation2 } from "@/components/icons";
import Image from "next/image";
import React from "react";

interface PropertyItemProps {
  children?: React.ReactNode;
}

/**
 * Renders a single property item.
 *
 * @param {PropertyItemProps} children - The children of the property item.
 * @return {JSX.Element} The rendered property item.
 */
const PropertyItem = ({ children }: PropertyItemProps): JSX.Element => {
  return (
    <div className="flex gap-2">
      <div className="relative flex-shrink-0">
        <Image
          src="https://source.unsplash.com/random"
          alt="property"
          width={400}
          height={250}
          className="w-100 object-cover w-[200px] h-[125px] rounded-xl"
        ></Image>
      </div>
      <div className="flex-1">
        <PropertyPrice />
        <PropertyPlace />
        <PropertyLocation />
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <IconBed></IconBed>
            <span className="text-xs font-medium">4 Beds</span>
          </div>
          <div className="flex items-center gap-1"></div>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;

function PropertyPrice({}) {
  return (
    <span className="bg-secondary inline-block text-xs text-primary font-semibold py-2 px-[10px] rounded-[5px] mb-3">
      $7400
    </span>
  );
}

function PropertyPlace({}) {
  return (
    <h3 className="text-base font-semibold mb-2">
      Metro Jayakarta Hotel & Spa
    </h3>
  );
}

function PropertyLocation({}) {
  return (
    <div className="flex items-center gap-1 text-gray80 mb-3">
      <IconLocation2></IconLocation2>
      <span>North Carolina, USA</span>
    </div>
  );
}
