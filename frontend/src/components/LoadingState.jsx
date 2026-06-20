import { LoaderCircle } from "lucide-react";

export default function LoadingState({
                                         message = "Loading...",
                                     }) {
    return (
        <div
            className="
        flex min-h-64 flex-col items-center
        justify-center gap-3
        rounded-2xl border border-white/8
        bg-white/[0.025]
      "
        >
            <LoaderCircle
                className="animate-spin text-sky-300"
                size={28}
            />

            <p className="text-sm text-zinc-400">
                {message}
            </p>
        </div>
    );
}