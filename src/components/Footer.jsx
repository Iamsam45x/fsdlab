function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-light py-3 text-center">
      <div className="container">
        <p>&copy; {currentYear} React Learning Hub</p>
      </div>
    </footer>
  );
}

export default Footer;
