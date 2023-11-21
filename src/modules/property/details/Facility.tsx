import { Heading } from "@/components/common";
import { renderFacilityIcon } from "@/utils/common";
/**
 * Renders a facility component.
 *
 * @param {Array<[string, any]>} facilities - An array of facilities.
 * @return {JSX.Element} The rendered facility component.
 */
export function Facility({
  facilities,
}: {
  facilities: [string, any][];
}): JSX.Element {
  /**
   * Renders the facilities.
   *
   * @return {React.ReactNode} The rendered facilities.
   */
  const renderFacilities = (): React.ReactNode => {
    return facilities.map((item: [string, any], index: number) => (
      <div className="flex items-center gap-1" key={index}>
        {renderFacilityIcon(item)}
      </div>
    ));
  };
  return (
    <>
      <Heading level="h3" className="text-lg font-medium mb-7">
        Facility
      </Heading>
      <div className="grid grid-cols-4 gap-5 mb-6">
        {facilities.length > 0 && renderFacilities()}
      </div>
    </>
  );
}
