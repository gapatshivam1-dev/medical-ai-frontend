import { Link, useLocation } from "react-router-dom";
import { Activity, LayoutDashboard, Upload, Home } from "lucide-react";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <div className="logo-icon">
          <Activity size={22} />
        </div>

        <div>
          <span className="logo-main">Medi</span>
          <span className="logo-ai">AI</span>
        </div>
      </Link>

      <div className="nav-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          <Home size={17} />
          Home
        </Link>

        <Link
          to="/dashboard"
          className={location.pathname === "/dashboard" ? "active" : ""}
        >
          <LayoutDashboard size={17} />
          Dashboard
        </Link>

        <Link
          to="/upload"
          className={location.pathname === "/upload" ? "active" : ""}
        >
          <Upload size={17} />
          Analyze
        </Link>
      </div>

      <Link to="/upload" className="nav-button">
        Analyze Report
      </Link>
    </nav>
  );
}

export default Navbar;