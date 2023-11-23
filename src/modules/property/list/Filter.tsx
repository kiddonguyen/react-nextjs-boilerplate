import { Dropdown } from "@/components/dropdown";
import { IconTune } from "@/components/icons";
import {
  propertiesStatusData,
  propertiesTypeData,
} from "@/constants/general.const";
import useFilterProperties from "@/hooks/useFilterProperties";
import { FilterInput } from "./filter/";

/**
 * Renders a filter component.
 *
 * @param {} - No parameters required.
 * @return {JSX.Element} - The filter component.
 */
export function Filter({}: {}): JSX.Element {
  const { handleFilterByStatus, handleFilterByType, selected } =
    useFilterProperties();
  return (
    <div aria-label="filter" className="flex gap-5 mb-6">
      <FilterInput />
      <Dropdown
        selected={selected.statusText}
        data={propertiesStatusData}
        onClick={handleFilterByStatus}
      />
      <Dropdown
        selected={selected.typeText}
        data={propertiesTypeData}
        onClick={handleFilterByType}
      />
      <Dropdown selected={selected.countryText} />
      <Dropdown selected={selected.stateText} />
      <button className="flex items-center gap-2.5 rounded-lg bg-grayf7 p-2 text-xs font-medium text-gray80">
        <IconTune></IconTune>
        <span>More</span>
      </button>
    </div>
  );
}
