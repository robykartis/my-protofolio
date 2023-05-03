import CardBio from "@/components/cardBio";
import Link from "next/link";

export default function Home() {
  return (
    <div className="gap-[36px]">
      <h1>Roby</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        ipsam?
      </p>
      <CardBio />
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo amet
        adipisci architecto optio velit consequuntur accusantium, eligendi eos
        nemo perferendis minima hic vero facilis, autem sequi distinctio aperiam
        commodi suscipit!
      </p>
      <div className="inline-flex  ">
        <Link href={"/"}>Github</Link>
        <Link href={"/"}>Yt</Link>
        <Link href={"/"}>Clinet</Link>
      </div>
    </div>
  );
}
