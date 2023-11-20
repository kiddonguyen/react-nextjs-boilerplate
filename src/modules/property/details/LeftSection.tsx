import { Price } from "./Price";
import { PropertyInfo } from "./PropertyInfo";
import { Rating } from "./Rating";
import { Description } from "./Description";
import { Facility } from "./Facility";
import { Gallery } from "./Gallery";
/**
 * Renders the left section of the property item.
 *
 * @param {Object} props - The properties for the LeftSection component.
 * @param {PropertyItemData} props.data - The data for the property item.
 * @param {Array<[string, any]>} props.facilities - The facilities for the property item.
 * @return {JSX.Element} The JSX element representing the left section of the property item.
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
      <Gallery image={data?.image} />
      <div>
        <div className="grid grid-cols-[3fr_1fr] gap-6 mb-5">
          <PropertyInfo data={data} />
          <div className="flex flex-col gap-2">
            <Rating data={data} />
            <Price data={data} />
          </div>
        </div>
        <Facility facilities={facilities} />
        <Description description={data?.description} />
      </div>
    </div>
  );
}
