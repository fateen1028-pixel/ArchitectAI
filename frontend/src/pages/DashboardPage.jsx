import {
    ArrowRight,
    BookOpen,
    BrainCircuit,
    Network,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router";

const features = [
    {
        icon: BookOpen,
        title: "Learn concepts",
        description:
            "Understand caching, queues, replication, "
            + "sharding and other system-design foundations.",
    },
    {
        icon: Network,
        title: "Build architectures",
        description:
            "Solve realistic design problems instead of "
            + "memorising disconnected definitions.",
    },
    {
        icon: BrainCircuit,
        title: "Receive AI feedback",
        description:
            "Get structured feedback on scalability, "
            + "reliability and data design.",
    },
];

export default function DashboardPage() {
    return (
        <div>
            <section
                className="
          relative overflow-hidden rounded-3xl
          border border-white/10
          bg-white/[0.035]
          px-6 py-16 sm:px-10 lg:px-14
        "
            >
                <div
                    className="
            absolute -right-24 -top-24
            size-72 rounded-full
            bg-sky-400/10 blur-3xl
          "
                />

                <div className="relative max-w-3xl">
                    <div
                        className="
              mb-6 inline-flex items-center gap-2
              rounded-full border border-sky-400/15
              bg-sky-400/[0.07]
              px-3 py-1.5
              text-sm text-sky-300
            "
                    >
                        <Sparkles size={15} />
                        Interactive system-design learning
                    </div>

                    <h1
                        className="
              text-4xl font-semibold tracking-tight
              text-white sm:text-6xl
            "
                    >
                        Stop memorising diagrams.
                        Learn to design systems.
                    </h1>

                    <p
                        className="
              mt-6 max-w-2xl text-base
              leading-8 text-zinc-400 sm:text-lg
            "
                    >
                        Study core concepts, solve architecture
                        challenges and receive structured feedback
                        on your decisions.
                    </p>

                    <div
                        className="
              mt-9 flex flex-wrap gap-3
            "
                    >
                        <Link
                            to="/topics"
                            className="
                inline-flex items-center gap-2
                rounded-xl bg-white px-5 py-3
                text-sm font-semibold text-black
                transition hover:bg-zinc-200
              "
                        >
                            Start learning
                            <ArrowRight size={16} />
                        </Link>

                        <Link
                            to="/challenges"
                            className="
                inline-flex items-center gap-2
                rounded-xl border border-white/10
                bg-white/5 px-5 py-3
                text-sm font-semibold text-white
                transition hover:bg-white/10
              "
                        >
                            View challenges
                        </Link>
                    </div>
                </div>
            </section>

            <section
                className="
          mt-8 grid gap-4 md:grid-cols-3
        "
            >
                {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <article
                            key={feature.title}
                            className="
                rounded-2xl border border-white/8
                bg-white/[0.025] p-6
              "
                        >
                            <div
                                className="
                  flex size-10 items-center
                  justify-center rounded-xl
                  bg-white/5 text-sky-300
                "
                            >
                                <Icon size={20} />
                            </div>

                            <h2 className="mt-5 font-semibold">
                                {feature.title}
                            </h2>

                            <p
                                className="
                  mt-2 text-sm leading-6
                  text-zinc-500
                "
                            >
                                {feature.description}
                            </p>
                        </article>
                    );
                })}
            </section>
        </div>
    );
}