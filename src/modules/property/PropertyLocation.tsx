import { IconLocation2 } from "@/components/icons";
import { PropertyIconWithLabel } from "./PropertyIconWithLabel";
/**
 * Renders the PropertyLocation component.
 *
 * @param {React.ReactNode} children - The children elements to be rendered inside the component.
 * @return {JSX.Element} The rendered PropertyLocation component.
 */
export function PropertyLocation({children} : {children: React.ReactNode}): JSX.Element {
  return (
    <PropertyIconWithLabel
      icon={<IconLocation2 />}
      className="text-gray80 mb-4"
    >{ children }</PropertyIconWithLabel>
  );
}
