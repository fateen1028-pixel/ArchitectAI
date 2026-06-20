import {
    ArrowRight,
    Clock3,
    Network,
} from "lucide-react";
import { Link } from "react-router";
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

export default function ChallengesPage() {
    const [challenges, setChallenges] =
        useState([]);
    const [status, setStatus] =
        useState("loading");
    const [error, setError] =
        useState("");

    const loadChallenges =
        useCallback(async () => {
            setStatus("loading");
            setError("");

            try {
                const data = await api.getChallenges();

                setChallenges(data);
                setStatus("success");
            } catch (requestError) {
                setError(requestError.message);
                setStatus("error");
            }
        }, []);

    useEffect(() => {
        loadChallenges();
    }, [loadChallenges]);

    if (status === "loading") {
        return (
            <LoadingState
                message="Loading challenges..."
            />
        );
    }

    if (status === "error") {
        return (
            <ErrorState
                message={error}
                onRetry={loadChallenges}
            />
        );
    }

    return (
        <div>
            <header className="max-w-2xl">
                <p
                    className="
            text-sm font-semibold uppercase
            tracking-[0.2em] text-violet-300
          "
                >
                    Architecture lab
                </p>

                <h1
                    className="
            mt-3 text-3xl font-semibold
            tracking-tight sm:text-4xl
          "
                >
                    System-design challenges
                </h1>

                <p
                    className="
            mt-4 leading-7 text-zinc-400
          "
                >
                    Apply what you learned to realistic systems.
                    The diagram canvas and AI review arrive in the
                    next checkpoints.
                </p>
            </header>

            {challenges.length === 0 ? (
                <div className="mt-10">
                    <EmptyState
                        title="No challenges available"
                        description={
                            "The backend returned no challenges."
                        }
                    />
                </div>
            ) : (
                <section className="mt-10 space-y-4">
                    {challenges.map((challenge) => (
                        <Link
                            key={challenge.id}
                            to={`/challenges/${challenge.slug}`}
                            className="
                group flex flex-col justify-between
                gap-6 rounded-2xl
                border border-white/8
                bg-white/[0.025] p-6
                transition
                hover:border-violet-400/20
                hover:bg-white/[0.045]
                sm:flex-row sm:items-center
              "
                        >
                            <div className="flex gap-4">
                <span
                    className="
                    flex size-11 shrink-0
                    items-center justify-center
                    rounded-xl bg-violet-400/10
                    text-violet-300
                  "
                >
                  <Network size={20} />
                </span>

                                <div>
                                    <div
                                        className="
                      flex flex-wrap items-center
                      gap-3
                    "
                                    >
                                        <h2
                                            className="
                        text-lg font-semibold
                      "
                                        >
                                            {challenge.title}
                                        </h2>

                                        <DifficultyBadge
                                            difficulty={
                                                challenge.difficulty
                                            }
                                        />
                                    </div>

                                    <p
                                        className="
                      mt-2 max-w-3xl text-sm
                      leading-6 text-zinc-500
                    "
                                    >
                                        {challenge.description}
                                    </p>

                                    <div
                                        className="
                      mt-3 flex items-center gap-1.5
                      text-xs text-zinc-500
                    "
                                    >
                                        <Clock3 size={13} />
                                        {challenge.estimatedMinutes}
                                        {" "}minutes
                                    </div>
                                </div>
                            </div>

                            <ArrowRight
                                className="
                  shrink-0 text-zinc-500
                  transition
                  group-hover:translate-x-1
                  group-hover:text-white
                "
                                size={19}
                            />
                        </Link>
                    ))}
                </section>
            )}
        </div>
    );
}