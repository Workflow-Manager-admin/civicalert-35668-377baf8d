import React, { useState } from "react";
import { categories } from "./categoriesConfig";
import MapPlaceholder from "./MapPlaceholder";

// PUBLIC_INTERFACE
function ReportIssue() {
  const [form, setForm] = useState({
    category: "",
    location: "",
    description: "",
    photo: null
  });
  const [preview, setPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [fakeRef, setFakeRef] = useState("");

  const onChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files[0]) {
      setForm({ ...form, photo: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate fake ticket reference (simulate backend)
    setFakeRef(() => "CIV" + Math.floor(Math.random() * 90000 + 10000));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container" style={{ maxWidth: 520, textAlign: "center", padding: 28 }}>
        <h2 style={{ marginBottom: 16, color: "var(--base-light)" }}>Thank you for reporting!</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Your issue has been submitted. Your reference number:<br />
          <span style={{ fontSize: "1.4rem", color: "#0096ff" }}>{fakeRef}</span>
        </p>
        <p style={{marginBottom: 22, color: "var(--text-secondary)"}}>
          You can track your complaint status in the 'Track Status' section.
        </p>
        <button className="btn" onClick={() => setSubmitted(false)}>Report Another Issue</button>
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: 520, padding: 28 }}>
      <h2 style={{ color: "var(--base-light)", fontWeight: 600 }}>Report an Issue</h2>
      <form onSubmit={handleSubmit} autoComplete="off" style={{ marginTop: 18 }}>
        <label style={labelStyle}>Issue Type</label>
        <select
          name="category"
          value={form.category}
          onChange={onChange}
          required
          style={inputStyle}
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option value={cat.id} key={cat.id}>{cat.label}</option>
          ))}
        </select>

        <label style={labelStyle}>Location <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>(name or address, then mark on map)</span></label>
        <input
          type="text"
          style={inputStyle}
          name="location"
          placeholder="Eg: 123 Main Rd or Landmark"
          value={form.location}
          onChange={onChange}
          required
        />
        <MapPlaceholder />

        <label style={labelStyle}>Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder="Describe the issue briefly"
          style={{ ...inputStyle, height: 90, resize: "vertical" }}
          maxLength={400}
          required
        />

        <label style={labelStyle}>Photo (optional)</label>
        <input type="file" name="photo" accept="image/*" onChange={onChange} style={{ marginBottom: 14 }} />
        {preview && (
          <div style={{ marginBottom: 14 }}>
            <img src={preview} alt="preview" style={{ maxWidth: 140, maxHeight: 110, borderRadius: 7, border: "1px solid #2646bb" }} />
          </div>
        )}
        <button className="btn btn-large" type="submit" style={{ width: "100%", marginTop: 12 }}>
          Submit Issue
        </button>
      </form>
    </div>
  );
}

const labelStyle = {
  marginTop: 14,
  marginBottom: 5,
  display: "block",
  color: "var(--text-secondary)",
  fontWeight: 500,
  fontSize: "1rem"
};

const inputStyle = {
  width: "100%",
  padding: "10px 11px",
  borderRadius: 6,
  border: "1px solid var(--border-color)",
  background: "rgba(0,0,0,0.25)",
  color: "white",
  fontSize: "1.03rem",
  marginBottom: 9
};

export default ReportIssue;
