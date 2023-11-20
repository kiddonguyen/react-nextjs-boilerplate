import { PropertyItemProps } from "@/types/general.types";

/**
 * Renders a property utility component.
 *
 * @param {PropertyItemProps} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
export function PropertyUtil(props: PropertyItemProps): JSX.Element {
  const { children } = props;
  return <span className="text-xs font-medium">{children}</span>;
}
