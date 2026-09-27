import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UploadReport from "./pages/UploadReport";
import Analysis from "./pages/Analysis";
import ReportHistory from "./pages/ReportHistory";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function ProtectedRoute({ children }) {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* REGISTER */}
        <Route
          path="/register"
          element={<Register />}
        />


        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />


        {/* UPLOAD REPORT */}
        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <UploadReport />
            </ProtectedRoute>
          }
        />


        {/* ANALYSIS */}
        <Route
          path="/analysis"
          element={
            <ProtectedRoute>
              <Analysis />
            </ProtectedRoute>
          }
        />


        {/* REPORT HISTORY */}
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <ReportHistory />
            </ProtectedRoute>
          }
        />


        {/* PROFILE */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />


        {/* SETTINGS */}
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />


        {/* UNKNOWN URL */}
        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />

      </Routes>

    </BrowserRouter>
  );
}