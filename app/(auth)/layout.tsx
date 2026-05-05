import Topbar from "@/components/layout/Topbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Topbar />
      <main className="flex-1 h-full overflow-hidden">
        {children}
      </main>
    </div>
  );
}