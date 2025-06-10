import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import "./index.css";
import MainHome from "./components/MainHome";
import ReportIssue from "./components/ReportIssue/ReportIssue";
import StatusTracker from "./components/StatusTracker/StatusTracker";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import NotFound from "./components/NotFound";

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app">
      <Router>
        <nav className="navbar">
          <div className="container" style={{ width: "100%" }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", width: "100%" }}>
              <Link className="logo" to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <span className="logo-symbol" role="img" aria-label="logo" style={{fontWeight: "bold", color: "var(--base-light)", fontSize: "1.5rem"}}>⚠️</span>
                CivicAlert
              </Link>
              <div style={{ display: "flex", gap: 16 }}>
                <Link to="/report" className="btn">Report Issue</Link>
                <Link to="/status" className="btn">Track Status</Link>
                <Link to="/admin" className="btn">Admin</Link>
              </div>
            </div>
          </div>
        </nav>
        <main style={{ paddingTop: 88 }}>
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/report" element={<ReportIssue />} />
            <Route path="/status" element={<StatusTracker />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
