import React, { useState } from "react";

// Dummy sample data (would come from backend in real-life)
const demoIssues = [
  {
    ref: "CIV12345",
    type: "Potholes",
    desc: "Massive pothole near park entrance.",
    location: "Park St",
    status: "Work in Progress",
    reporter: "Citizen",
  },
  {
    ref: "CIV18492",
    type: "Waste Dumps",
    desc: "Overflowing bins; stray dogs roaming.",
    location: "8th Block",
    status: "Assigned",
    reporter: "Citizen",
  }
];

// PUBLIC_INTERFACE
function AdminDashboard() {
  const [records, setRecords] = useState(demoIssues);

  const updateStatus = (ref, newStatus) => {
    setRecords(arr =>
      arr.map(x => x.ref === ref ? { ...x, status: newStatus } : x)
    );
  };

  return (
    <div className="container" style={{ padding: 34, maxWidth: 780 }}>
      <h2 style={{ color: "var(--base-light)", marginBottom: 18 }}>
        Admin Dashboard
      </h2>
      <p style={{ color: "var(--text-secondary)" }}>
        View and update all reported civic issues (Demo only).
      </p>
      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Ref No.</th>
              <th>Type</th>
              <th>Location</th>
              <th>Description</th>
              <th>Status</th>
              <th>Reporter</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {records.map(issue => (
              <tr key={issue.ref}>
                <td>{issue.ref}</td>
                <td>{issue.type}</td>
                <td>{issue.location}</td>
                <td>{issue.desc}</td>
                <td><StatusPill status={issue.status} /></td>
                <td>{issue.reporter}</td>
                <td>
                  <select
                    value={issue.status}
                    onChange={e => updateStatus(issue.ref, e.target.value)}
                  >
                    <option>Pending Verification</option>
                    <option>Assigned</option>
                    <option>Work in Progress</option>
                    <option>Resolved</option>
                    <option>Closed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const tableStyle = {
  width: "100%",
  background: "rgba(5,32,70,0.08)",
  borderCollapse: "collapse",
  borderRadius: "9px",
  marginTop: 18,
  minWidth: 585
};

function StatusPill({ status }) {
  const colors = {
    "Pending Verification": "#FFC107",
    "Assigned": "deepskyblue",
    "Work in Progress": "#FF9100",
    "Resolved": "#73e469",
    "Closed": "#bbb"
  };
  return (
    <span style={{
      padding: "4px 13px",
      borderRadius: 99,
      color: "#212",
      background: colors[status] || "#999",
      fontWeight: 500,
      fontSize: "0.95em"
    }}>
      {status}
    </span>
  );
}

export default AdminDashboard;
