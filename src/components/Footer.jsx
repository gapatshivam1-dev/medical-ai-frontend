  
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">✚</span>
            <span>MediAI</span>
          </div>

          <p>
            Intelligent medical report analysis and health insights
            powered by AI.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/upload">Analyze Report</a>
        </div>

        <div className="footer-contact">
          <h3>Connect</h3>

          <a href="#" className="footer-social">
            LinkedIn
          </a>

          <a href="#" className="footer-social">
            Email
          </a>

          <a href="#" className="footer-social">
            GitHub
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 MediAI. Academic Project Prototype.
        </p>

        <p>
          For educational and demonstration purposes only.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
