import React from "react";

// PUBLIC_INTERFACE
function NotFound() {
  return (
    <div style={{
      color: "#fff",
      textAlign: "center",
      padding: 80,
      minHeight: 315
    }}>
      <h2 style={{ color: "var(--base-light)", fontSize: "2.1rem" }}>404 Not Found</h2>
      <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem"}}>
        Sorry, the page you requested does not exist.
      </p>
    </div>
  );
}

export default NotFound;
