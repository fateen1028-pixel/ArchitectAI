import {
    ArrowLeft,
    Clock3,
} from "lucide-react";
import {
    Link,
    useParams,
} from "react-router";
import ReactMarkdown from "react-markdown";
import {
    useCallback,
    useEffect,
    useState,
} from "react";

import { api } from "../api/apiClient.js";
import ErrorState
    from "../components/ErrorState.jsx";
import LoadingState
    from "../components/LoadingState.jsx";

export default function LessonPage() {
    const {
        topicSlug,
        lessonSlug,
    } = useParams();

    const [lesson, setLesson] = useState(null);
    const [status, setStatus] =
        useState("loading");
    const [error, setError] =
        useState("");

    const loadLesson = useCallback(async () => {
        setStatus("loading");
        setError("");

        try {
            const data = await api.getLesson(
                topicSlug,
                lessonSlug,
            );

            setLesson(data);
            setStatus("success");
        } catch (requestError) {
            setError(requestError.message);
            setStatus("error");
        }
    }, [lessonSlug, topicSlug]);

    useEffect(() => {
        loadLesson();
    }, [loadLesson]);

    if (status === "loading") {
        return (
            <LoadingState message="Loading lesson..." />
        );
    }

    if (status === "error") {
        return (
            <ErrorState
                message={error}
                onRetry={loadLesson}
            />
        );
    }

    return (
        <div className="mx-auto max-w-3xl">
            <Link
                to={`/topics/${topicSlug}`}
                className="
          inline-flex items-center gap-2
          text-sm text-zinc-400
          transition hover:text-white
        "
            >
                <ArrowLeft size={15} />
                Back to lessons
            </Link>

            <header className="mt-8">
                <p
                    className="
            text-sm font-semibold uppercase
            tracking-[0.2em] text-sky-300
          "
                >
                    {lesson.topicName}
                </p>

                <h1
                    className="
            mt-3 text-4xl font-semibold
            tracking-tight
          "
                >
                    {lesson.title}
                </h1>

                <div
                    className="
            mt-4 flex items-center gap-2
            text-sm text-zinc-500
          "
                >
                    <Clock3 size={15} />
                    {lesson.estimatedMinutes} minute read
                </div>
            </header>

            <article
                className="
          mt-10 rounded-3xl
          border border-white/8
          bg-white/[0.025]
          px-6 py-8 sm:px-10
        "
            >
                <ReactMarkdown
                    components={{
                        h1: ({ children }) => (
                            <h1
                                className="
                  mb-5 mt-2 text-3xl
                  font-semibold tracking-tight
                "
                            >
                                {children}
                            </h1>
                        ),

                        h2: ({ children }) => (
                            <h2
                                className="
                  mb-3 mt-9 text-xl
                  font-semibold tracking-tight
                "
                            >
                                {children}
                            </h2>
                        ),

                        h3: ({ children }) => (
                            <h3
                                className="
                  mb-2 mt-7 text-lg font-semibold
                "
                            >
                                {children}
                            </h3>
                        ),

                        p: ({ children }) => (
                            <p
                                className="
                  my-4 leading-8 text-zinc-300
                "
                            >
                                {children}
                            </p>
                        ),

                        ul: ({ children }) => (
                            <ul
                                className="
                  my-4 list-disc space-y-2
                  pl-6 text-zinc-300
                "
                            >
                                {children}
                            </ul>
                        ),

                        ol: ({ children }) => (
                            <ol
                                className="
                  my-4 list-decimal space-y-2
                  pl-6 text-zinc-300
                "
                            >
                                {children}
                            </ol>
                        ),

                        strong: ({ children }) => (
                            <strong className="font-semibold text-white">
                                {children}
                            </strong>
                        ),
                    }}
                >
                    {lesson.content}
                </ReactMarkdown>
            </article>
        </div>
    );
}