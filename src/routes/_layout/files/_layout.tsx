import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/files/_layout')({
  component: () => <div>Hello /files/_layout!</div>
})