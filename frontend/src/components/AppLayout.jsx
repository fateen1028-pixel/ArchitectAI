import { Outlet } from "react-router";
import Header from "./Header.jsx";

export default function AppLayout() {
    return (
        <div className="min-h-screen">
            <Header />

            <main
                className="
          mx-auto w-full max-w-7xl
          px-5 py-10
        "
            >
                <Outlet />
            </main>
        </div>
    );
}