export default function BaseFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer footer-center text-base-content p-4">
      <aside>
        <p>Copyright © {currentYear} - All right reserved by OhMyApps</p>
      </aside>
    </footer>
  );
}
