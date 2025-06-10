import React from "react";
import { Link } from "react-router-dom";
import IssueCategoryCard from "./ReportIssue/IssueCategoryCard";
import { categories } from "./ReportIssue/categoriesConfig";

function MainHome() {
  return (
    <div className="container">
      <div className="hero">
        <div className="subtitle">Empowering citizens for a better city</div>
        <h1 className="title" style={{ color: "var(--base-light)" }}>CivicAlert</h1>
        <div className="description">
          Report civic issues in seconds and help your city improve roads, cleanliness, safety, and infrastructure. Track your complaints and contribute to a responsive, smart urban environment.
        </div>
        <Link to="/report" className="btn btn-large" style={{ marginBottom: 16 }}>Report an Issue</Link>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center", marginBottom: 48 }}>
        {categories.map(cat => (
          <IssueCategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  );
}

export default MainHome;

