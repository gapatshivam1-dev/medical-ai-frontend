import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const userName = user?.name || "Shivam";
  const userEmail = user?.email || "shivam@example.com";

  const [profilePhoto, setProfilePhoto] = useState(
    localStorage.getItem("profilePhoto") || ""
  );

  // Keep photo saved after refresh
  useEffect(() => {
    if (profilePhoto) {
      localStorage.setItem("profilePhoto", profilePhoto);
    }
  }, [profilePhoto]);

  // Upload photo
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    // Only allow image files
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    // Limit image size to 5 MB
    if (file.size > 5 * 1024 * 1024) {
      alert("Please select an image smaller than 5 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setProfilePhoto(reader.result);
    };

    reader.readAsDataURL(file);
  };

  // Remove photo
  const removePhoto = () => {
    setProfilePhoto("");
    localStorage.removeItem("profilePhoto");
  };

  return (
    <div className="profile-page">

      {/* ================= NAVBAR ================= */}

      <header className="profile-navbar">

        <div
          className="profile-page-logo"
          onClick={() => navigate("/dashboard")}
        >
          <div className="profile-page-logo-icon">
            🩺
          </div>

          <h2>
            Med<span>AI</span>
          </h2>
        </div>

        <button
          className="profile-navbar-back"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>

      </header>


      {/* ================= MAIN ================= */}

      <main className="profile-main">

        <button
          className="profile-back"
          onClick={() => navigate("/dashboard")}
        >
          ← Back to Dashboard
        </button>


        <div className="profile-heading">

          <h1>My Profile</h1>

          <p>
            Manage your personal information.
          </p>

        </div>


        {/* ================= PROFILE CARD ================= */}

        <div className="profile-card">

          <div className="profile-card-top">

            {/* PROFILE PHOTO */}

            <div className="profile-photo-section">

              <div className="large-profile-avatar">

                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt="Profile"
                  />
                ) : (
                  userName.charAt(0).toUpperCase()
                )}

              </div>


              {/* UPLOAD BUTTON */}

              <label
                htmlFor="profile-photo-upload"
                className="change-photo-button"
              >
                📷 Change Photo
              </label>

              <input
                id="profile-photo-upload"
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                style={{ display: "none" }}
              />


              {/* REMOVE BUTTON */}

              {profilePhoto && (
                <button
                  className="remove-photo-button"
                  onClick={removePhoto}
                >
                  🗑 Remove
                </button>
              )}

            </div>


            <div>

              <h2>
                {userName}
              </h2>

              <p>
                Patient
              </p>

            </div>

          </div>


          {/* ================= DETAILS ================= */}

          <div className="profile-details">

            <div className="profile-detail">

              <span>
                Full Name
              </span>

              <strong>
                {userName}
              </strong>

            </div>


            <div className="profile-detail">

              <span>
                Email Address
              </span>

              <strong>
                {userEmail}
              </strong>

            </div>


            <div className="profile-detail">

              <span>
                Account Type
              </span>

              <strong>
                Patient
              </strong>

            </div>


            <div className="profile-detail">

              <span>
                Member Since
              </span>

              <strong>
                2026
              </strong>

            </div>

          </div>


          {/* ================= ACTION ================= */}

          <div className="profile-card-actions">

            <button
              className="profile-settings-button"
              onClick={() => navigate("/settings")}
            >
              ⚙️ Account Settings
            </button>

          </div>

        </div>


        {/* ================= STATS ================= */}

        <div className="profile-stats">

          <div>
            <strong>12</strong>
            <span>Total Reports</span>
          </div>

          <div>
            <strong>8</strong>
            <span>AI Analyses</span>
          </div>

          <div>
            <strong>24</strong>
            <span>Parameters</span>
          </div>

        </div>

      </main>

    </div>
  );
}