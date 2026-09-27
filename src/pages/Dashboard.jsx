import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
const userName = user?.name || "Shivam";
const profilePhoto = localStorage.getItem("profilePhoto");

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <aside className="sidebar">

        {/* LOGO */}
        <div className="sidebar-logo">
          <div className="logo-icon">🩺</div>

          <h2>
            Med<span>AI</span>
          </h2>
        </div>

        {/* SIDEBAR MENU */}
        <nav className="sidebar-menu">

          <Link
            to="/dashboard"
            className="sidebar-item active"
          >
            <span>🏠</span>
            <span>Dashboard</span>
          </Link>

          <Link
            to="/upload"
            className="sidebar-item"
          >
            <span>📄</span>
            <span>Upload Report</span>
          </Link>

          <Link
            to="/analysis"
            className="sidebar-item"
          >
            <span>📊</span>
            <span>Analysis</span>
          </Link>

          <Link
            to="/history"
            className="sidebar-item"
          >
            <span>🕘</span>
            <span>Report History</span>
          </Link>

          <Link
            to="/profile"
            className="sidebar-item"
          >
            <span>👤</span>
            <span>Profile</span>
          </Link>

          <Link
            to="/settings"
            className="sidebar-item"
          >
            <span>⚙️</span>
            <span>Settings</span>
          </Link>

        </nav>

        {/* LOGOUT */}
        <button
          className="logout-button"
          onClick={logout}
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>

      </aside>


      {/* MAIN DASHBOARD */}
      <main className="dashboard-main">

        {/* TOP BAR */}
        <header className="dashboard-topbar">

          <div>
            <h1 className="dashboard-title">
              Good Morning, {userName} 👋
            </h1>

            <p>
              Here's your health overview for today.
            </p>
          </div>


          {/* RIGHT SIDE PROFILE - CLICKABLE */}
          {/* RIGHT SIDE PROFILE */}
<div
  className="profile-box"
  onClick={() => navigate("/profile")}
  role="button"
  tabIndex="0"
>

  {/* Notification */}
  <button
    className="notification"
    onClick={(e) => {
      e.stopPropagation();
      alert("No new notifications");
    }}
  >
    🔔
  </button>

  {/* Avatar */}
  <div className="avatar">
  {profilePhoto ? (
    <img
      src={profilePhoto}
      alt="Profile"
    />
  ) : (
    userName.charAt(0).toUpperCase()
  )}
</div>

  {/* Name only */}
  <div className="profile-info">
    <strong>{userName}</strong>
  </div>

  {/* Arrow */}
  <div className="profile-arrow">
    ⌄
  </div>

