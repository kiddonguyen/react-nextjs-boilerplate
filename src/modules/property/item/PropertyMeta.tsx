import { IconBeds, IconCross } from "@/components/icons";
import { PropertyIconWithLabel } from "./PropertyIconWithLabel";
/**
 * Renders the PropertyMeta component.
 *
 * @return {JSX.Element} The rendered PropertyMeta component.
 */
interface IFacility {
  area?: string | undefined;
  beds?: number | undefined;
}
export function PropertyMeta({
  facility,
}: {
  facility: IFacility;
}): JSX.Element {
  return (
    <div className="flex items-center gap-2">
      <PropertyIconWithLabel icon={<IconBeds />}>
        {facility.beds}
      </PropertyIconWithLabel>
      <PropertyIconWithLabel icon={<IconCross />}>
        {facility.area}
      </PropertyIconWithLabel>
    </div>
  );
}
