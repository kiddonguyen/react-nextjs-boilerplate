export type TSidebarLink = {
  title: string;
  icon: React.JSX.Element;
  path: string;
};
export interface PropertyItemProps {
  children?: React.ReactNode;
}
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}
// export interface AgentProps {
//   agent?: PropertyAgent | undefined;
// }
export type AdditionalImagesProps = {
  images: string[] | undefined;
};
export type GridComponentProps = AdditionalImagesProps;

export type TPropertyStatusData = Omit<TDropdownData, "value"> & {
  value: "" | "sale" | "rent";
};
export type TPropertyTypeData = Omit<TDropdownData, "value"> & {
  value: "" | "apartments" | "houses" | "commercial" | "garages" | "lots";
};
export type TFilter = {
  text?: string;
  status: TPropertyStatusData["value"];
  country?: string;
  type?: TPropertyTypeData["value"];
  state?: string;
  offset?: number;
  limit?: number;
};
export type TDropdownData = {
  value: string;
  label: string;
};
export interface DropdownProps<TData> {
  selected?: string;
  data?: TData[];
  renderItems?: (item: TData) => React.ReactNode;
}
