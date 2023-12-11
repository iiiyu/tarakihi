import BaseNavbar from "../_components/base-navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container">
      <BaseNavbar />
      <section>{children}</section>
    </main>
  );
}
