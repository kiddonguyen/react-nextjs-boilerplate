import clsx from "clsx";
import { PropertyUtil } from "./PropertyUtil";
/**
 * Renders an icon with a label.
 * 
 * @param props - The component props.
 * @param props.icon - The icon element.
 * @param props.label - The label text.
 * @returns The JSX element representing the icon with label.
 */
export function PropertyIconWithLabel(props: {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  const { icon, children, className } = props;
  return (
    <div className={clsx("flex items-center gap-1", className)}>
      {icon}
      <PropertyUtil>{children}</PropertyUtil>
    </div>
  );
}
  