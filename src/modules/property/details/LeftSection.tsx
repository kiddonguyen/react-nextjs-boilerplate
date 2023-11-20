import { Price } from "./Price";
import { PropertyInfo } from "./PropertyInfo";
import { Rating } from "./Rating";
import { Description } from "./Description";
import { Facility } from "./Facility";
import { Gallery } from "./Gallery";
export function LeftSection({
  data,
  facilities,
}: {
  data: PropertyItemData;
  facilities: [string, any][];
}) {
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
