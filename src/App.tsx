import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "@/layout";
import { ThemeProvider } from "@/providers/theme";

const HomePage = lazy(() => import('@/pages/HomePage'));
const LinksPage = lazy(() => import('@/pages/LinksPage'));

export default function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="kazuma-portfolio-theme">
            <Routes>
                <Route id="root-layout" path="/" element={<RootLayout />}>
                    <Route id="home-page" path="/" element={<HomePage />} />
                    <Route id="links-page" path="/links" element={<LinksPage />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
}
