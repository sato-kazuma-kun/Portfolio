import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "@/layout";

const HomePage = lazy(() => import('@/pages/HomePage'));
const LinksPage = lazy(() => import('@/pages/LinksPage'));

export default function App() {
    return (
        <Routes>
            <Route id="root-layout" path="/" element={<RootLayout />}>
                <Route id="home-page" path="/" element={<HomePage />} />
                <Route id="links-page" path="/links" element={<LinksPage />} />
            </Route>
        </Routes>
    );
}
