import {
    ArrowLeft,
    ArrowRight,
    Clock3,
} from "lucide-react";
import {
    Link,
    useParams,
} from "react-router";
import {
    useCallback,
    useEffect,
    useState,
} from "react";

import { api } from "../api/apiClient.js";
import EmptyState
    from "../components/EmptyState.jsx";
import ErrorState
    from "../components/ErrorState.jsx";
import LoadingState
    from "../components/LoadingState.jsx";

export default function TopicLessonsPage() {
    const { topicSlug } = useParams();

    const [lessons, setLessons] = useState([]);
    const [status, setStatus] =
        useState("loading");
    const [error, setError] =
        useState("");

    const loadLessons = useCallback(async () => {
        setStatus("loading");
        setError("");

        try {
            const data =
                await api.getTopicLessons(topicSlug);

            setLessons(data);
            setStatus("success");
        } catch (requestError) {
            setError(requestError.message);
            setStatus("error");
        }
    }, [topicSlug]);

    useEffect(() => {
        loadLessons();
    }, [loadLessons]);

    if (status === "loading") {
        return (
            <LoadingState message="Loading lessons..." />
        );
    }

    if (status === "error") {
        return (
            <ErrorState
                message={error}
                onRetry={loadLessons}
            />
        );
    }

    return (
        <div>
            <Link
                to="/topics"
                className="
          inline-flex items-center gap-2
          text-sm text-zinc-400
          transition hover:text-white
        "
            >
                <ArrowLeft size={15} />
                All topics
            </Link>

            <header className="mt-7 max-w-2xl">
                <p
                    className="
            text-sm uppercase tracking-[0.2em]
            text-sky-300
          "
                >
                    {topicSlug.replaceAll("-", " ")}
                </p>

                <h1
                    className="
            mt-3 text-3xl font-semibold
            tracking-tight
          "
                >
                    Lessons
                </h1>

                <p className="mt-3 text-zinc-400">
                    Complete the fundamentals before attempting
                    related architecture challenges.
                </p>
            </header>

            {lessons.length === 0 ? (
                <div className="mt-10">
                    <EmptyState
                        title="No lessons available"
                        description={
                            "This topic exists, but it has no lessons yet."
                        }
                    />
                </div>
            ) : (
                <section className="mt-10 space-y-3">
                    {lessons.map((lesson, index) => (
                        <Link
                            key={lesson.id}
                            to={`/topics/${topicSlug}/lessons/${lesson.slug}`}
                            className="
                group flex items-center justify-between
                gap-5 rounded-2xl
                border border-white/8
                bg-white/[0.025] p-5
                transition
                hover:border-sky-400/20
                hover:bg-white/[0.045]
              "
                        >
                            <div className="flex items-start gap-4">
                <span
                    className="
                    flex size-10 shrink-0
                    items-center justify-center
                    rounded-xl bg-white/5
                    text-sm font-semibold
                    text-zinc-300
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                                <div>
                                    <h2 className="font-semibold">
                                        {lesson.title}
                                    </h2>

                                    <p
                                        className="
                      mt-1 text-sm leading-6
                      text-zinc-500
                    "
                                    >
                                        {lesson.summary}
                                    </p>

                                    <div
                                        className="
                      mt-3 flex items-center gap-1.5
                      text-xs text-zinc-500
                    "
                                    >
                                        <Clock3 size={13} />
                                        {lesson.estimatedMinutes} minutes
                                    </div>
                                </div>
                            </div>

                            <ArrowRight
                                size={18}
                                className="
                  shrink-0 text-zinc-500
                  transition
                  group-hover:translate-x-1
                  group-hover:text-white
                "
                            />
                        </Link>
                    ))}
                </section>
            )}
        </div>
    );
}