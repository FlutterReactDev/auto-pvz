import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/new-file")({
    component: () => <div>Hello /new-file!</div>,
});
