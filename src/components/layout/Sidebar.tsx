import { TSidebarLink } from "@/types/general.types";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useId } from "react";
import { sidebarLinks } from "../../constants/general.const";

const Sidebar = () => {
  const sidebarId = useId();
  return (
    <div className="bg-grayfc px-4 py-6 flex items-start flex-col w-full">
      {sidebarLinks.map((link) => {
        return <SidebarLink link={link} key={sidebarId} />;
      })}
    </div>
  );
};
type TSidebarLinkProps = {
  link: TSidebarLink;
  key: string;
};
const SidebarLink = ({ link, key }: TSidebarLinkProps) => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <Link
      key={key}
      className={clsx([
        "flex items-center gap-[10px] py-4 w-full rounded-xl px-6 font-bold text-base text-gray80",
        pathname === link.path
          ? "bg-primary text-grayfc"
          : "hover:text-primary",
      ])}
      href={link.path}
    >
      <span>{link.icon}</span>
      <span>{link.title}</span>
    </Link>
  );
};
export default Sidebar;