</div>
        </header>


        {/* STATS */}
        <section className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon">
              📄
            </div>

            <div>
              <span>Total Reports</span>
              <strong>12</strong>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon">
              🤖
            </div>

            <div>
              <span>AI Analyses</span>
              <strong>8</strong>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon">
              🧪
            </div>

            <div>
              <span>Parameters</span>
              <strong>24</strong>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon">
              ❤️
            </div>

            <div>
              <span>Health Risk</span>
              <strong>Low</strong>
            </div>
          </div>

        </section>


        {/* DASHBOARD GRID */}
        <section className="dashboard-grid">

          {/* CHART */}
          <div className="dashboard-card chart-card">

            <div className="card-header">
              <div>
                <h2>Health Analysis</h2>
                <p>Your health parameter overview</p>
              </div>

              <span>Last 6 Months</span>
            </div>

            <div className="chart-container">

              <svg
                viewBox="0 0 700 280"
                className="chart-svg"
              >

                <line
                  x1="50"
                  y1="40"
                  x2="680"
                  y2="40"
                  className="chart-grid-line"
                />

                <line
                  x1="50"
                  y1="100"
                  x2="680"
                  y2="100"
                  className="chart-grid-line"
                />

                <line
                  x1="50"
                  y1="160"
                  x2="680"
                  y2="160"
                  className="chart-grid-line"
                />

                <line
                  x1="50"
                  y1="220"
                  x2="680"
                  y2="220"
                  className="chart-grid-line"
                />

                <path
                  d="
                    M50 190
                    L170 150
                    L290 170
                    L410 110
                    L530 130
                    L650 70
                    L650 220
                    L50 220
                    Z
                  "
                  className="chart-area"
                />

                <polyline
                  points="
                    50,190
                    170,150
                    290,170
                    410,110
                    530,130
                    650,70
                  "
                  className="chart-line"
                />

                <circle cx="50" cy="190" r="5" className="chart-point" />
                <circle cx="170" cy="150" r="5" className="chart-point" />
                <circle cx="290" cy="170" r="5" className="chart-point" />
                <circle cx="410" cy="110" r="5" className="chart-point" />
                <circle cx="530" cy="130" r="5" className="chart-point" />
                <circle cx="650" cy="70" r="5" className="chart-point" />

              </svg>

              <div className="chart-labels">
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
              </div>

            </div>

          </div>


          {/* HEALTH OVERVIEW */}
          <div className="dashboard-card health-card">

            <div className="card-header">
              <div>
                <h2>Health Overview</h2>
                <p>Current parameter status</p>
              </div>
            </div>

            <div className="health-list">

              <div className="health-item">
                <div className="health-name">
                  <span>🩸</span>
                  <strong>Blood</strong>
                  <b>82%</b>
                </div>

                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "82%" }}
                  ></div>
                </div>
              </div>


              <div className="health-item">
                <div className="health-name">
                  <span>❤️</span>
                  <strong>Heart</strong>
                  <b>76%</b>
                </div>

                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "76%" }}
                  ></div>
                </div>
              </div>


              <div className="health-item">
                <div className="health-name">
                  <span>🫁</span>
                  <strong>Lungs</strong>
                  <b>88%</b>
                </div>

                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "88%" }}
                  ></div>
                </div>
              </div>


              <div className="health-item">
                <div className="health-name">
                  <span>🧪</span>
                  <strong>Glucose</strong>
                  <b>91%</b>
                </div>

                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "91%" }}
                  ></div>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* RECENT REPORTS */}
        <section className="dashboard-card reports-card">

          <div className="card-header">

            <div>
              <h2>Recent Medical Reports</h2>
              <p>Your latest uploaded reports</p>
            </div>

            <Link
              to="/history"
              className="view-all"
            >
              View All →
            </Link>

          </div>


          <div className="report-row">

            <div className="report-name">
              <div className="report-icon">
                🩸
              </div>

              <div>
                <strong>Complete Blood Count</strong>
                <span>Blood Test</span>
              </div>
            </div>

            <div className="report-date">
              24 Sep 2026
            </div>

            <div className="report-type">
              Blood Test
            </div>

            <span className="status">
              ✓ Analyzed
            </span>

          </div>


          <div className="report-row">

            <div className="report-name">
              <div className="report-icon">
                🧪
              </div>

              <div>
                <strong>Glucose Report</strong>
                <span>Diabetes / Glucose</span>
              </div>
            </div>

            <div className="report-date">
              18 Sep 2026
            </div>

            <div className="report-type">
              Glucose
            </div>

            <span className="status">
              ✓ Analyzed
            </span>

          </div>


          <div className="report-row">

            <div className="report-name">
              <div className="report-icon">
                ❤️
              </div>

              <div>
                <strong>Health Checkup</strong>
                <span>General Health</span>
              </div>
            </div>

            <div className="report-date">
              12 Sep 2026
            </div>

            <div className="report-type">
              General
            </div>

            <span className="status">
              ✓ Analyzed
            </span>

          </div>


          <div className="reports-footer">

            <Link
              to="/upload"
              className="upload-new-button"
            >
              + Upload New Report
            </Link>

          </div>

        </section>

      </main>

    </div>
  );
}