const styles = {
    BEGINNER:
        "border-emerald-400/20 bg-emerald-400/10 "
        + "text-emerald-300",

    INTERMEDIATE:
        "border-amber-400/20 bg-amber-400/10 "
        + "text-amber-300",

    ADVANCED:
        "border-red-400/20 bg-red-400/10 "
        + "text-red-300",
};

export default function DifficultyBadge({
                                            difficulty,
                                        }) {
    const className =
        styles[difficulty]
        ?? "border-white/10 bg-white/5 text-zinc-300";

    return (
        <span
            className={`
        inline-flex rounded-full border
        px-2.5 py-1 text-xs font-semibold
        tracking-wide
        ${className}
      `}
        >
      {difficulty}
    </span>
    );
}