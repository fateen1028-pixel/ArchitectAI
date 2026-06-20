import {
    ArrowLeft,
} from "lucide-react";
import { Link } from "react-router";

export default function NotFoundPage() {
    return (
        <div
            className="
        flex min-h-[60vh] flex-col
        items-center justify-center text-center
      "
        >
            <p
                className="
          text-sm font-semibold
          text-sky-300
        "
            >
                404
            </p>

            <h1
                className="
          mt-3 text-4xl font-semibold
          tracking-tight
        "
            >
                Page not found
            </h1>

            <p className="mt-3 text-zinc-500">
                This route does not exist.
            </p>

            <Link
                to="/"
                className="
          mt-7 inline-flex items-center gap-2
          rounded-xl bg-white px-4 py-2.5
          text-sm font-semibold text-black
        "
            >
                <ArrowLeft size={15} />
                Dashboard
            </Link>
        </div>
    );
}