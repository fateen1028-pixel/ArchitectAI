import {
    CircleAlert,
    RefreshCw,
} from "lucide-react";

export default function ErrorState({
                                       message,
                                       onRetry,
                                   }) {
    return (
        <div
            className="
        flex min-h-64 flex-col items-center
        justify-center gap-4
        rounded-2xl border border-red-400/15
        bg-red-400/[0.04] px-6 text-center
      "
        >
            <CircleAlert
                className="text-red-300"
                size={30}
            />

            <div>
                <h2 className="font-semibold">
                    Something failed
                </h2>

                <p className="mt-1 text-sm text-zinc-400">
                    {message}
                </p>
            </div>

            {onRetry && (
                <button
                    type="button"
                    onClick={onRetry}
                    className="
            flex items-center gap-2 rounded-xl
            bg-white px-4 py-2
            text-sm font-medium text-black
            transition hover:bg-zinc-200
          "
                >
                    <RefreshCw size={15} />
                    Retry
                </button>
            )}
        </div>
    );
}