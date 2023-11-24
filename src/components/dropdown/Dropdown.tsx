import { DropdownProps } from "@/types/general.types";
import { Menu } from "@headlessui/react";
import { IconCavetDown } from "../icons";

export function Dropdown<TData,>(props: DropdownProps<TData>): JSX.Element {
  // eslint-disable-next-line align-assignments/align-assignments
  const { selected, renderItems, data = [] } = props;
  return (
    <Menu as="div" className="relative basis-[160px]">
      {({ open }) => (
        <>
          <Menu.Button
            as="div"
            className="flex items-center justify-between p-2.5 rounded-lg bg-grayf4 gap-2.5 cursor-pointer text-xs font-medium w-full"
          >
            <span>{selected}</span>
            <IconCavetDown
              style={{ transform: open ? "rotate(180deg)" : "" }}
            />
          </Menu.Button>
          {open && (
            <Menu.Items
              as="div"
              className="absolute top-full left-0 right-0 rounded-lg bg-grayfc z-10 shadow-dropdown outline-none"
            >
              {data.length > 0 && data.map(item => renderItems?.(item))}
              {/* {data.length > 0 &&
                data.map((item) => (
                  <Menu.Item
                    as={"div"}
                    key={item.value}
                    className="cursor-pointer p-2 rounded-lg text-sm font-medium text-gray80 hover:text-grayfc hover:bg-primary"
                    onClick={() => onClick(item.value as any)}
                  >
                    {item.label}
                  </Menu.Item>
                ))} */}
            </Menu.Items>
          )}
        </>
      )}
    </Menu>
  );
}
