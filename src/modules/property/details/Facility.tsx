import capitalizeStr from "@/utils/toCapitalize";
import dynamic from "next/dynamic";

/**
 * Renders a facility icon based on the given item.
 *
 * @param {Array<string, any>} item - The item containing the facility name and count.
 * @return {React.ReactNode} The rendered facility icon.
 */
function renderFacilityIcon(item: [string, any]): React.ReactNode {
  // switch (name) {
  //   case "Beds": {
  //     return <IconBeds></IconBeds>;
  //   }
  //   default:
  //     return <></>;
  // }
  const [name, count] = item;
  const newName = capitalizeStr(name, "-").replace(/ /g, "");
  // const Icon = dynamic(() => import(`../../components/icons/Icon${newName}`));
  return (
    <>
      <span>{/* <Icon></Icon> */}</span>
      <span className="text-sm font-medium">
        {count} {newName}
      </span>
    </>
  );
}
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
  return (
    <>
      <h3 className="text-lg font-medium mb-7">Facility</h3>
      <div className="grid grid-cols-4 gap-5 mb-6">
        {facilities.length > 0 &&
          facilities.map((item: [string, any], index: number) => (
            <div className="flex items-center gap-1" key={index}>
              {renderFacilityIcon(item)}
            </div>
          ))}
      </div>
    </>
  );
}
