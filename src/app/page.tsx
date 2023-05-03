import CardBio from "@/components/cardBio";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-[36px]">
      <h1 className="font-bold text-[48px]">Roby</h1>
      <p>
        Lorem ipsum dolor sit amet
        <span className="font-bold"> Full Stack Developer </span> consectetur
        adipisicing elit. Reiciendis, ipsam?
      </p>
      <CardBio />
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo amet
        adipisci architecto optio velit consequuntur accusantium, eligendi eos
        nemo perferendis minima hic vero facilis, autem sequi distinctio aperiam
        commodi suscipit!
      </p>
      <div className="inline-flex gap-8">
        <Link className="underline underline-offset-4" href={"/"}>
          Github
        </Link>
        <Link className="underline underline-offset-4" href={"/"}>
          Yt
        </Link>
      </div>
    </div>
  );
}
