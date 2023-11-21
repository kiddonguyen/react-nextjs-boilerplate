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
export interface AgentProps {
  agent?: PropertyAgent | undefined;
}
export type AdditionalImagesProps = {
  images: string[] | undefined;
};
export type GridComponentProps = AdditionalImagesProps;
