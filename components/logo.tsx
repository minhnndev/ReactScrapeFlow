import { cn } from "@/lib/utils";
import { Worm } from "lucide-react";
import Link from "next/link";
import React from "react";

function Logo({
  fontSize = "text-2xl",
  iconSize = 20,
}: {
  fontSize?: String;
  iconSize?: number;
}) {
  return (
    <Link
      href={"/"}
      className={cn(
        "text-2xl font-extrabold flex items-center gap-2",
        fontSize
      )}
    >
      <div className="rounded-xl bg-gradient-to-r from-green-500 to-green-600 p-2">
        <Worm size={iconSize} className="stroke-white" />
      </div>
      <div>
        <span className="bg-gradient-to-r  from-green-500 to-green-600 bg-clip-text text-transparent">
          Flow
        </span>
        <span className="text-stone-700 dark:text-slate-300">Scrape</span>
      </div>
    </Link>
  );
}
export default Logo;
