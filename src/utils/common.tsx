import dynamic from "next/dynamic";
import capitalizeStr from "./toCapitalize";

/**
 * Renders a facility icon based on the given item.
 *
 * @param {Array<string, any>} item - The item containing the facility name and count.
 * @return {React.ReactNode} The rendered facility icon.
 */
export function renderFacilityIcon(item: [string, any]): React.ReactNode {
  // switch (name) {
  //   case "Beds": {
  //     return <IconBeds></IconBeds>;
  //   }
  //   default:
  //     return <></>;
  // }
  const [name, count] = item;
  const newName = capitalizeStr(name, "-").replace(/ /g, "");
  const Icon = dynamic(() => import(`@/components/icons/Icon${newName}`));
  return (
    <>
      <span><Icon></Icon></span>
      <span className="text-sm font-medium">
        {count} {newName}
      </span>
    </>
  );
}
