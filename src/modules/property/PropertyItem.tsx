import Image from "next/image";
import Link from "next/link";
import {
  PropertyLocation,
  PropertyMeta,
  PropertyPlace,
  PropertyPrice,
} from "./item";
import { PropertyItemData } from "@/types/property.types";
import { Skeleton } from "@/components/loading";
import { IconBed, IconCross, IconLocation2 } from "@/components/icons";
/**
 * Renders a single property item.
 *
 * @return {JSX.Element} The rendered property item.
 */
const PropertyItem = ({ data }: { data: PropertyItemData }): JSX.Element => {
  if (!data) {
    return <></>;
  }
  return (
    <Link
      href={{
        pathname: "/property/[id]",
        query: { id: data.id },
      }}
      className="flex gap-2"
    >
      {data?.image && data?.image.length > 0 && (
        <Image
          src={data.image[0]}
          alt="Property Thumbnail"
          width={400}
          height={250}
          priority
          className="w-100 object-cover w-[200px] h-[125px] rounded-xl"
        ></Image>
      )}
      <div className="flex-1">
        <PropertyPrice>${data.price}</PropertyPrice>
        <PropertyPlace>{data.title}</PropertyPlace>
        <PropertyLocation>{data.address}</PropertyLocation>
        {data.facility && <PropertyMeta facility={data.facility} />}
      </div>
    </Link>
  );
};
export const PropertyItemLoading = () => {
  return (
    <div className="flex gap-2">
      <Skeleton className="w-[200px] h-[150px] rounded-xl"></Skeleton>
      <div className="flex-1">
        <Skeleton className="w-[50px] h-[30px] mb-2"></Skeleton>
        <Skeleton className="w-full h-3 mb-3"></Skeleton>
        <div className="flex items-center gap-1 mb-2 text-gray80">
          <IconLocation2></IconLocation2>
          <Skeleton className="w-20 h-3"></Skeleton>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <IconBed></IconBed>
            <Skeleton className="w-5 h-3"></Skeleton>
          </div>
          <div className="flex items-center gap-1">
            <IconCross></IconCross>
            <Skeleton className="w-5 h-3"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
