import { Heading } from "@/components/common";
import capitalizeStr from "@/utils/toCapitalize";

/**
 * Render a property information component.
 *
 * @param {PropertyItemData} data - The data for the property item.
 * @return {JSX.Element} - The rendered property information component.
 */
export function PropertyInfo({
  data,
}: {
  data: PropertyItemData;
}): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <span className="block text-lg font-medium">
        {capitalizeStr(data.type)}
      </span>
      <Heading level="h1" className="text-xl font-medium">
        {data.title}
      </Heading>
      <div className="flex items-center gap-1 text-sm text-gray80">
        {data.address}
      </div>
    </div>
  );
}
