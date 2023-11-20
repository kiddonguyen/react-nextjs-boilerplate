import Image from "next/image";
import Link from "next/link";
import {
  PropertyLocation,
  PropertyMeta,
  PropertyPlace,
  PropertyPrice,
} from "./item";
/**
 * Renders a single property item.
 *
 * @return {JSX.Element} The rendered property item.
 */
interface PropertyItemProps {
  data: PropertyItemData;
}
const PropertyItem = ({ data }: PropertyItemProps): JSX.Element => {
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

export default PropertyItem;
