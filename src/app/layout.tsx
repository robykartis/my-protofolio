import Sidebar from "@/components/sidebar";
import "./globals.css";
import { Gothic_A1 } from "next/font/google";
import clsx from "clsx";

export const metadata = {
  title: "Roby Karti S",
  description: "Saya roby seorang web full stack developer",
};
const gothic_A1 = Gothic_A1({
  weight: ["600", "700"],
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          className={clsx(
            "flex flex-row w-[1000px]  mx-auto mt-[153px]",
            gothic_A1.className
          )}
        >
          <Sidebar />
          <main className="flex flex-grow w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
