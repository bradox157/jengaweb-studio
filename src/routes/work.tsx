import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/work")({
  component: WorkLayout,
});

function WorkLayout() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
