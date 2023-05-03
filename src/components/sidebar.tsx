"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
interface Props {}

interface ItemsProps {
  href?: string;
  text?: string;
  isActive?: boolean;
}
const Item = ({ href = "/", text = "Link" }: ItemsProps) => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        href={href}
        className={clsx(
          "text-sm px-4 py-2 text-zinc-900 hover:bg-zinc-100 rounded-md font-bold",
          pathName === href && "bg-zinc-100"
        )}
      >
        {text}
      </Link>
    </div>
  );
};

const Sidebar = ({}: Props) => {
  return (
    <div className="flex flex-col w-[231px] gap-[11px]">
      <Image
        className="mx-4 mb-4"
        alt="logo"
        width={54}
        height={54}
        src="/img/logo/pizza.png"
      />
      <div className="flex flex-col">
        <Item href={"/"} text="Home" />
        <Item href={"/about"} text="About" />
        <Item href={"/blog"} text="Blog" />
        <Item href={"/guestbook"} text="Guest Book" />
      </div>
    </div>
  );
};

export default Sidebar;
