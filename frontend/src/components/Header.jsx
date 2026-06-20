import {
    Blocks,
    BookOpen,
    LayoutDashboard,
    Network,
} from "lucide-react";
import {
    NavLink,
} from "react-router";

const navigation = [
    {
        to: "/",
        label: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        to: "/topics",
        label: "Learn",
        icon: BookOpen,
    },
    {
        to: "/challenges",
        label: "Challenges",
        icon: Network,
    },
];

function getLinkClass({ isActive }) {
    const baseClass =
        "flex items-center gap-2 rounded-xl px-3 py-2 "
        + "text-sm font-medium transition";

    if (isActive) {
        return `${baseClass} bg-white text-black`;
    }

    return `${baseClass} text-zinc-400 hover:bg-white/5 hover:text-white`;
}

export default function Header() {
    return (
        <header
            className="
        sticky top-0 z-50
        border-b border-white/8
        bg-[#07090d]/80 backdrop-blur-xl
      "
        >
            <div
                className="
          mx-auto flex max-w-7xl items-center
          justify-between px-5 py-4
        "
            >
                <NavLink
                    to="/"
                    className="flex items-center gap-3"
                >
          <span
              className="
              flex size-10 items-center justify-center
              rounded-xl border border-sky-400/20
              bg-sky-400/10 text-sky-300
            "
          >
            <Blocks size={21} />
          </span>

                    <div>
                        <p className="font-semibold tracking-tight">
                            ArchitectAI
                        </p>
                        <p className="text-xs text-zinc-500">
                            System design coach
                        </p>
                    </div>
                </NavLink>

                <nav className="flex items-center gap-1">
                    {navigation.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.to === "/"}
                                className={getLinkClass}
                            >
                                <Icon size={16} />

                                <span
                                    className="
                    hidden sm:inline
                  "
                                >
                  {item.label}
                </span>
                            </NavLink>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}