import { LayoutMain } from "@/components/layout";
import PropertyList from "@/modules/property/PropertyList";
import { getProperties } from "@/store/property.service";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Heading } from "../components/common/Heading";
/**
 * Renders the PropertyPage component.
 *
 * @return {JSX.Element} The rendered PropertyPage component.
 */
const PropertyPage = (): JSX.Element => {
  
  return (
    <LayoutMain>
      <div className="flex items-center justify-between mb-5">
        <Heading level="h1" className="font-bold text-[25px] text-primaryText">
          Property List
        </Heading>
        <Link
          href="/property/create"
          className="leading-[22px] rounded-[10px] flex items-center justify-center py-3 px-5 bg-primary text-grayfc text-sm font-medium"
        >
          + Add property
        </Link>
      </div>
      <PropertyList></PropertyList>
    </LayoutMain>
  );
};

export default PropertyPage;
