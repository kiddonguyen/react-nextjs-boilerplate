import { IconBed, IconCross } from "@/components/icons";
import { PropertyIconWithLabel } from './PropertyIconWithLabel';
/**
 * Renders the PropertyMeta component.
 *
 * @return {JSX.Element} The rendered PropertyMeta component.
 */
export function PropertyMeta(): JSX.Element {
  return <div className="flex items-center gap-2">
      <PropertyIconWithLabel icon={<IconBed />}>4 Beds</PropertyIconWithLabel>
      <PropertyIconWithLabel icon={<IconCross />}>28M</PropertyIconWithLabel>
    </div>;
}

  