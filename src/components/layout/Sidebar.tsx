import { TSidebarLink } from "@/types/general.types";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { sidebarLinks } from "../../constants/general.const";
const Sidebar = () => {
  return (
    <div className="bg-grayfc px-4 py-6 flex items-start flex-col w-full">
      {sidebarLinks.map((link) => {
        return <SidebarLink link={link} key={uuidv4()} />;
      })}
    </div>
  );
};
type TSidebarLinkProps = {
  link: TSidebarLink;
  key: string;
};
const SidebarLink = ({ link }: TSidebarLinkProps) => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <Link
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
