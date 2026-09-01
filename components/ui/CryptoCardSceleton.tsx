import { cn } from "@/utils/utils";

export const CryptoCardSkeleton = () => {
  return (
    <div
      className={cn(
        "h-[134px] rounded-2xl bg-[#f4f0f006] p-6 font-sans",
        "w-[240px] shadow-[0_10px_15px_-3px_#4a4a4ac4]",
      )}
    ></div>
  );
};
