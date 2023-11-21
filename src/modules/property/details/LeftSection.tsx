import { Description } from "./Description";
import { Facility } from "./Facility";
import { Gallery } from "./Gallery";
import { Price } from "./Price";
import { PropertyInfo } from "./PropertyInfo";
import { Rating } from "./Rating";

/**
 * Renders the left section of the property item.
 *
 * @param {Object} props - The properties object.
 * @param {PropertyItemData} props.data - The property item data.
 * @param {Array<[string, any]>} props.facilities - The facilities data.
 * @return {JSX.Element} The JSX element of the left section.
 */
export function LeftSection({
  data,
  facilities,
}: {
  data: PropertyItemData;
  facilities: [string, any][];
}): JSX.Element {
  return (
    <div aria-label="left">
      <Gallery images={data?.images} />
      <div>
        <div className="grid grid-cols-[3fr_1fr] gap-6 mb-5">
          <PropertyInfo data={data} />
          <div className="flex flex-col gap-2">
            <Rating data={data} />
            <Price data={data} />
          </div>
        </div>
        <Facility facilities={facilities} />
        <Description data={data} />
      </div>
    </div>
  );
}
