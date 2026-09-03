import { cn } from "@/utils/utils";

export function PostsListSkeleton() {
  return Array.from({ length: 3 }).map((_, index) => (
    <div
      key={index}
      className={cn(
        "my-2 flex w-full items-center justify-between rounded-2xl p-4",
        "animate-pulse bg-[#1e2939] shadow-sm dark:border-neutral-800",
      )}
    >
      <div className="flex-1 space-y-2">
        <div className="h-4 w-1/3 rounded-md bg-neutral-200 dark:bg-neutral-700" />
        <div className="h-3 w-2/4 rounded-md bg-neutral-200 dark:bg-neutral-700" />
      </div>

      <div className="h-10 w-20 shrink-0 rounded-xl bg-neutral-200 dark:bg-neutral-700" />
    </div>
  ));
}
