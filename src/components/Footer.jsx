export default function Footer({ footer }) {
  return (
    <footer>
      <p className="footer-text">{footer.copyright}</p>
      <p className="footer-text">{footer.location}</p>
    </footer>
  );
}
