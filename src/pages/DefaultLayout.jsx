import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
export default function DefaultLayout() {
    return (
        <>

            <AppHeader />
            <main className="vh text-white">
                <Outlet />
            </main>

            <AppFooter />

        </>
    )
}