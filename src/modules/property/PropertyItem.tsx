import { PropertyMeta } from "./PropertyMeta";
import { PropertyLocation } from "./PropertyLocation";
import { PropertyPlace } from "./PropertyPlace";
import { PropertyPrice } from "./PropertyPrice";
import Image from "next/image";
import React from "react";
/**
 * Renders a single property item.
 *
 * @return {JSX.Element} The rendered property item.
 */
const PropertyItem = (): JSX.Element => {
  return (
    <div className="flex gap-2">
      <Image
        src="https://source.unsplash.com/random"
        alt="Property Thumbnail"
        width={400}
        height={250}
        priority
        className="w-100 object-cover w-[200px] h-[125px] rounded-xl"
      ></Image>
      <div className="flex-1">
        <PropertyPrice>$7400</PropertyPrice>
        <PropertyPlace>Metro Jayakarta Hotel & Spa</PropertyPlace>
        <PropertyLocation>North Carolina, USA</PropertyLocation>
        <PropertyMeta />
      </div>
    </div>
  );
};

export default PropertyItem;
