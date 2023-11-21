// https://kattow.dev/blog/reusable-accessible-headings
import { HeadingProps } from "@/types/general.types";
import React from "react";

/**
 * Creates a React heading element with the specified level and props.
 *
 * @param {React.HTMLAttributes<HTMLHeadingElement>} props - The props for the heading element.
 * @return {React.ReactElement} The created heading element.
 */
export const Heading = ({
  level = "p",
  children,
  className,
}: HeadingProps): React.ReactElement => {
  /**
   * Creates a React heading element with the specified level and props.
   *
   * @param {React.HTMLAttributes<HTMLHeadingElement>} props - The props for the heading element.
   * @return {React.ReactElement} The created heading element.
   */
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>): React.ReactElement =>
    React.createElement(level, props, children);

  return <Heading className={className}>{children}</Heading>;
};
