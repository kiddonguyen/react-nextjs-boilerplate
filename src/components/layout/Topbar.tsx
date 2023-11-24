import { UserButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { IconNotification, IconSearch } from "../icons";

const Topbar = () => {
  return (
    <div className="bg-grayfc py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-[82px] flex-1">
        <Logo />
        <Search />
      </div>
      <User />
    </div>
  );
};

export default Topbar;

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/logo.png" alt="Yariga" width={173} height={35}></Image>
    </Link>
  );
}

function Search({}) {
  return (
    <div className="rounded-lg bg-grayf4 flex items-center gap-2 max-w-[405px] flex-1 h-[38px]">
      <IconSearch></IconSearch>
      <input
        type="text"
        placeholder="Search Property, Customer etc"
        className="bg-transparent text-xs font-normal outline-none w-full text-primaryText placeholder:text-gray80"
      />
    </div>
  );
}

function User({}) {
  const { userId } = useAuth();
  return (
    <div className="flex items-center gap-5 flex-shrink-0">
      <span className="flex-shrink-0">
        <IconNotification></IconNotification>
      </span>
      <div className="flex items-center gap-[10px]">
        {userId ? (
          <>
            <UserButton afterSignOutUrl="/" />
            <div className="flex flex-col">
              <h4 className="font-semibold">Hawkins Maru</h4>
              <span className="text-gray80">Company Manager</span>
            </div>
          </>
        ) : (
          <>
            <Link href="/sign-in"> Sign in </Link>
            <Link
              href="/sign-up"
              className="p-3 bg-primary text-white rounded-lg"
            >
              {" "}
              Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
