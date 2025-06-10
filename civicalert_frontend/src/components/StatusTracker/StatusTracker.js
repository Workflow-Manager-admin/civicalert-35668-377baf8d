import React, { useState } from "react";

// PUBLIC_INTERFACE
function StatusTracker() {
  const [ref, setRef] = useState("");
  const [result, setResult] = useState(null);

  // Simulated status fetcher for UI demonstration
  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      setResult({
        found: ref && ref.startsWith("CIV"),
        status: mockStatus[ref.slice(-1) % mockStatus.length]
      });
    }, 650);
  }

  return (
    <div className="container" style={{ maxWidth: 430, textAlign: "center", padding: "40px 0" }}>
      <h2 style={{ marginBottom: 18, color: "var(--base-light)" }}>Track Complaint Status</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          style={{
            ...inputStyle,
            background: "rgba(0,0,0,0.26)",
            textAlign: "center",
            fontSize: "1.14rem"
          }}
          name="ref"
          value={ref}
          maxLength={16}
          placeholder="Enter your reference number"
          onChange={(e) => { setRef(e.target.value); setResult(null); }}
          required
        />
        <button type="submit" className="btn btn-large" style={{ width: "70%" }}>
          Track
        </button>
      </form>
      <div style={{ minHeight: 80, marginTop: 18 }}>
        {result && (
          <>
            {result.found ? (
              <div style={{ color: "#0096ff", fontWeight: 500, fontSize: "1.12rem" }}>
                Status:&nbsp;<StatusPill status={result.status} />
              </div>
            ) : (
              <div style={{ color: "#faa", fontWeight: 500 }}>Reference not found.</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  border: "1px solid var(--border-color)",
  padding: "11px 12px",
  borderRadius: 6,
  marginBottom: 13,
  color: "white",
  width: "100%"
};

const mockStatus = [
  "Pending Verification", "Assigned", "Work in Progress", "Resolved", "Closed"
];

function StatusPill({ status }) {
  const colors = {
    "Pending Verification": "#FFC107",
    "Assigned": "deepskyblue",
    "Work in Progress": "#FF9100",
    "Resolved": "#73e469",
    "Closed": "#dcdcdc"
  };
  return (
    <span style={{
      padding: "5px 15px",
      borderRadius: 99,
      color: "#212",
      background: colors[status] || "#999",
      fontWeight: 500
    }}>
      {status}
    </span>
  );
}

export default StatusTracker;
