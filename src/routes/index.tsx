import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Master" },
      { name: "description", content: "AI Master — tu asistente personal" },
      { property: "og:title", content: "AI Master" },
      { property: "og:description", content: "AI Master — tu asistente personal" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/app.html"
      title="AI Master"
      style={{
        border: "none",
        width: "100vw",
        height: "100vh",
        display: "block",
      }}
    />
  );
}
