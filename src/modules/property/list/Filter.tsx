import { Dropdown } from "@/components/dropdown";
import { IconTune } from "@/components/icons";
import {
  propertiesStatusData,
  propertiesTypeData,
} from "@/constants/general.const";
import useFilterProperties from "@/hooks/useFilterProperties";
import { Menu } from "@headlessui/react";
import { FilterInput } from "./filter/";


/**
 * Render a filter component.
 *
 * @param {Object} props - The component props.
 * @return {JSX.Element} The rendered filter component.
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
        renderItems={(item) => (
          <DropdownItem
            onClick={() => handleFilterByStatus(item.value)}
            key={item.value}
          >
            {item.label}
          </DropdownItem>
        )}
      />
      <Dropdown
        selected={selected.typeText}
        data={propertiesTypeData}
        renderItems={(item) => (
          <DropdownItem
            onClick={() => handleFilterByType(item.value)}
            key={item.value}
          >
            {item.label}
          </DropdownItem>
        )}
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


/**
 * Renders a dropdown item with the given children and onClick event handler.
 * @param {Object} props - The properties for the DropdownItem component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the dropdown item.
 * @param {() => void} [props.onClick] - The event handler for the onClick event.
 * @return {React.ReactNode} The rendered dropdown item.
 */
function DropdownItem({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}): React.ReactNode {
  return (
    <Menu.Item
      as={"div"}
      className="cursor-pointer p-2 rounded-lg text-sm font-medium text-gray80 hover:text-grayfc hover:bg-primary"
      onClick={onClick}
    >
      {children}
    </Menu.Item>
  );
}
