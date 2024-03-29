import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = () => {
  return (
    <div className="flex flex-row">
      <Image
        src={"/img/logo/pizza.png"}
        alt="Blog-image"
        width={200}
        height={200}
        className="rounded-lg w-[80px] h-[80px]"
      />
      <div className="ml-[32px] flex flex-col justify-between">
        <Link href={"/"} className="text-lg font-bold hover:text-zinc-600">
          Blog Title
        </Link>
        <div className=" inline-flex gap-[32px] text-sm">
          <span>2 Hari yang lalu</span>
          <span>190x Dilihat</span>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
