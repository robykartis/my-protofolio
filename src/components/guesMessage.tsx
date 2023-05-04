import Image from "next/image";
import React from "react";
interface Props {
  name?: string;
  message?: string;
  image?: string;
}
const GuesMessage = ({
  name = "Name",
  message = "Message",
  image = "/img/logo/pizza.png",
}: Props) => {
  return (
    <div className="inline-flex gap-[10px] items-center">
      <Image
        alt="guest-image"
        src={image || ""}
        width={100}
        height={100}
        className="rounded-full w-[40px] h-[40px]"
      />
      <span className="font-bold">{name} :</span>
      <span>{message}</span>
    </div>
  );
};

export default GuesMessage;
