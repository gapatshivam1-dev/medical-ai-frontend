import { useNavigate } from "react-router-dom";

export default function ReportHistory() {
  const navigate = useNavigate();

  const reports = [
    {
      name: "Complete Blood Count",
      type: "Blood Test",
      date: "24 Sep 2026",
      status: "Analyzed",
      icon: "🩸",
    },
    {
      name: "Glucose Report",
      type: "Diabetes / Glucose",
      date: "18 Sep 2026",
      status: "Analyzed",
      icon: "🧪",
    },
    {
      name: "Health Checkup",
      type: "General Health",
      date: "12 Sep 2026",
      status: "Analyzed",
      icon: "❤️",
    },
    {
      name: "Lipid Profile",
      type: "Blood Test",
      date: "05 Sep 2026",
      status: "Analyzed",
      icon: "🧬",
    },
  ];

  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user?.name || "Shivam";

  return (
    <div className="history-page">

      {/* NAVBAR */}

      <header className="history-navbar">

        <div
          className="history-logo"
          onClick={() => navigate("/dashboard")}
        >
          <div className="history-logo-icon">
            🩺
          </div>

          <h2>
            Med<span>AI</span>
          </h2>
        </div>


        <div className="history-user">

          <div className="history-avatar">
            {userName.charAt(0).toUpperCase()}
          </div>

          <div className="history-user-info">
            <strong>{userName}</strong>
            <span>Patient</span>
          </div>

        </div>

      </header>


      {/* MAIN */}

      <main className="history-main">

        <button
          className="history-back"
          onClick={() => navigate("/dashboard")}
        >
          ← Back to Dashboard
        </button>


        <div className="history-heading">

          <div>

            <h1>Report History</h1>

            <p>
              View your previously analyzed medical reports.
            </p>

          </div>

          <button
            className="history-upload-button"
            onClick={() => navigate("/upload")}
          >
            + Upload Report
          </button>

        </div>


        {/* SEARCH */}

        <div className="history-search">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search medical reports..."
          />

        </div>


        {/* REPORTS */}

        <div className="history-card">

          <div className="history-table-header">
            <span>Report</span>
            <span>Date</span>
            <span>Type</span>
            <span>Status</span>
            <span>Action</span>
          </div>


          {reports.map((report, index) => (

            <div
              className="history-row"
              key={index}
            >

              <div className="history-report-name">

                <div className="history-report-icon">
                  {report.icon}
                </div>

                <strong>
                  {report.name}
                </strong>

              </div>


              <div className="history-date">
                {report.date}
              </div>


              <div className="history-type">
                {report.type}
              </div>


              <div>
                <span className="history-status">
                  ✓ {report.status}
                </span>
              </div>


              <button
                className="view-report-button"
                onClick={() => navigate("/analysis")}
              >
                View →
              </button>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}