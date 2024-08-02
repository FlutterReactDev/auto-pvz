import { FilePage } from "@/pages/file-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/files/$id/")({
    component: () => <FilePage />,
});
