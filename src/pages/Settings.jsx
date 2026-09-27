import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user?.name || "Shivam";

  const [notifications, setNotifications] = useState(
    localStorage.getItem("notifications") !== "false"
  );

  const [emailAlerts, setEmailAlerts] = useState(
    localStorage.getItem("emailAlerts") !== "false"
  );

  const [healthReminders, setHealthReminders] = useState(
    localStorage.getItem("healthReminders") !== "false"
  );

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const [accent, setAccent] = useState(
    localStorage.getItem("accent") || "blue"
  );

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Apply accent
  useEffect(() => {
    document.documentElement.setAttribute("data-accent", accent);
    localStorage.setItem("accent", accent);
  }, [accent]);

  const toggleSetting = (name, value, setter) => {
    const newValue = !value;

    setter(newValue);
    localStorage.setItem(name, newValue);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="settings-page">

      {/* ================= NAVBAR ================= */}

      <header className="settings-navbar">

        <div
          className="settings-logo"
          onClick={() => navigate("/dashboard")}
        >
          <div className="settings-logo-icon">
            🩺
          </div>

          <h2>
            Med<span>AI</span>
          </h2>
        </div>

        <div
          className="settings-user"
          onClick={() => navigate("/profile")}
          style={{ cursor: "pointer" }}
        >
          <div className="settings-avatar">
            {userName.charAt(0).toUpperCase()}
          </div>

          <div className="settings-user-info">
            <strong>{userName}</strong>
            <span>Patient</span>
          </div>
        </div>

      </header>


      {/* ================= MAIN ================= */}

      <main className="settings-main">

        <button
          className="settings-back"
          onClick={() => navigate("/dashboard")}
        >
          ← Back to Dashboard
        </button>


        <div className="settings-heading">
          <h1>Settings</h1>

          <p>
            Customize your MedAI experience and preferences.
          </p>
        </div>


        {/* ================= ACCOUNT ================= */}

        <section className="settings-card">

          <div className="settings-card-heading">

            <div className="settings-heading-icon">
              👤
            </div>

            <div>
              <h2>Account</h2>

              <p>
                Manage your account information
              </p>
            </div>

          </div>


          <div className="settings-option">

            <div>
              <strong>Profile</strong>

              <span>
                Update your personal information
              </span>
            </div>

            <button
              onClick={() => navigate("/profile")}
            >
              Open Profile
            </button>

          </div>

        </section>


        {/* ================= THEME ================= */}

        <section className="settings-card">

          <div className="settings-card-heading">

            <div className="settings-heading-icon">
              🎨
            </div>

            <div>
              <h2>Theme</h2>

              <p>
                Choose how MedAI looks on your device
              </p>
            </div>

          </div>


          {/* Theme Options */}

          <div className="theme-options">

            {/* LIGHT */}

            <button
              className={`theme-option ${
                theme === "light" ? "theme-selected" : ""
              }`}
              onClick={() => setTheme("light")}
            >
              <div className="theme-preview theme-light-preview">

                <div className="preview-top"></div>

                <div className="preview-body">

                  <div className="preview-sidebar"></div>

                  <div className="preview-content">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                </div>

              </div>

              <div className="theme-option-info">

                <strong>☀️ Light</strong>

                <span>
                  Clean MedAI light theme
                </span>

              </div>

              {theme === "light" && (
                <div className="theme-check">
                  ✓
                </div>
              )}

            </button>


            {/* DARK */}

            <button
              className={`theme-option ${
                theme === "dark" ? "theme-selected" : ""
              }`}
              onClick={() => setTheme("dark")}
            >

              <div className="theme-preview theme-dark-preview">

                <div className="preview-top"></div>

                <div className="preview-body">

                  <div className="preview-sidebar"></div>

                  <div className="preview-content">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                </div>

              </div>

              <div className="theme-option-info">

                <strong>🌙 Dark</strong>

                <span>
                  Comfortable dark theme
                </span>

              </div>

              {theme === "dark" && (
                <div className="theme-check">
                  ✓
                </div>
              )}

            </button>


            {/* SYSTEM */}

            <button
              className={`theme-option ${
                theme === "system" ? "theme-selected" : ""
              }`}
              onClick={() => setTheme("system")}
            >

              <div className="theme-preview theme-system-preview">

                <div className="preview-top"></div>

                <div className="preview-body">

                  <div className="preview-sidebar"></div>

                  <div className="preview-content">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                </div>

              </div>

              <div className="theme-option-info">

                <strong>🖥️ System</strong>

                <span>
                  Follow your device theme
                </span>

              </div>

              {theme === "system" && (
                <div className="theme-check">
                  ✓
                </div>
              )}

            </button>

          </div>


          {/* Accent Color */}

          <div className="accent-section">

            <div className="accent-title">

              <strong>Accent Color</strong>

              <span>
                Choose your preferred MedAI color
              </span>

            </div>


            <div className="accent-options">

              <button
                className={`accent-option accent-blue ${
                  accent === "blue" ? "accent-selected" : ""
                }`}
                onClick={() => setAccent("blue")}
                title="MedAI Blue"
              >
                {accent === "blue" && "✓"}
              </button>


              <button
                className={`accent-option accent-green ${
                  accent === "green" ? "accent-selected" : ""
                }`}
                onClick={() => setAccent("green")}
                title="Medical Green"
              >
                {accent === "green" && "✓"}
              </button>


              <button
                className={`accent-option accent-purple ${
                  accent === "purple" ? "accent-selected" : ""
                }`}
                onClick={() => setAccent("purple")}
                title="Purple"
              >
                {accent === "purple" && "✓"}
              </button>

            </div>

          </div>

        </section>


        {/* ================= NOTIFICATIONS ================= */}

        <section className="settings-card">

          <div className="settings-card-heading">

            <div className="settings-heading-icon">
              🔔
            </div>

            <div>
              <h2>Notifications</h2>

              <p>
                Control how MedAI communicates with you
              </p>
            </div>

          </div>


          <div className="settings-option">

            <div>
              <strong>Push Notifications</strong>

              <span>
                Receive important notifications
              </span>
            </div>

            <button
              className={`toggle ${
                notifications ? "toggle-active" : ""
              }`}
              onClick={() =>
                toggleSetting(
                  "notifications",
                  notifications,
                  setNotifications
                )
              }
            >
              <span></span>
            </button>

          </div>


          <div className="settings-option">

            <div>
              <strong>Email Alerts</strong>

              <span>
                Receive report analysis updates by email
              </span>
            </div>

            <button
              className={`toggle ${
                emailAlerts ? "toggle-active" : ""
              }`}
              onClick={() =>
                toggleSetting(
                  "emailAlerts",
                  emailAlerts,
                  setEmailAlerts
                )
              }
            >
              <span></span>
            </button>

          </div>


          <div className="settings-option">

            <div>
              <strong>Health Reminders</strong>

              <span>
                Get reminders about your health reports
              </span>
            </div>

            <button
              className={`toggle ${
                healthReminders ? "toggle-active" : ""
              }`}
              onClick={() =>
                toggleSetting(
                  "healthReminders",
                  healthReminders,
                  setHealthReminders
                )
              }
            >
              <span></span>
            </button>

          </div>

        </section>


        {/* ================= PRIVACY ================= */}

        <section className="settings-card">

          <div className="settings-card-heading">

            <div className="settings-heading-icon">
              🔒
            </div>

            <div>
              <h2>Health & Privacy</h2>

              <p>
                Your medical information and privacy
              </p>
            </div>

          </div>


          <div className="privacy-box">

            <div className="privacy-icon">
              🛡️
            </div>

            <div>

              <strong>
                Your data is important
              </strong>

              <p>
                MedAI is designed to keep your medical
                report information organized and protected.
                Always use professional medical advice for
                real healthcare decisions.
              </p>

            </div>

          </div>

        </section>


        {/* ================= DISCLAIMER ================= */}

        <section className="settings-card disclaimer-card">

          <div className="settings-card-heading">

            <div className="settings-heading-icon">
              ⚠️
            </div>

            <div>
              <h2>Medical Disclaimer</h2>

              <p>
                Important information about AI analysis
              </p>
            </div>

          </div>


          <div className="disclaimer-content">

            <strong>
              MedAI is an educational and informational
              system.
            </strong>

            <p>
              AI-generated analysis should not be considered
              a medical diagnosis or a replacement for advice
              from a qualified healthcare professional.
              Please consult a doctor for medical decisions.
            </p>

          </div>

        </section>


        {/* ================= SECURITY ================= */}

        <section className="settings-card">

          <div className="settings-card-heading">

            <div className="settings-heading-icon">
              🔐
            </div>

            <div>
              <h2>Security</h2>

              <p>
                Manage your current session
              </p>
            </div>

          </div>


          <div className="settings-option">

            <div>
              <strong>Log Out</strong>

              <span>
                Sign out from your MedAI account
              </span>
            </div>

            <button
              className="settings-logout"
              onClick={logout}
            >
              Logout
            </button>

          </div>

        </section>


        {/* ================= FOOTER ================= */}

        <footer className="settings-footer">

          <span>🩺</span>

          <strong>MedAI</strong>

          <p>
            Intelligent Medical Report Analysis System
          </p>

        </footer>

      </main>

    </div>
  );
}