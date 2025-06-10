import React from "react";

// PUBLIC_INTERFACE
function MapPlaceholder() {
  return (
    <div style={{
      margin: "13px 0",
      background: "linear-gradient(135deg, #263259 60%, #386b92 110%)",
      borderRadius: 10,
      border: "1.5px solid var(--base-light)",
      width: "100%",
      height: 170,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--base-light)",
      fontWeight: 600,
      fontSize: "1.08rem",
      letterSpacing: 0.4
    }}>
      [Interactive Map integration coming soon]
    </div>
  );
}

export default MapPlaceholder;
