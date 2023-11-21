import { PropertyMeta } from "./PropertyMeta";
import { Description } from "./Description";
import { Facility } from "./Facility";
import { Gallery } from "./Gallery";
interface LeftSectionProps {
  data?: PropertyItemData; // Make data optional
  facilities?: [string, any][] | undefined;
} 
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
}: LeftSectionProps): JSX.Element {
  if (!data) {
    return <div>No data available</div>;
  }
  return (
    <div aria-label="left">
      <Gallery data={data} />
      <div>
        <PropertyMeta data={data} />
        <Facility facilities={facilities} />
        <Description data={data} />
      </div>
    </div>
  );
}
