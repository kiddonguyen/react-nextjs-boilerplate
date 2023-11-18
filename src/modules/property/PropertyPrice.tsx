import { PropertyItemProps } from "@/types/general.types";
/**
 * Renders the property price.
 *
 * @returns {JSX.Element} The property price component.
 */
export function PropertyPrice({ children }: PropertyItemProps): JSX.Element {
  return (
    <span className="bg-secondary inline-block text-xs text-primary font-semibold py-2 px-[10px] rounded-[5px] mb-3">
      {children}
    </span>
  );
}
