import { MainPage } from "@/pages/main-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
    component: () => <MainPage />,
});
