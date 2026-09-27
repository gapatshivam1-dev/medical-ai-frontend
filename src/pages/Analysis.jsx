import { useNavigate } from "react-router-dom";

export default function Analysis() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user?.name || "Shivam";

  const report = JSON.parse(
    localStorage.getItem("latestReport")
  );

  return (
    <div className="analysis-page">

      {/* NAVBAR */}
      <header className="analysis-navbar">

        <div
          className="analysis-logo"
          onClick={() => navigate("/dashboard")}
        >
          <div className="analysis-logo-icon">
            🩺
          </div>

          <h2>
            Med<span>AI</span>
          </h2>
        </div>

        <div className="analysis-user">

          <div className="analysis-avatar">
            {userName.charAt(0).toUpperCase()}
          </div>

          <div className="analysis-user-info">
            <strong>{userName}</strong>
            <span>Patient</span>
          </div>

        </div>

      </header>


      {/* MAIN */}
      <main className="analysis-main">

        <button
          className="analysis-back"
          onClick={() => navigate("/dashboard")}
        >
          ← Back to Dashboard
        </button>


        <div className="analysis-heading">

          <div>
            <h1>Medical Report Analysis</h1>

            <p>
              AI-powered overview of your medical report.
            </p>
          </div>

          <button
            className="new-analysis-button"
            onClick={() => navigate("/upload")}
          >
            + New Report
          </button>

        </div>


        {/* REPORT INFO */}

        <div className="analysis-report-card">

          <div className="analysis-report-icon">
            📄
          </div>

          <div className="analysis-report-details">

            <strong>
              {report?.fileName || "Complete Blood Count Report"}
            </strong>

            <span>
              {report?.reportType || "Blood Test"}
            </span>

          </div>

          <div className="analysis-status">
            ✓ Analyzed
          </div>

        </div>


        {/* SUMMARY */}

        <div className="analysis-summary">

          <div className="summary-card">

            <div className="summary-icon">
              ❤️
            </div>

            <span>Health Status</span>

            <strong>Good</strong>

            <small>
              Overall parameters are within the monitored range.
            </small>

          </div>


          <div className="summary-card">

            <div className="summary-icon">
              ⚠️
            </div>

            <span>Risk Level</span>

            <strong className="low-risk">
              Low
            </strong>

            <small>
              No major abnormality detected in this demo analysis.
            </small>

          </div>


          <div className="summary-card">

            <div className="summary-icon">
              🧪
            </div>

            <span>Parameters</span>

            <strong>24</strong>

            <small>
              Health parameters considered in the analysis.
            </small>

          </div>

        </div>


        {/* PARAMETERS */}

        <div className="analysis-card">

          <div className="analysis-card-header">

            <div>
              <h2>Health Parameters</h2>
              <p>Analyzed values from your medical report</p>
            </div>

          </div>


          <div className="parameter-grid">

            <div className="parameter-item">

              <div className="parameter-top">
                <span>Hemoglobin</span>
                <strong>14.2 g/dL</strong>
              </div>

              <div className="parameter-bar">
                <div
                  className="parameter-fill"
                  style={{ width: "82%" }}
                />
              </div>

              <span className="parameter-normal">
                Normal
              </span>

            </div>


            <div className="parameter-item">

              <div className="parameter-top">
                <span>Blood Glucose</span>
                <strong>92 mg/dL</strong>
              </div>

              <div className="parameter-bar">
                <div
                  className="parameter-fill"
                  style={{ width: "75%" }}
                />
              </div>

              <span className="parameter-normal">
                Normal
              </span>

            </div>


            <div className="parameter-item">

              <div className="parameter-top">
                <span>WBC Count</span>
                <strong>7,200 /µL</strong>
              </div>

              <div className="parameter-bar">
                <div
                  className="parameter-fill"
                  style={{ width: "78%" }}
                />
              </div>

              <span className="parameter-normal">
                Normal
              </span>

            </div>


            <div className="parameter-item">

              <div className="parameter-top">
                <span>Platelets</span>
                <strong>245,000 /µL</strong>
              </div>

              <div className="parameter-bar">
                <div
                  className="parameter-fill"
                  style={{ width: "86%" }}
                />
              </div>

              <span className="parameter-normal">
                Normal
              </span>

            </div>

          </div>

        </div>


        {/* AI INSIGHT */}

        <div className="ai-insight-card">

          <div className="ai-insight-icon">
            🤖
          </div>

          <div>

            <h2>AI Analysis Summary</h2>

            <p>
              The uploaded report has been processed and the
              selected health parameters have been analyzed.
              The displayed values indicate a generally normal
              health profile based on this demonstration data.
            </p>

            <span>
              ⚠ This system is for educational and demonstration
              purposes and does not replace professional medical advice.
            </span>

          </div>

        </div>

      </main>

    </div>
  );
}