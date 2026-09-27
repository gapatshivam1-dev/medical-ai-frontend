
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page-new">

      {/* NAVBAR */}
      <nav className="home-navbar-new">

        <Link to="/" className="home-logo-new">
          <div className="logo-icon-new">✚</div>

          <div>
            <strong>Medical AI</strong>
            <small>Intelligent Healthcare</small>
          </div>
        </Link>

        <div className="home-menu-new">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#insights">AI Insights</a>
        </div>

        <div className="home-nav-buttons-new">
          <Link to="/login" className="home-login-new">
            Login
          </Link>

          <Link to="/register" className="home-start-new">
            Get Started →
          </Link>
        </div>

      </nav>


      {/* HERO SECTION */}
      <section className="home-hero-new">

        <div className="home-hero-content-new">

          <div className="home-badge-new">
            <span></span>
            AI-POWERED MEDICAL ANALYSIS
          </div>

          <h1>
            Understand Your
            <br />
            <span>Health Smarter.</span>
          </h1>

          <p>
            Upload your medical reports and get intelligent,
            easy-to-understand health insights powered by AI.
          </p>

          <div className="home-hero-buttons-new">

            <Link
              to="/register"
              className="home-primary-new"
            >
              Start Analysis
              <span>→</span>
            </Link>

            <Link
              to="/login"
              className="home-secondary-new"
            >
              Login to Dashboard
            </Link>

          </div>

          <div className="home-trust-new">

            <div className="trust-users-new">
              <span>👤</span>
              <span>👩</span>
              <span>👨</span>
              <span>+</span>
            </div>

            <div>
              <strong>Smart health tracking</strong>
              <small>Simple • Intelligent • Organized</small>
            </div>

          </div>

        </div>


        {/* HERO DASHBOARD PREVIEW */}
        <div className="home-preview-wrapper-new">

          <div className="home-glow-new"></div>

          <div className="home-preview-new">

            {/* TOP */}
            <div className="preview-header-new">

              <div>
                <small>Health Overview</small>
                <h3>Good Condition</h3>
              </div>

              <button>•••</button>

            </div>


            {/* SCORE */}
            <div className="health-score-new">

              <div className="score-ring-new">
                <div>
                  <strong>72</strong>
                  <small>/100</small>
                </div>
              </div>

              <div className="score-text-new">

                <span>● Low Risk</span>

                <h4>Overall Health Score</h4>

                <p>
                  Based on analyzed health parameters
                </p>

              </div>

            </div>


            {/* CHART */}
            <div className="preview-chart-new">

              <div className="chart-title-new">
                <strong>Health Trend</strong>
                <span>Last 6 months</span>
              </div>

              <div className="fake-chart-new">

                <div className="chart-line-new"></div>

                <i className="point-one"></i>
                <i className="point-two"></i>
                <i className="point-three"></i>
                <i className="point-four"></i>
                <i className="point-five"></i>

              </div>

              <div className="chart-labels-new">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
              </div>

            </div>


            {/* PARAMETERS */}
            <div className="preview-parameters-new">

              <div className="parameter-new">

                <div className="parameter-icon-new purple">
                  ♥
                </div>

                <div>
                  <small>Heart Rate</small>
                  <strong>82 BPM</strong>
                </div>

              </div>


              <div className="parameter-new">

                <div className="parameter-icon-new blue">
                  ◉
                </div>

                <div>
                  <small>Glucose</small>
                  <strong>94 mg/dL</strong>
                </div>

              </div>

            </div>

          </div>


          {/* AI FLOATING CARD */}
          <div className="ai-card-new">

            <div className="ai-card-icon-new">
              ✦
            </div>

            <div>
              <strong>AI Insight</strong>

              <p>
                Your health parameters
                look normal.
              </p>
            </div>

            <b>✓</b>

          </div>


          {/* REPORT FLOATING CARD */}
          <div className="report-card-new">

            <div className="report-icon-new">
              📄
            </div>

            <div>
              <strong>Report analyzed</strong>
              <small>Just now</small>
            </div>

          </div>

        </div>

      </section>


      {/* STATS */}
      <section className="home-stats-new">

        <div>
          <strong>AI</strong>
          <span>Powered Analysis</span>
        </div>

        <div>
          <strong>24+</strong>
          <span>Health Parameters</span>
        </div>

        <div>
          <strong>3+</strong>
          <span>Report Types</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Access</span>
        </div>

      </section>


      {/* FEATURES */}
      <section
        className="features-new"
        id="features"
      >

        <div className="section-title-new">

          <span>FEATURES</span>

          <h2>
            Everything you need to
            <br />
            <b>understand your health.</b>
          </h2>

          <p>
            Powerful features designed to make
            medical information easier to understand.
          </p>

        </div>


        <div className="feature-grid-new">

          <div className="feature-box-new">

            <div className="feature-icon-new">
              📄
            </div>

            <small>01</small>

            <h3>Medical Report Analysis</h3>

            <p>
              Analyze important values and parameters
              from your medical reports.
            </p>

          </div>


          <div className="feature-box-new">

            <div className="feature-icon-new blue">
              ✦
            </div>

            <small>02</small>

            <h3>AI Health Insights</h3>

            <p>
              Get simple explanations and intelligent
              insights from your health information.
            </p>

          </div>


          <div className="feature-box-new">

            <div className="feature-icon-new green">
              📊
            </div>

            <small>03</small>

            <h3>Health Statistics</h3>

            <p>
              Visualize health parameters using
              charts and easy-to-read statistics.
            </p>

          </div>


          <div className="feature-box-new">

            <div className="feature-icon-new orange">
              🕐
            </div>

            <small>04</small>

            <h3>Report History</h3>

            <p>
              Keep your previous reports and analyses
              organized in one place.
            </p>

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section
        className="how-new"
        id="how-it-works"
      >

        <div className="section-title-new">

          <span>HOW IT WORKS</span>

          <h2>
            Three simple steps.
            <br />
            <b>Smarter health insights.</b>
          </h2>

        </div>


        <div className="steps-new">

          <div className="step-new">

            <div className="step-number-new">
              01
            </div>

            <div className="step-icon-new">
              ↑
            </div>

            <h3>Upload</h3>

            <p>
              Upload your medical report
              through your dashboard.
            </p>

          </div>


          <div className="step-connector-new"></div>


          <div className="step-new">

            <div className="step-number-new">
              02
            </div>

            <div className="step-icon-new">
              ✦
            </div>

            <h3>Analyze</h3>

            <p>
              AI analyzes important
              information from the report.
            </p>

          </div>


          <div className="step-connector-new"></div>


          <div className="step-new">

            <div className="step-number-new">
              03
            </div>

            <div className="step-icon-new">
              ✓
            </div>

            <h3>Understand</h3>

            <p>
              View clear insights and
              health statistics.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section
        className="home-cta-new"
        id="insights"
      >

        <div>

          <div className="cta-icon-new">
            ✦
          </div>

          <h2>
            Make your health data
            <br />
            <span>easier to understand.</span>
          </h2>

          <p>
            Start analyzing your medical reports
            with intelligent AI technology.
          </p>

          <Link
            to="/register"
            className="cta-button-new"
          >
            Get Started →
          </Link>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="home-footer-new">

        <div>

          <Link to="/" className="home-logo-new">

            <div className="logo-icon-new">
              ✚
            </div>

            <div>
              <strong>Medical AI</strong>
              <small>Intelligent Healthcare</small>
            </div>

          </Link>

          <p>
            Intelligent medical report analysis
            designed to simplify health information.
          </p>

        </div>


        <div className="footer-links-new">

          <div>
            <strong>Platform</strong>

            <Link to="/dashboard">
              Dashboard
            </Link>

            <Link to="/upload">
              Upload Report
            </Link>

            <Link to="/analysis">
              Analysis
            </Link>

          </div>


          <div>
            <strong>Account</strong>

            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>

          </div>

        </div>

      </footer>


      <div className="copyright-new">
        © 2026 Medical AI. Intelligent Medical Report Analysis.
      </div>

    </div>
  );
}
