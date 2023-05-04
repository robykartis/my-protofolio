import Image from "next/image";
import React from "react";

interface ItemProps {
  icon?: string;
  value?: string;
  label?: string;
}

const Item = ({ icon = "", value = "value", label = "label" }: ItemProps) => (
  <div className="inline-flex gap-[8px] tex-sm">
    <Image className="res" alt="icon" src={icon} width={20} height={20} />
    <span className="font-bold">{value}</span>
    <span>{label}</span>
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
      <div className="flex flex-col gap-2">
        <Item
          icon="/img/logo/shuttle.png"
          value="140"
          label="Project Selesai"
        />
        <Item
          icon="/img/logo/github.png"
          value="120"
          label="Star di repo ini"
        />
        <Item icon="/img/logo/handshake.png" value="42" label="Client" />
      </div>
    </div>
  );
};

export default CardBio;
