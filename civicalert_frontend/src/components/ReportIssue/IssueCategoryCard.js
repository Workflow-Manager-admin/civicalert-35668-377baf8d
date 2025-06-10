import React from "react";

// PUBLIC_INTERFACE
function IssueCategoryCard({ category }) {
  return (
    <div
      style={{
        background: "rgba(0,150,255,0.08)",
        borderRadius: 12,
        padding: "22px 30px",
        width: 170,
        boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
        textAlign: "center",
        border: "1px solid var(--border-color)",
        transition: "transform 0.14s",
        cursor: "pointer"
      }}
      className="issue-category-card"
      title={category.label}
    >
      <span style={{ fontSize: "2.5rem", display: "block" }}>{category.icon}</span>
      <div style={{ color: "#fff", fontWeight: 500, fontSize: "1.12rem", marginTop: 8 }}>
        {category.label}
      </div>
    </div>
  );
}

export default IssueCategoryCard;
