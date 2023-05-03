import Image from "next/image";
import React from "react";

const Item = () => (
  <div className="inline-flex gap-[8px] tex-sm">
    <Image
      className="bg-black rounded-full"
      alt="icon"
      src={""}
      width={14}
      height={14}
    />
    <span className="font-bold">140</span>
    <span>Project Selesai</span>
  </div>
);

const CardBio = () => {
  return (
    <div className="inline-flex gap-[27px] justify-center items-center rounded-lg border border-zinc-100 w-[312px] h-[134px]">
      <Image
        alt="my-poto"
        className="rounded-full"
        src={"/img/poto/roby.png"}
        width={80}
        height={80}
      />
      <div className="flex flex-col">
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default CardBio;
