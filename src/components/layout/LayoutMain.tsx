import { Manrope } from "next/font/google";
import React, { Fragment } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { clsx } from "clsx";
interface ILayoutMainProps {
  children: React.ReactNode;
}
/**
 * Renders the main layout of the application.
 *
 * @param {ILayoutMainProps} children - The components to be rendered inside the layout.
 * @return {JSX.Element} - The main layout component.
 */
const LayoutMain = ({ children }: ILayoutMainProps): JSX.Element => {
  return (
    <Fragment>
      <Topbar></Topbar>
      <div className="grid grid-cols-[250px_minmax(0,1fr)] min-h-screen">
        <Sidebar></Sidebar>
        <div className="py-7 px-6">{children}</div>
      </div>
    </Fragment>
  );
};

export default LayoutMain;
