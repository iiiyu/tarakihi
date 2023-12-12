import BaseNavbar from "../_components/base-navbar";
import Menu from "./_components/menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container">
      <BaseNavbar />
      <div className="flex flex-row gap-4 pt-4">
        <Menu />
        <div className="h-fit w-fit flex-1">{children}</div>
      </div>
    </main>
  );
}
