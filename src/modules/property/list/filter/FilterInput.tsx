import { IconSearch } from "@/components/icons";
import useFilterProperties from "@/hooks/useFilterProperties";

/**
 * Renders a filter input component.
 *
 * @param {} - No parameters needed.
 * @return {JSX.Element} - The rendered filter input component.
 */
export function FilterInput({ }: {}): JSX.Element {
  const { handleFilterProperty } = useFilterProperties();

  return (
    <div className="rounded-lg p-2.5 gap-2.5 bg-grayf4 flex items-center basis-[229px]">
      <IconSearch></IconSearch>
      <input
        type="text" 
        className="text-xs font-medium w-full bg-transparent outline-none"
        placeholder="Enter an address, city or Zip code"
        onChange={handleFilterProperty}
      />
    </div>
  );
}
