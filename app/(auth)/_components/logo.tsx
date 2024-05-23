import Image from "next/image";
import { cn } from "@/lib/utils";

export const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image
          src="/streamkuy-logo.svg"
          alt="Stream Kuy"
          height="80"
          width="80"
        />
      </div>
      <div className={cn("flex flex-col items-center")}>
        <p className="text-xl font-semibold">Stream Kuy</p>
        <p className="text-sm text-muted-foreground">Let&apos;s Play</p>
      </div>
    </div>
  );
};
