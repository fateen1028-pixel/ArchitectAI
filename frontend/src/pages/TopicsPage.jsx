import {
    ArrowRight,
    BookOpen,
} from "lucide-react";
import {
    Link,
} from "react-router";
import {
    useCallback,
    useEffect,
    useState,
} from "react";

import { api } from "../api/apiClient.js";
import DifficultyBadge
    from "../components/DifficultyBadge.jsx";
import EmptyState
    from "../components/EmptyState.jsx";
import ErrorState
    from "../components/ErrorState.jsx";
import LoadingState
    from "../components/LoadingState.jsx";

export default function TopicsPage() {
    const [topics, setTopics] = useState([]);
    const [status, setStatus] =
        useState("loading");
    const [error, setError] =
        useState("");

    const loadTopics = useCallback(async () => {
        setStatus("loading");
        setError("");

        try {
            const data = await api.getTopics();

            setTopics(data);
            setStatus("success");
        } catch (requestError) {
            setError(requestError.message);
            setStatus("error");
        }
    }, []);

    useEffect(() => {
        loadTopics();
    }, [loadTopics]);

    if (status === "loading") {
        return (
            <LoadingState message="Loading topics..." />
        );
    }

    if (status === "error") {
        return (
            <ErrorState
                message={error}
                onRetry={loadTopics}
            />
        );
    }

    return (
        <div>
            <header className="max-w-2xl">
                <p
                    className="
            text-sm font-semibold uppercase
            tracking-[0.2em] text-sky-300
          "
                >
                    Learning path
                </p>

                <h1
                    className="
            mt-3 text-3xl font-semibold
            tracking-tight sm:text-4xl
          "
                >
                    System-design foundations
                </h1>

                <p
                    className="
            mt-4 leading-7 text-zinc-400
          "
                >
                    Learn the building blocks first. Trying to
                    design YouTube without understanding caching,
                    queues and databases is nonsense.
                </p>
            </header>

            {topics.length === 0 ? (
                <div className="mt-10">
                    <EmptyState
                        title="No topics available"
                        description={
                            "The backend returned no learning topics."
                        }
                    />
                </div>
            ) : (
                <section
                    className="
            mt-10 grid gap-4
            md:grid-cols-2 xl:grid-cols-3
          "
                >
                    {topics.map((topic) => (
                        <Link
                            key={topic.id}
                            to={`/topics/${topic.slug}`}
                            className="
                group rounded-2xl
                border border-white/8
                bg-white/[0.025] p-6
                transition
                hover:-translate-y-0.5
                hover:border-sky-400/20
                hover:bg-white/[0.045]
              "
                        >
                            <div
                                className="
                  flex items-start justify-between
                  gap-4
                "
                            >
                <span
                    className="
                    flex size-11 items-center
                    justify-center rounded-xl
                    bg-sky-400/10 text-sky-300
                  "
                >
                  <BookOpen size={20} />
                </span>

                                <DifficultyBadge
                                    difficulty={topic.difficulty}
                                />
                            </div>

                            <h2
                                className="
                  mt-6 text-lg font-semibold
                  tracking-tight
                "
                            >
                                {topic.name}
                            </h2>

                            <p
                                className="
                  mt-2 min-h-12 text-sm
                  leading-6 text-zinc-500
                "
                            >
                                {topic.description}
                            </p>

                            <div
                                className="
                  mt-6 flex items-center gap-2
                  text-sm font-medium text-zinc-300
                "
                            >
                                View lessons

                                <ArrowRight
                                    size={15}
                                    className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                                />
                            </div>
                        </Link>
                    ))}
                </section>
            )}
        </div>
    );
}