import { Inbox } from "lucide-react";

export default function EmptyState({
                                       title,
                                       description,
                                   }) {
    return (
        <div
            className="
        flex min-h-64 flex-col items-center
        justify-center rounded-2xl
        border border-dashed border-white/10
        bg-white/[0.02] px-6 text-center
      "
        >
            <Inbox
                className="text-zinc-500"
                size={30}
            />

            <h2 className="mt-4 font-semibold">
                {title}
            </h2>

            <p
                className="
          mt-2 max-w-md text-sm leading-6
          text-zinc-500
        "
            >
                {description}
            </p>
        </div>
    );
}