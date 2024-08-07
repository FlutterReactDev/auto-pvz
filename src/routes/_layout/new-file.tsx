import { NewFilePage } from "@/pages/new-file-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/new-file")({
    component: () => <NewFilePage />,
});
