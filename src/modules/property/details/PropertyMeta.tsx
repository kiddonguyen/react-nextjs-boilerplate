import { Price } from "./Price";
import { PropertyInfo } from "./PropertyInfo";
import { Rating } from "./Rating";

/**
 * Render the PropertyMeta component.
 *
 * @param {Object} data - The data object containing property item data.
 * @return {JSX.Element} The rendered PropertyMeta component.
 */
export function PropertyMeta({
  data
}: {
  data: PropertyItemData;
}): JSX.Element {
  return <div className="grid grid-cols-[3fr_1fr] gap-6 mb-5">
      <PropertyInfo data={data} />
      <div className="flex flex-col gap-2">
        <Rating data={data} />
        <Price data={data} />
      </div>
    </div>;
}
  