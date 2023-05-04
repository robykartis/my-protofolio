import GuesMessage from "@/components/guesMessage";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-[48px]">Guest Books</h1>
      <div className="flex flex-col gap-8 mt-8">
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <GuesMessage key={item} />
        ))}
      </div>
    </div>
  );
}
