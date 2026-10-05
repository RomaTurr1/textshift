export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {year} textshift</span>
        <span>Каталог гарнитур</span>
      </div>
    </footer>
  );
}
